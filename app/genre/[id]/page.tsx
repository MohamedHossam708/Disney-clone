import MoviesCarousel from '@/components/MoviesCarousel';
import { getDescoverMovies } from '@/lib/getMovies';
import React from 'react';

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

export default async function GenrePage({ params, searchParams }: Props): Promise<JSX.Element> {
  const { id } = params;
  const { genre } = searchParams;

  const movies = await getDescoverMovies(id);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h2 className="text-6xl font-bold px-10">Results For {genre}</h2>
        <MoviesCarousel title="" movies={movies} isVertical />
      </div>
    </div>
  );
}
