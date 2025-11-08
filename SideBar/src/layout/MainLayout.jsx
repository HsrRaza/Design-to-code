
import {Outlet} from "react-router-dom"
import Sidepanel from "../components/SideBar/Sidepanel"


const MainLayouts = () => {
  return (
    <div className='p-4   md:grid grid-cols-[240px_1fr] gap-4  text-stone-950 bg-stone-100'>
        <div className=''>
        <aside>
            <Sidepanel/>
        </aside>
        </div>
        <div><Outlet/></div>
    </div>
  )
}

export default MainLayouts