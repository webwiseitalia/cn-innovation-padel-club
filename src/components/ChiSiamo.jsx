import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import foto3 from '../assets/foto/foto-3.webp'
import foto5 from '../assets/foto/foto-5.webp'

gsap.registerPlugin(ScrollTrigger)

export default function ChiSiamo() {
  const sectionRef = useRef(null)
  const img1Ref = useRef(null)
  const img2Ref = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const kids = textRef.current?.children
      if (kids) {
        gsap.from(kids, {
          y: 60, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: textRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        })
      }
      gsap.from(img1Ref.current, {
        clipPath: 'inset(100% 0 0 0)', duration: 1.4, ease: 'power4.inOut',
        scrollTrigger: { trigger: img1Ref.current, start: 'top 75%', toggleActions: 'play none none reverse' },
      })
      gsap.from(img2Ref.current, {
        clipPath: 'inset(0 100% 0 0)', duration: 1.2, ease: 'power4.inOut',
        scrollTrigger: { trigger: img2Ref.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      })
      gsap.to(img2Ref.current, {
        yPercent: -15, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 2 },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="chi-siamo" ref={sectionRef} className="relative py-32 md:py-44 overflow-hidden" style={{ backgroundColor: '#f5f0eb' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans text-[15vw] font-bold leading-none select-none pointer-events-none whitespace-nowrap" style={{ color: 'rgba(10,10,10,0.03)' }}>INNOVATION</div>
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-3 mb-8 md:mb-0">
            <hr className="rule-accent mb-6" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-grigio font-medium">Chi Siamo</span>
          </div>
          <div ref={textRef} className="col-span-12 md:col-span-7 md:col-start-4">
            <h2 className="heading-lg text-ink mb-8">
              Esperienza e competenza<br /><span className="text-serif-italic text-rust">al servizio</span> dello sport
            </h2>
            <div className="space-y-5 text-body max-w-2xl">
              <p><strong className="text-ink font-medium">CN Innovation</strong> è un'azienda specializzata nella fabbricazione, vendita, montaggio e manutenzione di impianti sportivi. Con sede a Colleferro (Roma), operiamo su tutto il territorio italiano e in tutta Europa.</p>
              <p>Il nostro core business è la realizzazione di campi da padel — indoor e outdoor — ma la nostra competenza si estende a strutture metalliche per diversi tipi di impianti sportivi.</p>
              <p>Fondata da Carolina Ines Nunez Banegas, CN Innovation unisce la competenza nella lavorazione delle strutture metalliche con una profonda conoscenza del mondo degli impianti sportivi.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-20 md:mt-32">
          <div className="col-span-12 md:col-span-7" ref={img1Ref}>
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={foto3} alt="Squadra CN Innovation al lavoro" title="Team CN Innovation durante installazione" loading="lazy" width={640} height={400} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:-mt-16" ref={img2Ref}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={foto5} alt="Dettaglio pavimentazione" title="Dettaglio erba sintetica campo padel" loading="lazy" width={640} height={853} className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 flex items-start gap-3">
              <span className="font-sans text-4xl font-bold text-rust leading-none">25.11</span>
              <span className="text-[11px] uppercase tracking-[0.15em] text-grigio mt-2 font-medium leading-tight">Cod. Ateco<br />Fabbricazione<br />strutture metalliche</span>
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-28 border-t border-ink/10 pt-10 flex flex-wrap gap-x-16 gap-y-6">
          {['Montaggio diretto, mai subappaltato', 'Operatività internazionale', 'Conoscenza normative tecniche', 'Flessibilità e rapidità operativa'].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-rust flex-shrink-0" />
              <span className="font-sans text-sm font-medium text-ink/70">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
