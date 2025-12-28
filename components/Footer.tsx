'use client'

import { useState } from 'react'

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <footer id="contact" className="bg-[#111] text-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-[120px] pb-6 sm:pb-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-14 lg:gap-20 xl:gap-24 border-b border-white/5 pb-8 sm:pb-12 md:pb-16">
        <div>
          <h3 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 sm:mb-10 md:mb-12 leading-tight"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 600,
            }}
          >
            Get in touch
          </h3>
          <h4 
            className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 600,
            }}
          >
            Contact Us
          </h4>
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
            <a 
              href="mailto:hello@dreamstitch.com" 
              className="flex items-start gap-3 md:gap-4 text-base md:text-lg lg:text-xl font-light opacity-70 hover:opacity-100 transition-opacity"
              style={{
                fontFamily: 'var(--font-poppins)',
              }}
            >
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>hello@dreamstitch.com</span>
            </a>
            <a 
              href="tel:123456789" 
              className="flex items-start gap-3 md:gap-4 text-base md:text-lg lg:text-xl font-light opacity-70 hover:opacity-100 transition-opacity"
              style={{
                fontFamily: 'var(--font-poppins)',
              }}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+1 234 567 890</span>
            </a>
            <div 
              className="flex items-start gap-3 md:gap-4 text-base md:text-lg lg:text-xl font-light opacity-70"
              style={{
                fontFamily: 'var(--font-poppins)',
              }}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>123 Innovation Avenue, Suite 456<br />Tech District, San Francisco, CA 94107<br />United States</span>
            </div>
          </div>
          <div className="mt-8 md:mt-12">
            <h5 
              className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 600,
              }}
            >
              Follow us
            </h5>
            <div className="flex items-center gap-4 sm:gap-6">
              <a 
                href="https://instagram.com/dreamstitch" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/dreamstitch" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/dreamstitch" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/dreamstitch" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h4 
            className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 600,
            }}
          >
            Send a Message
          </h4>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="block mb-2 text-sm sm:text-base font-light opacity-80"
                style={{
                  fontFamily: 'var(--font-poppins)',
                }}
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border-[0.5px] border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                placeholder="Your full name"
                style={{
                  fontFamily: 'var(--font-poppins)',
                }}
              />
            </div>
            <div>
              <label 
                htmlFor="email" 
                className="block mb-2 text-sm sm:text-base font-light opacity-80"
                style={{
                  fontFamily: 'var(--font-poppins)',
                }}
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border-[0.5px] border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                placeholder="Your email address"
                style={{
                  fontFamily: 'var(--font-poppins)',
                }}
              />
            </div>
            <div>
              <label 
                htmlFor="message" 
                className="block mb-2 text-sm sm:text-base font-light opacity-80"
                style={{
                  fontFamily: 'var(--font-poppins)',
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-white/5 border-[0.5px] border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors resize-none"
                placeholder="Write something...."
                style={{
                  fontFamily: 'var(--font-poppins)',
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-lg text-sm sm:text-base font-medium hover:bg-white/90 transition-all mt-4"
              style={{
                fontFamily: 'var(--font-poppins)',
              }}
            >
              Send Message
            </button>
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


