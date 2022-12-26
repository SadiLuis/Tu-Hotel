import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-white text-black py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-black py-8 px-4'>
        <div>
          <h6 className='font-bold uppercare pt-2'>Servicios</h6>
          <ul>
            <li className='py-1'>Viajes</li>
            <li className='py-1'>Reserva</li>
            <li className='py-1'>Vuelos</li>
            <li className='py-1'>Cruseros</li>
            
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>Soporte</h6>
          <ul>
            <li className='py-1'>Precios</li>
            <li className='py-1'>Documentos</li>
            <li className='py-1'>Visitas</li>
            <li className='py-1'>Devoluciones</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>Compañia</h6>
          <ul>
            <li className='py-1'>Sobre nosotros</li>
            <li className='py-1'>Blog</li>
            <li className='py-1'>Trabajos</li>
            <li className='py-1'>Press</li>
            <li className='py-1'>Socios</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>Legal</h6>
          <ul>
            <li className='py-1'>Reclamaciones</li>
            <li className='py-1'>Privacidad</li>
            <li className='py-1'>Terminos</li>
            <li className='py-1'>Politicas</li>
            <li className='py-1'>Condiciones</li>
          </ul>
        </div>
        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold uppercase'>Suscribete a nuestra sección de noticias</p>
          <p className='py-4'>
          Las últimas ofertas, artículos y recursos enviados a su bandeja de entrada semanalmente.
          </p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter email..' />
            <button className='p-2 mb-4 rounded-md'>Suscribete</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-black'>
        <p className='py-4'>2022 TuHotel, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;