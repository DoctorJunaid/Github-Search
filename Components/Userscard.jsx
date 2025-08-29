import { HeartIcon, MapPin, Users } from 'lucide-react'
import React from 'react'

const Userscard = ({ cardusername, Bio, location, image, Followers, Following, join, visit, name }) => {
  return (
    <div className="w-full sm:w-4/5 lg:w-3/5 text-white m-auto my-7 bg-[#111920] p-4 sm:p-6 rounded-2xl">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
        
        {/* Profile Image */}
        <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden flex-shrink-0">
          <img src={image} alt="userimage" className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold">{name}</h3>
          <p className="text-[#697E94]">{cardusername}</p>
          <p className="text-[#697E94] text-sm">Joined {new Date(join).toLocaleDateString()}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <HeartIcon className="hover:cursor-pointer w-6 h-6" />
          <a
            href={visit}
            target="_blank"
            rel="noreferrer"
            className="py-2 px-4 rounded-xl bg-[#233648] text-base sm:text-lg font-bold hover:cursor-pointer"
          >
            Visit
          </a>
        </div>
      </div>


      <div className="p-3 sm:p-5 text-center sm:text-left">{Bio}</div>


      <div className="px-5 flex justify-center sm:justify-start items-center gap-3">
        <div className="bg-[#233648] text-2xl sm:text-4xl p-2 rounded-xl">
          <MapPin />
        </div>
        <p>{location}</p>
      </div>

      <div className="px-5 flex justify-center sm:justify-start items-center gap-3 mt-3">
        <div className="bg-[#233648] text-2xl sm:text-4xl p-2 rounded-xl">
          <Users />
        </div>
        <p>
          {Following} Following • {Followers} Followers
        </p>
      </div>
    </div>
  )
}

export default Userscard
