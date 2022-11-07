import Userbar from "./userbar/userbar";
import "./sidebar.css";

export default function Sidebar(){
    return(
       <div className="sidebar" >
           <Userbar/>
       </div>
    );
}