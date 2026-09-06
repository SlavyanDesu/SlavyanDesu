'use client'

import { ArrowUpRight } from 'lucide-react'
import { works } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'

export function SelectedWorks() {
  return (
    <section
      id="works"
      className="section-shell relative"
    >
      <SectionHeader
        eyebrow="Selected Works"
        title="Things I've made"
        description="Open-source tools, bots and APIs I have made so far."
        count={String(works.length).padStart(2, '0')}
      />

      {/* The list of projects */}
      <ul>
        {works.map((work, i) => (
          <Reveal key={work.title} delay={i * 0.05}>
            <li
              className="group border-b border-border"
            >
              <a
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-12 items-center gap-4 py-6 md:py-8"
              >
                {/* Index number */}
                <span className="col-span-2 font-mono text-sm text-muted-foreground md:col-span-1">
                  {work.index}
                </span>

                {/* Title — slides right + turns brand-colored on hover */}
                <span className="col-span-8 text-2xl font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-2 group-hover:text-brand md:col-span-6 md:text-4xl">
                  {work.title}
                </span>

                {/* Stack tags (hidden on mobile to keep rows clean) */}
                <span className="col-span-3 hidden flex-wrap gap-2 md:flex">
                  {work.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </span>

                {/* Year + arrow */}
                <span className="col-span-2 flex items-center justify-end gap-3 font-mono text-sm text-muted-foreground md:col-span-2">
                  {work.year}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand" />
                </span>
              </a>
            </li>
          </Reveal>
        ))}
      </ul>

      <a
        href="https://github.com/SlavyanDesu"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 flex items-center justify-between border-b border-border pb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground"
      >
        <span className="transition-colors group-hover:text-foreground">See more projects on GitHub</span>
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>

    </section>
  )
}
