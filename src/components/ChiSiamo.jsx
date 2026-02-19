import foto3 from '../assets/foto/foto-3.webp'
import foto4 from '../assets/foto/foto-4.webp'

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest">Chi Siamo</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-steel-900 mt-3 mb-6 leading-tight">
              Esperienza e competenza al servizio dello sport
            </h2>
            <div className="space-y-4 text-steel-600 leading-relaxed">
              <p>
                <strong className="text-steel-800">CN Innovation</strong> è un'azienda specializzata nella fabbricazione, vendita, montaggio e manutenzione di impianti sportivi. Con sede a Colleferro (Roma), operiamo su tutto il territorio italiano e in tutta Europa.
              </p>
              <p>
                Il nostro core business è la realizzazione di <strong className="text-steel-800">campi da padel</strong> — indoor e outdoor — ma la nostra competenza si estende a strutture metalliche per diversi tipi di impianti sportivi: coperture, recinzioni, illuminazione e accessori.
              </p>
              <p>
                Fondata da Carolina Ines Nunez Banegas, CN Innovation unisce la competenza nella lavorazione delle strutture metalliche con una profonda conoscenza del mondo degli impianti sportivi, offrendo un <strong className="text-steel-800">servizio completo</strong> dalla consulenza iniziale fino all'assistenza post-installazione.
              </p>
            </div>

            {/* Key points */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: '🔧', text: 'Montaggio diretto, mai subappaltato' },
                { icon: '🌍', text: 'Operatività internazionale' },
                { icon: '📋', text: 'Conoscenza normative tecniche' },
                { icon: '⚡', text: 'Flessibilità e rapidità operativa' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-steel-50">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="text-sm font-medium text-steel-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={foto3}
                    alt="Squadra CN Innovation al lavoro sulla posa dell'erba sintetica"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-primary-700 rounded-2xl p-6 text-white">
                  <div className="text-3xl font-bold">25.11</div>
                  <div className="text-sm text-white/80 mt-1">Cod. Ateco — Fabbricazione strutture metalliche</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-accent-500 rounded-2xl p-6 text-white">
                  <div className="text-3xl font-bold">360°</div>
                  <div className="text-sm text-white/80 mt-1">Servizio completo dalla consulenza alla manutenzione</div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={foto4}
                    alt="Pavimentazione per impianto sportivo CN Innovation"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
