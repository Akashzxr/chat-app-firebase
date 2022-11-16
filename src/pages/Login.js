import React, { useEffect, useState } from 'react'
import { NavLink , useNavigate} from 'react-router-dom'
import { FaEnvelope } from "react-icons/fa"
import "./login.css"


function Login() {

   /* const [log,setlog] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if(log==true){
           navigate('/app');
        }
    },[log]) */

  return (
    <div className='login-section'>
        <div className='signin'>
            <FaEnvelope className='signin-logo'/>
            <button  className='signin-btn'>sign in with Google</button>
        </div>
    </div>

  )
}

export default Login