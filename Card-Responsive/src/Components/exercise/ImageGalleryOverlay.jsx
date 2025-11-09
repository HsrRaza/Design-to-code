import React from 'react'
// ✅ Image zooms
// ✅ Overlay fades in
// ✅ Uses group-hover
const ImageGalleryOverlay = () => {
  return (
    <div className='relative w-64 group  overflow-hidden rounded-lg'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/San_Diego_Comic-Con_2024_Masquerade_-_Cosplay_of_Batman_3.jpg" 
        className='w-full transform transition duration-500 group-hover:scale-110'
        alt="" />
        
        <div 
        className='absolute inset-0 bg-black/60 flex items-center justify-center 
        text-white text-xl opacity-0 group-hover:opacity-100
        transition duration-300
        '
        >
view
        </div>
        
    </div>
  )
}

export default ImageGalleryOverlay