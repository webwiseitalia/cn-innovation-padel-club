import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.webp'

const navLinks = [
  { name: 'Chi Siamo', href: '#chi-siamo' },
  { name: 'Servizi', href: '#servizi' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className={`absolute inset-0 transition-all duration-700 ${scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-ink/5' : ''}`} />
        <div className="relative px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="relative z-10">
            <img src={logo} alt="CN Innovation" className="h-10 w-auto" />
          </a>
          <div className="hidden lg:flex items-center">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                className="relative font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-ink/70 hover:text-rust transition-colors duration-300"
                style={{ marginLeft: i === 0 ? 0 : `${2 + i * 0.5}rem` }}
              >
                {link.name}
              </a>
            ))}
            <a href="#contatti" className="ml-12 px-6 py-3 bg-ink text-paper text-[13px] font-medium uppercase tracking-[0.15em] hover:bg-rust transition-colors duration-500">
              Preventivo
            </a>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden relative z-[60] w-10 h-10 flex flex-col items-end justify-center gap-1.5" aria-label="Menu">
            <motion.span animate={isOpen ? { rotate: 45, y: 5, width: 24 } : { rotate: 0, y: 0, width: 24 }} className={`block h-[2px] origin-center ${isOpen ? 'bg-paper' : 'bg-ink'}`} transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }} />
            <motion.span animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }} className={`block h-[2px] w-4 ${isOpen ? 'bg-paper' : 'bg-ink'}`} transition={{ duration: 0.3 }} />
            <motion.span animate={isOpen ? { rotate: -45, y: -7, width: 24 } : { rotate: 0, y: 0, width: 16 }} className={`block h-[2px] origin-center ${isOpen ? 'bg-paper' : 'bg-ink'}`} transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }} />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0 0 0% 0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-40 bg-ink flex flex-col justify-end p-10 pb-20">
            <nav className="space-y-2">
              {navLinks.map((link, i) => (
                <motion.div key={link.name} initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}>
                  <a href={link.href} onClick={() => setIsOpen(false)} className="block font-sans text-[clamp(2rem,8vw,4rem)] font-bold text-paper/90 hover:text-rust transition-colors leading-tight">{link.name}</a>
                </motion.div>
              ))}
            </nav>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-12 text-paper/40 text-sm">
              Colleferro (RM) — Italia & Europa
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
