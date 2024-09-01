import React from 'react'
import langauage from '../utils/languageConstants'
import { useSelector } from 'react-redux'



const SearchBarGPT = () => {
  const userLanguage = useSelector((store)=> store.lang.lang)
  const text = langauage.find((lang)=>{
    return lang.language === userLanguage
  })
  return (
    <div className='flex items-center justify-center -z-30 pt-[10%]'>
      <div className='flex grid-cols-12'>
        <input 
          className='bg-white text-black border border-black p-2 w-80 grid-cols-9' 
          placeholder={text.searchBarPlaceHolder}

        />
        <button className='bg-red-700 text-white rounded-sm ml-2 p-2 grid-cols-3'>{text.searchBTNText}</button>
      </div>
    </div>
  )
}

export default SearchBarGPT
