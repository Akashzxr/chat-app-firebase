import "./chat.css";
import Header from "./header/header";
import Chatsection from "./chat-section/chat-section";
import Footer from "./footer/footer";
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { doc, onSnapshot,getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

export default function Chat(){
    const {userdetails,sidebardisplay} = useSelector((state)=>state.data);
    let mobile = window.innerWidth<600 ? true : false;
   

    const [message,setmessage] = useState(false);

    const fetchtext=async()=>{
        onSnapshot(doc(db, "chat", userdetails.combinedid), (doc) => {
            //console.log("Current data: ", doc.data());
            const result = Object.values(doc.data());
            
            if(result.length!=0){
                setmessage(result);
            }
            else{
                setmessage(false);
            }
            
        });
    }
    
    
    useEffect(()=>{
        mobile = window.innerWidth<600 ? true : false;
        if(userdetails){
            fetchtext();
        }
    },[window.innerWidth,mobile,userdetails]);

    return(
        <div className="chat" style={{display: mobile ? sidebardisplay ? "none" : "flex" : "flex"}}>
            
                {userdetails ?
                <div className="container">
                   <Header/>
                   <Chatsection message={message}/>
                   <Footer/> 
                </div> 
                : null}
               
        </div>
    );
}