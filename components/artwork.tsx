'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'
import { artworks } from '@/lib/portfolio-data'
import { editorialEase } from '@/lib/motion'

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
    <section id="artwork" className="px-6 py-24 md:px-10 md:py-40">
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
          <motion.div
            key="artwork-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: editorialEase }}
            className="fixed inset-0 z-80 flex items-center justify-center bg-white/95 p-6 md:p-12"
            role="dialog"
            aria-modal="true"
            aria-label={`${artworks[selectedIndex].title} full-size artwork`}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.45, ease: editorialEase }}
              className="relative flex h-full min-h-0 w-full max-w-6xl flex-col rounded-[0.625rem] border bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Image area — the artwork fills everything above the caption, never overlapped. */}
              <div className="relative min-h-0 w-full flex-1 overflow-hidden">
                <Image
                  src={artworks[selectedIndex].image}
                  alt={artworks[selectedIndex].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Caption sits BELOW the artwork instead of over the top of it. */}
              <div className="flex flex-none items-end justify-between gap-4 border-t border-black/5 px-4 py-3">
                <div>
                  <p className="text-lg font-medium text-neutral-950">{artworks[selectedIndex].title}</p>
                  <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
                    {artworks[selectedIndex].category}
                  </p>
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-600">
                  Click outside to close
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
