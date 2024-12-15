import MovieCard from '@/components/MovieCard';
import MovieDetailsCard from '@/components/MovieDetailsCard';
import { getMovieDetails } from '@/lib/getMovies';
import { Movie } from '@/Types';
import { notFound } from 'next/navigation';
import React from 'react'
type Props = {
    searchParams: Promise<{
      id: number
    }>
  }
export default async function page(props:Props) {
  const searchParams = await props.searchParams;

  const {
    id
  } = searchParams;

  // if user tried to enter a movie that doesnt exist
  if(!id) return notFound()


  const searchedMovie = await getMovieDetails(id)

  console.log(searchedMovie);


  return (<>
  
    <MovieDetailsCard movie={searchedMovie}  />

  </>)
}
