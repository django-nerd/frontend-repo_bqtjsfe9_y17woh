import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Categories from './components/Categories'
import Stats from './components/Stats'
import FeaturedVendors from './components/FeaturedVendors'
import Testimonials from './components/Testimonials'
import WhyEventory from './components/WhyEventory'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(99,102,241,0.15),transparent),radial-gradient(1000px_500px_at_90%_-10%,rgba(236,72,153,0.15),transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Categories />
        <Stats />
        <FeaturedVendors />
        <Testimonials />
        <WhyEventory />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
