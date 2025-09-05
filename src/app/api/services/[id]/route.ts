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

// GET /api/services/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const service = await prisma.service.findUnique({
      where: { id },
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

    if (!service) {
      return NextResponse.json(
        { error: '서비스를 찾을 수 없습니다' },
        { status: 404 }
      )
    }

    return NextResponse.json(service)
  } catch (error) {
    console.error('서비스 조회 오류:', error)
    return NextResponse.json(
      { error: '서비스를 조회할 수 없습니다' },
      { status: 500 }
    )
  }
}

// PUT /api/services/[id]
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: '관리자 권한이 필요합니다' },
        { status: 401 }
      )
    }

    const { id } = await params;
    const body = await request.json()
    const validatedData = serviceSchema.parse(body)

    const service = await prisma.service.update({
      where: { id },
      data: validatedData,
    })

    return NextResponse.json(service)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: '입력 데이터가 올바르지 않습니다', details: error.errors },
        { status: 400 }
      )
    }

    console.error('서비스 수정 오류:', error)
    return NextResponse.json(
      { error: '서비스를 수정할 수 없습니다' },
      { status: 500 }
    )
  }
}

// DELETE /api/services/[id]
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: '관리자 권한이 필요합니다' },
        { status: 401 }
      )
    }

    const { id } = await params;
    await prisma.service.delete({
      where: { id },
    })

    return NextResponse.json({ message: '서비스가 삭제되었습니다' })
  } catch (error) {
    console.error('서비스 삭제 오류:', error)
    return NextResponse.json(
      { error: '서비스를 삭제할 수 없습니다' },
      { status: 500 }
    )
  }
}
