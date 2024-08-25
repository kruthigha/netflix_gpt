import React from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({ poster }) => {
  return (
    <div className='w-48 m-1 h-60'> {/* Further adjusted width and height */}
      <img alt="movie_poster" src={IMG_CDN + poster} className="w-full h-full object-cover rounded-sm"/> {/* Added rounded corners */}
    </div>
  );
}

export default MovieCard;
