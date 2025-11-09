import React, { useState } from 'react'

export const FloatingBtn = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className='fixed bottom-10 right-10 flex flex-col items-end gap-3'>

            {/* Extra button */}
            <button className={`bg-blue-500 text-white p-3  rounded-full transition transform duration-300 ${open ? "scale-100" : "scale-0"}`}> ✉️</button>
            <button className={`bg-blue-500 text-white p-3  rounded-full transition transform duration-300 ${open ? "scale-100" : "scale-0"}`}> 📞</button>
            {/* Main Fab */}

            <button
                onClick={() => setOpen(!open)}
                className='bg-black text-white p-4 rounded-full shadow-lg'
            >+</button>

        </div>
    )
}
