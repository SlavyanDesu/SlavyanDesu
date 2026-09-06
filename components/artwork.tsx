'use client'

import Image from 'next/image'
import { ArrowUpRight, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'
import { artworks } from '@/lib/portfolio-data'

/*
 * Artwork — a visual/creative showcase gallery built from the images in
 * /public/art. Each piece keeps a ratio suited to its original composition.
 *
 * The grid is responsive: stacked tiles on mobile, then an intentional
 * 12-column bento composition with fixed row tracks on larger screens.
 */
export function Artwork() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (selectedIndex === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setSelectedIndex(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedIndex])

  return (
    <section id="artwork" className="section-shell">
      <SectionHeader
        eyebrow="Selected Visuals"
        title="Artwork & play"
        description="A selection of my arts."
      />

      {/* The bento grid of pieces */}
      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-45">
        {artworks.map((art, i) => (
          <Reveal
            key={art.title}
            delay={i * 0.06}
            className={
              art.layout === 'hero'
                ? 'md:col-span-7 md:row-span-2'
                : art.layout === 'tall'
                  ? 'md:col-span-5 md:row-span-2'
                  : art.layout === 'banner'
                    ? 'md:col-span-12 md:row-span-2'
                    : art.layout === 'wide'
                      ? 'md:col-span-6 md:row-span-2'
                      : 'md:col-span-4'
            }
          >
            {/* Each tile keeps the source image's shape while captions stay readable. */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSelectedIndex(i)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setSelectedIndex(i)
                }
              }}
              className="group relative block h-full min-h-80 w-full cursor-zoom-in overflow-hidden rounded-lg border border-border bg-card text-left md:min-h-0"
              aria-label={`View ${art.title} full size`}
            >
              <Image
                src={art.image}
                alt={art.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Caption overlay sits at the bottom, lifts up slightly on hover. */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-linear-to-t from-background/90 to-transparent p-4">
                <div>
                  <p className="font-medium leading-tight">{art.title}</p>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {art.category}
                  </p>
                </div>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-80 flex items-center justify-center bg-background/95 p-6 md:p-12"
          role="dialog"
          aria-modal="true"
          aria-label={`${artworks[selectedIndex].title} full-size artwork`}
          onClick={() => setSelectedIndex(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-6 top-6 z-10 p-2 text-foreground"
            aria-label="Close artwork"
          >
            <X className="size-6" />
          </button>

          <div
            className="relative h-full w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={artworks[selectedIndex].image}
              alt={artworks[selectedIndex].title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-linear-to-t from-background/90 to-transparent px-4 pb-4 pt-16">
              <div>
                <p className="text-lg font-medium">{artworks[selectedIndex].title}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {artworks[selectedIndex].category}
                </p>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Click outside to close
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
