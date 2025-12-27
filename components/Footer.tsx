'use client'

import { useState } from 'react'

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    agree: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <footer id="contact" className="bg-[#111] text-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-[120px] pb-6 sm:pb-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-14 lg:gap-20 xl:gap-24 border-b border-white/5 pb-8 sm:pb-12 md:pb-16">
        <div>
          <h3 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 leading-tight"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 600,
            }}
          >
            Ready to launch<br /><span className="italic">your brand?</span>
          </h3>
          <div className="space-y-4 md:space-y-6">
            <a 
              href="mailto:hello@dreamstitch.com" 
              className="flex items-center gap-3 md:gap-4 text-base md:text-lg lg:text-xl font-light opacity-70 hover:opacity-100 transition-opacity group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@dreamstitch.com
            </a>
            <a 
              href="tel:123456789" 
              className="flex items-center gap-3 md:gap-4 text-base md:text-lg lg:text-xl font-light opacity-70 hover:opacity-100 transition-opacity"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              123456789
            </a>
            <a 
              href="https://instagram.com/dreamstitch" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-4 text-base md:text-lg lg:text-xl font-light opacity-70 hover:opacity-100 transition-opacity"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Dreamstitch
            </a>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-white px-4 py-3 text-white placeholder-white focus:outline-none focus:border-white transition-colors"
                placeholder="Name*"
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-white px-4 py-3 text-white placeholder-white focus:outline-none focus:border-white transition-colors"
                placeholder="Phone*"
              />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-white px-4 py-3 text-white placeholder-white focus:outline-none focus:border-white transition-colors"
              placeholder="Email*"
            />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-transparent border border-white px-4 py-3 text-white placeholder-white focus:outline-none focus:border-white transition-colors resize-none"
              placeholder="Message*"
            />
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
                className="w-5 h-5 bg-transparent border-2 border-white rounded-lg checked:bg-white checked:border-white focus:outline-none focus:ring-0 cursor-pointer flex-shrink-0"
                style={{
                  borderRadius: '8px',
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  accentColor: 'transparent',
                }}
              />
              <label htmlFor="agree" className="text-sm font-light text-white leading-relaxed">
                I agree that my submitted data is being collected and stored.
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 border border-white text-white text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] opacity-30">
        <p className="mb-4 md:mb-0">© 2024 Dream Stitch. All Rights Reserved.</p>
        <div className="flex space-x-8 md:space-x-16">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
        </div>
      </div>
    </footer>
  )
}


