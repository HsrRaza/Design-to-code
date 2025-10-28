import React from 'react'
import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUsers } from 'react-icons/fi'

export const RouteSelect = () => {
  return (
    <div className='space-y-1'>
       <Route Icone={FiHome} selected={true} title={"Dashboard"} />
       <Route Icone={FiUsers} selected={false} title={"Team"} />
       <Route Icone={FiPaperclip} selected={false} title={"Invoice"} />
       <Route Icone={FiLink} selected={false} title={"Integration"} />
       <Route Icone={FiDollarSign} selected={false} title={"Finance"} />
    </div>
  )
}

const Route = ({
    selected,
    Icone,
    title,
})=>{
    return(
         <button className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
         selected ? "bg-white text-stone-950 shadow" :"hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"}`}>
   <Icone/>
   <span>{title}</span>

    </button>
    )
}



