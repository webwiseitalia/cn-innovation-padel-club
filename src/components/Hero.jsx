import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroBg from '../assets/foto/foto-15.webp'
import heroOverlay from '../assets/foto/foto-11.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const overlayImgRef = useRef(null)
  const headlineRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
      })

      const kids = headlineRef.current?.children
      if (kids) {
        gsap.from(kids, { y: 140, opacity: 0, duration: 1.6, stagger: 0.15, ease: 'power4.out', delay: 0.4 })
      }

      gsap.from(subtitleRef.current, { y: 40, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 1.2 })

      if (overlayImgRef.current) {
        gsap.from(overlayImgRef.current, {
          y: 100, opacity: 0, scale: 0.92, duration: 1.8, ease: 'power3.out', delay: 0.9,
        })
        gsap.to(overlayImgRef.current, {
          yPercent: -20, ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 },
        })
      }

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden" style={{ backgroundColor: '#0d1b2a' }}>
      {/* Background — scaled up with slight blur to hide low-res artifacts */}
      <div className="absolute inset-[-10%] scale-125" ref={imageRef}>
        <img
          src={heroBg}
          alt="Campo da padel per torneo FIP Tour"
          title="CN Innovation - Campo da padel FIP Tour"
          loading="eager"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          style={{ filter: 'blur(1px)' }}
        />
      </div>

      {/* Multi-layer overlay for depth and contrast */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,27,42,0.5) 0%, rgba(13,27,42,0.25) 35%, rgba(13,27,42,0.65) 70%, rgba(13,27,42,0.95) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(13,27,42,0.7) 0%, rgba(13,27,42,0.3) 50%, transparent 100%)' }} />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '128px 128px' }} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-10 md:pb-14">

        {/* Top bar */}
        <div className="flex items-center justify-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#f5f0eb' }} />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>Italia & Europa — Impianti Sportivi</span>
          </div>
        </div>

        {/* Middle: headline */}
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-12 gap-4 md:gap-8 w-full">
            {/* Headline */}
            <div className="col-span-12 md:col-span-7 lg:col-span-7 text-center md:text-left">
              <div ref={headlineRef}>
                <div className="overflow-hidden">
                  <h1 className="heading-xl text-white">Costruiamo</h1>
                </div>
                <div className="overflow-hidden">
                  <h1 className="heading-xl" style={{ color: 'rgba(255,255,255,0.35)' }}>il futuro del</h1>
                </div>
                <div className="overflow-hidden">
                  <h1 className="heading-xl">
                    <span className="text-serif-italic" style={{ fontSize: '1.05em', color: '#f5f0eb' }}>padel</span>
                  </h1>
                </div>
              </div>

              {/* Subtitle + CTA */}
              <div ref={subtitleRef} className="mt-10 md:mt-14 flex flex-col items-center md:items-start md:flex-row md:items-end gap-8">
                <p className="text-sm md:text-base max-w-sm leading-relaxed text-center md:text-left" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Vendita, montaggio e manutenzione di campi da padel e strutture sportive. Dalla progettazione all'installazione, un unico partner.
                </p>
                <a href="#contatti" className="group flex items-center gap-4 flex-shrink-0">
                  <span className="font-sans text-[13px] uppercase tracking-[0.2em] text-white font-medium group-hover:opacity-70 transition-all duration-500">Richiedi preventivo</span>
                  <span className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500" style={{ border: '1px solid rgba(255,255,255,0.25)', backgroundColor: 'transparent' }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Overlay image — desktop only, overflows into bottom bar */}
            <div className="hidden md:flex col-span-5 lg:col-span-3 lg:col-start-10 relative items-center justify-end">
              <div ref={overlayImgRef} className="relative w-full max-w-[200px]" style={{ marginBottom: '-80px', zIndex: 20 }}>
                <div className="aspect-[3/4] overflow-hidden shadow-2xl" style={{ outline: '1px solid rgba(255,255,255,0.06)' }}>
                  <img src={heroOverlay} alt="Campo da padel panoramico" title="Impianto padel chiavi in mano" loading="eager" width={640} height={853} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,27,42,0.6) 0%, transparent 50%)' }} />
                </div>
                <div className="absolute -bottom-3 -left-3 px-5 py-2.5 font-sans text-[11px] uppercase tracking-[0.2em] font-medium" style={{ backgroundColor: '#f5f0eb', color: '#0d1b2a' }}>
                  Chiavi in mano
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar: stats */}
        <div className="relative flex items-end justify-center md:justify-between gap-8 pt-6 md:pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="flex gap-10 md:gap-16">
            <div className="text-center md:text-left">
              <span className="block font-sans text-2xl md:text-3xl font-bold text-white">100+</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] mt-1 font-medium" style={{ color: 'rgba(255,255,255,0.25)' }}>Impianti</span>
            </div>
            <div className="text-center md:text-left">
              <span className="block font-sans text-2xl md:text-3xl font-bold text-white">10+</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] mt-1 font-medium" style={{ color: 'rgba(255,255,255,0.25)' }}>Paesi</span>
            </div>
            <div className="text-center md:text-left">
              <span className="block font-sans text-2xl md:text-3xl font-bold" style={{ color: '#f5f0eb' }}>360°</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] mt-1 font-medium" style={{ color: 'rgba(255,255,255,0.25)' }}>Servizio</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="hidden md:flex items-center gap-3">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: 'rgba(255,255,255,0.2)' }}>Scroll</span>
            <div className="w-[1px] h-10 relative overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
              <div className="absolute top-0 left-0 w-full h-1/2 animate-bounce" style={{ backgroundColor: 'rgba(255,255,255,0.6)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
