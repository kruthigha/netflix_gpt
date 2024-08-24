import React from 'react'

const VideoTitle = ({overview,original_title}) => {
  return (
    <div className='py-36 px-10 w-screen aspect-video absolute bg-gradient-to-r from-black'>
      <h1 className='text-white font-bold text-3xl '>{original_title}</h1>
      <p className='text-xl text-white w-2/4 '>{overview}</p>
      <div className='flex'>
      <button className='text-black bg-white bg-slate-white hover:bg-opacity-40 m-2 p-2 font-bold rounded-sm'> ► Play</button>
      <button className='text-white bg-gray-700 m-2 p-2 font-bold rounded-sm'>ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
