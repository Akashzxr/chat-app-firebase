import "./chat.css";
import Header from "./header/header";
import Chatsection from "./chat-section/chat-section";
import Footer from "./footer/footer";
import { useSelector } from "react-redux";

export default function Chat(){
    const {userdetails} = useSelector((state)=>state.data);
    return(
        <div className="chat">
            
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