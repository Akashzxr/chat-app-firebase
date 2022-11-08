import Userbar from "./userbar/userbar";
import Chatsearch from "./chatsearch/chatsearch";
import Chatcard from "./chats/chatcard";
import "./sidebar.css";

export default function Sidebar(){
    return(
       <div className="sidebar" >
           <Userbar/>
           <Chatsearch/>
           <Chatcard/>
       </div>
    );
}