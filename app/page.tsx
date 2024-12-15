import BannerWrapper from "@/components/BannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";

 export default async function Home() {
  const upComingMovies = await getUpcomingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const topPopularMovies = await getPopularMovies()
  return (
      <main className="">
       
        <BannerWrapper/>

        <div className="flex flex-col space-y-2 ">
          <MoviesCarousel movies={upComingMovies}  title="Upcoming"/>
          <MoviesCarousel movies={topRatedMovies} title="TopRated "/>
          <MoviesCarousel movies={topPopularMovies} title="Popular "/>

        </div>
        
      </main>

  );
}
