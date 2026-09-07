'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { profile } from '@/lib/portfolio-data'
import { editorialSlowTransition, editorialTransition } from '@/lib/motion'
import { introExitDelay } from '@/lib/intro'

export function Hero() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const nameOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])
  const [firstName, ...lastNames] = profile.name.split(' ')

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden px-6 pb-8 pt-24 md:px-10 md:pb-10"
    >
      <motion.div style={{ y, opacity }} className="flex min-h-0 flex-1 flex-col">
        <div className="flex flex-1 items-center justify-center py-12 md:py-20">
          {/* The Hero name settles from an oversized scale after the quote scene ends. */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...editorialTransition, delay: introExitDelay }}
          >
            <motion.h1
              style={{ opacity: nameOpacity }}
              initial={{ scale: 1.32 }}
              animate={{ scale: 1 }}
              transition={{ ...editorialSlowTransition, delay: introExitDelay }}
              className="flex max-w-350 flex-wrap items-center justify-center gap-x-3 text-center text-6xl font-bold tracking-[-0.06em] sm:text-5xl md:gap-x-5 lg:text-[9rem]"
            >
              <span>{firstName}</span>
              <span>{lastNames.join(' ')}</span>
            </motion.h1>
          </motion.div>
        </div>

        {/* Supporting identity copy appears after the name has settled. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...editorialTransition, delay: introExitDelay + editorialSlowTransition.duration }}
          className="grid gap-6 border-t pt-4 text-xs md:grid-cols-[1fr_1.5fr_1fr] md:items-end"
        >
          <div className="font-mono uppercase tracking-widest text-neutral-600">
            <span className="block text-neutral-950">Focus</span>
            <span>{profile.role}</span>
          </div>
          <p className="max-w-md text-sm font-medium leading-snug md:justify-self-center md:text-base">
            {profile.tagline}
          </p>
          <a
            href="#contact"
            className="font-mono uppercase tracking-widest text-neutral-600 hover:text-neutral-950 md:justify-self-end transition-[filter,color]"
          >
            Contact me
          </a>
        </motion.div>
      </motion.div>

    </section>
  )
}
