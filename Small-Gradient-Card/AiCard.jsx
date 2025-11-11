import React from 'react'

import { IoMdSettings } from "react-icons/io";
import { IoReturnDownBack } from "react-icons/io5";
import { HiArrowUturnLeft ,HiArrowUturnRight } from "react-icons/hi2";


const AiCard = () => {
    return (
        <div className="relative w-80 h-72 rounded-2xl p-px bg-linear-to-br from-blue-500/40 via-purple-600/40 to-blue-500/10">

        <div className='relative w-full h-full  shadow-2xl bg-black overflow-hidden  rounded-2xl text-white ' >
            {/* bottom left */}
            <div className='absolute -bottom-6 -left-6 w-52 h-52 bg-linear-to-tr from-[#4639ba] to-transparent blur-2xl opacity-70'></div>

            {/* bottom right */}
            <div className='absolute -bottom-6 -right-6 w-52 h-52 bg-linear-to-tl from-blue-600 via-blue-500/60 to-transparent blur-2xl opacity-70'></div>

            {/* bottom center patch */}
            <div className='absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-linear-to-t from-blue-800 to-transparent blur-2xl opacity-70'></div>

            <div className='relative z-10 p-5'>
                <span className=''> <IoMdSettings className='size-10 bg-blue-800 rounded-full p-2' /></span>
                <h2 className='text-xl mt-10 font-bold'> AI Powered-UP Settings</h2>
                <p className='text-sm opacity-80 mt-5'>You Settings set up from one place -automated service</p>
                <div className='flex justify-between mt-8'>

                    <button className='px-4 py-1.5 bg-transparent border border-blue-300 rounded-2xl text-sm flex gap-4 items-center'> <HiArrowUturnLeft className='size-4 bg-white text-black/80 rounded-sm font-bold '/>Back</button>
                    <button className='px-4 py-1.5 bg-transparent border border-blue-300  rounded-2xl text-sm flex gap-4 items-center '><HiArrowUturnRight className='size-4 bg-white text-black/80 rounded-sm font-bold'/> skip</button>
                </div>
            </div>
</div>
        </div>
    )
}

export default AiCard