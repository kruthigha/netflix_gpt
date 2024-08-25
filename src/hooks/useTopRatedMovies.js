import React from 'react'
import { useEffect } from 'react'
import { API_OPTIONS, API_TopRated_URL, API_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies, addTopratedMovies } from '../utils/moviesSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies =async()=>{
      const data = await fetch(API_TopRated_URL,API_OPTIONS);
      const json = await data.json();
      console.log("RopRated",json.results);
      dispatch(addTopratedMovies(json.results))
    }
    useEffect(()=>{
         getNowPlayingMovies();
    },[])
  
}
export default useTopRatedMovies
