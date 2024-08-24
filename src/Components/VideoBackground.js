import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailervideo } from "../utils/moviesSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  const trailerVideo = useSelector((store) => store.movies?.nowPlayingTrailer);
  useMovieTrailer(id);
  return (
    <div>
      <iframe className="w-screen aspect-video h-screen"
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
        allow='autoplay'
      ></iframe>
    </div>
  );
};

export default VideoBackground;
