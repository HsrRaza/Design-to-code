import React, { useState } from 'react'

const TranslateBar = () => {
    const [open , setOpen] = useState(false)

  return (
    <div className='min-h-screen bg-gray-100 p-6'>

        {/* button */}

        <button
        className='bg-black  text-white px-4 py-2 rounded'
        onClick={()=> setOpen(!open)}
        >☰ Menu</button>


        <aside className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white p-5
        transform transition duration-300 
        ${open ? "translate-x-0": "-translate-x-full"}
        `}>
            <h2 className='text-2xl font-bold'>SideBar</h2>
        </aside>


    {/* Overlay */}

     {
        open && (
            <div onClick={ ()=>setOpen(false)} className='fixed inset-0 bg-black/40 md:hidden'></div>
        )
     }

    </div>
  )
}

export default TranslateBar