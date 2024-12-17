import ScrollUp from '@/components/custom/ScrollUp'
import React, { FC } from 'react'
import Features from '@/components/Features'
import Contact from '@/components/Contact'
import Testimonials from '@/components/Testimonials'
import HomeUI from '@/components/Home'

const Home: FC = () => {


    return (
        <>
            <ScrollUp />
            <HomeUI />
            <Features />
            <div className='pt-0 bg-white'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#002C53" fillOpacity="1" d="M0,192L80,213.3C160,235,320,277,480,288C640,299,800,277,960,245.3C1120,213,1280,171,1360,149.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </div>
            <Testimonials />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FFFFFFFF" fillOpacity="1" d="M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
            <Contact />
        </>
    )
}

export default Home