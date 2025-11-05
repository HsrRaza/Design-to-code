
import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUsers } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
const Routing = () => {

    const routes = [
        { path: "/", title: "Dashboard", Icon: FiHome },
        { path: "/team", title: "Team", Icon: FiUsers },
        { path: "/invoice", title: "Invoice", Icon: FiPaperclip },
        { path: "/integration", title: "Integration", Icon: FiLink },
        { path: "/finance", title: "Finance", Icon: FiDollarSign },
    ]
    return (
        <div className='space-y-1'>
            {
                // eslint-disable-next-line no-unused-vars
                routes.map(({ path, title, Icon }) => 
                    (

                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) => (
                                `flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,bachground-color,color]${isActive ? "bg-white text-stone-950 shadow" : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"}`
                    )}
                        >
                            {({ isActive }) => (

                                <>
                                    <Icon className={isActive ? "text-violet-500" : ""} />
                                    <span>{title}</span>
                                </>
                            )}
                        </NavLink>
                    )
                )
            }
        </div>
    )
}

export default Routing

