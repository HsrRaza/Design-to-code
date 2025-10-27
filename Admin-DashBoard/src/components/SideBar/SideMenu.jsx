import React from 'react'
import AccountToggle from './AccountToggle'

const SideMenu = () => {
  return (
    <div>
        <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
            {/* Todo Main Sidebar content */}
            <AccountToggle/>
        </div>

        {/* todo plan toggle */}
    </div>
  )
}

export default SideMenu