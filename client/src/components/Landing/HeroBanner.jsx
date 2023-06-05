import Image from 'next/image';
import React, { useEffect, useState } from 'react'


function HeroBanner() {
  const [image, setImage]=useState(1);

  useEffect(()=>{
    const interval=setInterval(()=>{
      setImage(image>=6? 1 : image+1)
    }, 1000)
    return ()=>clearInterval(interval)
  }, [image])

  return (
    <div className='h-[680px] relative bg-cover'>
      <div className='w-[110vw] absolute h-full top-0 right-0 transition-opacity z-0'>
        <Image alt='hero' src='/bg-hero1.webp' fill
        className={`${image === 1 ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
        />
        <Image alt='hero' src='/bg-hero2.webp' fill
        className={`${image === 2 ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
        />
        <Image alt='hero' src='/bg-hero3.webp' fill
        className={`${image === 3 ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
        />
        <Image alt='hero' src='/bg-hero4.webp' fill
        className={`${image === 4 ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
        />
        <Image alt='hero' src='/bg-hero5.webp' fill
        className={`${image === 5 ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
        />
        <Image alt='hero' src='/bg-hero6.webp' fill
        className={`${image === 6 ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
        />
      </div>
      <div className='z-1 relative w-[650px] flex justify-center flex-col h-full gap-5 ml-20'>
        <h1 className='text-white text-5xl leading-snug'>
          Find the perfect &nbsp; <i>Freelance</i><br/> services for your
          business.
        </h1>
        <div className='flex align-middle'>
          <div className='relative'>
            <input type='text' placeholder='Try building mobile app'
            className='h-14 w-[450px] rounded-l-md pl-10'
            />
          </div>
          <button className='text-lg text-white px-12 rounded-r-md bg-[#1DBF73] font-semibold'>
            Search
          </button>
        </div>
        <div className='flex items-center gap-4 text-white'>
          Popular {" "}
          <ul className='flex gap-5'>
            <li className='border rounded-full hover:bg-white hover:text-black transition-all duration-300 px-3 text-sm py-1 cursor-pointer'>
              Website Design
            </li>
            <li className='border rounded-full hover:bg-white hover:text-black transition-all duration-300 px-3 text-sm py-1 cursor-pointer'>
              Wordpress
            </li>
            <li className='border rounded-full hover:bg-white hover:text-black transition-all duration-300 px-3 text-sm py-1 cursor-pointer'>
              Logo Design
            </li>
            <li className='border rounded-full hover:bg-white hover:text-black transition-all duration-300 px-3 text-sm py-1 cursor-pointer'>
              All Services
            </li>
          </ul>
        </div>
      </div> 
    </div>
  )
}

export default HeroBanner
