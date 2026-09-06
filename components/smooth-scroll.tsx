'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

/*
 * <SmoothScroll> wraps the whole app and enables Lenis — a lightweight library
 * that intercepts native scrolling and interpolates it, giving that buttery,
 * slightly-weighted "momentum" feel instead of the OS's abrupt step scroll.
 *
 * It renders nothing itself; it just sets up a requestAnimationFrame loop that
 * drives Lenis each frame, and tears everything down on unmount.
 *
 * This portfolio intentionally keeps smooth scrolling enabled regardless of
 * the device-level reduced-motion preference.
 */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    let frame = 0
    function raf(time: number) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return null
}
