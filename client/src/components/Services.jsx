import { categories } from '@/utils/categories'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

function Services() {
  const router=useRouter()
  
  return (
    <div className='mx-20 my-16'>
      <h2 className='text-4xl font-bold text-[#404145] mb-10'>
        You need it, we&apos;ve got it
      </h2>
      <ul className='grid grid-cols-5 gap-10'>
        {categories.map(({name, logo})=>(
          <li className='flex flex-col items-center justify-center hover:shadow-2xl cursor-pointer 
          border-2 hover:border-[#1DBF73] border-transparent transition-all duration-500'
          onClick={()=>router.push(`/search?category=${name}`)}>
            <Image src={logo} alt='category' width={50} height={50}/>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Services
