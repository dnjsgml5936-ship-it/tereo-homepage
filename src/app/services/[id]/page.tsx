import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface ServicePageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = await prisma.service.findUnique({
    where: { 
      id,
      isActive: true 
    },
    select: {
      id: true,
      title: true,
      description: true,
      content: true,
      icon: true,
      image: true,
      price: true,
    },
  })

  if (!service) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              {service.icon && (
                <div className="text-6xl mb-6">{service.icon}</div>
              )}
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {service.description}
              </p>
              {service.price && (
                <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-lg font-medium">
                  {service.price}
                </div>
              )}
            </div>

            {service.image && (
              <div className="mb-12">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {service.content}
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="/contact/inquiry"
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                상담 문의하기
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
