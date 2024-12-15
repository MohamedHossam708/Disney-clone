import { Genres } from '@/Types'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default async function GenreDropdown() {
    const url ="https://api.themoviedb.org/3/genre/movie/list"
    const options :RequestInit={
        method:"GET",
        headers:{
            accept: 'application/json',
            Authorization:`Bearer ${process.env.TMDB_API_KEY}`
        },
        next:{
            revalidate:60 * 60 * 24
        }
    }
    const response = await fetch(url,options)
    const data = await response.json() as Genres
;
    
    
        
    
return (<>
  
  <DropdownMenu>
  <DropdownMenuTrigger className='flex justify-center items-center text-white'>Genre <ChevronDown/></DropdownMenuTrigger>
  <DropdownMenuContent>
    {data.genres.map((genre)=>
         <DropdownMenuItem key={genre.id}>
            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
            {genre.name}
            </Link>
           
            
            
            </DropdownMenuItem>
    )}



  </DropdownMenuContent>

  </DropdownMenu>
  
  
  </>)
}
