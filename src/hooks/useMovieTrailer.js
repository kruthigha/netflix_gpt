import React from 'react'
import { useEffect } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailervideo } from '../utils/moviesSlice';


const useMovieTrailer = (id) => {
    const dispatch =useDispatch();
    const url = "https://api.themoviedb.org/3/movie/" + id + "/videos";

    const getVideo = async () => {
      const video = await fetch(url, API_OPTIONS);
      const json = await video.json();
      const trailers = json.results.filter((item) => item.type === "Trailer");
      const trailer = trailers.length ? trailers[1] : json.results[0];
      console.log(trailer);
      dispatch(addTrailervideo(trailer));
    };
    useEffect(() => {
      getVideo();
    }, []);
}

export default useMovieTrailer
