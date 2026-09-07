'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { editorialTransition } from '@/lib/motion'

/*
 * <Reveal> is a small reusable wrapper that fades + slides its children into
 * view the first time they scroll onto screen. It's used across every section
 * so the whole page shares one consistent entrance animation.
 *
 * - `delay` staggers items (e.g. list rows revealing one after another).
 * - Reveals stay enabled regardless of the device-level reduced-motion preference.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      // Keep the initial server and client markup identical. Reduced motion is
      // handled by the transition rather than changing the rendered styles.
      initial={{ opacity: 0, y }}
      // Animate to natural position once ~20% of the element is visible.
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...editorialTransition, delay }}
    >
      {children}
    </motion.div>
  )
}
