import "./chatcard.css";

export default function Chatcard(){
    return(
       <div className="chatcard">
             <div className="chat-details">
                  <div>profile</div>
  
                  <div className="name-message">
                       <div className="name">Testroom</div>
                       <div className="message">hi</div>
                  </div>
             </div>
  
             <div className="date">
                date
             </div>
       </div>
    );
}