import "./chat.css";
import Header from "./header/header";
import Chatsection from "./chat-section/chat-section";
import Footer from "./footer/footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Chat(){
    const {userdetails,sidebardisplay} = useSelector((state)=>state.data);
    let mobile = window.innerWidth<600 ? true : false;
    
    
    useEffect(()=>{
        mobile = window.innerWidth<600 ? true : false;
        console.log(mobile);
    },[window.innerWidth,mobile]);

    return(
        <div className="chat" style={{display: mobile ? sidebardisplay ? "none" : "flex" : "flex"}}>
            
                {userdetails ?
                <div className="container">
                   <Header/>
                   <Chatsection/>
                   <Footer/> 
                </div> 
                : null}
               
        </div>
    );
}