import React, { useEffect, useState } from 'react'
import { NavLink , useNavigate} from 'react-router-dom'
import { FaEnvelope } from "react-icons/fa"
import "./login.css"
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../redux/Authslice'


function Login() {
   const user = useSelector((state)=>state.user);
   const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
           navigate('/app');
        }
    },[user])

  return (
    <div className='login-section'>
        <div className='signin'>
            <FaEnvelope className='signin-logo'/>
            <button onClick={()=>{dispatch(login())}} className='signin-btn'>sign in with Google</button>
        </div>
    </div>

  )
}

export default Login