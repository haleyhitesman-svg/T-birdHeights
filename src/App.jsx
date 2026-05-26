import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AvailabilityBanner from './components/AvailabilityBanner'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <AvailabilityBanner />
        <section id="features"><Features /></section>
        <section id="gallery"><Gallery /></section>
        <section id="pricing"><Pricing /></section>
        <section id="location"><Location /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  )
}

export default App
