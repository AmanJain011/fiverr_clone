import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroBanner from '@/components/HeroBanner'
import Companies from '@/components/Companies'
import PopularServices from '@/components/PopularServices'
import Everything from '@/components/Everything'
import Services from '@/components/Services'
import FiverrBusiness from '@/components/FiverrBusiness'
import JoinFiverr from '@/components/JoinFiverr'

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
