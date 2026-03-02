import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { num: '01', title: 'Contatto', desc: 'Form, telefono, WhatsApp o social.' },
  { num: '02', title: 'Consulenza', desc: 'Analisi, sopralluogo, proposta tecnica ed economica.' },
  { num: '03', title: 'Progettazione', desc: 'Layout, materiali, configurazione personalizzata.' },
  { num: '04', title: 'Produzione', desc: 'Fabbricazione o approvvigionamento strutture.' },
  { num: '05', title: 'Montaggio', desc: 'Installazione con squadre specializzate.' },
  { num: '06', title: 'Consegna', desc: 'Collaudo, documentazione, certificazioni.' },
  { num: '07', title: 'Assistenza', desc: 'Manutenzione programmata e supporto continuo.' },
]

export default function Processo() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progress line animation
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', end: 'bottom 80%', scrub: 1 },
      })

      // Steps stagger
      const items = sectionRef.current?.querySelectorAll('.process-step')
      items?.forEach((item, i) => {
        gsap.from(item, {
          y: 40, opacity: 0, duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 md:py-44 overflow-hidden" style={{ backgroundColor: '#0d1b2a' }}>
      {/* Large decorative text */}
      <div className="absolute top-20 left-0 font-sans text-[20vw] font-bold leading-none select-none pointer-events-none" style={{ color: 'rgba(255,255,255,0.02)' }}>
        PROCESS
      </div>

      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4 md:flex md:items-end">
            <p className="text-body text-white/30 mb-2">Un processo chiaro e trasparente, pensato per garantire la massima qualità in ogni fase.</p>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:text-right">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-white/30 font-medium">(Come Lavoriamo)</span>
            <h2 className="heading-lg text-white mt-4">Dal contatto<br />alla <span className="text-serif-italic" style={{ color: '#f5f0eb' }}>consegna</span></h2>
          </div>
        </div>

        {/* Timeline — vertical with progress line */}
        <div className="relative grid grid-cols-12 gap-4 md:gap-8">
          {/* Progress line */}
          <div className="hidden md:block col-span-1 relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/10">
              <div ref={lineRef} className="absolute top-0 left-0 w-full h-full" style={{ backgroundColor: '#f5f0eb' }} />
            </div>
          </div>

          {/* Steps */}
          <div className="col-span-12 md:col-span-10 md:col-start-2 space-y-0">
            {steps.map((step, i) => (
              <div key={i} className="process-step flex gap-6 md:gap-10 py-8 md:py-10 border-b border-white/5 group">
                <div className="flex-shrink-0 w-12 md:w-16 flex items-start">
                  <span className="font-sans text-3xl md:text-4xl font-bold text-white/10 group-hover:text-white/40 transition-colors duration-500">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-sans text-xl md:text-2xl font-bold text-white/80 group-hover:text-white transition-colors duration-300">{step.title}</h3>
                  <p className="text-body text-white/30 mt-2">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
