import React from 'react'

// ✅ Grows when clicked
// ✅ Smooth width animation
// ✅ Real-world search effect
const ExpandingSearchBar = () => {
  return (
    <div>
        <input type="text" name="" id=""
        placeholder='search...'
        className=' w-48 focus:w-72 
        px-2 py-2 rounded-full  border border-gray-300 outline-none transition-all duration-300 focus:border-blue-500 focus:shadow-md
    
        '
         />
    </div>
  )
}

export default ExpandingSearchBar