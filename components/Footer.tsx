'use client'

export function Footer() {
  return (
    <footer id="contact" className="bg-[#111] text-white py-40 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-24 border-b border-white/5 pb-32">
        <div className="md:col-span-2">
          <div className="text-lg tracking-[0.4em] uppercase font-light mb-16 opacity-70">Dream Stitch</div>
          <h3 className="text-6xl md:text-8xl font-light mb-20 leading-tight">
            Scale your<br /><span className="italic">production.</span>
          </h3>
          <a 
            href="mailto:hello@dreamstitch.com" 
            className="group relative text-2xl border-b border-white/20 pb-4 hover:border-white transition-all duration-500 font-light"
          >
            hello@dreamstitch.com
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
          </a>
        </div>
        
        <div className="space-y-16">
          <div>
            <h5 className="uppercase text-[10px] tracking-[0.4em] opacity-30 mb-8">Services</h5>
            <ul className="text-sm space-y-6 font-light opacity-50">
              <li className="hover:opacity-100 transition-opacity"><a href="#">Sourcing</a></li>
              <li className="hover:opacity-100 transition-opacity"><a href="#">Development</a></li>
              <li className="hover:opacity-100 transition-opacity"><a href="#">Production</a></li>
              <li className="hover:opacity-100 transition-opacity"><a href="#">Logistics</a></li>
            </ul>
          </div>
        </div>

        <div className="space-y-16">
          <div>
            <h5 className="uppercase text-[10px] tracking-[0.4em] opacity-30 mb-8">Studio</h5>
            <p className="text-sm font-light leading-relaxed opacity-50">
              Industrial 04,<br />District One,<br />Singapore 639841
            </p>
          </div>
          <div>
            <h5 className="uppercase text-[10px] tracking-[0.4em] opacity-30 mb-8">Social</h5>
            <ul className="text-sm space-y-6 font-light opacity-50">
              <li><a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Journal</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-16 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.5em] opacity-30">
        <p>© 2024 Dream Stitch. All Rights Reserved.</p>
        <div className="flex space-x-16 mt-8 md:mt-0">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
        </div>
      </div>
    </footer>
  )
}

