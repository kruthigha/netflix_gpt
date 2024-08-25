import React from 'react'
import { useEffect } from 'react'
import { API_OPTIONS, API_Upcoming_URL, API_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies, addUpcomingMovies } from '../utils/moviesSlice';
const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies =async()=>{
      const data = await fetch(API_Upcoming_URL,API_OPTIONS);
      const json = await data.json();
      console.log(json.results);
      dispatch(addUpcomingMovies(json.results))
    }
    useEffect(()=>{
         getNowPlayingMovies();
    },[])
}

export default useUpcomingMovies
