import Image from 'next/image'
import React, { FC } from 'react'

const Header: FC = () => {
    return (
        <div className='bg-primary p-3'>
            <div className="w-80 max-w-full px-8">
                <Image
                    src="/images/logo-aquiles.png"
                    alt="logo"
                    width={160}
                    height={160}
                />
            </div>
        </div>
    )
}

export default Header