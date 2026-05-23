// Hero — Server Component

// ─── Stats bar — CFP® row removed ───────────────────────────
const STATS = [
  { value: '15+',   label: 'Years of Experience' },
  { value: '300+',  label: 'Clients Served' },
  { value: '$800M', label: 'Assets Under Advisory' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-navy overflow-hidden"
    >
      {/* ── Background geometric pattern ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px]
                     opacity-[0.07] hidden lg:block"
          viewBox="0 0 600 600"
          fill="none"
          aria-hidden="true"
        >
          {[80, 160, 240, 320, 400, 480].map((r) => (
            <circle key={r} cx="600" cy="300" r={r} stroke="#C9A96E" strokeWidth="1" />
          ))}
        </svg>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-navy to-transparent" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full">
          <div className="max-w-3xl">

            {/* Headline — font-light → font-semibold for bolder look */}
            <h1
              className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ivory
                         leading-[1.08] font-semibold mb-8
                         animate-fade-in-up animation-delay-100"
            >
              Financial{' '}
              <em className="italic text-gold not-italic font-semibold">Clarity.</em>
              <br />
              Lasting{' '}
              <em className="italic text-gold not-italic font-semibold">Wealth.</em>
            </h1>

            {/* Subtext — bigger and less transparent */}
            <p
              className="font-sans text-ivory/80 text-xl lg:text-2xl leading-relaxed
                         max-w-xl mb-12 font-normal
                         animate-fade-in-up animation-delay-300"
            >
              Personalized wealth management strategies for professionals and
              families who want more from their financial future — built on
              trust, expertise, and a long-term vision.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4
                         animate-fade-in-up animation-delay-500"
            >
              <a
                href="#contact"
                className="bg-gold hover:bg-gold-dark text-navy font-sans font-semibold
                           text-base tracking-wide px-8 py-4 text-center
                           transition-all duration-200
                           hover:shadow-xl hover:shadow-gold/30 active:scale-95"
              >
                Schedule a Consultation
              </a>
              <a
                href="#about"
                className="border border-ivory/30 hover:border-gold text-ivory hover:text-gold
                           font-sans font-semibold text-base tracking-wide px-8 py-4 text-center
                           transition-all duration-200 active:scale-95"
              >
                Learn More
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="relative z-10 border-t border-white/10 bg-navy/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="px-6 py-6 text-center lg:text-left animate-fade-in-up"
                style={{ animationDelay: `${600 + i * 100}ms` }}
              >
                <p className="font-serif text-3xl text-gold font-bold">{stat.value}</p>
                <p className="font-sans text-ivory/60 text-sm tracking-wide mt-1 uppercase font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-36 left-1/2 -translate-x-1/2
                   animate-bounce hidden lg:flex flex-col items-center gap-2 opacity-40"
        aria-hidden="true"
      >
        <span className="font-sans text-ivory text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-ivory/40" />
      </div>
    </section>
  )
}