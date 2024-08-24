import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidation } from '../utils/Validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [isSigInForm,setIsSingInForm] = useState(true);
  const [err,setErr] = useState(null)
  const email = useRef();
  const pwd = useRef();
  const displayName = useRef();
  const toffleForm =()=>{
    setIsSingInForm((t)=>!t);
  }

  const handleSignIn = async()=>{
     console.log(email.current.value);
     console.log(pwd.current.value);
     const errMsg = checkValidation(email.current.value,pwd.current.value); 
     setErr(errMsg);
     if(errMsg) return;
     if(!isSigInForm){
      // signUp a user
    await createUserWithEmailAndPassword(auth,email.current.value,pwd.current.value)
    .then(
       (res)=>{
     const user = res.user;
     console.log(user)
     }
    ).catch((err)=>{
     // const errorCode = err.code;
      const errorMessage = err.message;
  
      setErr(errorMessage)
    }
    )
     } else{
      signInWithEmailAndPassword(auth,email.current.value,pwd.current.value)
      .then((userCredential) => {
      const user = userCredential.displayName;
      console.log("Succesfully SignedIn!",user)
  })
  .catch((error) => {
    // const errorCode = error.code;
    //const errorMessage = error.message;
    setErr("UserName or Password is not correct!")
  });

     }

  }
  
  return (
    <div >
      <Header />
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_medium.jpg' alt='background-image' />
      <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black p-12 w-3/12 mx-auto right-0 left-0 top-32 bg-opacity-75 '>
        <h1 className='py-2 m-2 font-bold text-white'>{isSigInForm?"SignIn":"SignUp"}</h1>
        {!isSigInForm && <input type="text" ref={displayName} placeholder='Full Name' className='border border-black p-2 m-2 bg-gray-700' />}
        <input ref ={email} type="text"  placeholder='Email Address' className='border border-black p-2 m-2 bg-gray-700' />
        <input ref={pwd} type='text' placeholder='Password' className='border border-black  p-2 m-2 bg-gray-700' />
        {err &&<p className='text-red-700 font-medium px-2'> {err}</p>}
        <button className='text-white bg-red-700 p-2 m-2 rounded-sm w-[200px]' onClick={handleSignIn}>{isSigInForm?"SignIn":"SignUp"}</button>
        <p className='text-white px-2 cursor-pointer'>{isSigInForm?"New to Netflix?":"Already Registered"} <button onClick={toffleForm}>{isSigInForm?"SignUp":"SignIn"}</button></p>
      </form>
      </div> 
    </div>
  )
}

export default Login
