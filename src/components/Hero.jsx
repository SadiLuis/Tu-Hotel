import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen' >
        <img 
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://images.pexels.com/photos/1506836/pexels-photo-1506836.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='/'
        />
      <div className='bg-black/25 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white' >
        <div className='md:lef-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p className='font-bold' > Todo incluido </p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl '> Playas Privadas | Parking Privado | Gastronomía Deliciosa </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl' > Las mejores vacaciones, en el mejor hotel, con las mejores playas privadas... Lo mejor de nosotros para vos!
          </p>
          <button className='bg-white text-black' > Reserva ahora! </button>
        </div>
      </div>

    </div>
  )
}

export default Hero