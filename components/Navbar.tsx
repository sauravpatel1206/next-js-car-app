import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CustomButton } from '.'

export const Navbar = () => {
  return (
    <header>
        <nav className='flex justify-between'>
            <Link href={"/"}>
                <Image
                src="/logo.svg"
                alt="car hub logo"
                width={118}
                height={18}
                className='object-contain p-4'
                />
            </Link>

            <CustomButton
            title='Sign In'
            containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
            />
        </nav>
    </header>
    
  )
}
