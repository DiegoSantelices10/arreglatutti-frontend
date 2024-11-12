import { AvatarImage, Avatar as AvatarUI } from '@/components/ui/avatar'
import React, { FC } from 'react'

interface IAvatarProps {
    image: string
}
const Avatar: FC<IAvatarProps> = (props) => {
    const {
        image
    } = props

    return (
        <AvatarUI
            className='bg-white'
        >
            <AvatarImage src={image} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </AvatarUI>
    )
}

export default Avatar