import React from 'react'

const PageLoader = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-zinc-500">
        <div className="flex items-center justify-center gap-20 [filter:url(#gooey)]">
          <div className="animate-movealt h-60 w-60 rounded-full bg-zinc-300 bg-gradient-to-br from-white to-zinc-400 shadow-inner shadow-white"></div>

          <div className="animate-move h-40 w-40 rounded-full bg-zinc-300 bg-gradient-to-br from-white to-zinc-400 shadow-inner shadow-white"></div>
        </div>
      </div>

      <svg>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
          <feColorMatrix
            values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 90 -25"
          />
        </filter>
      </svg>
    </>
  )
}

export default PageLoader
