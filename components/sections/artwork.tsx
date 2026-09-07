'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { ArtworkLightbox } from '@/components/overlays/artwork-lightbox'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/section'
import { SectionHeader } from '@/components/shared/section-header'
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

  return (
    <Section id="artwork">
      <SectionHeader
        eyebrow="Selected Visuals"
        title="Artworks"
        description="A selection of my arts."
        className="mb-16"
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
              className="group relative block h-full min-h-80 w-full cursor-zoom-in overflow-hidden rounded-[0.625rem] border bg-neutral-100 text-left md:min-h-0"
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
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 border-t border-white/20 bg-white/20 p-4 backdrop-blur-md">
                <div>
                  <p className="font-medium leading-tight text-neutral-950">{art.title}</p>
                  <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
                    {art.category}
                  </p>
                </div>
                <ArrowUpRight className="size-4 shrink-0 text-neutral-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-950" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <ArtworkLightbox
            artwork={artworks[selectedIndex]}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  )
}