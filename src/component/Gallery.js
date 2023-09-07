import React from 'react'

const Gallery = () => {
  return (
    <div className='max-w-[1600px] my-[58px] mx-auto px-[15px] lg:my-[30px]'>
        <div className='flex sm:flex-col gap-x-[24px] lg:gap-x-[16px]'>
          <div className=' w-5/8 h-[580px] xl:h-[400px] 2xl:h-[460px] md:w-full md:h-[200px] '>
            <img src='/image/shop.svg' className='h-full w-full object-cover' />
          </div>
          <div className='sm:pt-[15px] w-3/8 h-[580px] xl:h-[400px] 2xl:h-[460px] md:w-full md:h-[200px]'>
            <img src='/image/dish1.svg' className='h-full w-full object-cover' />
          </div>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[24px] mt-[24px] lg:gap-[16px] lg:mt-[16px]'>
          <div className='  h-[580px] xl:h-[400px] 2xl:h-[460px] lg:h-[350px] md:h-[200px] '>
            <img src='/image/dish2.png' className='h-full w-full object-cover' />
          </div>
          <div className='h-[580px] xl:h-[400px] 2xl:h-[460px] lg:h-[350px] md:h-[200px] '>
            <img src='/image/dish3.png' className='h-full w-full object-cover' />
          </div>
          <div className='h-[580px] xl:h-[400px] 2xl:h-[460px] lg:h-[350px] md:h-[200px] '>
            <img src='/image/dish4.png' className='h-full w-full object-cover' />
          </div>
          <div className='h-[580px] xl:h-[400px] 2xl:h-[460px] lg:h-[350px] md:h-[200px] '>
            <img src='/image/dish5.png' className='h-full w-full object-cover' />
          </div>
          <div className='  h-[580px] xl:h-[400px] 2xl:h-[460px] lg:h-[350px] md:h-[200px] '>
            <img src='/image/dish6.png' className='h-full w-full object-cover' />
          </div>
          <div className='h-[580px] xl:h-[400px] 2xl:h-[460px] lg:h-[350px] md:h-[200px] '>
            <img src='/image/dish7.png' className='h-full w-full object-cover' />
          </div>
          <div className='h-[580px] xl:h-[400px] 2xl:h-[460px] lg:h-[350px] md:h-[200px] '>
            <img src='/image/dish8.png' className='h-full w-full object-cover' />
          </div>
          <div className='h-[580px] xl:h-[400px] 2xl:h-[460px] lg:h-[350px] md:h-[200px] '>
            <img src='/image/dish9.png' className='h-full w-full object-cover' />
          </div>
          <div className='h-[580px] xl:h-[400px] 2xl:h-[460px] lg:h-[350px] md:h-[200px] '>
            <img src='/image/dish10.png' className='h-full w-full object-cover' />
          </div>
          <div className='h-[580px] xl:h-[400px] 2xl:h-[460px] lg:h-[350px] md:h-[200px] '>
            <img src='/image/dish11.png' className='h-full w-full object-cover' />
          </div>
          <div className='h-[580px] xl:h-[400px] 2xl:h-[460px] lg:h-[350px] md:h-[200px] '>
            <img src='/image/dish12.png' className='h-full w-full object-cover' />
          </div>
          <div className='h-[580px] xl:h-[400px] 2xl:h-[460px] lg:h-[350px] md:h-[200px] '>
            <img src='/image/dish13.png' className='h-full w-full object-cover' />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-[24px] mt-[24px] lg:mt-[16px]'>
          <div className='  h-[580px] xl:h-[400px] 2xl:h-[460px] md:h-[200px] '>
            <img src='/image/dish14-big.png' className='h-full w-full object-cover' />
          </div>
        </div>
      </div>
  )
}

export default Gallery