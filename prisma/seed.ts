import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // 관리자 사용자 생성
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 12)
  
  const admin = await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || 'admin@tereo.com' },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL || 'admin@tereo.com',
      name: '관리자',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  console.log('관리자 사용자 생성됨:', admin)

  // 샘플 서비스 데이터
  const services = [
    {
      title: '세무컨설팅',
      description: '기업의 세무 전반에 대한 전문적인 컨설팅 서비스',
      content: '기업의 세무 전반에 대한 전문적인 컨설팅을 제공합니다. 세무신고, 세무조사 대응, 세무전략 수립 등 다양한 세무 서비스를 제공합니다.',
      icon: '📊',
      price: '상담 후 결정',
      isActive: true,
      order: 1,
    },
    {
      title: '가업승계',
      description: '기업의 가업을 안전하고 효율적으로 승계하는 서비스',
      content: '기업의 가업을 안전하고 효율적으로 승계할 수 있도록 도와드립니다. 세무, 법무, 경영 전반에 걸친 종합적인 컨설팅을 제공합니다.',
      icon: '🏢',
      price: '상담 후 결정',
      isActive: true,
      order: 2,
    },
    {
      title: '기업인증',
      description: '다양한 기업인증 취득을 위한 전문 서비스',
      content: '벤처기업, 이노비즈, 메인비즈 등 다양한 기업인증 취득을 위한 전문적인 서비스를 제공합니다.',
      icon: '🏆',
      price: '상담 후 결정',
      isActive: true,
      order: 3,
    },
  ]

  for (const service of services) {
    await prisma.service.upsert({
      where: { title: service.title },
      update: {},
      create: {
        ...service,
        authorId: admin.id,
      },
    })
  }

  console.log('샘플 서비스 데이터 생성됨')

  // 샘플 뉴스 데이터
  const news = [
    {
      title: '2024년 세법 개정사항 안내',
      content: '2024년 세법 개정사항에 대한 상세한 안내를 드립니다. 기업에 미치는 영향을 분석하고 대응방안을 제시합니다.',
      excerpt: '2024년 세법 개정사항에 대한 상세한 안내',
      isPublished: true,
      publishedAt: new Date(),
    },
    {
      title: '벤처기업 인증 신청 절차 개선',
      content: '벤처기업 인증 신청 절차가 개선되어 더욱 간편해졌습니다. 신규 절차에 대한 안내를 드립니다.',
      excerpt: '벤처기업 인증 신청 절차 개선 안내',
      isPublished: true,
      publishedAt: new Date(),
    },
  ]

  for (const newsItem of news) {
    await prisma.news.upsert({
      where: { title: newsItem.title },
      update: {},
      create: {
        ...newsItem,
        authorId: admin.id,
      },
    })
  }

  console.log('샘플 뉴스 데이터 생성됨')

  // 샘플 프로젝트 데이터
  const projects = [
    {
      title: 'A기업 세무컨설팅 프로젝트',
      description: 'A기업의 세무 전반에 대한 컨설팅을 진행하여 세무 부담을 30% 절감',
      content: 'A기업의 세무 전반에 대한 컨설팅을 진행하여 세무 부담을 30% 절감했습니다. 세무신고 최적화, 세무조사 대응, 세무전략 수립 등 다양한 서비스를 제공했습니다.',
      client: 'A기업',
      category: '세무컨설팅',
      isActive: true,
      order: 1,
    },
    {
      title: 'B기업 가업승계 프로젝트',
      description: 'B기업의 가업승계를 위한 종합적인 컨설팅 서비스 제공',
      content: 'B기업의 가업승계를 위한 종합적인 컨설팅 서비스를 제공했습니다. 세무, 법무, 경영 전반에 걸친 컨설팅을 통해 안전하고 효율적인 승계를 도왔습니다.',
      client: 'B기업',
      category: '가업승계',
      isActive: true,
      order: 2,
    },
  ]

  for (const project of projects) {
    await prisma.project.upsert({
      where: { title: project.title },
      update: {},
      create: {
        ...project,
        authorId: admin.id,
      },
    })
  }

  console.log('샘플 프로젝트 데이터 생성됨')

  // 샘플 후기 데이터
  const testimonials = [
    {
      name: '김대표',
      company: 'A기업',
      content: '테레오의 세무컨설팅 덕분에 세무 부담을 크게 줄일 수 있었습니다. 전문적이고 신뢰할 수 있는 서비스입니다.',
      rating: 5,
      isActive: true,
      order: 1,
    },
    {
      name: '이대표',
      company: 'B기업',
      content: '가업승계 과정에서 많은 도움을 받았습니다. 복잡한 절차를 쉽게 안내해주셔서 감사합니다.',
      rating: 5,
      isActive: true,
      order: 2,
    },
  ]

  for (const testimonial of testimonials) {
    await prisma.testimonial.upsert({
      where: { name: testimonial.name },
      update: {},
      create: {
        ...testimonial,
        authorId: admin.id,
      },
    })
  }

  console.log('샘플 후기 데이터 생성됨')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
