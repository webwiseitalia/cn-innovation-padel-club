import foto7 from '../assets/foto/foto-7.webp'
import foto11 from '../assets/foto/foto-11.webp'
import foto1 from '../assets/foto/foto-1.webp'
import foto10 from '../assets/foto/foto-10.webp'
import foto18 from '../assets/foto/foto-18.webp'
import foto17 from '../assets/foto/foto-17.webp'

const prodotti = [
  {
    image: foto7,
    title: 'Padel Outdoor Panoramico',
    description: 'Campi con struttura panoramica a vetri temperati, vista libera e design moderno. Ideali per tornei e centri sportivi di prestigio.',
    alt: 'Campo da padel outdoor panoramico per torneo FIP Tour',
  },
  {
    image: foto11,
    title: 'Padel Outdoor Classico',
    description: 'Campi con struttura a traliccio metallico, robusta e affidabile. Soluzione consolidata per centri sportivi e installazioni permanenti.',
    alt: 'Campo da padel outdoor con struttura classica a traliccio',
  },
  {
    image: foto1,
    title: 'Padel Indoor',
    description: 'Campi da padel in strutture coperte con illuminazione LED integrata. Giocabilità garantita 365 giorni l\'anno.',
    alt: 'Campi da padel indoor con struttura metallica e copertura',
  },
  {
    image: foto10,
    title: 'Campi Singoli e Removibili',
    description: 'Soluzioni mobili e removibili per eventi, manifestazioni sportive e installazioni temporanee. Montaggio rapido e trasportabili.',
    alt: 'Campi da padel singoli removibili per eventi e manifestazioni',
  },
  {
    image: foto18,
    title: 'Strutture Indoor Professionali',
    description: 'Impianti completi per centri padel professionali con più campi, aree comuni e illuminazione professionale.',
    alt: 'Struttura indoor professionale con campi da padel multipli',
  },
  {
    image: foto17,
    title: 'Impianti Multisport',
    description: 'Strutture metalliche per calcetto, tennis e campi multisport con erba sintetica. Soluzioni versatili per ogni disciplina.',
    alt: 'Impianto multisport con erba sintetica e recinzioni metalliche',
  },
]

export default function Prodotti() {
  return (
    <section id="prodotti" className="section-padding bg-white">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest">I Nostri Prodotti</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-steel-900 mt-3 mb-6">
            Tipologie di impianti
          </h2>
          <p className="text-lg text-steel-500">
            Offriamo una gamma completa di soluzioni per impianti sportivi, dai campi da padel alle strutture metalliche per ogni tipo di sport.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prodotti.map((prodotto, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-steel-100">
              <div className="relative overflow-hidden h-56">
                <img
                  src={prodotto.image}
                  alt={prodotto.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-900/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-white">{prodotto.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-steel-500 text-sm leading-relaxed mb-4">{prodotto.description}</p>
                <a href="#contatti" className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:text-accent-600 transition-colors text-sm">
                  Richiedi preventivo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
