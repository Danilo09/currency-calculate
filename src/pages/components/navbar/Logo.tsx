import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
const router = useRouter

return (
    <Image 
        alt='Logo'
        className=''
        height='20'
        width='163'
        src='/images/Logo.png'
    />
    
)
}

export default Logo