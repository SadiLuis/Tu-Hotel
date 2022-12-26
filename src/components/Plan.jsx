import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
        className='row-span-3 object-cover w-full h-full p-2'
        src='https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
        <img
        className='row-span-3 object-cover w-full h-full p-2' 
        src='https://images.pexels.com/photos/3155667/pexels-photo-3155667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
        <img
        className='row-span-3 object-cover w-full h-full p-2' 
        src='https://images.pexels.com/photos/5006907/pexels-photo-5006907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
        <img
        className='row-span-3 object-cover w-full h-full p-2' 
        src='https://images.pexels.com/photos/914137/pexels-photo-914137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
        <img
        className='row-span-3 object-cover w-full h-full p-2' 
        src='https://images.pexels.com/photos/10833363/pexels-photo-10833363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />     
      </div>
      <div className='flex flex-col h-full justify-center' >
        <h3 className='text-5xl md:text-6xl font-bold text-white' > Planifica tu proximo viaje  </h3>
        <p className='text-2xl py-6 text-white' > Las vacaciones que te mereces las encontrarás aquí! </p>
        <p className='pb-6 text-white' >
         Desde hermosas playas hasta paseos en barcasas en expediciones unicas! 
        </p>
        <div>
          <button className='border-white mr-4 hover:shadow-xl text-white'>
          Más información
          </button>
          <button className='bg-black text-white border-white hover:shadow-xl'>Reserva tu viaje</button>
        </div>
      </div>
  </div>
  )
}

export default Plan