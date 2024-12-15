import { Movie } from '@/Types'
import React from 'react'
import Image from 'next/image';
import getImagePath from '@/lib/getImagePath';

type Genre={
  id:number,
  name:string
}

export default async function MovieDetailsCard({movie}:{movie:any}) {


  return (
    
   <div className=' w-full flex flex-col justify-center items-center   mt-20    '>
        <div className=' w-3/4'>
            <Image
            className='w-fit min-w-full lg:min-full h-65 object-cover object-center 
            shadow-md shadow-gray-900  drop-shadow-xl rounded-sm'
            src={getImagePath(movie.backdrop_path || movie.poster_path , true)}
            alt={movie.original_title}
            width={1920}
            height={1080}
            key={movie.id}
            />
        </div>
        
        <div className='w-3/4 mt-4 shadow-lg box-border p-5 rounded-md'>

        <div className='Movie_title mt-3'>
                <h2 className='font-bold text-black dark:text-white'>Movie Title</h2>
                <hr />
                <p className='font-semibold text-black dark:text-white'>{movie.original_title}</p>
            </div>
        <div className='Movie_Date mt-3'>
            <h2 className='font-bold text-black dark:text-white'>Movie Title</h2>
            <hr />
            <p className='font-semibold text-black dark:text-white'>{movie.release_date}</p>
        </div>
            <div className='Movie_genre mt-3'>
              <h2 className='font-bold text-black dark:text-white'>Genres</h2>
              <hr />
                <div className='flex'>
                  {movie.genres.map((genre:Genre)=>(
                      <div className='font-semibold mx-1'>{genre.name}</div>
                    
                  ))}
                </div>
            </div>
           
            <div className='Movie_Story mt-3'>
            <h2 className='font-bold text-black dark:text-white'>Tagline</h2>
            <hr/>
            <p className='font-semibold text-black dark:text-white'>{movie.tagline}</p>
            </div>
            <div className='Movie_OverView mt-3'>
            <h2 className='font-bold text-black dark:text-white'>overview</h2>
            <hr/>
            <p className='font-semibold text-black dark:text-white'>{movie.overview}</p>
            </div>
            <div className='Movie_Production mt-3 '>
                <h2 className='font-bold text-black dark:text-white mt-3'>Production Companies</h2>
                <hr/>
                <div className='flex items-center justify-center'>
                {movie.production_companies.map((company:any)=>(
                    <div key={company.id} className=' px-5 flex flex-col items-center justify-center mt-7'>
                    <Image 
                      src={getImagePath(company.logo_path)}
                      alt={company.name} 
                      width={60}
                      height={60}/>
                    <p className='font-semibold mt-2 text-black dark:text-white'>{company.name}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
        

    </div>
    
   
  )
}
