'use client'
import { cn } from '@nextui-org/react'
import { useInView } from 'framer-motion'
import React, { CSSProperties, useRef } from 'react'

const AnimationPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div>
      <div className="h-screen flex justify-center items-center text-lg font-bold text-center">
        <div className="animate-fade-in-up">
          <div>Animation Test</div>
          <div>Hello World!</div>
        </div>
      </div>
      <div className="h-screen w-full flex justify-center items-center text-lg font-bold text-center">
        <div
          ref={ref}
          className={cn({ 'animate-in': isInView })}
          style={{ '--index': 1 } as CSSProperties}
        >
          <div>Animation Test</div>
          <div>Hello World!</div>
        </div>
      </div>
    </div>
  )
}

export default AnimationPage
