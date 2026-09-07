import { SiteHeader } from '@/components/site-header'
import { SmoothScroll } from '@/components/smooth-scroll'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { SelectedWorks } from '@/components/selected-works'
import { Artwork } from '@/components/artwork'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { ContactFooter } from '@/components/contact-footer'
import { IntroLoader } from '@/components/intro-loader'

export default function Page() {
  return (
    <>
      <IntroLoader />
      {/* Enables Lenis momentum scrolling without rendering its own markup. */}
      <SmoothScroll />
      <SiteHeader />
      <main className="mx-auto">
        <Hero />
        {/* A quick identity ticker separates the Hero from the work list. */}
        <Marquee text="TypeScript · Node.js · Bots · APIs · Automation" duration={26} />
        <SelectedWorks />
        <Artwork />
        <About />
        <Skills />
        <ContactFooter />
      </main>
    </>
  )
}
