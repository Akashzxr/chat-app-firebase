import "./userbar.css";
import { useSelector,useDispatch } from "react-redux";
import {FaEllipsisH,FaPlus,FaMoon,FaSun} from 'react-icons/fa'
import { Adduser } from "./Adduser";
import { Moresection } from "./Moresection";
import { darktheme } from "../../../redux/Dataslice";
import { useEffect } from "react";


export default function Userbar(){
   const { user } = useSelector((state)=>state.auth);
   const dark = useSelector((state)=>state.data.darktheme);
   const dispatch = useDispatch();
   
  

   const handleclick = () =>{
       dispatch(darktheme());
   }

   useEffect(()=>{

   },[dark])

    return(
       <div className="userbar" >
            <div className="user-sec">
               <img src={user.profile} alt="user" referrerPolicy="no-referrer"/>
               <div className="chat-heading">Chats</div>
             </div>

             <div className="icon-sec">
               <button className="more-btn"><FaEllipsisH/></button>
                 <Moresection/>
               <button className="add-btn"><FaPlus/></button>
                  <Adduser/>
               <button className="theme-btn" onClick={handleclick}>{dark ? <FaSun/> : <FaMoon/>}</button>
             </div>
       </div>
    );
}