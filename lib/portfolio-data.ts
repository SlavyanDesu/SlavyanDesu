/* -------------------------------------------------------------------------- */
/* Personal / identity info shown in the hero, header and footer              */
/* -------------------------------------------------------------------------- */
export const profile = {
  name: 'Heikal Syah Shiddiq',
  alias: 'SlavyanDesu',
  role: 'Backend Developer',
  location: 'Indonesia',
  year: '2026',
  tagline: 'Learning to be a full-stack dev.',
} as const

/* -------------------------------------------------------------------------- */
/* Social + contact links.                                                    */
/* -------------------------------------------------------------------------- */
export const socials = [
  { label: 'GitHub', handle: '@SlavyanDesu', href: 'https://github.com/SlavyanDesu' },
  { label: 'LinkedIn', handle: 'in/kalinisme', href: 'https://linkedin.com/in/kalinisme' },
  { label: 'Behance', handle: 'behance.net/slavyan', href: 'https://www.behance.net/slavyan' },
] as const

export const contactEmail = 'slavyandesu@gmail.com'

export type Work = {
  index: string
  title: string
  description: string
  year: string
  stack: string[]
  href: string
}

export const works: Work[] = [
  {
    index: '01',
    title: 'BocchiBot',
    description: 'A multipurpose WhatsApp bot built on wa-automate-nodejs. 345+ stars and counting.',
    year: '2020',
    stack: ['Node.js', 'TypeScript', 'WhatsApp'],
    href: 'https://github.com/SlavyanDesu/BocchiBot',
  },
  {
    index: '02',
    title: 'bmkg-wrapper',
    description: "An API wrapper that makes Indonesia's BMKG open weather & earthquake data easy to consume.",
    year: '2021',
    stack: ['TypeScript', 'REST API'],
    href: 'https://github.com/SlavyanDesu/bmkg-wrapper',
  },
  {
    index: '03',
    title: 'moe-api',
    description: 'Search any anime scene from a single screenshot, powered by the trace.moe API.',
    year: '2021',
    stack: ['Node.js', 'trace.moe'],
    href: 'https://github.com/SlavyanDesu/moe-api',
  },
  {
    index: '04',
    title: 'NekoBocc',
    description: 'A simple, lightweight scraper focused on speed and a tiny footprint.',
    year: '2021',
    stack: ['Node.js', 'Scraping'],
    href: 'https://github.com/SlavyanDesu/NekoBocc',
  },
  {
    index: '05',
    title: 'sd-webui-colab',
    description: 'Run the Stable Diffusion Web UI in no time using Google Colab — one click and go.',
    year: '2022',
    stack: ['Python', 'Colab', 'AI'],
    href: 'https://github.com/SlavyanDesu/sd-webui-colab',
  },
  {
    index: '06',
    title: 'simple-wa-bot',
    description: 'A minimal WhatsApp bot starter — the clean foundation to build your own from.',
    year: '2022',
    stack: ['Node.js', 'WhatsApp'],
    href: 'https://github.com/SlavyanDesu/simple-wa-bot',
  },
]

/* -------------------------------------------------------------------------- */
/* Artwork / visual showcase.                                                 */
/* -------------------------------------------------------------------------- */
export type Artwork = {
  title: string
  category: string
  image: string
  layout: 'hero' | 'tall' | 'standard' | 'wide' | 'banner'
}

export const artworks: Artwork[] = [
  { title: 'Zone Sphere', category: 'Typography', image: '/art/1.png', layout: 'hero' },
  { title: 'Sunday', category: 'Typography', image: '/art/2.png', layout: 'tall' },
  { title: 'Gawr Gura', category: 'Poster Design', image: '/art/3.png', layout: 'standard' },
  { title: 'Tensura', category: 'Poster Design', image: '/art/4.png', layout: 'standard' },
  { title: '+Jakarta Sans', category: 'Font Showcase', image: '/art/5.png', layout: 'standard' },
  { title: 'Oozora Subaru', category: 'Poster Design', image: '/art/6.png', layout: 'wide' },
  { title: './ABSTRCT-048', category: 'Poster Design', image: '/art/7.png', layout: 'wide' },
  { title: 'Unite Creative Team', category: 'Identity', image: '/art/8.png', layout: 'banner' },
]

/* -------------------------------------------------------------------------- */
/* The three-word manifesto in the About section.                             */
/* -------------------------------------------------------------------------- */
export const manifesto = ['Curious', 'Fast learner', 'Jack of all trades'] as const
/* -------------------------------------------------------------------------- */
/* Skills grouped by category — rendered as a big editorial list.             */
/* -------------------------------------------------------------------------- */
export const skillGroups = [
  {
    title: 'Languages',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'REST APIs', 'Web Scraping', 'Bots & Automation', 'PostgreSQL'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'I speak',
    items: ['English', 'Japanese', 'Indonesian'],
  },
] as const

/* -------------------------------------------------------------------------- */
/* Services                                                                   */
/* -------------------------------------------------------------------------- */
export const services = [
  {
    number: '(01)',
    title: 'Bots & Automation',
    body: 'Chat bots, task automation and scheduled jobs that run reliably and log everything.',
  },
  {
    number: '(02)',
    title: 'APIs & Wrappers',
    body: 'Typed, well-documented APIs and wrappers around messy third-party data sources.',
  },
  {
    number: '(03)',
    title: 'Graphic Design',
    body: 'Posters, apparels, ads, banners, everything you need.',
  },
] as const
