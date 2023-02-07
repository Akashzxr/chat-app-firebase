import Userbar from "./userbar/userbar";
import Chatsearch from "./chatsearch/chatsearch";
import Chatcard from "./chats/chatcard";
import "./sidebar.css";
import { useSelector } from "react-redux";


export default function Sidebar(){

    const {sidebardisplay} = useSelector((state)=>state.data);
    const dark = useSelector((state)=>state.data.darktheme);
    let mobile = window.innerWidth<600 ? true : false;
    const theme = {
        borderRight: "1px solid #282727",
     }

    return(
       <div className="sidebar" style={{display: mobile ? sidebardisplay ? "flex" : "none" : "flex",
         borderRightColor: dark ? "#282727" : null}} >
           <Userbar/>
           <Chatsearch/>
           <Chatcard/>
       </div>
    );
}