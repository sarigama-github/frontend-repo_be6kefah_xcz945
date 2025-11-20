function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/20 via-fuchsia-600/10 to-amber-400/10 p-10 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(147,51,234,0.25),transparent)]" />
          <h3 className="relative text-2xl md:text-3xl font-semibold text-white">Discover your calm, confident fit</h3>
          <p className="relative mt-2 text-slate-200/90">Answer a few gentle questions to begin your private sizing journey.</p>
          <div className="relative mt-6 flex items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-amber-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition">
              Start now
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white backdrop-blur hover:bg-white/10 transition">
              Explore collection
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
