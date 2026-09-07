import { SiteHeader } from '@/components/layout/site-header'
import { SmoothScroll } from '@/components/layout/smooth-scroll'
import { ContactFooter } from '@/components/layout/contact-footer'
import { Hero } from '@/components/sections/hero'
import { SelectedWorks } from '@/components/sections/selected-works'
import { Artwork } from '@/components/sections/artwork'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Marquee } from '@/components/shared/marquee'
import { IntroLoader } from '@/components/overlays/intro-loader'

export default function Page() {
  return (
    <>
      <IntroLoader />
      {/* Enables Lenis momentum scrolling without rendering its own markup. */}
      <SmoothScroll />
      <SiteHeader />
      <main className="mx-auto">
        <Hero />
        <Marquee text="TypeScript · Node.js · Bots · APIs · Automation" />
        <SelectedWorks />
        <Artwork />
        <About />
        <Skills />
        <ContactFooter />
      </main>
    </>
  )
}
