'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
  content: string;
  icon?: string;
  image?: string;
  price?: string;
  order: number;
}

const ServiceCards = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services/public');
        if (response.ok) {
          const data = await response.json();
          setServices(data);
        }
      } catch (error) {
        console.error('서비스 조회 오류:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const bgColors = ['bg-gray-800', 'bg-gray-700', 'bg-gray-600'];

  if (loading) {
    return (
      <section className="relative -mt-20 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-300 animate-pulse p-10 h-64"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative -mt-20 z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className={`${bgColors[index % bgColors.length]} text-white p-10 hover:bg-primary transition-all duration-300 group`}
            >
              <div className="flex items-center mb-4">
                {service.icon && (
                  <span className="text-3xl mr-3">{service.icon}</span>
                )}
                <h3 className="text-2xl font-bold leading-tight">
                  {service.title}
                </h3>
              </div>
              <p className="text-white/70 mb-4">{service.description}</p>
              {service.price && (
                <p className="text-white/60 mb-4 text-sm">{service.price}</p>
              )}
              <span className="inline-flex items-center gap-2 text-white/80 group-hover:text-white">
                자세히 보기
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
