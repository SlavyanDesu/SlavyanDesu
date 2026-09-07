'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { editorialEase } from '@/lib/motion'
import {
  introText,
  TYPING_MIN,
  TYPING_MAX,
  EXIT_FADE_DELAY,
  EXIT_LIGHT_DELAY,
  EXIT_HIDE_DELAY,
} from '@/lib/intro'

export function IntroLoader() {
  const [typedText, setTypedText] = useState('')
  const [fadeText, setFadeText] = useState(false)
  const [light, setLight] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let index = 0
    let typingTimer: number | undefined
    const timers: number[] = []
    const previousBodyOverflow = document.body.style.overflow
    const previousDocumentOverflow = document.documentElement.style.overflow

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    const typeNextCharacter = () => {
      index += 1
      setTypedText(introText.slice(0, index))

      if (index >= introText.length) {
        timers.push(window.setTimeout(() => setFadeText(true), EXIT_FADE_DELAY))
        timers.push(window.setTimeout(() => setLight(true), EXIT_LIGHT_DELAY))
        timers.push(
          window.setTimeout(() => {
            document.body.style.overflow = previousBodyOverflow
            document.documentElement.style.overflow = previousDocumentOverflow
            setVisible(false)
          }, EXIT_HIDE_DELAY),
        )
        return
      }

      const currentCharacter = introText[index - 1]
      const isEllipsisStart = introText.slice(index - 1, index + 2) === '...'
      const pause = currentCharacter === '\n' ? 200 : isEllipsisStart ? 150 : currentCharacter === '.' ? 90 : currentCharacter === ',' ? 60 : 0
      const naturalVariation = TYPING_MIN + Math.random() * (TYPING_MAX - TYPING_MIN)
      typingTimer = window.setTimeout(typeNextCharacter, naturalVariation + pause)
    }

    typingTimer = window.setTimeout(typeNextCharacter, 60)

    return () => {
      if (typingTimer) window.clearTimeout(typingTimer)
      timers.forEach((timer) => window.clearTimeout(timer))
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousDocumentOverflow
    }
  }, [])

  if (!visible) return null

  const [typedQuote = '', typedAuthor = ''] = typedText.split('\n')
  const authorStarted = typedText.includes('\n')

  return (
    <motion.div
      initial={{ backgroundColor: 'rgba(0,0,0,1)', color: 'rgba(255,255,255,1)' }}
      animate={light ? { backgroundColor: 'rgba(255,255,255,1)', color: 'rgba(17,17,17,1)' } : undefined}
      transition={{ duration: 0.8, ease: editorialEase }}
      className="fixed inset-0 z-100 flex items-center justify-center px-6 md:px-10"
      role="status"
      aria-label={introText}
    >
      <motion.div
        animate={{ opacity: fadeText ? 0 : 1 }}
        transition={{ duration: 0.7, ease: editorialEase }}
        className="w-full text-center"
      >
        <p className="whitespace-nowrap font-mono text-[clamp(0.62rem,2.25vw,1.5rem)] leading-relaxed">
          {typedQuote}
          {!authorStarted && <span className="ml-1 inline-block h-[1.1em] w-px animate-pulse bg-current align-[-0.1em]" />}
        </p>
        <p
          className="mt-5 min-h-[1em] font-mono text-xs uppercase tracking-widest opacity-60"
          aria-hidden={!authorStarted}
        >
          {typedAuthor}
          {authorStarted && <span className="ml-1 inline-block h-[1em] w-px animate-pulse bg-current align-[-0.1em]" />}
        </p>
      </motion.div>
    </motion.div>
  )
}