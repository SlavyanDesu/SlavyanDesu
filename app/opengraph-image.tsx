import { ImageResponse } from 'next/og'
import { profile } from '@/lib/portfolio-data'

/*
 * Dynamic OpenGraph image (also used as the Twitter card).
 * Next.js automatically serves this at /opengraph-image and links it in the
 * page's <head>, so link previews on X, LinkedIn, Discord, etc. show a proper
 * branded card instead of a blank box. No image file to maintain.
 */
export const alt = `${profile.name} — ${profile.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#ffffff',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top row: alias badge + year */}
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6f6f6f', fontSize: 28 }}>
          <span>{profile.alias}</span>
          <span>/ {profile.year} /</span>
        </div>

        {/* Center: the name, big */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: '#111111', fontSize: 30, letterSpacing: 4 }}>PORTFOLIO</span>
          <span style={{ color: '#111111', fontSize: 96, fontWeight: 700, lineHeight: 1.05 }}>
            {profile.name}
          </span>
        </div>

        {/* Bottom row: role + location */}
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6f6f6f', fontSize: 30 }}>
          <span>{profile.role}</span>
          <span>{profile.location}</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
