import Userbar from "./userbar/userbar";
import Chatsearch from "./chatsearch/chatsearch";
import Chatcard from "./chats/chatcard";
import "./sidebar.css";
import { useSelector } from "react-redux";


export default function Sidebar(){

    const {sidebardisplay} = useSelector((state)=>state.data);
    let mobile = window.innerWidth<600 ? true : false;

    return(
       <div className="sidebar" style={{display: mobile ? sidebardisplay ? "flex" : "none" : "flex"}} >
           <Userbar/>
           <Chatsearch/>
           <Chatcard/>
       </div>
    );
}