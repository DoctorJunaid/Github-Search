import React from 'react'
import Navbar from '../Components/Navbar'
import { Search } from 'lucide-react'


const Home = () => {
  return (
    <div className='bg-[#0d1117] text-gray-200 w-full h-full'>
        <Navbar />
        <div className='flex flex-col justify-center items-center h-full w-full gap-7'>
            <h1 className='text-6xl'>GitHUb Search</h1>
            <p className=' text-gray-400'>Find repositories, users, and more across the GitHub universe.</p>
            <div className='flex justify-end items-center relative'>
                <input className='px-12 py-7 text-2xl  w-[40vw] bg-[#353f55b0] rounded-full  ' type="text " placeholder='openai,DoctorJunaid,react... '/>
                <p className='absolute left-0 p-4'><Search /></p>
            </div>
        </div>
        
    </div>
  )
}

export default Home