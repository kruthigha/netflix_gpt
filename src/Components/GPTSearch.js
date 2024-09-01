import React from 'react'
import SearchBarGPT from './searchBarGPT'
import SuggestedMoviesGPT from './suggestedMoviesGPT'


import { Netflix_BackGround } from '../utils/constants'
export function GPTSearch(){

  return(
    <div className='relative h-screen'>
    <img src={Netflix_BackGround} alt='background-image'  className='absolute inset-0 w-full h-full object-cover -z-10'/>
  
    <SearchBarGPT />
    <SuggestedMoviesGPT />
    </div>
  
  )

}

export default GPTSearch

