import ScrollUp from '@/components/custom/ScrollUp'
import React, { FC } from 'react'
import HomeUI from '../components/Home'
import Features from '@/components/Features'
import Contact from '@/components/Contact'
import Testimonials from '@/components/Testimonials'

const Home: FC = () => {


  return (
    <>
      <ScrollUp />
      <HomeUI />
      <Features />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home