import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';





const Body = () => {
  const dispatch = useDispatch();
  const appRouter =createBrowserRouter([
    {
    path : '/',
    element : <Login />,
   },
   {
    path : '/browse',
    element : <Browse />,
   }
])
const auth = getAuth();
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const {uid, email, displayName } = user.uid;
      dispatch(addUser({uid:uid,email:email,displayName : displayName}))
      // ...
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());
    }
  });
},[]);
  return (
    <div>
    <RouterProvider router ={appRouter}/>
    </div>
  )
}

export default Body
