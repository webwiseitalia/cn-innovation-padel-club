import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import siteData from '../constants/siteData'

export default function PrivacyPolicy() {
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
            <svg className="w-5 h-5" style={{ color: '#f5f0eb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <div>
            <h1 className="font-sans text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Informativa sul trattamento dei dati personali</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-3xl mx-auto rounded-sm p-8 md:p-12" style={{ backgroundColor: '#f5f0eb' }}>
          <p className="text-[12px] uppercase tracking-[0.15em] mb-10 font-medium" style={{ color: '#415a77' }}>Ultimo aggiornamento: 19/02/2026</p>

          <Section num="1" title="Titolare del Trattamento">
            <p>Il Titolare del trattamento dei dati personali è:</p>
            <InfoBox>
              <strong>{siteData.legalName}</strong><br />
              {siteData.address.full}<br />
              Email: {siteData.email}
            </InfoBox>
          </Section>

          <Section num="2" title="Dati Raccolti e Finalità del Trattamento">
            <h4 className="font-sans font-bold text-base mb-3" style={{ color: '#0a0a0a' }}>2.1 Dati forniti volontariamente dall'utente</h4>
            <p>Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:</p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li><strong>Nome e Cognome</strong> — per identificare l'interessato</li>
              <li><strong>Indirizzo Email</strong> — per rispondere alle richieste</li>
              <li><strong>Numero di Telefono</strong> (facoltativo) — per contatti telefonici</li>
              <li><strong>Messaggio/Descrizione del Progetto</strong> — per comprendere le esigenze</li>
            </ul>
            <Highlight color="green">
              <strong>Finalità.</strong> I dati vengono raccolti esclusivamente per:
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Rispondere alle richieste di preventivo</li>
                <li>Fornire informazioni sui nostri servizi</li>
                <li>Organizzare sopralluoghi e consultazioni</li>
                <li>Gestire la relazione commerciale</li>
              </ul>
            </Highlight>

            <h4 className="font-sans font-bold text-base mb-3 mt-8" style={{ color: '#0a0a0a' }}>2.2 Base giuridica del trattamento</h4>
            <p>Il trattamento è basato sul <strong>consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso l'invio del modulo di contatto, e sulla <strong>esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).</p>
          </Section>

          <Section num="3" title="Modalità di Trattamento">
            <p>I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.</p>
            <p className="mt-3">Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione.</p>
          </Section>

          <Section num="4" title="Conservazione dei Dati">
            <p>I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le relazioni commerciali conseguenti:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong>Richieste di preventivo:</strong> i dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
              <li><strong>Rapporti contrattuali:</strong> i dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
              <li><strong>Richieste di informazioni:</strong> i dati vengono conservati per 12 mesi dalla risposta</li>
            </ul>
          </Section>

          <Section num="5" title="Comunicazione e Diffusione dei Dati">
            <p>I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:</p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
              <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
              <li>Autorità competenti in caso di richieste legittime previste per legge</li>
            </ul>
            <Highlight color="red">
              <strong>I tuoi dati NON verranno MAI:</strong>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Venduti a terze parti</li>
                <li>Condivisi con scopi di marketing</li>
                <li>Utilizzati per invio di newsletter non richieste</li>
                <li>Trasferiti fuori dall'Unione Europea</li>
              </ul>
            </Highlight>
          </Section>

          <Section num="6" title="Diritti dell'Interessato">
            <p>In qualità di interessato, hai il diritto di:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong>Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
              <li><strong>Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
              <li><strong>Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</li>
              <li><strong>Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
              <li><strong>Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
              <li><strong>Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
              <li><strong>Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
            </ul>
            <Highlight color="blue">
              <strong>Come esercitare i tuoi diritti:</strong><br />
              Puoi esercitare i tuoi diritti inviando una richiesta via email a <a href={`mailto:${siteData.email}`} className="underline">{siteData.email}</a>.<br />
              Risponderemo entro <strong>30 giorni</strong> dalla ricezione della richiesta.
            </Highlight>
          </Section>

          <Section num="7" title="Diritto di Reclamo">
            <p>Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il trattamento dei tuoi dati violi il GDPR.</p>
            <InfoBox>
              <strong>Garante per la protezione dei dati personali:</strong><br />
              Sito web: www.garanteprivacy.it<br />
              Email: garante@gpdp.it<br />
              PEC: protocollo@pec.gpdp.it
            </InfoBox>
          </Section>

          <Section num="8" title="Cookie e Tecnologie di Tracciamento">
            <p>Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni, consulta la nostra <Link to="/cookie-policy" className="underline font-medium" style={{ color: '#0d1b2a' }}>Cookie Policy</Link>.</p>
          </Section>

          <Section num="9" title="Modifiche alla Privacy Policy">
            <p>Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.</p>
          </Section>

          <Section num="10" title="Contatti" last>
            <p>Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:</p>
            <InfoBox>
              <a href={`mailto:${siteData.email}`} className="flex items-center gap-2 underline">{siteData.email}</a>
            </InfoBox>
          </Section>

          <p className="text-center text-[11px] mt-12 pt-8" style={{ color: '#415a77', borderTop: '1px solid rgba(10,10,10,0.1)' }}>
            Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018
          </p>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link to="/" className="flex-1 py-4 text-center text-[13px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 hover:opacity-80" style={{ border: '1px solid rgba(10,10,10,0.15)', color: '#0a0a0a' }}>
              Torna alla Home
            </Link>
            <Link to="/cookie-policy" className="flex-1 py-4 text-center text-[13px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 hover:opacity-80" style={{ border: '1px solid rgba(10,10,10,0.15)', color: '#0a0a0a' }}>
              Leggi la Cookie Policy
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
    blue: { bg: 'rgba(13,27,42,0.06)', border: 'rgba(13,27,42,0.2)' },
  }
  const c = colors[color] || colors.blue
  return (
    <div className="mt-4 p-5 rounded-sm text-sm leading-relaxed" style={{ backgroundColor: c.bg, borderLeft: `3px solid ${c.border}`, color: '#415a77' }}>
      {children}
    </div>
  )
}
