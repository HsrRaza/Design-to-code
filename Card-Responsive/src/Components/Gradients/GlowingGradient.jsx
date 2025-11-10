// glowing border gradient

import React from 'react'

const GlowingGradient = () => {
  return (
    <div className='relative w-120 h-60  rounded-xl p-1 bg-black'>
        <div className='absolute inset-0  rounded-xl  bg-linear-to-r from-purple-500 via-blue-400 to-pink-500 blur-xl'></div>
        <div className='relative  bg-black  h-full w-full rounded-xl p-4 text-white'>

        <h3 className='font-bold'> Glowing Gradient Border</h3>
        <p className='text-sm text-gray-400'>smooth Edge Glow </p>

        </div>
    </div>
  )
}

export default GlowingGradient