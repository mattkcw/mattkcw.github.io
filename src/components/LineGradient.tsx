import React from 'react'

const LineGradient = ({ width = 'w-full' }: { width?: string }) => {
  return (
    <div className={`h-0.5 ${width} bg-gradient-rainblue`}></div>
  )
}

export default LineGradient