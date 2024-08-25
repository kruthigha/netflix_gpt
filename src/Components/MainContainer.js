import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return; //early return at null stage
  let index = Math.floor(Math.random() * movies.length);
  let mainMovie = movies[index];
  console.log("MOVIE=", movies, mainMovie);
  const { overview, original_title,id} = mainMovie;
  return (
    <div>
      <VideoTitle original_title={original_title} overview={overview} id={id} />
      <VideoBackground id={id}/>
    </div>
  );
};

export default MainContainer;
