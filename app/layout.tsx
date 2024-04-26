import type { Metadata, Viewport } from 'next'
import '../styles/globals.scss'
import Provider from './providers'
import { inter } from './fonts'
import GoogleAnalythic from '@/components/google-analythics'

export const metadata: Metadata = {
  metadataBase: new URL('https://invitary.com'),
  title: {
    default: 'Invitary | Next step of website invitations',
    template: `%s | invitary.com`,
  },
  description: 'Next step of website invitations',
  keywords: 'keywords',
  openGraph: {
    type: 'website',
    url: 'https://invitary.com',
    title: 'Invitary | Next step of website invitations',
    description: 'Next step of website invitations',
    siteName: 'Invitary',
    images: [{ url: 'https://invitary.com/apple-touch-icon.png?' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="48x48"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <GoogleAnalythic />
      <body suppressHydrationWarning={true} className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
