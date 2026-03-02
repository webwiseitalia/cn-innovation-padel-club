import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import siteData from '../constants/siteData'

export default function CookiePolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0d1b2a' }}>
      {/* Header */}
      <header className="px-6 md:px-12 lg:px-20 pt-8 pb-12" style={{ backgroundColor: '#0d1b2a' }}>
        <Link to="/" className="inline-flex items-center gap-2 text-[13px] font-medium mb-8 transition-opacity hover:opacity-70" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Torna alla Home
        </Link>
        <div className="flex items-center gap-4 mb-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
            <svg className="w-5 h-5" style={{ color: '#f5f0eb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <div>
            <h1 className="font-sans text-3xl md:text-4xl font-bold text-white">Cookie Policy</h1>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Informativa sull'utilizzo dei cookie</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-3xl mx-auto rounded-sm p-8 md:p-12" style={{ backgroundColor: '#f5f0eb' }}>
          <p className="text-[12px] uppercase tracking-[0.15em] mb-10 font-medium" style={{ color: '#415a77' }}>Ultimo aggiornamento: 19/02/2026</p>

          {/* Privacy-friendly badge */}
          <div className="p-5 rounded-sm mb-10 flex items-start gap-4" style={{ backgroundColor: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)' }}>
            <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(34,197,94,0.15)' }}>
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <div>
              <h3 className="font-sans font-bold text-base mb-1" style={{ color: '#0a0a0a' }}>Sito Privacy-Friendly</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#415a77' }}>
                Questo sito web utilizza <strong>solo cookie tecnici</strong> necessari al funzionamento. <strong>Non utilizziamo cookie di profilazione, tracciamento o analisi.</strong> La tua privacy è protetta e non serve il tuo consenso per la navigazione.
              </p>
            </div>
          </div>

          <Section num="1" title="Cosa sono i Cookie">
            <p>I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone) quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune informazioni sulle tue preferenze o azioni passate.</p>
          </Section>

          <Section num="2" title="Tipologie di Cookie">
            <h4 className="font-sans font-bold text-base mb-3" style={{ color: '#0a0a0a' }}>2.1 Cookie Tecnici</h4>
            <p>Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza questi cookie, il sito potrebbe non funzionare correttamente.</p>
            <Highlight color="green">
              <strong>Cookie tecnici utilizzati su questo sito:</strong>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Cookie di navigazione e di sessione</li>
                <li>Cookie per memorizzare le preferenze dell'interfaccia</li>
              </ul>
              <p className="mt-2 text-[12px]">Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell'utente.</p>
            </Highlight>

            <h4 className="font-sans font-bold text-base mb-3 mt-8" style={{ color: '#0a0a0a' }}>2.2 Cookie Analitici</h4>
            <NotUsed />
            <p className="mt-2">Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.</p>

            <h4 className="font-sans font-bold text-base mb-3 mt-8" style={{ color: '#0a0a0a' }}>2.3 Cookie di Profilazione</h4>
            <NotUsed />
            <p className="mt-2">Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.</p>

            <h4 className="font-sans font-bold text-base mb-3 mt-8" style={{ color: '#0a0a0a' }}>2.4 Cookie di Terze Parti</h4>
            <NotUsed />
            <p className="mt-2">Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).</p>
          </Section>

          <Section num="3" title="Cookie Utilizzati su Questo Sito">
            <p>Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: '#0d1b2a' }}>
                    <th className="text-left p-3 text-white font-medium text-[12px]">Nome Cookie</th>
                    <th className="text-left p-3 text-white font-medium text-[12px]">Tipologia</th>
                    <th className="text-left p-3 text-white font-medium text-[12px]">Finalità</th>
                    <th className="text-left p-3 text-white font-medium text-[12px]">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(10,10,10,0.1)' }}>
                    <td className="p-3 font-mono text-[12px]">{siteData.cookieKey}</td>
                    <td className="p-3"><span className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold rounded-sm" style={{ backgroundColor: 'rgba(34,197,94,0.15)', color: '#16a34a' }}>Tecnico</span></td>
                    <td className="p-3 text-[12px]">Memorizza lo stato di espansione/chiusura della barra laterale per migliorare l'esperienza di navigazione</td>
                    <td className="p-3 text-[12px]">7 giorni</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Highlight color="yellow">
              <strong>Nota importante:</strong> I cookie tecnici come "sidebarstate" sono essenziali per il funzionamento del sito e non richiedono il consenso dell'utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.
            </Highlight>
          </Section>

          <Section num="4" title="Come Gestire i Cookie">
            <p>Anche se i cookie tecnici non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni del tuo browser.</p>
            <h4 className="font-sans font-bold text-base mb-3 mt-6" style={{ color: '#0a0a0a' }}>Disabilitare i cookie tramite il browser:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
              <li><strong>Mozilla Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti web</li>
              <li><strong>Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web</li>
              <li><strong>Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Gestisci e elimina cookie</li>
            </ul>
            <Highlight color="red">
              <strong>Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la qualità dell'esperienza di navigazione.
            </Highlight>
          </Section>

          <Section num="5" title="Link a Siti Esterni">
            <p>Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.</p>
          </Section>

          <Section num="6" title="Aggiornamenti della Cookie Policy">
            <p>Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate attraverso un avviso pubblicato su questa pagina.</p>
            <p className="mt-3">Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull'utilizzo dei cookie sul nostro sito.</p>
          </Section>

          <Section num="7" title="Base Normativa">
            <p>Questa Cookie Policy è redatta in conformità a:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
              <li>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
              <li>Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014, n. 229</li>
              <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
            </ul>
          </Section>

          <Section num="8" title="Contatti" last>
            <p>Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:</p>
            <InfoBox>
              <strong>{siteData.legalName}</strong><br />
              {siteData.address.full}<br />
              Email: <a href={`mailto:${siteData.email}`} className="underline">{siteData.email}</a>
            </InfoBox>
          </Section>

          {/* Zero tracking badge */}
          <div className="mt-10 py-8 text-center" style={{ borderTop: '1px solid rgba(10,10,10,0.1)' }}>
            <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'rgba(34,197,94,0.1)' }}>
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="font-sans font-bold text-lg mb-1" style={{ color: '#0a0a0a' }}>Zero Tracciamento</h3>
            <p className="text-sm" style={{ color: '#415a77' }}>Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online</p>
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link to="/" className="flex-1 py-4 text-center text-[13px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 hover:opacity-80" style={{ border: '1px solid rgba(10,10,10,0.15)', color: '#0a0a0a' }}>
              Torna alla Home
            </Link>
            <Link to="/privacy-policy" className="flex-1 py-4 text-center text-[13px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 hover:opacity-80" style={{ border: '1px solid rgba(10,10,10,0.15)', color: '#0a0a0a' }}>
              Leggi la Privacy Policy
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

