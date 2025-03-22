import React from 'react'
import './style.css'
import { Metadata } from 'next'
import RezaAnita from '@/components/RezaAnita/Page'

export const metadata: Metadata = {
  metadataBase: new URL('https://invitary.com/anita-reza'),
  title: {
    default: 'Anita - Reza | Invitary',
    template: `%s | invitary.com`,
  },
  description: 'Undangan Pernikahan Anita dan Reza',
  keywords: 'keywords',
  openGraph: {
    type: 'website',
    url: 'https://invitary.com/anita-reza',
    title: 'Anita - Reza | Invitary',
    description: 'Undangan Pernikahan Anita dan Reza',
    siteName: 'Invitary',
    images: [{ url: 'https://invitary.com/apple-touch-icon.png?' }],
  },
}

const Page = () => {
  return <RezaAnita />
}

export default Page
