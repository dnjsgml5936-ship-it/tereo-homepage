import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/services/public - 공개 서비스 목록
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
        order: true,
      },
    })

    return NextResponse.json(services)
  } catch (error) {
    console.error('공개 서비스 조회 오류:', error)
    return NextResponse.json(
      { error: '서비스를 조회할 수 없습니다' },
      { status: 500 }
    )
  }
}
