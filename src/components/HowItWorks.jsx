import { NumberCircleOne, NumberCircleTwo, NumberCircleThree } from 'lucide-react'

function Step({ num, title, desc }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white text-sm font-medium">
        {num}
      </div>
      <h3 className="text-white font-medium mb-1">{title}</h3>
      <p className="text-slate-300/90 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function HowItWorks() {
  return (
    <section id="how" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300/80">Effortless onboarding</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Your fit, in three steps</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Step num={1} title="Share preferences" desc="Tell us how you like to feel—support, coverage, and styles you love." />
          <Step num={2} title="Private fit scan" desc="Use your phone to capture a gentle silhouette—no images stored, ever." />
          <Step num={3} title="Personalized curation" desc="Explore pieces refined to your shape, comfort, and aesthetic." />
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
