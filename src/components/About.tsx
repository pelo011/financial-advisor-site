'use client'

import { useInView } from '@/hooks/useInView'

export default function About() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="about" className="bg-ivory py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >

          {/* ── Left: Text content ── */}
          <div>
            <h2
              className={`font-serif text-4xl sm:text-5xl text-navy leading-tight font-semibold mb-8
                          transition-all duration-700
                          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              A Trusted Partner in Your{' '}
              <em className="italic">Financial Journey</em>
            </h2>

            <div
              className={`space-y-5 font-sans text-navy/75 leading-relaxed text-lg
                          transition-all duration-700 delay-100
                          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <p>
                With over 15 years of experience in wealth management and financial
                planning, I have dedicated my career to helping individuals and
                families achieve lasting financial security — not just for today,
                but for generations to come.
              </p>
              <p>
                My approach is deeply personal. I take the time to understand your
                unique situation, your goals, and the values that drive your
                financial decisions. Together, we build a comprehensive plan that
                evolves with your life.
              </p>
            </div>

            {/* Divider */}
            <div
              className={`my-10 w-16 h-px bg-gold
                          transition-all duration-700 delay-200
                          ${inView ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* CTA */}
            <div
              className={`transition-all duration-700 delay-300
                          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <a
                href="#contact"
                className="inline-block bg-navy hover:bg-navy-light text-ivory
                           font-sans font-semibold text-base tracking-wide px-8 py-4
                           transition-all duration-200 hover:shadow-lg hover:shadow-navy/25
                           active:scale-95"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* ── Right: Portrait placeholder ── */}
          <div
            className={`transition-all duration-700 delay-200
                        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative">
              {/* Offset border accent */}
              <div
                className="absolute -top-4 -right-4 w-full h-full border border-gold/30"
                aria-hidden="true"
              />
              {/* Photo area */}
              <div
                className="relative w-full aspect-[4/5] bg-navy/10 flex items-center
                           justify-center overflow-hidden"
              >
                {/* Replace this div with <Image> from next/image when ready */}
                <div className="flex flex-col items-center gap-4 opacity-30">
                  <svg
                    className="w-24 h-24 text-navy"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={0.75}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <p className="font-sans text-navy text-xs tracking-widest uppercase">
                    Portrait Photo
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ivory/20 to-transparent" />
              </div>

              {/* Name tag */}
              <div className="absolute bottom-6 left-0 bg-navy px-6 py-4 shadow-xl shadow-navy/20">
                <p className="font-serif text-ivory text-xl font-semibold">Patrik Géci</p>
                <p className="font-sans text-gold text-xs tracking-widest uppercase mt-1">
                  Financial Advisor
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}