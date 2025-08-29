import React, { useState } from "react";
import { Github, Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#161b22] border-b border-gray-700 px-7 py-5">
      <div className="flex justify-between items-center">

        <h3 className="text-white font-semibold text-lg flex justify-center align-baseline gap-1"><Github /> Github-Search</h3>


        <ul className="hidden md:flex space-x-8 text-gray-300">
          <li className="hover:text-white">Home</li>
          <li className="hover:text-white">Trending</li>
          <li className="hover:text-white">Favorites</li>
        </ul>


        <div className="hidden md:flex space-x-3 text-gray-300 items-center ">
          <p className="hover:text-white cursor-pointer">About</p>
          <p>|</p>
          <button className="px-3 py-1 rounded-full border-1 border-blue-600 bg-blue-600 hover:bg-gray-900 hover:border-1 hover:border-white text-white hover:scale-110 cursor-pointer">
            Contact
          </button>
        </div>

        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div> 
    {/* mobile */}
      {isOpen && (
        <div className="md:hidden mt-7 space-y-7 text-gray-300 h-[80vh] flex flex-col justify-center gap-7 text-4xl">
          <ul className="flex flex-col space-y-4 text-center gap-4">
            <li className="hover:text-white ">Home</li>
            <li className="hover:text-white">Trending</li>
            <li className="hover:text-white">Favorites</li>
          </ul>
          <div className="flex flex-col space-y-7 items-center justify-center gap-3.5">
            <p className="hover:text-white cursor-pointer">About</p>
            <p>|</p>
            <button className="px-3 py-1 rounded-full w-[70vw] bg-blue-600 hover:bg-blue-500 text-white">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
