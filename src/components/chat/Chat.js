import "./chat.css";
import Header from "./header/header";
import Chatsection from "./chat-section/chat-section";
import Footer from "./footer/footer";

export default function Chat(){
    return(
        <div className="chat">
            <div className="container">
               <Header/>
              <Chatsection/>
              <Footer/>
            </div>
        </div>
    );
}