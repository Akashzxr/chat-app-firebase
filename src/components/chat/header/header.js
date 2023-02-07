import "./header.css";
import {useSelector} from "react-redux";
import { useEffect } from "react";
import {FaEllipsisH,FaArrowLeft} from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { sidebardisplaytrue } from "../../../redux/Dataslice";
import {getDoc,doc,onSnapshot,collection} from "firebase/firestore";
import { db } from "../../../services/firebase";

export default function Header(){

    const {userdetails} = useSelector((state)=>state.data);
    const {date} = useSelector((state)=>state.data);
    const currentuser = useSelector((state)=>state.auth.user);
    const dark = useSelector((state)=>state.data.darktheme);
    const dispatch =  useDispatch();

   

    const handleclick=()=>{
       dispatch(sidebardisplaytrue());
    }

   
    useEffect(()=>{
        //console.log(userdetails);

    },[])

    return(
        <div className="Header" style={{borderBottomColor: dark ? "#282727" : null}}>
            <div className="chat-info">
            <button className="chat-header-backbutton" onClick={handleclick}><FaArrowLeft/></button>
                <img src={userdetails.profile}/>
                <div className="name-date">
                   <div className="chat-header-username">{userdetails.username}</div>
                   <div className="chat-header-date">Last message at {date}</div>
                </div>
            </div>

           <button className="chat-header-morebutton" ><FaEllipsisH/></button>
        </div>
    )
}