function Section({ num, title, children, last }) {
  return (
    <div className={last ? '' : 'mb-10'}>
      <h3 className="font-sans text-xl font-bold mb-4" style={{ color: '#0a0a0a' }}>{num}. {title}</h3>
      <div className="text-sm leading-relaxed space-y-3" style={{ color: '#415a77' }}>
        {children}
      </div>
    </div>
  )
}

function InfoBox({ children }) {
  return (
    <div className="mt-4 p-5 rounded-sm text-sm leading-relaxed" style={{ backgroundColor: 'rgba(13,27,42,0.05)', border: '1px solid rgba(13,27,42,0.1)', color: '#0a0a0a' }}>
      {children}
    </div>
  )
}

function Highlight({ color, children }) {
  const colors = {
    green: { bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.3)' },
    red: { bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.25)' },
    yellow: { bg: 'rgba(234,179,8,0.08)', border: 'rgba(234,179,8,0.4)' },
    blue: { bg: 'rgba(13,27,42,0.06)', border: 'rgba(13,27,42,0.2)' },
  }
  const c = colors[color] || colors.blue
  return (
    <div className="mt-4 p-5 rounded-sm text-sm leading-relaxed" style={{ backgroundColor: c.bg, borderLeft: `3px solid ${c.border}`, color: '#415a77' }}>
      {children}
    </div>
  )
}

function NotUsed() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm" style={{ backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
      <span className="text-[12px] font-bold uppercase tracking-wider text-red-600">NON UTILIZZATI</span>
    </div>
  )
}
