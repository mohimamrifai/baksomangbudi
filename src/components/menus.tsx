import Image from 'next/image'
import React from 'react'

export default function Menus() {
  return (
    <div id="produk" className='px-10 py-20 flex flex-col items-center gap-10 bg-red-500 justify-center'>
      <h2 data-aos="fade-up" className='text-white text-3xl font-bold'>Tersedia berbagai macam menu dan topping</h2>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-3 w-full md:w-8/12'>
        <div data-aos="fade-up" className='bg-white p-2'>
          <Image className='h-56 object-cover' src="/bakso-original.webp" alt='bakso original' width={1000} height={1000} />
          <h3 className='font-bold text-lg mt-3'>Bakso Original</h3>
        </div>
        <div data-aos="fade-up" className='bg-white p-2'>
          <Image className='h-56 object-cover' src="/bakso-mercon.webp" alt='bakso original' width={1000} height={1000} />
          <h3 className='font-bold text-lg mt-3'>Bakso Mercon</h3>
        </div>
        <div data-aos="fade-up" className='bg-white p-2'>
          <Image className='h-56 object-cover' src="/bakso_aci.webp" alt='bakso original' width={1000} height={1000} />
          <h3 className='font-bold text-lg mt-3'>Bakso Aci</h3>
        </div>
        <div data-aos="fade-up" className='bg-white p-2'>
          <Image className='h-56 object-cover' src="/bakso-beranak.webp" alt='bakso original' width={1000} height={1000} />
          <h3 className='font-bold text-lg mt-3'>Bakso Beranak</h3>
        </div>
        <div data-aos="fade-up" className='bg-white p-2'>
          <Image className='h-56 object-cover' src="/bakso-goreng.webp" alt='bakso original' width={1000} height={1000} />
          <h3 className='font-bold text-lg mt-3'>Bakso Goreng</h3>
        </div>
        <div data-aos="fade-up" className='bg-white p-2'>
          <Image className='h-56 object-cover' src="/mie-ayam-bakso.webp" alt='bakso original' width={1000} height={1000} />
          <h3 className='font-bold text-lg mt-3'>Mie Ayam Bakso</h3>
        </div>
        <div data-aos="fade-up" className='bg-white p-2'>
          <Image className='h-56 object-cover' src="/es-teh.webp" alt='bakso original' width={1000} height={1000} />
          <h3 className='font-bold text-lg mt-3'>Es Teh</h3>
        </div>
        <div data-aos="fade-up" className='bg-white p-2'>
          <Image className='h-56 object-cover' src="/es-jeruk.webp" alt='bakso original' width={1000} height={1000} />
          <h3 className='font-bold text-lg mt-3'>Es Jeruk</h3>
        </div>
        <div data-aos="fade-up" className='bg-white p-2'>
          <Image className='h-56 object-cover' src="/es-kelapa.webp" alt='bakso original' width={1000} height={1000} />
          <h3 className='font-bold text-lg mt-3'>Es Kelapa</h3>
        </div>
      </div>
    </div>
  )
}
