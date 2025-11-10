import React from 'react'

const MultipleGradient = () => {
    return (
        <div className='relative w-120 h-60 bg-black rounded-xl overflow-hidden  p-4 text-white'>
            {/* top left gradient */}
            <div className='absolute top-0 left-0 w-24 h-24 bg-linear-to-br from-purple-600 to-transparent blur-2xl opacity-70'></div>

            {/* top right gradient */}

            <div className='absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-blue-500 to-transparent blur-2xl opacity-70'></div>

            {/* bottom left */}
            <div className='absolute bottom-0 left-0 w-24 h-24 bg-linear-to-tr from-pink-600 to-transparent blur-2xl opacity-70'></div>

            {/* bottom right */}

            <div className='absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-cyan-400 to-transparent blue-2xl opacity-70'></div>

            {/* card content */}

            <div className='relative z-10'>
                <h3 className='font-bold text-xl'>Gradient Corners</h3>
                <p className='text-sm  opacity-70'></p>

            </div>

        </div>
    )
}

export default MultipleGradient