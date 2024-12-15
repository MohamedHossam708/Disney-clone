"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Movie } from '@/Types'
import React from 'react'
import getImagePath from '@/lib/getImagePath'
import Image from 'next/image'


Autoplay.globalOptions={delay:8000}
export default function Banner({movies}:{movies :Movie[]}) {
    const [emblaRef] = useEmblaCarousel({ loop: true  , duration:100 }, [Autoplay()])

  return (<>
      <div className="embala overflow-hidden relative cursor-pointer" ref={emblaRef}>
          <div className="embla__container flex ">
            {movies.map((movie,index)=>
            
            <div key={movie.id} className="embla__slide flex-full min-w-0 relative">
                <Image
                 src={getImagePath(movie.backdrop_path || movie.poster_path , true)}
                 alt={movie.title}
                 width={1920}
                 height={1080}/>

               <div className='hidden
                    md:inline absolute  mt-0 top-0 pt-28 
                    lg:pt-40  bg-transparent z-20  pt-52 left-0 h-full w-full bg-gradient-to-r from-gray-900/90 to-transparent via-transparent p-10 space-y-5'>
                    <h2 className='text-5xl font-bold max-w-xl z-5 '>{movie.title}</h2>
                    <p className='max-w-xl line-clamp-3 '>{movie.overview}</p>
               </div>
            </div>

            
            )}


          </div>

          <div className='absolute  inset-0 bg-gradient-to-b from-gray-100/0 via-gray-900/25 to-gray-300/25 dark:to-[#1A1C29]'></div>
      </div>
  
  </>)
}
