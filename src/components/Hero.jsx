import heroBg from '../assets/foto/foto-1.webp'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Campo da padel indoor realizzato da CN Innovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-primary-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            <span className="text-sm text-white/90 font-medium">Operativi in Italia e in tutta Europa</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Impianti sportivi{' '}
            <span className="text-accent-400">chiavi in mano</span>
            , in Italia e in tutta Europa
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
            Vendita, montaggio e manutenzione di campi da padel e strutture sportive.
            Dalla progettazione all'installazione, un unico partner per il tuo impianto.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contatti" className="btn-primary text-lg">
              Richiedi un preventivo gratuito
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#servizi" className="btn-secondary text-lg">
              Scopri i nostri servizi
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">100+</div>
              <div className="text-sm text-white/60 mt-1">Impianti realizzati</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">10+</div>
              <div className="text-sm text-white/60 mt-1">Paesi serviti</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">100%</div>
              <div className="text-sm text-white/60 mt-1">Squadre proprie</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#chi-siamo" className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors">
          <span className="text-xs uppercase tracking-widest">Scopri di più</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
