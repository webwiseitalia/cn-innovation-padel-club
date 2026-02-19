import { useState } from 'react'

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    azienda: '',
    email: '',
    telefono: '',
    tipologiaRichiesta: '',
    tipoImpianto: '',
    numeroCampi: '',
    localita: '',
    messaggio: '',
    privacy: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoSubject = encodeURIComponent(`Richiesta preventivo - ${formData.tipologiaRichiesta || 'Generale'}`)
    const mailtoBody = encodeURIComponent(
      `Nome: ${formData.nome}\nAzienda: ${formData.azienda}\nEmail: ${formData.email}\nTelefono: ${formData.telefono}\nTipologia richiesta: ${formData.tipologiaRichiesta}\nTipo impianto: ${formData.tipoImpianto}\nNumero campi: ${formData.numeroCampi}\nLocalità: ${formData.localita}\n\nMessaggio:\n${formData.messaggio}`
    )
    window.location.href = `mailto:info@cninnovation.it?subject=${mailtoSubject}&body=${mailtoBody}`
  }

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-steel-200 bg-white text-steel-800 placeholder-steel-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
  const selectClasses = "w-full px-4 py-3 rounded-lg border border-steel-200 bg-white text-steel-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"

  return (
    <section id="contatti" className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest">Contattaci</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-steel-900 mt-3 mb-6">
              Richiedi un preventivo gratuito e senza impegno
            </h2>
            <p className="text-steel-500 leading-relaxed mb-8">
              Compila il form con i dettagli del tuo progetto e riceverai una proposta tecnica ed economica personalizzata.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-steel-900">Sede</h4>
                  <p className="text-sm text-steel-500">Via R. Morandi, Valle Settedue SNC<br />00034 Colleferro (RM)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-steel-900">Email</h4>
                  <p className="text-sm text-steel-500">info@cninnovation.it</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-steel-900">Social</h4>
                  <div className="flex gap-3 mt-2">
                    <a href="https://www.instagram.com/cninnov/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-steel-100 text-steel-600 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/p/CN-Innovation-100083125581065/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-steel-100 text-steel-600 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-steel-50 rounded-2xl p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-2">Nome *</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Il tuo nome"
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-2">Azienda</label>
                  <input
                    type="text"
                    name="azienda"
                    value={formData.azienda}
                    onChange={handleChange}
                    placeholder="Nome azienda"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@esempio.it"
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-2">Telefono *</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+39 ..."
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-2">Tipologia Richiesta *</label>
                  <select name="tipologiaRichiesta" value={formData.tipologiaRichiesta} onChange={handleChange} required className={selectClasses}>
                    <option value="">Seleziona...</option>
                    <option value="Vendita nuovo impianto">Vendita nuovo impianto</option>
                    <option value="Montaggio">Montaggio</option>
                    <option value="Manutenzione">Manutenzione</option>
                    <option value="Consulenza">Consulenza</option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-2">Tipo Impianto</label>
                  <select name="tipoImpianto" value={formData.tipoImpianto} onChange={handleChange} className={selectClasses}>
                    <option value="">Seleziona...</option>
                    <option value="Padel outdoor">Padel outdoor</option>
                    <option value="Padel indoor">Padel indoor</option>
                    <option value="Copertura">Copertura</option>
                    <option value="Multisport">Multisport</option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-2">Numero Campi Previsti</label>
                  <input
                    type="text"
                    name="numeroCampi"
                    value={formData.numeroCampi}
                    onChange={handleChange}
                    placeholder="Es. 2, 4, 6..."
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-2">Località Installazione</label>
                  <input
                    type="text"
                    name="localita"
                    value={formData.localita}
                    onChange={handleChange}
                    placeholder="Città, Regione o Paese"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-steel-700 mb-2">Messaggio / Note aggiuntive</label>
                <textarea
                  name="messaggio"
                  value={formData.messaggio}
                  onChange={handleChange}
                  placeholder="Descrivi brevemente il tuo progetto o le tue esigenze..."
                  rows={4}
                  className={inputClasses + ' resize-none'}
                />
              </div>

              {/* Privacy */}
              <div className="mt-5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 rounded border-steel-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-xs text-steel-500">
                    Acconsento al trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR). I dati forniti saranno utilizzati esclusivamente per rispondere alla richiesta di preventivo. *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="btn-primary w-full mt-8 text-lg"
              >
                Invia richiesta di preventivo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
