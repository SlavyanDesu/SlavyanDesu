import { Reveal } from '@/components/shared/reveal'

export function SectionHeader({
  eyebrow,
  title,
  description,
  count,
  className = '',
}: {
  eyebrow: string
  title: string
  description: string
  count?: string
  className?: string
}) {
  return (
    <Reveal className={`flex items-end justify-between border-b pb-6 ${className}`}>
      <div>
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-neutral-950">
          // {eyebrow}
        </span>
        <h2 className="mt-3 text-4xl font-bold leading-none md:text-6xl">{title}</h2>
        <p className="mt-4 max-w-[36rem] text-sm leading-relaxed text-neutral-600 md:text-base">
          {description}
        </p>
      </div>
      {count && <span className="hidden font-mono text-sm text-neutral-600 md:block">({count})</span>}
    </Reveal>
  )
}
