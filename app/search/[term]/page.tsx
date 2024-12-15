import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{
    term: string
  }>
}

async function page(props: Props) {
  const params = await props.params;

  const {
    term
  } = params;

  console.log(term);




  //  if user didnt enter the term navigate him to not found
  if (!term) notFound();

  // remove any symbol from the param 
  const termToUse = decodeURI(term)

  const movies = await getSearchedMovies(termToUse)
  const popularMovies = await getPopularMovies()




  return (<>
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32  xl:mt-42">
        <h2 className="text-6xl font-bold px-10">Results for {termToUse}</h2>
        <MoviesCarousel title="Movies" movies={movies} isVertical />

        <MoviesCarousel title="You May Also Like" movies={popularMovies} />
      </div>
    </div>



  </>)
}


export default page

