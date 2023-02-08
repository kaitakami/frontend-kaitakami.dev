import React from 'react'

const PageLoader = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="animate-ping h-5 w-5 bg-blue-900 rounded-full"></div>
      <div className="animate-ping h-5 w-5 bg-blue-900 rounded-full mx-4"></div>
      <div className="animate-ping h-5 w-5 bg-blue-900 rounded-full"></div>
    </div>
  )
}

export default PageLoader
