import { Reveal } from '@/components/reveal'

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
    <Reveal className={`section-header ${className}`}>
      <div>
        <span className="eyebrow section-eyebrow">// {eyebrow}</span>
        <h2 className="section-title">{title}</h2>
        <p className="section-description">{description}</p>
      </div>
      {count && <span className="hidden font-mono text-sm text-muted-foreground md:block">({count})</span>}
    </Reveal>
  )
}
