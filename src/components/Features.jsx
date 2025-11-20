import { Sparkles, Heart, ScanLine, ShieldCheck, Cpu } from 'lucide-react'

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur hover:bg-white/[0.05] transition">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/30 via-fuchsia-500/30 to-amber-400/30 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-white font-medium mb-1">{title}</h3>
      <p className="text-slate-300/90 text-sm leading-relaxed">{desc}</p>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(147,51,234,0.18),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300/80">Why NERA</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Luxury meets intelligence</h2>
          <p className="mt-3 text-slate-300/90">Thoughtful design, gentle materials, and an AI fit engine that celebrates your body.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Sparkles} title="Refined comfort" desc="Silky-soft fabrics and precision cuts for everyday wear that feels like you." />
          <FeatureCard icon={ScanLine} title="AI fit mapping" desc="Subtle, privacy-respecting sizing with computer vision inspired recommendations." />
          <FeatureCard icon={Heart} title="Body-positive by design" desc="Every style celebrates natural shapes—no retouching, no pressure, just you." />
          <FeatureCard icon={ShieldCheck} title="Private by default" desc="Your measurements stay yours with on-device processing and encryption." />
          <FeatureCard icon={Cpu} title="Adaptive curation" desc="Collections evolve with your preferences for a wardrobe that understands you." />
          <FeatureCard icon={Sparkles} title="Finish & detail" desc="Hand-finished trims, modern palettes, and thoughtful support in every piece." />
        </div>
      </div>
    </section>
  )
}

export default Features
