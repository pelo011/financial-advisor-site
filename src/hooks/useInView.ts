'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * useInView — triggers once when the element enters the viewport.
 * Used to fire CSS animations when sections scroll into view.
 *
 * @param threshold  0–1, how much of the element must be visible (default 0.15)
 */
export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          // Once visible, no need to keep observing
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
