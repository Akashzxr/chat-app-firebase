import "./chatsection.css";
import { doc, onSnapshot,getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import {db} from "../../../services/firebase"
import { useEffect, useState, useRef } from "react";

export default function Chatsection(){
    const {userdetails} = useSelector((state)=>state.data);
    const {user} = useSelector((state)=>state.auth);
    const messagesEndRef = useRef()

    const [message,setmessage] = useState(false);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behavior: "smooth"});
        console.log("hi");
      }

    const fetchtext=async()=>{
        onSnapshot(doc(db, "chat", userdetails.combinedid), (doc) => {
            //console.log("Current data: ", doc.data());
            const result = Object.values(doc.data());
            
            if(result.length!=0){
                setmessage(result);
            }
            
        });
    }
    
    useEffect(()=>{
        
        if(userdetails){
            fetchtext();
        }

        if(messagesEndRef.current != undefined){
            scrollToBottom();
        }
        
    },[userdetails])

    return(
        <div className="chatsection" onClick={fetchtext}>
            {message ?
              <div className="chat-container">
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
                 <div ref={messagesEndRef}></div>
              </div> 
            : null}
        </div>
    )
}