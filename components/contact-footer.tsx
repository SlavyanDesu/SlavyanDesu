'use client'

import { ArrowUpRight } from 'lucide-react'
import { profile, socials, contactEmail } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { Marquee } from '@/components/marquee'
import { SectionHeader } from '@/components/section-header'

/*
 * Contact + footer.
 */
export function ContactFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="relative">
      {/* Infinite ticker inviting people to reach out */}
      <Marquee text="一緒に奇跡を起こそう！" />

      <div className="px-6 py-24 md:px-10 md:py-40">
        <SectionHeader
          eyebrow="Contact"
          title="Let's talk"
          description="Have a useful problem to solve? Send me a note."
        />

        {/* Email */}
        <Reveal delay={0.05}>
          <a
            href={`mailto:${contactEmail}`}
            className="group mt-10 inline-block text-pretty break-all text-2xl font-bold leading-none tracking-tight transition-[filter,color] hover:text-neutral-950 sm:text-3xl md:text-5xl"
          >
            {contactEmail}
            <ArrowUpRight className="ml-2 inline size-[0.7em] align-top transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
          </a>
        </Reveal>

        {/* Social links grid */}
        <div className="mt-24 grid gap-px overflow-hidden rounded-[0.625rem] border bg-black/14 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((social, i) => (
            <Reveal
              key={social.label}
              delay={i * 0.06}
              className="sm:last:col-span-2 lg:last:col-span-1"
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-center justify-between bg-white p-6"
              >
                <span className="flex flex-col gap-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-600">
                    {social.label}
                  </span>
                  <span className="text-lg font-medium tracking-tight transition-colors group-hover:text-neutral-950">
                    {social.handle}
                  </span>
                </span>
                <ArrowUpRight className="size-5 text-neutral-600 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-neutral-950" />
              </a>
            </Reveal>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-24 flex flex-col gap-4 border-t pt-8 font-mono text-xs uppercase tracking-widest text-neutral-600 md:flex-row md:items-center md:justify-between">
          <span>
            &copy; {currentYear} {profile.name}
          </span>
          <span>{profile.location} — / {profile.year} /</span>
          <span>Built with Next.js &amp; motion</span>
        </div>
      </div>
    </footer>
  )
}
