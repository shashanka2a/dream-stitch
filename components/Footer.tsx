'use client'

import { useState } from 'react'

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
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
    <footer id="contact" className="bg-[#111] text-white pt-40 pb-8 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 border-b border-white/5 pb-16">
        <div>
          <div className="text-lg tracking-[0.4em] uppercase font-light mb-16 opacity-70">Dream Stitch</div>
          <h3 className="text-6xl md:text-8xl font-light mb-20 leading-tight">
            Ready to launch<br /><span className="italic">your brand?</span>
          </h3>
          <div className="space-y-6">
            <a 
              href="mailto:hello@dreamstitch.com" 
              className="flex items-center gap-4 text-xl font-light opacity-70 hover:opacity-100 transition-opacity group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@dreamstitch.com
            </a>
            <a 
              href="tel:123456789" 
              className="flex items-center gap-4 text-xl font-light opacity-70 hover:opacity-100 transition-opacity"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              123456789
            </a>
            <a 
              href="https://instagram.com/dreamstitch" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl font-light opacity-70 hover:opacity-100 transition-opacity"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Dreamstitch
            </a>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm uppercase tracking-[0.2em] mb-2 opacity-70">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm uppercase tracking-[0.2em] mb-2 opacity-70">
                Phone*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm uppercase tracking-[0.2em] mb-2 opacity-70">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors resize-none"
                placeholder=""
              />
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 bg-transparent border border-white/20 checked:bg-white checked:border-white focus:outline-none"
              />
              <label htmlFor="agree" className="text-sm font-light opacity-70 leading-relaxed">
                I agree that my submitted data is being collected and stored.
              </label>
            </div>
            <button
              type="submit"
              className="px-8 py-3 border border-white text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.5em] opacity-30">
        <p>© 2024 Dream Stitch. All Rights Reserved.</p>
        <div className="flex space-x-16 mt-8 md:mt-0">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
        </div>
      </div>
    </footer>
  )
}


