import { Routes, Route } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChiSiamo from './components/ChiSiamo'
import Servizi from './components/Servizi'
import Prodotti from './components/Prodotti'
import Portfolio from './components/Portfolio'
import Vantaggi from './components/Vantaggi'
import Processo from './components/Processo'
import Contatti from './components/Contatti'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'

function HomePage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <ChiSiamo />
        <Servizi />
        <Prodotti />
        <Portfolio />
        <Vantaggi />
        <Processo />
        <Contatti />
      </main>
      <Footer />
    </SmoothScroll>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <CookieBanner />
    </>
  )
}

export default App
