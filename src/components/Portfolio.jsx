import { useState } from 'react'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto9 from '../assets/foto/foto-9.webp'
import foto10 from '../assets/foto/foto-10.webp'
import foto11 from '../assets/foto/foto-11.webp'
import foto12 from '../assets/foto/foto-12.webp'
import foto15 from '../assets/foto/foto-15.webp'
import foto16 from '../assets/foto/foto-16.webp'
import foto17 from '../assets/foto/foto-17.webp'
import foto18 from '../assets/foto/foto-18.webp'
import foto20 from '../assets/foto/foto-20.webp'

const progetti = [
  { image: foto7, title: 'FIP Tour — Bandol, Francia', category: 'outdoor', desc: 'Installazione campi per torneo internazionale' },
  { image: foto8, title: 'FIP Silver — Port de Bandol', category: 'outdoor', desc: 'Campo principale torneo con tribune' },
  { image: foto9, title: 'FIP Tour — Area Multi-campo', category: 'outdoor', desc: 'Installazione completa area torneo' },
  { image: foto15, title: 'Circo Massimo — Roma', category: 'outdoor', desc: 'Campi da padel per evento Race for the Cure' },
  { image: foto16, title: 'Installazione Urbana — Sicilia', category: 'outdoor', desc: 'Campo outdoor con illuminazione LED' },
  { image: foto11, title: 'Campo Panoramico — Campagna', category: 'outdoor', desc: 'Installazione panoramica con vetri temperati' },
  { image: foto12, title: 'Centro Sportivo — Rurale', category: 'outdoor', desc: 'Impianto outdoor in contesto paesaggistico' },
  { image: foto18, title: 'Padel Factory — Indoor', category: 'indoor', desc: 'Centro indoor professionale multi-campo' },
  { image: foto17, title: 'Centro Multisport — Montagna', category: 'multisport', desc: 'Impianto multisport con erba sintetica' },
  { image: foto20, title: 'Campo Padel Verde — Roma', category: 'outdoor', desc: 'Campo con erba sintetica verde e bordi rossi' },
  { image: foto10, title: 'Installazione Rurale — Italia', category: 'outdoor', desc: 'Campo in fase di completamento con vista collinare' },
]

const filtri = [
  { label: 'Tutti', value: 'tutti' },
  { label: 'Outdoor', value: 'outdoor' },
  { label: 'Indoor', value: 'indoor' },
  { label: 'Multisport', value: 'multisport' },
]

export default function Portfolio() {
  const [filtro, setFiltro] = useState('tutti')

  const progettiFiltrati = filtro === 'tutti'
    ? progetti
    : progetti.filter(p => p.category === filtro)

  return (
    <section id="portfolio" className="section-padding bg-steel-900">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent-400 font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            I nostri progetti realizzati
          </h2>
          <p className="text-lg text-steel-400">
            Ogni impianto racconta una storia di competenza, precisione e passione. Scopri alcuni dei nostri lavori in Italia e in Europa.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filtri.map((f) => (
            <button
              key={f.value}
              onClick={() => setFiltro(f.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filtro === f.value
                  ? 'bg-accent-500 text-white shadow-lg'
                  : 'bg-steel-800 text-steel-300 hover:bg-steel-700 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {progettiFiltrati.map((progetto, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={progetto.image}
                alt={progetto.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-900/90 via-steel-900/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold text-white">{progetto.title}</h3>
                <p className="text-sm text-steel-300 mt-1">{progetto.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-steel-400 mb-6">Vuoi vedere il tuo progetto qui?</p>
          <a href="#contatti" className="btn-primary">
            Contattaci per un preventivo
          </a>
        </div>
      </div>
    </section>
  )
}
