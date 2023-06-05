import Image from 'next/image'
import React from 'react'

function JoinFiverr() {
  return (
    <div className='mx-32 my-16 border relative'>
      <div className='absolute z-10 top-1/3 left-10'>
        <h4 className='text-white text-5xl mb-10'>
          Suddenly it&apos;s all so <i>doable.</i>
        </h4>
        <button className='border font-medium px-5 py-2 text-base bg-[#1DBF73] border-[#1DBF73] rounded-md text-white' type='button'>
          Join Fiverr
        </button>
      </div>
      <div className='w-full h-96'>
        <Image src='/bg-signup.webp' alt='signup' className='rounded-md' fill/>
      </div>
    </div>
  )
}

export default JoinFiverr
