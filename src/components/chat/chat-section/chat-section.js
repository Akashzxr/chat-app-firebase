import "./chatsection.css";
import { doc, onSnapshot,getDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import {db} from "../../../services/firebase"
import { useEffect, useState, useRef } from "react";
import { updatedate } from "../../../redux/Dataslice";

export default function Chatsection(props){
    const {userdetails} = useSelector((state)=>state.data);
    const {user} = useSelector((state)=>state.auth);
    const messagesEndRef = useRef()
    const dispatch = useDispatch();

    const [message,setmessage] = useState(false);
    

    const scrollToBottom = () => {
        
        messagesEndRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }

    useEffect(()=>{

        if(messagesEndRef.current != undefined){
            scrollToBottom();
        }
        
        setmessage(props.message)
        
    },[userdetails,props.message,messagesEndRef.current])

    return(
        <div className="chatsection" >
            {message ?
              <div  className="chat-container">
                 {message[0].map((text)=>
                   <div key={text.id}>
                     {text.userid==user.uid ? 
                       <div className="current-user-text-container" >
                            <span className="current-user-text">{text.message}</span> 
                            <img src={user.profile} />
                       </div>
                        : 
                        <div className="another-user-text-container">
                            <img src={userdetails.profile} />
                            <span className="another-user-text">{text.message}</span>
                        </div>
                     }
                   </div>
                 )} 
                 <div ref={messagesEndRef} style={{width: "20px",height: "20px"}} ></div>
              </div> 
                    : null}
        </div>
    )
}