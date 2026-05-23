'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

const CONTACT_INFO = [
  {
    label: 'Office',
    value: '1200 Avenue of the Americas\nNew York, NY 10036',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25}
           className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+1 (212) 555-0190',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25}
           className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'patrik@gecifinancial.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25}
           className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
      </svg>
    ),
  },
  {
    label: 'Office Hours',
    value: 'Monday – Friday\n9:00 AM – 6:00 PM EST',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25}
           className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
]

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-sans text-navy/60 text-xs tracking-widest uppercase font-medium">
        {label}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  const { ref, inView } = useInView(0.1)

  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  const inputClass = `w-full bg-ivory border border-stone-border px-4 py-3
                     font-sans text-navy text-base placeholder:text-navy/30
                     focus:border-gold/70 transition-colors duration-200`

  return (
    <section id="contact" className="bg-ivory py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Header — no eyebrow label ── */}
        <h2 className="font-serif text-4xl sm:text-5xl text-navy font-semibold leading-tight mb-16">
          Let's Start a{' '}
          <em className="italic">Conversation</em>
        </h2>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* ── Left: Contact info ── */}
          <div
            className={`lg:col-span-2 transition-all duration-700
                        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="font-sans text-navy/70 text-lg leading-relaxed mb-10">
              Whether you have a specific question or are ready to start planning,
              I'd love to hear from you. Initial consultations are always free and
              without obligation.
            </p>

            <div className="space-y-7">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 border border-stone-border bg-ivory-dark
                               flex items-center justify-center text-gold shrink-0"
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-sans text-navy/40 text-[10px] tracking-widest uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="font-sans text-navy text-base leading-relaxed whitespace-pre-line font-medium">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200
                        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {submitted ? (
              <div className="border border-gold/40 bg-gold/5 p-12 text-center">
                <div className="w-12 h-12 border border-gold mx-auto flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-navy text-2xl font-semibold mb-3">Message Received</h3>
                <p className="font-sans text-navy/65 text-base leading-relaxed">
                  Thank you for reaching out. I'll be in touch within one business day
                  to schedule your complimentary consultation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-sans text-gold text-xs tracking-widest uppercase
                             hover:text-gold-dark transition-colors duration-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="bg-white border border-stone-border p-8 lg:p-10">
                <p className="font-sans text-navy/50 text-xs tracking-widest uppercase mb-8 font-medium">
                  Schedule a Free Consultation
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full Name" id="name">
                    <input id="name" name="name" type="text" value={form.name}
                      onChange={handleChange} placeholder="Your full name"
                      className={inputClass} autoComplete="name" />
                  </Field>

                  <Field label="Email Address" id="email">
                    <input id="email" name="email" type="email" value={form.email}
                      onChange={handleChange} placeholder="you@example.com"
                      className={inputClass} autoComplete="email" />
                  </Field>

                  <Field label="Phone (Optional)" id="phone">
                    <input id="phone" name="phone" type="tel" value={form.phone}
                      onChange={handleChange} placeholder="+1 (555) 000-0000"
                      className={inputClass} autoComplete="tel" />
                  </Field>

                  <Field label="Service of Interest" id="service">
                    <select id="service" name="service" value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer appearance-none`}>
                      <option value="">Select a service…</option>
                      <option>Wealth Management</option>
                      <option>Retirement Planning</option>
                      <option>Investment Strategy</option>
                      <option>Tax Optimization</option>
                      <option>Estate Planning</option>
                      <option>Business Financial Planning</option>
                      <option>General Inquiry</option>
                    </select>
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label="Message" id="message">
                    <textarea id="message" name="message" rows={5} value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me a bit about your financial situation and what you're hoping to achieve…"
                      className={`${inputClass} resize-none`} />
                  </Field>
                </div>

                <div className="mt-8">
                  <button
                    onClick={handleSubmit}
                    className="bg-navy hover:bg-navy-light text-ivory font-sans font-semibold
                               text-base tracking-wide px-10 py-4 w-full sm:w-auto text-center
                               transition-all duration-200
                               hover:shadow-lg hover:shadow-navy/25 active:scale-95"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}