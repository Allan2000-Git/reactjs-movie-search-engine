import React from 'react'
import Logo from '../assets/movieapp.jpg'

const Header = () => {
  return (
    <>
      <div className="bg-black py-7 sticky top-0">
        <div className="text-2xl text-white flex items-center justify-center gap-4 font-semibold">
            <img className="w-[60px]" src={Logo} alt="Movie App"/>
            <h1 className="text-[#fa8804]">Movie Search Engine</h1>
        </div>
      </div>
    </>
  )
}

export default Header
