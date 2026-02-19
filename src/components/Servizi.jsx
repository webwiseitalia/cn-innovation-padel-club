const servizi = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Vendita Impianti Sportivi',
    description: 'Fornitura di campi da padel completi: struttura metallica, vetri temperati, pannelli di rete, erba sintetica, illuminazione. Modelli panoramici e classici. Soluzioni indoor e outdoor personalizzabili.',
    features: ['Campi panoramici e a traliccio', 'Personalizzazione colori e materiali', 'Soluzioni singole e multi-campo'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.384-3.07A1 1 0 005 13.062V18a1 1 0 001.554.832L11.42 15.17zm0 0L20.25 9.668a1 1 0 000-1.736L11.42.87m0 14.3V.87" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Montaggio e Installazione',
    description: 'Installazione chiavi in mano con squadre specializzate proprie. Montaggio strutture metalliche, posa vetri e pannelli, installazione manto in erba sintetica, impianto di illuminazione e segnaletica.',
    features: ['Squadre di montaggio proprie', 'Gestione completa del cantiere', 'Operativi in Italia e in tutta Europa'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Manutenzione e Assistenza',
    description: 'Manutenzione ordinaria e straordinaria di impianti sportivi esistenti. Sostituzione componenti, interventi di riparazione e ripristino. Contratti di manutenzione programmata.',
    features: ['Manutenzione ordinaria e straordinaria', 'Sostituzione componenti', 'Assistenza post-vendita garantita'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Consulenza e Progettazione',
    description: 'Consulenza tecnica per la realizzazione di nuovi centri sportivi. Analisi del sito, progettazione layout, supporto normativo per permessi e omologazioni federali.',
    features: ['Analisi del sito e fattibilità', 'Supporto normativo e permessi', 'Progettazione layout personalizzata'],
  },
]

export default function Servizi() {
  return (
    <section id="servizi" className="section-padding bg-steel-50">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest">I Nostri Servizi</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-steel-900 mt-3 mb-6">
            Un unico partner per ogni esigenza
          </h2>
          <p className="text-lg text-steel-500">
            Dalla vendita alla manutenzione, offriamo un servizio completo per la realizzazione del tuo impianto sportivo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {servizi.map((servizio, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-steel-100 hover:border-accent-200"
            >
              <div className="w-16 h-16 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                {servizio.icon}
              </div>
              <h3 className="text-xl font-bold text-steel-900 mb-3">{servizio.title}</h3>
              <p className="text-steel-500 mb-6 leading-relaxed">{servizio.description}</p>
              <ul className="space-y-2">
                {servizio.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-steel-600">
                    <svg className="w-5 h-5 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contatti" className="inline-flex items-center gap-2 mt-6 text-accent-500 font-semibold hover:text-accent-600 transition-colors text-sm">
                Richiedi preventivo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
