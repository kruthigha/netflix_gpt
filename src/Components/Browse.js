import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GPTSearch from './GPTSearch';



const Browse = () => {
  const showGPT = useSelector((store)=> store.gpt?.gptBtn)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  //let mainMovie = movies[0]
  return (
    <div >
     <Header />
     {showGPT ?  <GPTSearch /> :
     <>
     <MainContainer />
     <SecondaryContainer />
     </>
     }
    </div>
  )
}

export default Browse
