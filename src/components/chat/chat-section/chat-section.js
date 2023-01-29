import "./chatsection.css";
import { doc, onSnapshot,getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import {db} from "../../../services/firebase"
import { useEffect, useState } from "react";

export default function Chatsection(){
    const {userdetails} = useSelector((state)=>state.data);
    const {user} = useSelector((state)=>state.auth);

    const [message,setmessage] = useState(false);

    const fetchtext=async()=>{
        onSnapshot(doc(db, "chat", userdetails.combinedid), (doc) => {
            //console.log("Current data: ", doc.data());
            const result = Object.values(doc.data());
            if(result.length!=0){
                setmessage(result);
                console.log(result)
            }
             
        });
    }
    
    useEffect(()=>{
        if(userdetails){
            fetchtext();
        }
    },[userdetails])

    return(
        <div className="chatsection" onClick={fetchtext}>
            {message ?
              <div className="chat-container">
                 {message[0].map((text)=>
                   <div key={text.id}>
                     {text.userid==user.uid ? 
                       <div className="current-user-text-container">
                        <span className="current-user-text">{text.message}</span> 
                       </div>
                        : 
                        <div className="another-user-text-container">
                            <span className="another-user-text">{text.message}</span>
                        </div>
                     }
                   </div>
                 )} 
              </div> 
            : null}
        </div>
    )
}