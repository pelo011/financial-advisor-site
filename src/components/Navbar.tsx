'use client'

import { useState, useEffect } from 'react'

// ─── Nav links — Contact removed (same as Schedule a Call) ───
const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleLink = (href: string) => {
    setMenuOpen(false)
    scrollTo(href)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400
        ${scrolled
          ? 'bg-navy shadow-xl shadow-navy/20 border-b border-white/5'
          : 'bg-gradient-to-b from-navy/80 to-transparent backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
            aria-label="Back to top"
          >
            <span className="font-serif text-gold font-bold text-4xl tracking-tight
                            group-hover:scale-110 transition-transform duration-200 origin-left">PG</span>
            <p className="hidden sm:block text-ivory font-serif text-xl font-semibold leading-tight tracking-wide
                          group-hover:text-gold transition-colors duration-200">
              Patrik Géci
            </p>
          </button>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="text-ivory/75 hover:text-gold font-sans text-sm tracking-wide
                           transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold
                                 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => handleLink('#contact')}
              className="ml-2 bg-gold hover:bg-gold-dark text-navy font-sans text-sm
                         font-medium px-6 py-2.5 tracking-wide
                         transition-all duration-200 hover:shadow-lg hover:shadow-gold/25
                         active:scale-95"
            >
              Schedule a Call
            </button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-px bg-ivory transition-all duration-300 origin-center
                ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-px bg-ivory transition-all duration-300
                ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-px bg-ivory transition-all duration-300 origin-center
                ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>

        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={`md:hidden border-t border-gold/20 bg-navy
                    transition-all duration-300 overflow-hidden
                    ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 py-5 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="text-ivory/80 hover:text-gold font-sans text-sm tracking-wide
                         text-left transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLink('#contact')}
            className="bg-gold text-navy font-sans text-sm font-medium
                       py-3 tracking-wide w-full text-center
                       transition-all duration-200 active:scale-95"
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </nav>
  )
}