import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Marquee band */}
      <div className="border-y border-white/5 py-6 overflow-hidden">
        <div className="marquee-track whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="inline-block font-sans text-[clamp(2rem,5vw,5rem)] font-bold text-white/[0.04] mx-8">
              PADEL — STRUTTURE METALLICHE — IMPIANTI SPORTIVI — CHIAVI IN MANO — ITALIA & EUROPA — CN INNOVATION —
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Logo + tagline */}
          <div className="col-span-12 md:col-span-4">
            <img src={logo} alt="CN Innovation" title="CN Innovation - Logo" loading="lazy" width={160} height={56} className="h-14 w-auto brightness-0 invert mb-8" />
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              C.N. Innovation di Nunez Banegas Carolina Ines — Vendita, montaggio e manutenzione di impianti sportivi.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#f5f0eb' }} />
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium" style={{ color: '#f5f0eb' }}>Operativi in Italia e in tutta Europa</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-6 md:col-span-2 md:col-start-6">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/20 font-medium block mb-6">Navigazione</span>
            <ul className="space-y-3">
              {['Chi Siamo', 'Servizi', 'Prodotti', 'Portfolio', 'Contatti'].map((name) => (
                <li key={name}>
                  <a href={`#${name.toLowerCase().replace(' ', '-')}`} className="text-white/40 text-sm hover:text-white transition-colors duration-300">{name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-6 md:col-span-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/20 font-medium block mb-6">Servizi</span>
            <ul className="space-y-3">
              {['Vendita Impianti', 'Montaggio', 'Manutenzione', 'Consulenza'].map((name) => (
                <li key={name}><span className="text-white/40 text-sm">{name}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-12 md:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/20 font-medium block mb-6">Contatti</span>
            <div className="space-y-4 text-sm">
              <p className="text-white/40">Via R. Morandi, Valle Settedue SNC<br />00034 Colleferro (RM)</p>
              <p className="text-white/40">info@cninnovation.it</p>
            </div>
            <div className="flex gap-6 mt-6">
              <a href="https://www.instagram.com/cninnov/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors duration-300 text-sm font-medium">IG</a>
              <a href="https://www.facebook.com/p/CN-Innovation-100083125581065/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors duration-300 text-sm font-medium">FB</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[11px]">© {new Date().getFullYear()} C.N. Innovation — Tutti i diritti riservati</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="text-white/20 text-[11px] hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" onClick={() => window.scrollTo(0, 0)} className="text-white/20 text-[11px] hover:text-white/50 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
