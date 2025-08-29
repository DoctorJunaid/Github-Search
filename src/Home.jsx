import React from 'react'
import { Search } from 'lucide-react'


const Home = ({value,onChange,onSubmit}) => {
  return (
    <div className='bg-[#0d1117] text-gray-200 w-full pt-12'>
      <div className='flex flex-col  items-center w-full gap-7 mt-10'>
        <h1 className='text-6xl font-bold text-center'>GitHub Search</h1>
        <p className=' text-gray-400 text-center'>Find repositories, users, and more across the GitHub universe.</p>
        <div className="flex justify-center items-center relative">
          <input value={value} onChange={(e) => onChange(e.target.value)}
            className="px-12 py-4 text-xl min-w-[350px] w-[50vw] bg-[#353f55b0] rounded-full outline-none"
            type="text"
            placeholder="openai, DoctorJunaid, react..."
          />
          <p className="absolute left-4 text-gray-400">
            <Search />
          </p>
          <button
            type="submit" onClick={onSubmit}
            className="absolute right-2 hover:cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full px-6 py-2 transition"
          >
            Search
          </button>

        </div>
</div>
      </div>
      )
}

      export default Home