'use client'

import { profile, manifesto } from '@/lib/portfolio-data'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/section'
import { SectionHeader } from '@/components/shared/section-header'
import Image from 'next/image'

function ManifestoLine({ text }: { text: string }) {
  return (
    <div className="group w-fit max-w-full cursor-default">
      <p className="tracking-tight text-[13vw] font-bold leading-[0.95] transition-[letter-spacing] duration-500 ease-out group-hover:tracking-tighter md:text-[9vw]">
        {text}
        <span className="ml-[0.04em] text-neutral-950">.</span>
      </p>
      <span
        aria-hidden
        className="mt-1 block h-0.5 w-full origin-left scale-x-0 bg-neutral-950 transition-transform duration-500 ease-out group-hover:scale-x-100"
      />
    </div>
  )
}

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About"
        title="A little about me"
        description="If you are curious though."
        className="mb-16"
      />

      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        {/* Portrait frame */}
        <Reveal className="md:col-span-4">
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-[0.625rem] border bg-neutral-100">
            <Image src="/portrait.jpg" alt="Heikal Syah Shiddiq" fill className="object-cover" />
          </div>
        </Reveal>

        {/* Bio */}
        <div className="md:col-span-8">
          <Reveal>
            <p className="text-balance text-2xl font-medium leading-tight tracking-[-0.02em] md:text-4xl md:leading-[1.15] md:tracking-tight">
              I&apos;m {profile.name.split(' ')[0]} a.k.a. Slavyan or SlavyanDesu, a self-taught developer from {profile.location}.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed tracking-[-0.005em] text-neutral-600 md:mt-10 md:text-lg md:leading-loose">
              Over the years, I've built everything from RESTful APIs and web apps to custom bots.
              I actually got my start coding Discord bots, which hooked me instantly.
              Back in high school, I hit a major milestone by creating a WhatsApp bot used by more than a hundred user.
              These days, I love coding for utility. Writing VBScripts to automate tasks and making my own web apps.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-24 border-y py-16 md:mt-40 md:py-20">
        {manifesto.map((line, i) => (
          <Reveal key={line} delay={i * 0.08}>
            <ManifestoLine text={line} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
