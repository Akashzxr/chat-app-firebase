import "./header.css";
import {useSelector} from "react-redux";
import { useEffect } from "react";
import {FaEllipsisH} from 'react-icons/fa'

export default function Header(){

    const {userdetails} = useSelector((state)=>state.data);

    useEffect(()=>{
        console.log(userdetails);
    },[userdetails])

    return(
        <div className="Header">
            <div className="chat-info">
                <img src={userdetails.profile}/>
                <div className="name-date">
                   <div className="chat-header-username">{userdetails.username}</div>
                   <div>Last message at 27/10 17:27</div>
                </div>
            </div>

           <button><FaEllipsisH/></button>
        </div>
    )
}