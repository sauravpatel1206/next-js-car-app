import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='flex flex-row justify-center w-full items-center'>
        <div className='flex flex-row p-2'>
            <Image 
            src={"/logo.svg"}
            alt='car logo'
            width={118}
            height={18}
            />
            <div className='pl-1'>@2023 CarHub All right Reserverd</div>
        </div>
    </footer>
  )
}
