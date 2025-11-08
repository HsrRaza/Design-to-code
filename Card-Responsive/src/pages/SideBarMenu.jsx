import React, { useState } from 'react'

const SideBarMenu = () => {

      const [open, setOpen] = useState(false);
  return (
     <div className="md:grid md:grid-cols-[240px_1fr] min-h-screen  ">

        {/* mobile hamburger */}


        {/* <button onClick={() => setOpen(true)} className=" md:hidden text-2xl p-4 bg-gray-900 text-whit absolute  ">  ☰ </button> */}



        {/* overlay */}

        {open && (
          <div onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 md:hidden"
          >

          </div>
        )}

        {/* Sidebar */}

        <aside className={`
          fixed md:static top-0 left-0 h-full bg-gray-900 text-white p-4 w-60 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>

          <h2 className="text-xl font-bold">SideBar</h2>
          <div className="grid text-start  gap-2 ">

            <button className="text-md text-stone-200  px-2 py-1.5 bg-blue-800">Home</button>
            <button className="text-md text-stone-200  px-2 py-1.5 ">About</button>
            <button className="text-md text-stone-200  px-2 py-1.5 ">Contact</button>
          </div>


        </aside>



        {/* main content */}
        <main className="p-4  flex  gap-5">
          <div>

            <button onClick={() => setOpen(true)} className=" md:hidden text-2xl p-4 bg-gray-900 text-white  ">  ☰ </button>
          </div>
          <div>

            <h1 className="text-2xl font-bold">Content Area</h1>
            <p>Resize  the screen sidebar hides on mobile</p>
            {/* <AnimatePage/> */}
            <div className="mt-2 flex flex-col gap-4">

            <Btn/>
            <SlideCard/>
            </div>

          </div>

        </main>


      </div>
  )
}

export default SideBarMenu