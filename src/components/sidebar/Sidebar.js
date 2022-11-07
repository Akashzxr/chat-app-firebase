import Userbar from "./userbar/userbar";
import Chatsearch from "./chatsearch/chatsearch";
import "./sidebar.css";

export default function Sidebar(){
    return(
       <div className="sidebar" >
           <Userbar/>
           <Chatsearch/>
       </div>
    );
}