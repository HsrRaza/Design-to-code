import React from 'react'
import Outlet from "react-router-dom"
import Sidepanel from '../components/SideBar/Sidepanel'

const Layout = () => {
    return (
        <div className='grid gap-4 text-st'>
            <div className=''>
                <Sidepanel />
            </div>
            <div>
                <Outlet />
            </div>

        </div>
    )
}

export default Layout