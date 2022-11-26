import "./userbar.css";
import { useSelector } from "react-redux";
import {FaEllipsisH,FaPlus,FaMoon} from 'react-icons/fa'
import { Adduser } from "./Adduser";

export default function Userbar(){
   const { user } = useSelector((state)=>state.auth)

    return(
       <div className="userbar">
            <div className="user-sec">
               <img src={user.profile} alt="user" referrerPolicy="no-referrer"/>
               <div className="chat-heading">Chats</div>
             </div>

             <div className="icon-sec">
               <button className="more-btn"><FaEllipsisH/></button>
               <button className="add-btn"><FaPlus/></button>
                  <Adduser/>
               <button className="theme-btn"><FaMoon/></button>
             </div>
       </div>
    );
}