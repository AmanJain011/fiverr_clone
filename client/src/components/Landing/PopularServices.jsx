import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

function PopularServices() {
  const router = useRouter()

  const popularServicesData = [
    { name: "Ai Artists", label: "Add talent to AI", image: "/service1.png" },
    { name: "Logo Design", label: "Build your brand", image: "/service2.jpeg" },
    { name: "Wordpress", label: "Customize your site", image: "/service3.jpeg" },
    { name: "Voice Over", label: "Share your message", image: "/service4.jpeg" },
    { name: "Social Media", label: "Reach more customers", image: "/service5.jpeg" },
    { name: "SEO", label: "Unlock growth online", image: "/service6.jpeg" },
    { name: "Illustration", label: "Color your dreams", image: "/service7.jpeg" },
    { name: "Translation", label: "Go global", image: "/service8.jpeg" },
  ]

  return (
    <div className='mx-20 my-16'>
      <h2 className='text-4xl font-bold text-[#404145] mb-5'>
        Popular Services
      </h2>
      <ul className='flex justify-center gap-16 flex-wrap'>
        {popularServicesData.map(({name, label, image})=>(
          <li key={name} className='cursor-pointer relative' 
          onClick={()=>router.push(`/search?q=${name.toLocaleLowerCase()}`)}>
            <div className='absolute z-10 left-5 top-4 text-white'>
              <span>{label}</span>
              <h6 className='font-extrabold text-2xl'>{name}</h6>
            </div>
            <div className='h-80 w-72 border relative'>
              <Image alt='service' fill src={image}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PopularServices
