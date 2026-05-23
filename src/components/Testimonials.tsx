'use client'

import { useInView } from '@/hooks/useInView'

const TESTIMONIALS = [
  {
    quote:
      'Working with Patrik completely transformed how I think about money and retirement. He took something overwhelming and made it feel manageable and even exciting. I feel fully in control of my financial future for the first time.',
    name: 'Margaret H.',
    title: 'Retired Educator, 62',
    initials: 'MH',
  },
  {
    quote:
      'Patrik is exactly what you want in a financial advisor — honest, incredibly knowledgeable, and genuinely interested in your goals. He helped me structure my finances in a way I never would have figured out on my own.',
    name: 'Daniel R.',
    title: 'Senior Software Engineer',
    initials: 'DR',
  },
  {
    quote:
      'As a small business owner, I needed someone who could handle both my personal finances and my business planning. Patrik is the rare advisor who does both exceptionally well. I cannot recommend him more highly.',
    name: 'Sandra & Mark T.',
    title: 'Business Owners',
    initials: 'ST',
  },
]

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold" viewBox="0 0 20 20"
             fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({
  t, delay, inView,
}: {
  t: typeof TESTIMONIALS[0]
  delay: number
  inView: boolean
}) {
  return (
    <div
      className={`relative bg-white border border-stone-border p-8 lg:p-10
                  hover:border-gold/40 hover:shadow-xl hover:shadow-navy/5
                  hover:-translate-y-1 transition-all duration-300
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Decorative quote mark */}
      <span
        className="absolute top-6 right-8 font-serif text-7xl text-gold/15
                   leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        "
      </span>

      <Stars />

      {/* Quote — bigger text */}
      <blockquote className="mt-5 mb-8 font-serif text-navy/90 text-xl leading-relaxed font-medium italic">
        "{t.quote}"
      </blockquote>

      <div className="w-10 h-px bg-gold mb-5" />

      {/* Attribution */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-navy flex items-center justify-center shrink-0">
          <span className="font-serif text-gold text-sm font-semibold">{t.initials}</span>
        </div>
        <div>
          <p className="font-sans text-navy font-semibold text-base">{t.name}</p>
          <p className="font-sans text-navy/50 text-sm mt-0.5">{t.title}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="testimonials" className="bg-navy py-28 lg:py-36 relative overflow-hidden">

      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #C9A96E 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Header — no eyebrow label, no client count blurb ── */}
        <h2 className="font-serif text-4xl sm:text-5xl text-ivory font-semibold leading-tight mb-16">
          What Clients{' '}
          <em className="italic text-gold">Say</em>
        </h2>

        {/* ── Cards ── */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={i * 120} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  )
}