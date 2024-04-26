'use client'
import Script from 'next/script'
import React from 'react'

const GoogleAnalythic = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `,
        }}
      />
    </>
  )
}

export default GoogleAnalythic
