import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { profile } from '@/lib/portfolio-data'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

/*
 * SEO + OpenGraph.
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://slavyandesu.vercel.app'),
  title: `${profile.name} | ${profile.role}`,
  description: profile.tagline,
  generator: 'Next.js',
  keywords: [
    profile.name,
    'SlavyanDesu',
    'TypeScript Developer',
    'JavaScript Developer',
    'Node.js',
    'Portfolio',
    'Indonesia',
  ],
  authors: [{ name: profile.name, url: 'https://github.com/SlavyanDesu' }],
  creator: profile.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://slavyandesu.vercel.app',
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-96x96.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // The bg-white class on <html> prevents any flash of the wrong color.
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-white`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
