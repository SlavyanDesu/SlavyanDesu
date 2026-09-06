'use client'

import { motion } from 'motion/react'
import { profile, manifesto } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'
import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader
        eyebrow="About"
        title="A little about me"
        description="An independent developer learning in public and building useful systems."
      />

      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        {/* Portrait frame */}
        <Reveal className="md:col-span-4">
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg border border-border bg-card">
            <Image src="/portrait.jpg" alt="Heikal Syah Shiddiq" fill className="object-cover" />
          </div>
        </Reveal>

        {/* Bio copy */}
        <div className="md:col-span-8">
          <Reveal>
            <p className="text-balance text-2xl font-medium leading-snug tracking-tight md:text-4xl">
              I&apos;m {profile.name.split(' ')[0]}, a self-taught developer from {profile.location}. I
              live in The Wired — shipping bots, scrapers and APIs that turn tedious, repetitive work
              into something that just runs.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Most of my work is open source.<br />
              I have experience with making RESTful APIs, web app, and bots. <br />
              Started as a Discord bot developer, I become more interested in coding. <br />
              The peak era of me is when I was senior high school, building a Whatsapp bot that have more than hundred users. <br />
              Currently I only code what I needed the most. Such as making VB script for my own office work.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-24 border-y border-border py-16 md:mt-40 md:py-20">
        {manifesto.map((line, i) => (
          <Reveal key={line} delay={i * 0.08}>
            <motion.div
              whileHover={{ scale: 1.015, backgroundColor: '#111111', color: '#ffffff' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="group w-fit max-w-full cursor-default origin-left px-2 py-1"
            >
              <p className="text-[13vw] font-bold leading-[0.95] tracking-tight md:text-[9vw]">
                {line}
                <motion.span
                  className="ml-[0.04em] inline-block text-current"
                  whileHover={{ scaleX: 1.8 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  .
                </motion.span>
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
