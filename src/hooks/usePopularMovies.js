import React from 'react'
import { useEffect } from 'react'
import { API_OPTIONS, API_Popular_URL, API_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies,addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
 
    const dispatch = useDispatch();
    const getPopularMovies =async()=>{
      const data = await fetch(API_Popular_URL,API_OPTIONS);
      const json = await data.json();
      console.log(json.results);
      dispatch(addPopularMovies(json.results))
    }
    useEffect(()=>{
        getPopularMovies();
    },[])

}

export default usePopularMovies
