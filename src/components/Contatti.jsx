import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import contattiImg from '../assets/foto/foto-6.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Contatti() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    nome: '', azienda: '', email: '', telefono: '',
    tipologiaRichiesta: '', tipoImpianto: '', numeroCampi: '', localita: '', messaggio: '', privacy: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Richiesta preventivo - ${formData.tipologiaRichiesta || 'Generale'}`)
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\nAzienda: ${formData.azienda}\nEmail: ${formData.email}\nTelefono: ${formData.telefono}\nTipologia: ${formData.tipologiaRichiesta}\nImpianto: ${formData.tipoImpianto}\nCampi: ${formData.numeroCampi}\nLocalità: ${formData.localita}\n\n${formData.messaggio}`
    )
    window.location.href = `mailto:info@cninnovation.it?subject=${subject}&body=${body}`
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        y: 60, opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: formRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const inputBase = "w-full px-0 py-4 bg-transparent border-b focus:outline-none transition-colors duration-500 font-sans text-sm"
  const fieldStyle = { color: '#0a0a0a', borderColor: 'rgba(10,10,10,0.2)' }

  return (
    <section id="contatti" ref={sectionRef} className="relative py-32 md:py-44 overflow-hidden" style={{ backgroundColor: '#f5f0eb' }}>
      {/* Background image accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block overflow-hidden">
        <img src={contattiImg} alt="Campo da padel FIP Tour" title="Campo da padel per tornei FIP Tour" loading="lazy" width={640} height={960} className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="relative px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {/* Left: heading + info */}
          <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] font-medium" style={{ color: '#415a77' }}>(Contatti)</span>
            <h2 className="heading-lg mt-4 mb-8" style={{ color: '#0a0a0a' }}>
              Parliamo del<br />tuo <span className="text-serif-italic text-rust">progetto</span>
            </h2>
            <p className="text-body max-w-sm mb-12">
              Compila il form e riceverai una proposta tecnica ed economica personalizzata. Gratuita e senza impegno.
            </p>

            <div className="space-y-8">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium block mb-2" style={{ color: 'rgba(10,10,10,0.4)' }}>Sede</span>
                <p className="font-sans text-sm font-medium" style={{ color: '#0a0a0a' }}>Via R. Morandi, Valle Settedue SNC<br />00034 Colleferro (RM)</p>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium block mb-2" style={{ color: 'rgba(10,10,10,0.4)' }}>Email</span>
                <p className="font-sans text-sm font-medium" style={{ color: '#0a0a0a' }}>info@cninnovation.it</p>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium block mb-2" style={{ color: 'rgba(10,10,10,0.4)' }}>Social</span>
                <div className="flex gap-4 mt-1">
                  <a href="https://www.instagram.com/cninnov/" target="_blank" rel="noopener noreferrer" className="font-sans text-sm font-medium hover:text-rust transition-colors" style={{ color: '#0a0a0a' }}>Instagram</a>
                  <a href="https://www.facebook.com/p/CN-Innovation-100083125581065/" target="_blank" rel="noopener noreferrer" className="font-sans text-sm font-medium hover:text-rust transition-colors" style={{ color: '#0a0a0a' }}>Facebook</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div ref={formRef} className="col-span-12 lg:col-span-7 lg:col-start-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
                <div>
                  <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome *" required className={inputBase} style={fieldStyle} />
                </div>
                <div>
                  <input type="text" name="azienda" value={formData.azienda} onChange={handleChange} placeholder="Azienda" className={inputBase} style={fieldStyle} />
                </div>
                <div>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required className={inputBase} style={fieldStyle} />
                </div>
                <div>
                  <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Telefono *" required className={inputBase} style={fieldStyle} />
                </div>
                <div>
                  <select name="tipologiaRichiesta" value={formData.tipologiaRichiesta} onChange={handleChange} required className={inputBase} style={fieldStyle}>
                    <option value="">Tipologia Richiesta *</option>
                    <option value="Vendita nuovo impianto">Vendita nuovo impianto</option>
                    <option value="Montaggio">Montaggio</option>
                    <option value="Manutenzione">Manutenzione</option>
                    <option value="Consulenza">Consulenza</option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>
                <div>
                  <select name="tipoImpianto" value={formData.tipoImpianto} onChange={handleChange} className={inputBase} style={fieldStyle}>
                    <option value="">Tipo Impianto</option>
                    <option value="Padel outdoor">Padel outdoor</option>
                    <option value="Padel indoor">Padel indoor</option>
                    <option value="Copertura">Copertura</option>
                    <option value="Multisport">Multisport</option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>
                <div>
                  <input type="text" name="numeroCampi" value={formData.numeroCampi} onChange={handleChange} placeholder="Numero Campi" className={inputBase} style={fieldStyle} />
                </div>
                <div>
                  <input type="text" name="localita" value={formData.localita} onChange={handleChange} placeholder="Località Installazione" className={inputBase} style={fieldStyle} />
                </div>
              </div>

              <div className="mt-0">
                <textarea name="messaggio" value={formData.messaggio} onChange={handleChange} placeholder="Descrivi il tuo progetto..." rows={3} className={inputBase + ' resize-none'} style={fieldStyle} />
              </div>

              <div className="mt-8 flex items-start gap-3">
                <input type="checkbox" name="privacy" checked={formData.privacy} onChange={handleChange} required className="mt-1.5 w-4 h-4 rounded-sm" style={{ accentColor: '#0d1b2a', borderColor: 'rgba(10,10,10,0.2)' }} />
                <span className="text-[12px] leading-relaxed" style={{ color: 'rgba(10,10,10,0.45)' }}>
                  Acconsento al trattamento dei dati personali ai sensi del GDPR (UE 2016/679). Leggi la <Link to="/privacy-policy" className="underline font-medium" style={{ color: '#0d1b2a' }}>Privacy Policy</Link>. *
                </span>
              </div>

              <button type="submit" className="mt-10 group flex items-center gap-6">
                <span className="px-10 py-5 font-sans text-[13px] uppercase tracking-[0.2em] font-medium transition-colors duration-500" style={{ backgroundColor: '#0a0a0a', color: '#f5f0eb' }}>
                  Invia richiesta
                </span>
                <span className="w-14 h-14 rounded-full border flex items-center justify-center group-hover:bg-rust group-hover:border-rust transition-all duration-500" style={{ borderColor: 'rgba(10,10,10,0.2)' }}>
                  <svg className="w-5 h-5 group-hover:text-white transition-colors" style={{ color: '#0a0a0a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
