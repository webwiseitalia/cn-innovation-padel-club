import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const servizi = [
  { num: '01', title: 'Vendita Impianti', subtitle: 'Sportivi', desc: 'Fornitura di campi da padel completi: struttura metallica, vetri temperati, pannelli di rete, erba sintetica, illuminazione. Modelli panoramici e classici, indoor e outdoor, personalizzabili.', details: ['Panoramici e a traliccio', 'Personalizzazione completa', 'Soluzioni multi-campo'] },
  { num: '02', title: 'Montaggio e', subtitle: 'Installazione', desc: 'Installazione chiavi in mano con squadre specializzate proprie. Posa vetri e pannelli, manto in erba sintetica, illuminazione, segnaletica. Gestione completa del cantiere.', details: ['Squadre proprie', 'Gestione cantiere', 'Italia e tutta Europa'] },
  { num: '03', title: 'Manutenzione e', subtitle: 'Assistenza', desc: 'Manutenzione ordinaria e straordinaria di impianti esistenti. Sostituzione componenti, interventi di riparazione e ripristino. Contratti di manutenzione programmata.', details: ['Ordinaria e straordinaria', 'Sostituzione componenti', 'Assistenza post-vendita'] },
  { num: '04', title: 'Consulenza e', subtitle: 'Progettazione', desc: 'Consulenza tecnica per nuovi centri sportivi. Analisi del sito, progettazione layout, supporto normativo per permessi e omologazioni.', details: ['Analisi di fattibilità', 'Supporto normativo', 'Layout personalizzato'] },
]

export default function Servizi() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('.servizio-item')
      items?.forEach((item) => {
        gsap.from(item, {
          y: 80, opacity: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="servizi" ref={sectionRef} className="relative py-32 md:py-44 overflow-hidden" style={{ backgroundColor: '#0d1b2a' }}>
      <div className="px-6 md:px-12 lg:px-20 mb-20 md:mb-28">
        <div className="flex flex-col md:flex-row-reverse md:items-end gap-8 md:gap-20">
          <div className="md:text-right">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-white/30 font-medium">(Servizi)</span>
            <h2 className="heading-lg text-white mt-4">Cosa<br /><span className="text-serif-italic" style={{ color: '#f5f0eb' }}>facciamo</span></h2>
          </div>
          <p className="text-body text-white/40 max-w-md mb-2">Dalla vendita alla manutenzione, un servizio completo per ogni fase del tuo impianto sportivo.</p>
        </div>
      </div>
      <div className="px-6 md:px-12 lg:px-20">
        {servizi.map((s, i) => (
          <div key={i} className="servizio-item border-t border-white/10 py-12 md:py-16 grid grid-cols-12 gap-4 md:gap-8 group">
            <div className="col-span-2 md:col-span-1"><span className="font-sans text-sm text-white/20 font-medium">{s.num}</span></div>
            <div className="col-span-10 md:col-span-5">
              <h3 className="heading-md text-white/80 group-hover:text-white transition-colors duration-500">{s.title}<br /><span className="text-serif-italic">{s.subtitle}</span></h3>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-7 mt-4 md:mt-0">
              <p className="text-body text-white/40 mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-3">
                {s.details.map((d, j) => (
                  <span key={j} className="px-3 py-1.5 border border-white/10 text-white/50 text-[11px] uppercase tracking-[0.15em] font-medium">{d}</span>
                ))}
              </div>
            </div>
            <div className="hidden md:flex col-span-1 items-start justify-end pt-2">
              <a href="#contatti" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-500">
                <svg className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
