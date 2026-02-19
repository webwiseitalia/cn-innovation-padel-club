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

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ChiSiamo />
      <Servizi />
      <Prodotti />
      <Portfolio />
      <Vantaggi />
      <Processo />
      <Contatti />
      <Footer />
    </div>
  )
}

export default App
