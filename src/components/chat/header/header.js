import "./header.css";
import {useSelector} from "react-redux";
import { useEffect } from "react";
import {FaEllipsisH} from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { sidebardisplaytrue } from "../../../redux/Dataslice";

export default function Header(){

    const {userdetails} = useSelector((state)=>state.data);
    const dispatch =  useDispatch();

    const handleclick=()=>{
       dispatch(sidebardisplaytrue());
    }

    useEffect(()=>{
        console.log(userdetails);
    },[userdetails])

    return(
        <div className="Header">
            <div className="chat-info">
                <button onClick={handleclick}>back</button>
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