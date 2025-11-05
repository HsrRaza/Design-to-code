import React from 'react'
import Routing from './Routing'

const Sidepanel = () => {
  return (
    <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
      <aside>
        
    <Routing/>
      </aside>
    </div>
  )
}

export default Sidepanel