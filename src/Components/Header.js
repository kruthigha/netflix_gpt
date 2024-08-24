
import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LOGO, PHOTO_AVATAR } from '../utils/constants';

const Header = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const user = useSelector((store)=> store.user)
 const auth = getAuth();
 useEffect(()=>{
  const unSubscribe =onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, email, displayName } = user.uid;
      console.log(uid,email,displayName)
      dispatch(addUser({uid:uid,email:email,displayName : displayName,photoUrl:PHOTO_AVATAR}))
      navigate('/browse');
      // ...
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());
      navigate('/');
    }
  });
  return () => unSubscribe();
},[]);
const handleSignOut =()=>{
  signOut(auth).then(() => {
    console.log("signing out")
  }).catch((error) => {
    // An error happened.
    console.log("Error occured while signing out")
  });
}
  return (
    <div className='absolute bg-gradient-to-b from-black z-20 w-full flex justify-between'>
      <img className='w-40 px-2 py-4' src={LOGO} alt="Netflix-Logo"/>
   
    {user &&<div className='flex m-2 p-4 '>
      <img src={user.photoUrl} alt="userIcon" className='w-12  h-12'/>
      <button className='text-white bg-red-700 p-2 m-2 rounded-sm w-3/6 h-10 ' onClick={handleSignOut}>SignOut</button>
      </div>
    }
    </div>
  )
}

export default Header
