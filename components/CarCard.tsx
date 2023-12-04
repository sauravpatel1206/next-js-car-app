"use client";
import { CarProps } from '@/types';
import React from 'react'
import { CustomButton } from './CustomButton';
import Image from 'next/image';

interface CarCardProps {
    car:CarProps
}

const handleScoll=()=>{
    alert("Your car is booking process stated! We will get back to soon....")
}
export const CarCard = ({car}:CarCardProps) => {
    const {city_mpg,year,make,model,transmission,drive} =car;
  return (
    <div className='car-card group m-10' key={Math.random()}>
        <div className='car-card__content '>
      <h2 className='car-card__content-title'>
        {make} {model}
      </h2>
        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span>
                100
            </span>
        </p>
        <div className='relative w-full h-40 my-3 object-contain'>
         <Image src="/hero.png" alt="image" fill priority className='object-contain'/>
        </div>

        <div className='relative flex w-full mt-2'>
            <div className='flex  w-full justify-between text-gray-50'>
           <div className=''>

           <Image src="/steering-wheel.svg" alt='fdsf' width={20} height={20} />
            <p className='text-black'> {transmission=="a"?"Automatic":"Manual"}</p>
           </div>

           <CustomButton
            title="Book Now"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScoll}
          />

            </div>

        </div>
    </div>
  )
}
