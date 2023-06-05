import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroBanner from '@/components/Landing/HeroBanner'
import Companies from '@/components/Landing/Companies'
import PopularServices from '@/components/Landing/PopularServices'
import Everything from '@/components/Landing/Everything'
import Services from '@/components/Landing/Services'
import FiverrBusiness from '@/components/Landing/FiverrBusiness'
import JoinFiverr from '@/components/Landing/JoinFiverr'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <HeroBanner/>
      <Companies/>
      <PopularServices/>
      <Everything/>
      <Services/>
      <FiverrBusiness/>
      <JoinFiverr/>
    </div>
  )
}
