import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';



const Browse = () => {
  const movies =useNowPlayingMovies();
  //let mainMovie = movies[0]
  return (
    <div className=''>
     <Header />
     <MainContainer />
     <SecondaryContainer />
    </div>
  )
}

export default Browse
