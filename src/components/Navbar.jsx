import { Menu, ShoppingBag, Shield, Lock } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-amber-400 p-[2px]">
            <div className="h-full w-full rounded-full bg-slate-950/90 group-hover:bg-slate-900 transition-colors" />
          </div>
          <span className="text-xl tracking-[0.2em] font-semibold text-white">NERA</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
          <a href="#how" className="text-slate-300 hover:text-white transition-colors">How it works</a>
          <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Stories</a>
          <a href="#cta" className="text-slate-300 hover:text-white transition-colors">Get your fit</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur hover:bg-white/10 transition">
            <Shield className="h-4 w-4" /> Privacy-first
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-amber-400 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition">
            <ShoppingBag className="h-4 w-4" /> Shop
          </button>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
