import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import foto7 from '../assets/foto/foto-7.webp'
import foto11 from '../assets/foto/foto-11.webp'
import foto1 from '../assets/foto/foto-1.webp'
import foto10 from '../assets/foto/foto-10.webp'
import foto18 from '../assets/foto/foto-18.webp'
import foto17 from '../assets/foto/foto-17.webp'

gsap.registerPlugin(ScrollTrigger)

const prodotti = [
  { image: foto7, title: 'Padel Outdoor Panoramico', desc: 'Vetri temperati, vista libera, design per tornei internazionali.' },
  { image: foto11, title: 'Padel Outdoor Classico', desc: 'Struttura a traliccio metallico, robusta e affidabile.' },
  { image: foto1, title: 'Padel Indoor', desc: 'Illuminazione LED integrata, giocabilità 365 giorni l\'anno.' },
  { image: foto10, title: 'Campi Removibili', desc: 'Soluzioni mobili per eventi e manifestazioni sportive.' },
  { image: foto18, title: 'Strutture Indoor Pro', desc: 'Centri multi-campo con aree comuni e illuminazione professionale.' },
  { image: foto17, title: 'Impianti Multisport', desc: 'Calcetto, tennis, multisport con erba sintetica.' },
]

export default function Prodotti() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll effect on the product track
      const track = trackRef.current
      if (!track) return

      const totalWidth = track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="prodotti" ref={sectionRef} className="relative bg-cream overflow-hidden">
      {/* Header — visible before horizontal scroll */}
      <div className="pt-32 md:pt-44 pb-12 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-20">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-slate font-medium">(Prodotti)</span>
            <h2 className="heading-lg text-ink mt-4">Tipologie di<br /><span className="text-serif-italic text-rust">impianti</span></h2>
          </div>
          <p className="text-body max-w-md mb-2">Una gamma completa di soluzioni per impianti sportivi, dai campi da padel alle strutture metalliche per ogni disciplina.</p>
        </div>
      </div>

      {/* Horizontal scrolling track */}
      <div ref={trackRef} className="flex gap-8 pl-6 md:pl-12 lg:pl-20 pb-32 pt-8" style={{ width: 'max-content' }}>
        {prodotti.map((p, i) => (
          <div key={i} className="relative flex-shrink-0 group" style={{ width: 'clamp(300px, 35vw, 500px)' }}>
            <div className="relative overflow-hidden aspect-[3/4]">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium mb-2 block">0{i + 1}</span>
              <h3 className="font-sans text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
        {/* Final CTA card */}
        <div className="flex-shrink-0 flex items-center justify-center bg-rust" style={{ width: 'clamp(280px, 30vw, 400px)' }}>
          <div className="text-center p-10">
            <h3 className="font-sans text-2xl font-bold text-white mb-4">Vuoi saperne di più?</h3>
            <a href="#contatti" className="inline-flex items-center gap-3 font-sans text-[13px] uppercase tracking-[0.2em] text-white font-medium border-b border-white/40 pb-1 hover:border-white transition-colors duration-500">
              Richiedi preventivo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
