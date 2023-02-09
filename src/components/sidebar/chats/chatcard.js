import "./chatcard.css";
import {getDoc,doc,onSnapshot} from "firebase/firestore";
import { db } from "../../../services/firebase";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { chatuserdetails,sidebardisplayfalse,updatedate } from "../../../redux/Dataslice";


export default function Chatcard(){

   const currentuser = useSelector((state)=>state.auth.user);
   const chatsearch = useSelector((state)=>state.data.searchinput);
   const adduser = useSelector((state)=>state.data.adduser);
   const dispatch = useDispatch();
   const [users,setusers] = useState();
   const [formatedDate,setformatdate] = useState();

   const mystyle = {
    display: "none",
   };
   
   const changestyle=(user)=>{
      let username = user[1].userinfo.name;
      if(chatsearch != ""){
          if(username.toLowerCase().includes(chatsearch.toLowerCase())==false){
            return(mystyle)
          }
      }
   }
  
   const getdata=async()=>{
      const docRef = doc(db, "users-chat", currentuser.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        onSnapshot(doc(db, "users-chat", currentuser.uid), (doc) => {
         const result = Object.entries(doc.data());
         if(result.length!=0){
             setusers(result);

             //setting the date in format
             /*if(result[0][1].date){
             var date = new Date(result[0][1].date.seconds*1000);
             var DD = date.getDate();
             var MM = date.getMonth() +1;
             var YY = date.getFullYear() -2000;
             var hh = date.getHours();
             var mm = date.getMinutes();
             var format = DD+"/"+MM+"/"+YY+"  "+hh+":"+mm;
             setformatdate(format);
             dispatch(updatedate(format))
             }*/
         }
     });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
   }

   const formated=(users)=>{
        if(users[1].date){
             var date = new Date(users[1].date.seconds*1000);
             var DD = date.getDate();
             var MM = date.getMonth() +1;
             var YY = date.getFullYear() -2000;
             var hh = date.getHours();
             var mm = date.getMinutes();
             var format = DD+"/"+MM+"/"+YY+"  "+hh+":"+mm;
            //dispatch(updatedate(users[1].date.seconds))
             return(format)
        }
   }
   
   
   const handleclick=(user)=>{
      let details={
         username:user[1].userinfo.name,
         profile:user[1].userinfo.profile,
         uid:user[1].userinfo.uid,
         combinedid:user[0],
         date: user[1].date.seconds,
      }
      if(user[1].date){
       // setformatdate(users[1].date.seconds);
      }
      
      dispatch(chatuserdetails(details));
      dispatch(updatedate(user[1].date.seconds));
      dispatch(sidebardisplayfalse());
   }

   useEffect(()=>{
     getdata();
     
   },[adduser,formatedDate,chatsearch])

    return(
       <div >
         {users ? 
         <div>
          {users.map((users)=>
         <div style={changestyle(users)} className="chatcard" key={users[1].userinfo.uid} onClick={()=>handleclick(users)}>
           <div className="chat-details">
               <img src={users[1].userinfo.profile} referrerPolicy="no-referrer"/>
    
               <div className="name-message">
                    <div className="name">{users[1].userinfo.name}</div>
                    <div className="message">{users[1].lastmessage}</div>
               </div>
            </div>

            <div className="date" >
               {formated(users)}
            </div>
         </div>
         )}
         </div> : null}

       </div>
    );
}