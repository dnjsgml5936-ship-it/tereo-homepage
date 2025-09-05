import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const serviceSchema = z.object({
  title: z.string().min(1, '제목은 필수입니다'),
  description: z.string().min(1, '설명은 필수입니다'),
  content: z.string().min(1, '내용은 필수입니다'),
  icon: z.string().optional(),
  image: z.string().optional(),
  price: z.string().optional(),
  isActive: z.boolean().default(true),
  order: z.number().default(0),
})

// GET /api/services
export async function GET() {
  try {
    const services = await prisma.service.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' },
      select: {
        id: true,
        title: true,
        description: true,
        content: true,
        icon: true,
        image: true,
        price: true,
        isActive: true,
        order: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    return NextResponse.json(services)
  } catch (error) {
    console.error('서비스 조회 오류:', error)
    return NextResponse.json(
      { error: '서비스를 조회할 수 없습니다' },
      { status: 500 }
    )
  }
}

// POST /api/services
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: '관리자 권한이 필요합니다' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const validatedData = serviceSchema.parse(body)

    const service = await prisma.service.create({
      data: {
        ...validatedData,
        authorId: session.user.id,
      },
    })

    return NextResponse.json(service, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: '입력 데이터가 올바르지 않습니다', details: error.errors },
        { status: 400 }
      )
    }

    console.error('서비스 생성 오류:', error)
    return NextResponse.json(
      { error: '서비스를 생성할 수 없습니다' },
      { status: 500 }
    )
  }
}
