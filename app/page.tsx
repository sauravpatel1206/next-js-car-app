
import { CarCard, Hero } from '@/components'
import { fetchCar } from '@/utils'
import Image from 'next/image'

export default async function Home() {
  const allCars =await fetchCar();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  console.log("caras",allCars)
  return (
    <main className="overflow-hidden">
   <Hero/>
   <div className='mt-12 padding-x padding-y max-width'>
    <div className='home__taxt-container'>
       <h1>
        Car Catalogue
       </h1>
       <p>Explore the car you might like</p>
    </div>
  
    {
      !isDataEmpty?(
        <section>
         <div className='grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2'>
         {allCars?.map((car,index)=>(
          <CarCard car={car} key={index}/>
         ))}
         </div>
        </section>
      ) :(
        <div>
          <h2 className='text-black text-xl font-bold'>
            Oops,no results!!!
          </h2>
          </div>
      )
    }

   </div>
    </main>
  )
}
