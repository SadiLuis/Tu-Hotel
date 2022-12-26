import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-cyan-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Encuentra la mejor habitación para ti!</h3>
        <p className='pt-4'>
          Las mayores comodidades, vistas a la hermosa playa o un panorama superior a toda el area, todo esto y mucho mas podrás encontrar en nuestras habitaciones
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
          src='https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg'
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full'
          src='https://images.pexels.com/photos/2255424/pexels-photo-2255424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
          src='https://images.pexels.com/photos/11295866/pexels-photo-11295866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
      </div>
    </div>
  )
}

export default Rooms