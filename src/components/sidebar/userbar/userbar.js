import "./userbar.css";

export default function Userbar(){
    return(
       <div className="userbar">
            <div className="user-sec">
               <div>user image</div>
               <div>Chats</div>
             </div>

             <div className="icon-sec">
                <div>3dot</div>
                <div>plus</div>
                <div>theme</div>
             </div>
       </div>
    );
}