import type { ReactNode } from 'react'

/*
 * <Section> is the shared page-shell wrapper. Every full-height content block
 * (sections + the footer body) uses the same responsive padding; this keeps
 * the rhythm consistent and removes the repeated utility string.
 *
 * - `as` lets the footer render the same shell as a <div> instead of nested
 *   <section>s.
 * - `className` merges after the shell classes so per-section tweaks win.
 */
export function Section({
  as = 'section',
  id,
  className = '',
  children,
}: {
  as?: 'section' | 'div' | 'footer'
  id?: string
  className?: string
  children: ReactNode
}) {
  const Tag = as
  return (
    <Tag id={id} className={`px-6 py-24 md:px-10 md:py-40 ${className}`}>
      {children}
    </Tag>
  )
}