function Testimonial({ quote, name, role }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <p className="text-slate-200/95 leading-relaxed">“{quote}”</p>
      <div className="mt-4 text-sm text-slate-300/80">{name} • {role}</div>
    </div>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300/80">What women say</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Confidence, every day</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Testimonial quote="Finally, lingerie that feels like it was made for me—supportive without losing elegance." name="Lena" role="Designer" />
          <Testimonial quote="The fit recommendations were spot-on. I’ve never felt more comfortable in my own skin." name="Amara" role="Photographer" />
          <Testimonial quote="Beautiful textures and calm colors. The experience is respectful and empowering." name="Celine" role="Founder" />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
