import React from 'react'
import './style.css'
import { Metadata } from 'next'
import DikaPatricia from '@/components/DikaPatricia/Page'

export const metadata: Metadata = {
  metadataBase: new URL('https://invitary.com'),
  title: {
    default: 'Dika - Patricia | Invitary',
    template: `%s | invitary.com`,
  },
  description: 'Undangan Pernikahan Asep dan Devi',
  keywords: 'keywords',
  openGraph: {
    type: 'website',
    url: 'https://invitary.com',
    title: 'Dika - Patricia | Invitary',
    description: 'Undangan Pernikahan Asep dan Devi',
    siteName: 'Invitary',
    images: [{ url: 'https://invitary.com/apple-touch-icon.png?' }],
  },
}

const DikaPatriciaPage = () => {
  return <DikaPatricia />
}

export default DikaPatriciaPage
