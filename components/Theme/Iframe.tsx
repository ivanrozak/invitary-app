'use client'
import React, { useEffect, useState } from 'react'

const Iframe = ({ iframeKey, src }: { iframeKey: number; src: string }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false)
      clearInterval(interval)
    }, 1000)
  }, [])
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="text-landingPrimary">Loading...</div>
        </div>
      ) : (
        <iframe
          key={iframeKey}
          title="Embedded Content"
          src={src}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          // className="scalled-iframe"
          frameBorder={0}
          allowFullScreen
        />
      )}
    </>
  )
}

export default Iframe
