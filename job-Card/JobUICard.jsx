
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";


const Job = () => {
    return (
        <div className='w-full mx-auto h-screen flex items-center justify-center gap-[50px] bg-[#f0f0f0] '>

            {/* card -1 */}
            <div className=' bg-[#ffffff] p-5 w-[400px] shadow-[0_3px_8px_rgba(0,0,0,0.24)] rounded-3xl'>

                {/* container*/}
                <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4'>
                    {/* box-1 */}
                    <div className=' grid grid-cols-2 gap-2'>

                        <div className='  p-2' >
                            <div className='w-[75px] h-[75px] bg-[#f0f0f0] flex items-center justify-center rounded-full border-[#e7e7e7]'>

                                <div className='  w-[55px] h-[55px] rounded-full border border-[#e7e7e7] flex items-center justify-center'>
                                    <img className='w-[55px] h-[55px] object-cover rounded-full' src="https://cdn.sanity.io/images/rn4tswnp/production/701c93f19c501de365d167e88aae6d09802cb629-1675x1103.jpg?h=320&auto=format&dpr=2" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-start justify-end p-2'>
                            <button className='px-3 py-1 bg-[#fefefe] rounded-md flex  items-center justify-between gap-1 border border-[#ebebeb]'><span className='text-sm text-[#9e9e9e] font-inter'>Save</span> <CiBookmark className='text-xl text-[#999999]' /> </button>

                        </div>
                    </div>

                    {/* box-2 */}
                    <div className='  p-2'>

                        <h3 className='text-xl font-inter '>Airbnb  <span className='text-sm text-[#b6b6b6] ml-2 font-inter'>5 days ago</span></h3>
                        <h2 className='text-2xl font-poppins'>Junior UI/UX Designer</h2>
                        <div className='flex  gap-4 mt-5 mb-5'>

                            <button className='bg-[#f0f0f0] text-[#4b4b4b] px-6 py-2 border-none rounded-lg font-poppins'>Contact</button>
                            <button className='bg-[#f0f0f0] text-[#4b4b4b] px-6 py-2 border-none rounded-lg font-poppins'>Remote</button>
                        </div>


                    </div>
                    {/* box-3 */}
                    <div className=' flex items-end justify-center p-2'>
                        <div className='w-full border-b border-[#b6b6b6] mt-2'></div>

                    </div>

                    {/* box-4*/}
                    <div className='  py-2'>
                        <div className='flex  justify-between'>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-xl font-inter'>$100/hr</h3>
                                <p className='text-[14px] font-inter'>Jersey, USA</p>
                            </div>
                            <div>
                                <button className='px-4 py-2 bg-black rounded-lg text-white font-poppins'>Apply now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* card- 2 */}
            <div className=' bg-[#ffffff] p-5 w-[400px] shadow-[0_3px_8px_rgba(0,0,0,0.24)] rounded-3xl'>

                {/* container*/}
                <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4'>
                    {/* box-1 */}
                    <div className=' grid grid-cols-2 gap-2'>

                        <div className='  p-2' >
                            <div className='w-[75px] h-[75px] bg-[#f0f0f0] flex items-center justify-center rounded-full border-[#e7e7e7]'>

                                <div className='  w-[55px] h-[55px] rounded-full border border-[#e7e7e7] flex items-center justify-center'>
                                    <img className='w-[55px] h-[55px] object-center rounded-full' src="https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-start justify-end p-2'>
                            <button className='px-3 py-1 bg-[#f0f0f0] rounded-md flex  items-center justify-between gap-1 border border-[#ebebeb]'><span className='text-sm  font-inter'>Saved</span> <FaBookmark className='text-xl text-[#000000] ' /> </button>

                        </div>
                    </div>

                    {/* box-2 */}
                    <div className='  p-2'>

                        <h3 className='text-xl mb-2 font-inter'>Apple <span className='text-sm text-[#b6b6b6] ml-2 font-inter'>5 days ago</span></h3>
                        <h2 className='text-2xl  font-poppins'>Graphic Designer</h2>
                        <div className='flex  gap-4 mt-5 mb-5'>

                            <button className='bg-[#f0f0f0] text-[#4b4b4b] px-6 py-2 border-none rounded-lg font-poppins'>Full-TIme</button>
                            <button className='bg-[#f0f0f0] text-[#4b4b4b] px-6 py-2 border-none rounded-lg font-poppins'>Flexible Schedule</button>
                        </div>


                    </div>
                    {/* box-3 */}
                    <div className=' flex items-end justify-center p-2'>
                        <div className='w-full border-b border-[#b6b6b6] mt-2'></div>

                    </div>

                    {/* box-4*/}
                    <div className='  py-2'>
                        <div className='flex  justify-between'>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-xl font-inter'>$100/hr</h3>
                                <p className='text-[14px] font-inter'>Seattle, USA</p>
                            </div>
                            <div>
                                <button className='px-4 py-2 bg-black rounded-lg text-white font-poppins'>Apply now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Job