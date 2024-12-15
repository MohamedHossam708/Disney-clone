import { Movie } from "@/Types"
import { Key } from "lucide-react"
import MovieCard from "./MovieCard"
import { cn } from "@/lib/utils"

type Props={
    title:string
    movies: Movie[]
    isVertical?:boolean
}
export default function MoviesCarousel({title , movies , isVertical}: Props) {
  return (<>
    <div className="z-50 ">
        <h2 className="text-xl font-bold px-2 py-2">{title}</h2>

        <div className={cn(" flex space-x-4 overflow-scroll px-5 lg:px-5 py-5 scrollbar-hide", isVertical && "flex-col  space-x-0 space-y-12") }>
           
           {isVertical ? (
            
            movies.map((movie)=>(
                <div key={movie.id}
                className={cn(
                    isVertical &&
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}>
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
                    <div className=" font-bold">
                        {movie.title} ({movie.release_date.split("-")[0]})
                        <hr className="mb-3" />
                        <p>{movies[0].overview}</p>
                    </div>

                </div>




                </div>
            ))


           ) : (

            movies.map((movie)=>(
                <MovieCard key={movie.id} movie={movie} />
            ))
           )}
           
        </div>
   
    </div>


  </>)
}
