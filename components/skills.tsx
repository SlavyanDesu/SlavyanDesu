'use client'

import { skillGroups, services } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'

/*
 * Skills + Services. Two blocks:
 * 1. Skill groups rendered as clean editorial columns.
 * 2. Services list with big numbered headings describing what you offer.
 */
export function Skills() {
  return (
    <section className="section-shell">
      <SectionHeader
        eyebrow="Skill Sets"
        title="Tools of the trade"
        description="The languages, tools and practices behind my work."
      />

      <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08}>
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className="text-xl font-medium tracking-tight md:text-2xl">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <SectionHeader
        eyebrow="Services"
        title="How I can help"
        description="Practical engineering for projects that need to move forward."
        className="mt-28 md:mt-40"
      />

      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.1}>
            {/* group hover lifts the brand color into the heading */}
            <div className="group flex h-full flex-col gap-6 bg-background p-8 md:p-10">
              <span className="font-mono text-sm text-muted-foreground">{service.number}</span>
              <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-brand md:text-3xl">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">{service.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
