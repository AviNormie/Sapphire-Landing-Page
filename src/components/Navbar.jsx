import React, { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between px-4 py-2 md:px-8">
        <div className="flex items-center">
          <img className="w-14 h-14" src={logo} alt="LOGO" />
          <div className=" font-bold text-lg">Sapphire</div>
        </div>

        <div className="hidden md:flex items-center justify-center ">
          <div className="hover:cursor-pointer ml-4 mr-4 ">ABOUT</div>
          <div className="hover:cursor-pointer ml-4 mr-4 ">PRODUCT</div>
          <div className="hover:cursor-pointer ml-4 mr-4">PRICING</div>
          <div className="hover:cursor-pointer ">SUPPORT</div>
          <button className="ml-[350px] mr-10 text-white font-semibold py-2 px-3 rounded-full bg-[#152F46] hover:bg-[#18405d] transition-colors">
            LOGIN/SIGNUP
          </button>
        </div>
        

        {/* Menu Button (Visible on Small Devices) */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50">
          <button
            className="absolute top-4 right-4 text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col items-start p-6 space-y-4">
            <div className="hover:cursor-pointer">ABOUT</div>
            <div className="hover:cursor-pointer">PRODUCT</div>
            <div className="hover:cursor-pointer">PRICING</div>
            <div className="hover:cursor-pointer">SUPPORT</div>
            <button className="text-white font-semibold p-2 rounded-full bg-[#152F46] hover:bg-[#18405d] transition-colors mt-4">
              LOGIN/SIGNUP
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
