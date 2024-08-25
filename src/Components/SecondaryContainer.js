import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
 const Movies = useSelector((store)=>store.movies)
 if (!Movies) return;
 console.log("SecCont=",Movies);
  return (
    <div className='bg-black w-full'>
      <div className='-mt-52 bg-transparent z-20 relative '>
      <MovieList movies={Movies?.topratedMovies} title="Top Rated"/>
      <MovieList movies={Movies?.popularMovies} title="Popular"/>
      <MovieList movies={Movies?.upcomingMovies} title="Upcoming"/>
      <MovieList movies={Movies?.nowPlayingMovies} title="Now Playing"/>
      </div>
    </div>
  )
}
export default SecondaryContainer
