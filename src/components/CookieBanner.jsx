import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import siteData from '../constants/siteData'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(siteData.cookieKey)
    if (!consent) setVisible(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem(siteData.cookieKey, 'accepted')
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(siteData.cookieKey, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      {/* Blur overlay */}
      <div className="fixed inset-0 z-[998] backdrop-blur-sm" style={{ backgroundColor: 'rgba(10,10,10,0.4)' }} />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[999] px-4 pb-4 md:px-8 md:pb-8">
        <div className="max-w-2xl mx-auto p-6 md:p-8 shadow-2xl" style={{ backgroundColor: '#f5f0eb', border: '1px solid rgba(10,10,10,0.08)' }}>
          <div className="flex items-start gap-4 mb-5">
            <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(13,27,42,0.08)' }}>
              <svg className="w-5 h-5" style={{ color: '#0d1b2a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <div>
              <h3 className="font-sans text-base font-bold mb-1" style={{ color: '#0a0a0a' }}>Informativa Cookie</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#415a77' }}>
                Questo sito utilizza esclusivamente <strong>cookie tecnici</strong> necessari al funzionamento. Non utilizziamo cookie di profilazione o tracciamento.
                Leggi la nostra <Link to="/cookie-policy" className="underline font-medium" style={{ color: '#0d1b2a' }}>Cookie Policy</Link> e la <Link to="/privacy-policy" className="underline font-medium" style={{ color: '#0d1b2a' }}>Privacy Policy</Link>.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleReject}
              className="flex-1 py-3.5 text-[13px] uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:opacity-80"
              style={{ backgroundColor: '#0d1b2a', color: '#f5f0eb' }}
            >
              Rifiuta
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 py-3.5 text-[13px] uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:opacity-80"
              style={{ backgroundColor: '#0d1b2a', color: '#f5f0eb' }}
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
