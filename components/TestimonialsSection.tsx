'use client'

import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Anoki',
    role: 'Founder of Mirakhi',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    text: 'Our wedding day was nothing short of magical, and it\'s all thanks to the Elevate Events team. From our first meeting to the final send-off, they were there every step of the way, ensuring everything was perfect. A day we\'ll cherish forever!',
  },
  {
    name: 'Anoki',
    role: 'Founder of Mirakhi',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    text: 'Our wedding day was nothing short of magical, and it\'s all thanks to the Elevate Events team. From our first meeting to the final send-off, they were there every step of the way, ensuring everything was perfect. A day we\'ll cherish forever!',
  },
  {
    name: 'Sarah',
    role: 'Founder of Luxe Apparel',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    text: 'DreamStich transformed our vision into reality. Their attention to detail, from design to production, exceeded our expectations. The low MOQ made it possible for us to launch our first collection without breaking the bank.',
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => {
      // Calculate max index: can show 2 items starting from index 0 to (length - 2)
      const maxIndex = testimonials.length > 2 ? testimonials.length - 2 : 0
      return (prev + 1) % (maxIndex + 1)
    })
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => {
      // Calculate max index: can show 2 items starting from index 0 to (length - 2)
      const maxIndex = testimonials.length > 2 ? testimonials.length - 2 : 0
      return prev === 0 ? maxIndex : prev - 1
    })
  }

  return (
    <section className="py-32 md:py-56 px-8 bg-[#efeeea]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 reveal text-center md:text-left">
          <span className="uppercase tracking-[0.3em] text-[10px] opacity-40 block mb-6">THE PROCESS</span>
          <h2 className="text-4xl md:text-7xl font-light">Testimonials</h2>
        </div>

        <div className="relative reveal">
          <div className="flex items-center gap-8">
            <button
              onClick={prevTestimonial}
              className="flex-shrink-0 text-gray-400 hover:text-black transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex-1 grid md:grid-cols-2 gap-8">
              {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, idx) => (
                <div 
                  key={`${currentIndex}-${testimonial.name}-${idx}`} 
                  className="bg-white p-8 rounded-lg shadow-sm border border-black/5"
                >
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 font-light">
                      {testimonial.role}
                    </p>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 font-light text-center">
                    {testimonial.text}
                  </p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex-shrink-0 text-gray-400 hover:text-black transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

