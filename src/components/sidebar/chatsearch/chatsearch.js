import "./chatsearch.css";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { chatsearchinput } from "../../../redux/Dataslice";

export default function Chatsearch(){
     
    const dispatch = useDispatch();
    
    const handlechange=(e)=>{
        dispatch(chatsearchinput(e.target.value));
    }

    return(
        <div className="chatsearch">

            <input
            type={"text"} 
            placeholder="Search chat" onChange={handlechange} />

        </div>
    )
}