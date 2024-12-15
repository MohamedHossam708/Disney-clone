import { Movie, SearchResults } from "@/Types";

async function fetchFromTMDB(url:URL , cachTime?:number) {
    url.searchParams.set("include_adult", "false");
    url.searchParams.set("include_video", "false");
    url.searchParams.set("sort_by","popularity.desc");
    url.searchParams.set("language","en-US");
    url.searchParams.set("page","1");


    const options :RequestInit = {
        method:"GET",
        headers:{
            accept: 'application/json',
            Authorization:`Bearer ${process.env.TMDB_API_KEY}`
        },

        next:{
            revalidate:cachTime || 60 * 60 * 24
        }
    }


    const response = await fetch(url.toString(),options)
    const data = await response.json() as SearchResults

    return data
}

export async function getUpcomingMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
    const data = await fetchFromTMDB(url)
    return data.results
}

export async function getTopRatedMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
    const data = await fetchFromTMDB(url)
    return data.results
}

export async function getPopularMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/popular");
    const data = await fetchFromTMDB(url)
    return data.results
}


export async function getDescoverMovies(id?:string ,keywords?:string){
    const url = new URL("https://api.themoviedb.org/3/discover/movie")

    keywords&& url.searchParams.set("with_keywords",keywords)
    id&& url.searchParams.set("with_genres",id)

    const data = await fetchFromTMDB(url)
    return data.results

}

export async function getSearchedMovies(term:string) {
    const url = new URL("https://api.themoviedb.org/3/search/movie")
    url.searchParams.set("query",term)

    const data = await fetchFromTMDB(url)
    return data.results
    
}

export async function getMovieDetails( id:number) {
    const url =new URL(`https://api.themoviedb.org/3/movie/${id}`)


    const data = await fetchFromTMDB(url)
    return data 
    
}