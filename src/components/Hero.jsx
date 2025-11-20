import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[88vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-28 text-center">
        <p className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-200/90 backdrop-blur">
          Elegance, engineered • AI-personalized fit
        </p>
        <h1 className="text-4xl md:text-6xl leading-tight font-semibold tracking-tight text-white">
          Lingerie that understands you
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-slate-200/90">
          Discover luxurious intimates designed with intelligent sizing and real-body comfort. Calm, confident, and made just for you.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-amber-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition">
            Get your fit
          </a>
          <a href="#how" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white backdrop-blur hover:bg-white/10 transition">
            How NERA works
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
