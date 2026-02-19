const vantaggi = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Servizio Completo',
    description: 'Dalla vendita al montaggio alla manutenzione — un unico interlocutore per tutto il ciclo di vita del tuo impianto.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Operatività Europea',
    description: 'Non solo Italia: realizziamo installazioni in tutta Europa con logistica e squadre dedicate.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Squadre Proprie',
    description: 'Il montaggio viene eseguito direttamente dal nostro team specializzato, mai subappaltato a terzi.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Competenza Tecnica Reale',
    description: 'Specializzati nella fabbricazione di strutture metalliche (Ateco 25.11) — competenza tecnica, non solo commerciale.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Flessibilità Totale',
    description: 'Soluzioni personalizzate per ogni esigenza e budget. Dal singolo campo al centro sportivo multi-campo.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Assistenza Post-Vendita',
    description: 'Manutenzione e ricambi garantiti. Contratti di manutenzione programmata per la tranquillità del tuo investimento.',
  },
]

export default function Vantaggi() {
  return (
    <section id="vantaggi" className="section-padding bg-white">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest">Perché Sceglierci</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-steel-900 mt-3 mb-6">
            Il partner giusto per il tuo progetto
          </h2>
          <p className="text-lg text-steel-500">
            Sei motivi concreti per affidarti a CN Innovation per il tuo prossimo impianto sportivo.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vantaggi.map((vantaggio, i) => (
            <div key={i} className="text-center p-8 rounded-2xl hover:bg-steel-50 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                {vantaggio.icon}
              </div>
              <h3 className="text-lg font-bold text-steel-900 mb-3">{vantaggio.title}</h3>
              <p className="text-steel-500 text-sm leading-relaxed">{vantaggio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
