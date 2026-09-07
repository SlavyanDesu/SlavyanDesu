'use client'

import { motion } from 'motion/react'

/*
 * <Marquee> is the infinite horizontal ticker (like "Let's connect · ...").
 * How it works: we render the same content TWICE side by side, then animate
 * the track from 0% to -50%. Because the second copy starts exactly where the
 * first ends, the loop is seamless and repeats forever.
 */
export function Marquee({
  text,
  duration = 22,
}: {
  text: string
  duration?: number
}) {
  // One repeated "unit" of the ticker: the text plus a separator dot.
  const item = (
    <span className="flex shrink-0 items-center">
      <span className="px-8">{text}</span>
      <span className="text-neutral-950" aria-hidden="true">
        &#9679;
      </span>
    </span>
  )

  return (
    <div className="flex overflow-hidden border-y py-6 select-none">
      <motion.div
        className="flex shrink-0 items-center text-4xl font-medium tracking-tight whitespace-nowrap md:text-6xl"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Number.POSITIVE_INFINITY }}
      >
        {/* First copy */}
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={`a-${i}`} className="flex items-center">
            {item}
          </span>
        ))}
        {/* Second, identical copy that makes the -50% loop seamless */}
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={`b-${i}`} className="flex items-center" aria-hidden="true">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
