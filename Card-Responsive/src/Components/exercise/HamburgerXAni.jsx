import React, { useState } from 'react'

const HamburgerXAni = () => {

    const [open, setOpen] = useState(false)
    return (

        <div>
            <button onClick={()=> setOpen(!open)}
            className='relative w-10 h-8 flex flex-col justify-center'
                >

                    <span className={`block h-1 bg-black rounded transistion transform ${open && "rotate-45 translate-y-3"}`}></span>
                    <span className={`block h-1 bg-black rounded transistion transform ${open && "opacity-0"}`}></span>
                    <span className={`block h-1 bg-black rounded transistion transform ${open && "-rotate-45 -translate-y-3"}`}></span>

            </button>
        </div>
    )
}

export default HamburgerXAni