'use client'

import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { useState, type MouseEvent } from 'react'
import { profile } from '@/lib/portfolio-data'
import { editorialEase } from '@/lib/motion'

const introExitDelay = 8.5

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80)
  })

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const target = document.getElementById(href.slice(1))
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.pushState(null, '', href)
  }

  const links = [
    { label: 'Works', href: '#works' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: introExitDelay, ease: editorialEase }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-border bg-background/70 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* The logo returns to the Hero through the same smooth-scroll handler. */}
        <a
          href="#top"
          onClick={(event) => handleNavClick(event, '#top')}
          className="flex h-24 w-24 items-center"
        >
          <Image
            src="/slavyan.svg"
            alt={`${profile.name} home`}
            width={96}
            height={96}
            priority
            style={{ width: 'auto' }}
            className="h-24 w-auto object-contain object-left"
          />
        </a>

        {/* Section links stay hidden on small screens to keep the compact header clear. */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Availability indicator for the current contact state. */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            On Hiatus
          </span>
        </div>
      </nav>
    </motion.header>
  )
}
