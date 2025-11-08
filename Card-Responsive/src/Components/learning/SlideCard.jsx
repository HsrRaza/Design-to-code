import React from 'react'

const SlideCard = () => {
  return (
    <div>
        <div className='w-60 p-4 bg-white shadow-lg rounded-md transform transition  duration-500 hover:-translate-y-4'>
            <h3 className='font-bold'>I slide up!</h3>
            <p className='text-sm text-gray-500'>using translate & transition</p>
        </div>
    </div>
  )
}

export default SlideCard