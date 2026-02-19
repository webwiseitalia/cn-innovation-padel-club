import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import foto2 from '../assets/foto/foto-2.webp'

gsap.registerPlugin(ScrollTrigger)

const vantaggi = [
  { num: '01', title: 'Servizio Completo', desc: 'Un unico interlocutore dalla vendita al montaggio alla manutenzione.' },
  { num: '02', title: 'Operatività Europea', desc: 'Installazioni in Italia e in tutta Europa con logistica dedicata.' },
  { num: '03', title: 'Squadre Proprie', desc: 'Montaggio eseguito direttamente dal nostro team, mai subappaltato.' },
  { num: '04', title: 'Competenza Tecnica', desc: 'Fabbricazione di strutture metalliche — competenza reale, non solo commerciale.' },
  { num: '05', title: 'Flessibilità Totale', desc: 'Soluzioni personalizzate per ogni esigenza e budget.' },
  { num: '06', title: 'Assistenza Garantita', desc: 'Manutenzione programmata e supporto post-vendita continuo.' },
]

export default function Vantaggi() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on the side image
      gsap.to(imageRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      })

      // Stagger in the items
      const items = sectionRef.current?.querySelectorAll('.vantaggio-row')
      items?.forEach((item) => {
        gsap.from(item, {
          x: -40, opacity: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 md:py-44 bg-paper overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {/* Left: content */}
          <div className="col-span-12 md:col-span-7">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-slate font-medium">(Perché Noi)</span>
            <h2 className="heading-lg text-ink mt-4 mb-16 md:mb-20">
              Perché scegliere<br /><span className="text-serif-italic text-rust">CN Innovation</span>
            </h2>

            {vantaggi.map((v, i) => (
              <div key={i} className="vantaggio-row flex gap-6 md:gap-10 py-6 border-b border-ink/10 group">
                <span className="font-sans text-sm text-rust font-bold flex-shrink-0 w-8">{v.num}</span>
                <div>
                  <h3 className="font-sans text-lg md:text-xl font-bold text-ink group-hover:text-rust transition-colors duration-300">{v.title}</h3>
                  <p className="text-body mt-1">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: sticky image — not a card, overflows */}
          <div className="hidden md:block col-span-4 col-start-9 relative">
            <div className="sticky top-32" ref={imageRef}>
              <div className="aspect-[3/5] overflow-hidden">
                <img src={foto2} alt="Dettaglio erba sintetica campo da padel" className="w-full h-full object-cover" />
              </div>
              <div className="mt-6">
                <span className="font-sans text-6xl font-bold text-ink/5">CN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
