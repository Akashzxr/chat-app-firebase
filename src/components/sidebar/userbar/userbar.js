import "./userbar.css";
import { useSelector } from "react-redux";
import {FaEllipsisH,FaPlus,FaMoon} from 'react-icons/fa'

export default function Userbar(){
   const { user } = useSelector((state)=>state.auth)

    return(
       <div className="userbar">
            <div className="user-sec">
               <img src={user.profile}/>
               <div>Chats</div>
             </div>

             <div className="icon-sec">
                <FaEllipsisH/>
                <FaPlus/>
                <FaMoon/>
             </div>
       </div>
    );
}