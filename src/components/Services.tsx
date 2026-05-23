'use client'

import { useInView } from '@/hooks/useInView'

const SERVICES = [
  {
    title: 'Wealth Management',
    description:
      'Comprehensive, goals-based strategies that grow and protect your total financial picture — investments, savings, and beyond.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25}
           className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
  {
    title: 'Retirement Planning',
    description:
      'Define the retirement you want — and create a clear, actionable path to get there. Pension, savings, and long-term income optimization.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25}
           className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
      </svg>
    ),
  },
  {
    title: 'Investment Strategy',
    description:
      'Diversified, evidence-based portfolios aligned to your risk tolerance and time horizon. Active monitoring and regular rebalancing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25}
           className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
      </svg>
    ),
  },
  {
    title: 'Tax Optimization',
    description:
      'Minimize your tax liability now and in retirement through strategic planning, efficient structures, and proactive review.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25}
           className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
      </svg>
    ),
  },
  {
    title: 'Estate Planning',
    description:
      'Protect and transfer your wealth to the next generation efficiently. Wills, trusts, beneficiary coordination, and legacy strategies.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25}
           className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
      </svg>
    ),
  },
  {
    title: 'Business Financial Planning',
    description:
      'Strategic financial guidance for business owners: succession planning, key-person insurance, executive compensation, and exit strategies.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25}
           className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
      </svg>
    ),
  },
]

function ServiceCard({
  service,
  delay,
  inView,
}: {
  service: typeof SERVICES[0]
  delay: number
  inView: boolean
}) {
  return (
    <div
      className={`group border border-stone-border bg-white p-8
                  hover:border-gold/60 hover:shadow-xl hover:shadow-navy/5
                  hover:-translate-y-1 cursor-default
                  transition-all duration-300
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 border border-stone-border bg-ivory flex items-center
                   justify-center text-navy/50 mb-6
                   group-hover:border-gold/50 group-hover:text-gold
                   transition-all duration-300"
      >
        {service.icon}
      </div>

      {/* Title — bolder */}
      <h3 className="font-serif text-navy text-2xl font-semibold mb-3">
        {service.title}
      </h3>

      {/* Description — bigger */}
      <p className="font-sans text-navy/65 text-base leading-relaxed">
        {service.description}
      </p>


    </div>
  )
}

export default function Services() {
  const { ref, inView } = useInView(0.05)

  return (
    <section id="services" className="bg-ivory-dark py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Header — no eyebrow label, no subtitle blurb ── */}
        <h2 className="font-serif text-4xl sm:text-5xl text-navy font-semibold leading-tight mb-16">
          Comprehensive{' '}
          <em className="italic">Financial Services</em>
        </h2>

        {/* ── Cards grid ── */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-border">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              delay={i * 80}
              inView={inView}
            />
          ))}
        </div>

      </div>
    </section>
  )
}