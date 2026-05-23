// app/page.tsx — Main page (Server Component)
// Imports and renders all sections in order.

import Navbar       from '@/components/Navbar'
import Hero         from '@/components/Hero'
import About        from '@/components/About'
import Services     from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact      from '@/components/Contact'
import Footer       from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      {/* Sticky navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
