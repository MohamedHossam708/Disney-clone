import { getDescoverMovies } from '@/lib/getMovies'
import React from 'react'
import Banner from './Banner'

type Props = {
    id?:string,
    keywords?:string
}

export default async function BannerWrapper({id , keywords}:Props) {
const movies =await getDescoverMovies(id , keywords)
  return (
    <Banner movies={movies} />
  )
}
