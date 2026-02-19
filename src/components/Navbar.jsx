import { useState, useEffect } from 'react'
import logo from '../assets/logo.webp'

const navLinks = [
  { name: 'Chi Siamo', href: '#chi-siamo' },
  { name: 'Servizi', href: '#servizi' },
  { name: 'Prodotti', href: '#prodotti' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="CN Innovation" className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent-500 ${scrolled ? 'text-steel-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contatti" className="btn-primary !py-3 !px-6 !text-sm">
              Richiedi Preventivo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg"
            aria-label="Menu di navigazione"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-full rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''} ${scrolled ? 'bg-steel-800' : 'bg-white'}`} />
              <span className={`block h-0.5 w-full rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''} ${scrolled ? 'bg-steel-800' : 'bg-white'}`} />
              <span className={`block h-0.5 w-full rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''} ${scrolled ? 'bg-steel-800' : 'bg-white'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-md shadow-lg border-t border-steel-100 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-steel-700 font-medium hover:text-accent-500 transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <a href="#contatti" onClick={() => setIsOpen(false)} className="btn-primary w-full !text-sm mt-4">
            Richiedi Preventivo
          </a>
        </div>
      </div>
    </nav>
  )
}
