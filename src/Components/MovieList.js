import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6 pr-1 overflow-x-scroll scrollbar-hide">
      <h1 className="text-xl text-white py-6">{title}</h1>
      <div className="inline-flex space-x-4">
        {movies && movies.map((movie) => (
          <MovieCard key={movie.id} poster={movie.poster_path} />
        ))}
      </div> 
    </div>
  );
};

export default MovieList;
