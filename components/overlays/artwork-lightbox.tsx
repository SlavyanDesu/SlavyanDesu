'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect } from 'react'
import { editorialEase } from '@/lib/motion'
import type { Artwork as ArtworkTile } from '@/lib/portfolio-data'

/*
 * <ArtworkLightbox> is the full-screen viewer shown when a piece is picked in
 * the Artwork grid. It owns its own Escape-key + scroll-lock handling so the
 * grid stays focused on layout.
 *
 * It's rendered inside an <AnimatePresence> (in artwork.tsx) so the fade/scale
 * still animates on both enter and exit.
 */
export function ArtworkLightbox({
  artwork,
  onClose,
}: {
  artwork: ArtworkTile
  onClose: () => void
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: editorialEase }}
      className="fixed inset-0 z-80 flex items-center justify-center bg-white/95 p-6 md:p-12"
      role="dialog"
      aria-modal="true"
      aria-label={`${artwork.title} full-size artwork`}
      onClick={onClose}
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
            src={artwork.image}
            alt={artwork.title}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {/* Caption sits BELOW the artwork instead of over the top of it. */}
        <div className="flex flex-none items-end justify-between gap-4 border-t border-black/5 px-4 py-3">
          <div>
            <p className="text-lg font-medium text-neutral-950">{artwork.title}</p>
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
              {artwork.category}
            </p>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-600">
            Click outside to close
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}