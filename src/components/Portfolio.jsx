import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto9 from '../assets/foto/foto-9.webp'
import foto15 from '../assets/foto/foto-15.webp'
import foto16 from '../assets/foto/foto-16.webp'
import foto20 from '../assets/foto/foto-20.webp'
import foto18 from '../assets/foto/foto-18.webp'
import foto12 from '../assets/foto/foto-12.webp'

gsap.registerPlugin(ScrollTrigger)

const progetti = [
  { image: foto7, title: 'FIP Tour — Bandol', location: 'Francia', type: 'Torneo Internazionale' },
  { image: foto8, title: 'FIP Silver', location: 'Port de Bandol', type: 'Campo Principale' },
  { image: foto15, title: 'Circo Massimo', location: 'Roma, Italia', type: 'Evento Sportivo' },
  { image: foto16, title: 'Lungomare', location: 'Sicilia, Italia', type: 'Outdoor Urbano' },
  { image: foto20, title: 'Campo Padel Verde', location: 'Roma, Italia', type: 'Residenziale' },
  { image: foto18, title: 'Padel Factory', location: 'Italia', type: 'Centro Indoor' },
  { image: foto9, title: 'Area Multi-campo', location: 'Francia', type: 'Torneo' },
  { image: foto12, title: 'Centro Sportivo', location: 'Italia', type: 'Outdoor Rurale' },
]

export default function Portfolio() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('.portfolio-item')
      items?.forEach((item, i) => {
        const direction = i % 3 === 0 ? -40 : i % 3 === 1 ? 60 : -20
        gsap.from(item, {
          y: Math.abs(direction) + 40,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 90%', toggleActions: 'play none none reverse' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-32 md:py-44 overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="px-6 md:px-12 lg:px-20 mb-16 md:mb-24">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4 md:flex md:items-end">
            <p className="text-body text-white/30 mb-2">Ogni impianto racconta una storia di competenza, precisione e passione.</p>
          </div>
          <div className="col-span-12 md:col-span-8 md:text-right">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-white/30 font-medium">(Portfolio)</span>
            <h2 className="heading-lg text-white mt-4">Progetti<br /><span className="text-serif-italic" style={{ color: 'rgba(255,255,255,0.5)' }}>realizzati</span></h2>
          </div>
        </div>
      </div>

      {/* Masonry-like asymmetric grid */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Row 1: large left, small right offset up */}
          <div className="portfolio-item col-span-12 md:col-span-7">
            <ProjectCard project={progetti[0]} aspect="aspect-[16/10]" />
          </div>
          <div className="portfolio-item col-span-12 md:col-span-5 md:mt-16">
            <ProjectCard project={progetti[1]} aspect="aspect-[4/3]" />
          </div>

          {/* Row 2: small left offset, large right */}
          <div className="portfolio-item col-span-12 md:col-span-4 md:-mt-8">
            <ProjectCard project={progetti[2]} aspect="aspect-[3/4]" />
          </div>
          <div className="portfolio-item col-span-12 md:col-span-8">
            <ProjectCard project={progetti[3]} aspect="aspect-[16/9]" />
          </div>

          {/* Row 3: three uneven columns */}
          <div className="portfolio-item col-span-12 md:col-span-5 md:mt-8">
            <ProjectCard project={progetti[4]} aspect="aspect-[4/5]" />
          </div>
          <div className="portfolio-item col-span-12 md:col-span-3 md:-mt-12">
            <ProjectCard project={progetti[5]} aspect="aspect-square" />
          </div>
          <div className="portfolio-item col-span-12 md:col-span-4 md:mt-4">
            <ProjectCard project={progetti[6]} aspect="aspect-[3/4]" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 md:px-12 lg:px-20 mt-20 md:mt-28 flex flex-col md:flex-row items-start md:items-center gap-6">
        <p className="text-white/30 text-sm font-medium">Vuoi vedere il tuo progetto qui?</p>
        <a href="#contatti" className="group flex items-center gap-4">
          <span className="font-sans text-[13px] uppercase tracking-[0.2em] text-white font-medium group-hover:opacity-70 transition-all duration-500">Contattaci</span>
          <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-500">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </span>
        </a>
      </div>
    </section>
  )
}

function ProjectCard({ project, aspect }) {
  return (
    <div className="group relative overflow-hidden cursor-pointer">
      <div className={`${aspect} overflow-hidden`}>
        <img src={project.image} alt={project.title} title={project.title} width={640} height={480} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" loading="lazy" />
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.8), rgba(10,10,10,0.1), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-medium">{project.type}</span>
        <h3 className="font-sans text-lg font-bold text-white mt-1">{project.title}</h3>
        <span className="text-[12px] text-white/50">{project.location}</span>
      </div>
    </div>
  )
}
