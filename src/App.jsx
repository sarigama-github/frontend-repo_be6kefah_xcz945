import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-fuchsia-400/30 selection:text-white">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(8,47,73,0.6),transparent),radial-gradient(40%_40%_at_90%_10%,rgba(88,28,135,0.25),transparent),radial-gradient(30%_30%_at_10%_20%,rgba(245,158,11,0.15),transparent)]" />

      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-300/80">
          <p>© {new Date().getFullYear()} NERA — All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
