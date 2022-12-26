import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
    if(!nav){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "scroll"
    }
  }

  return (
    <div className='absolute w-full flex justify-between p-4 items-center' >
      <h1 className='text-white font-bold text-2xl z-20' > TuHotel </h1>
      <HiOutlineMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={30} />
      <div className={
        nav
        ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
        : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
      }>
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <li className='font-bold text-3xl p-8' >Inicio</li>
          <li className='font-bold text-3xl p-8' >Nuestros destinos</li>
          <li className='font-bold text-3xl p-8' >Reservaciones</li>
          <li className='font-bold text-3xl p-8' >Servicios</li>
          <li className='font-bold text-3xl p-8' >Habitaciones</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar