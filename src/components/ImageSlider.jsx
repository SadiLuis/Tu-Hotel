import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx'

const ImageSlider = () => {

const slider= [
  {
    url: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Panqueque con rodajas de Fresas',
  },
  {
    url: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Enselada verde',
  },
  {
    url: 'https://images.pexels.com/photos/539430/pexels-photo-539430.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'Sushi',
  },
  {
    url: 'https://images.unsplash.com/photo-1608956905586-adaad6346779?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Restaurante con hermosas vistas a la Playa',
  },
  {
    url:'https://images.pexels.com/photos/7259028/pexels-photo-7259028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Coctel Pink',
  }
];

const [currentImg, setCurrentImg] = useState(0);

const prevSlide = () =>{
  const isFirstSlide = currentImg === 0;
  const newImgIndex = isFirstSlide ? slider.length - 1 : currentImg -1;
  setCurrentImg(newImgIndex);
};

const nextSlide = () =>{
  const isLastSlide = currentImg === slider.length -1;
  const newImgIndex = isLastSlide ? 0 : currentImg + 1;
  setCurrentImg(newImgIndex)
};

const goToSlide = (slideIndex) =>{
  setCurrentImg(slideIndex)
};


  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
    <div
      className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      style={{ backgroundImage: `url(${slider[currentImg].url})` }}
    ></div>
    {/* Left Arrow */}
    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>

    <div className='flex top-4 justify-center py-2'>
      {slider.map((slide, slideIndex) => (
        <div
          className='text-2xl cursor-pointer'
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
        >
          <RxDotFilled />
        </div>
      ))}
    </div>
  </div>
  )
}

export default ImageSlider