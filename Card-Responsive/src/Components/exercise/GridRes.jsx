import React from 'react'

const GridRes = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {[1,2,3,4,5,6].map( (item)=>(
            <div key={item}
            className='bg-white p-6 rounded-lg shadow transform transition duration-300  hover:scale-105 hover:shadow-lg'
            >
             Box {item}
            </div>
        ))}

    </div>
  )
}

export default GridRes