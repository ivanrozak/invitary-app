import React from 'react'
import './style.css'
import AsepPage from '@/components/AsepDefi/AsepDefi'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://invitary.com'),
  title: {
    default: 'Asep - Devi | Invitary',
    template: `%s | invitary.com`,
  },
  description: 'Undangan Pernikahan Asep dan Devi',
  keywords: 'keywords',
  openGraph: {
    type: 'website',
    url: 'https://invitary.com',
    title: 'Asep - Devi | Invitary',
    description: 'Undangan Pernikahan Asep dan Devi',
    siteName: 'Invitary',
    images: [{ url: 'https://invitary.com/apple-touch-icon.png?' }],
  },
}

const AsepDefiPage = () => {
  return <AsepPage />
}

export default AsepDefiPage
