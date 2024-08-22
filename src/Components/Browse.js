import React from 'react'
import Header from './Header'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Browse = () => {
  const nav = useNavigate();
  const auth = getAuth();
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      nav('/')
    }).catch((error) => {
      // An error happened.
      console.log("Error occured while signing out")
    });
  }
  return (
    <div className=''>
     <div className='absolute bg-gradient-to-b from-black z-20 w-full flex justify-between'>
      <img className='w-40 px-2 py-4' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix-Logo"/>
     <div className='flex m-2 p-4 '>
     <img src="https://tse3.mm.bing.net/th?id=OIP.XQ-com-ULw7aaf_U3BcQ3AAAAA&pid=Api&P=0&h=220" alt="userIcon" className='w-12  h-12'/>
     <button className='text-white bg-red-700 p-2 m-2 rounded-sm w-3/6 h-10 ' onClick={handleSignOut}>SignOut</button>
     </div>
     </div>
     
    </div>
  )
}

export default Browse
