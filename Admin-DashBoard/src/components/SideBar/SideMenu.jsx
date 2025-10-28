import React from 'react'
import AccountToggle from './AccountToggle'
import Search from './Search'
import {RouteSelect} from './RouteSelect'
import { Plan } from './Plan'

const SideMenu = () => {
  return (
    <div>
        <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
            {/* Todo Main Sidebar content */}
            <AccountToggle/>
            <Search/>
            <RouteSelect/>

        </div>

        {/* todo plan toggle */}
        <Plan/>
    </div>
  )
}

export default SideMenu