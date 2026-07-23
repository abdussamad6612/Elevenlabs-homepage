import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-canvas/90 backdrop-blur-xl border-b border-hairline">
      <div className="mx-auto flex h-[64px] max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <a href="#" className="flex items-center gap-2 font-display font-medium text-[20px] tracking-tight text-ink">
            <div className="h-4 w-4 rounded-full bg-ink"></div>
            ElevenLabs
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-ink">
            <a href="#" className="hover:opacity-70 transition-opacity">Products</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Use Cases</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Resources</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Pricing</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Company</a>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-[15px] font-medium text-ink hover:opacity-70 transition-opacity">Log in</a>
          <a href="#" className="text-[15px] font-medium bg-primary text-white px-[20px] h-[40px] inline-flex items-center rounded-full hover:bg-primary-active transition-colors">Sign up</a>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
        </button>
      </div>
    </header>
  )
}
