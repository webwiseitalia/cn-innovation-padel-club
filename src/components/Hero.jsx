import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroBg from '../assets/foto/foto-8.webp'
import heroOverlay from '../assets/foto/foto-11.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const overlayImgRef = useRef(null)
  const headlineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
      })
      const kids = headlineRef.current?.children
      if (kids) {
        gsap.from(kids, { y: 120, opacity: 0, duration: 1.4, stagger: 0.12, ease: 'power4.out', delay: 0.3 })
      }
      gsap.from(overlayImgRef.current, { y: 80, opacity: 0, scale: 0.9, duration: 1.6, ease: 'power3.out', delay: 0.8 })
      gsap.to(overlayImgRef.current, {
        yPercent: -30, scale: 0.95, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-midnight">
      <div className="absolute inset-0 scale-110" ref={imageRef}>
        <img src={heroBg} alt="Campo da padel per torneo FIP Tour" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-midnight/60" />
      </div>
      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12">
        <div className="absolute top-28 md:top-32 left-6 md:left-12">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-rust animate-pulse" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-white/50 font-medium">Italia & Europa — Impianti Sportivi</span>
          </div>
        </div>
        <div ref={overlayImgRef} className="absolute top-32 right-6 md:top-36 md:right-12 w-[45vw] md:w-[28vw] max-w-[400px] aspect-[3/4] hidden md:block">
          <img src={heroOverlay} alt="Campo da padel panoramico" className="w-full h-full object-cover" />
          <div className="absolute -bottom-4 -left-4 bg-rust text-white px-4 py-2 font-sans text-[11px] uppercase tracking-[0.2em] font-medium">Chiavi in mano</div>
        </div>
        <div ref={headlineRef} className="max-w-[90vw] md:max-w-[65vw]">
          <div className="overflow-hidden"><h1 className="heading-xl text-white">Costruiamo</h1></div>
          <div className="overflow-hidden"><h1 className="heading-xl text-white/40">il futuro del</h1></div>
          <div className="overflow-hidden"><h1 className="heading-xl"><span className="text-serif-italic text-rust" style={{fontSize:'1.05em'}}>padel</span></h1></div>
        </div>
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-0 mt-12 md:mt-16">
          <p className="text-white/50 text-sm md:text-base max-w-sm leading-relaxed md:mr-auto">Vendita, montaggio e manutenzione di campi da padel e strutture sportive. Dalla progettazione all'installazione, un unico partner.</p>
          <a href="#contatti" className="group flex items-center gap-4 self-start md:self-auto">
            <span className="font-sans text-[13px] uppercase tracking-[0.2em] text-white font-medium group-hover:text-rust transition-colors duration-500">Richiedi preventivo</span>
            <span className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-rust group-hover:border-rust transition-all duration-500">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
          </a>
        </div>
        <div className="flex gap-12 md:gap-20 mt-12 md:mt-16 border-t border-white/10 pt-8">
          <div><span className="block font-sans text-3xl md:text-4xl font-bold text-white">100+</span><span className="block text-[11px] uppercase tracking-[0.2em] text-white/30 mt-1 font-medium">Impianti</span></div>
          <div><span className="block font-sans text-3xl md:text-4xl font-bold text-white">10+</span><span className="block text-[11px] uppercase tracking-[0.2em] text-white/30 mt-1 font-medium">Paesi</span></div>
          <div><span className="block font-sans text-3xl md:text-4xl font-bold text-rust">360°</span><span className="block text-[11px] uppercase tracking-[0.2em] text-white/30 mt-1 font-medium">Servizio</span></div>
        </div>
      </div>
      <div className="absolute bottom-6 left-6 md:left-12 z-10">
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden"><div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce" /></div>
      </div>
    </section>
  )
}
