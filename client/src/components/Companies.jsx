import Image from 'next/image'
import React from 'react'

function Companies() {
  return (
    <div className='flex items-center justify-center text-2xl text-gray-400 font-bold min-h-[11vh]'>
      Trusted by: &nbsp;
      <ul className='flex gap-10 justify-center ml-10'>
        {[1, 2, 3, 4, 5].map((num) => (
          <li key={num} className='h-[4.5rem] w-[4.5rem] relative'>
            <Image alt='trusted brands' fill src={`/trusted${num}.png`}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Companies
