'use client'
import { pageview } from '@/lib/gtag-helper'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

const GAPageView = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()

    pageview(url)
  }, [pathname, searchParams])
  return null
}

export default GAPageView
