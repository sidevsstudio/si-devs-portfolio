import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['opsz', 'SOFT', 'WONK'],
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sidevs.tech'),
  title: {
    default: 'SI Devs — Guided, not just built.',
    template: '%s · SI Devs',
  },
  description:
    'SI Devs is a client-first website design & development studio. We turn business goals into fast, trustworthy websites — with clarity, transparency, and genuine peace of mind.',
  icons: {
    icon: '/dark-icon-no-space.svg',
    shortcut: '/dark-icon-no-space.svg',
    apple: '/dark-icon-no-space.svg',
  },
  keywords: [
    'website design studio',
    'web development',
    'static websites',
    'business websites',
    'lead generation websites',
    'portfolio websites',
    'SI Devs',
  ],
  authors: [{ name: 'SI Devs' }],
  creator: 'SI Devs',
  openGraph: {
    type: 'website',
    title: 'SI Devs — Guided, not just built.',
    description:
      'A client-first website design & development studio. Fast, trustworthy websites built with clarity and peace of mind.',
    siteName: 'SI Devs',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SI Devs — Guided, not just built.',
    description:
      'A client-first website design & development studio. Fast, trustworthy websites built with clarity and peace of mind.',
    creator: '@sidevs',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F3F1EC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
