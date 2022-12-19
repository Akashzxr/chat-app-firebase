import "./chatcard.css";
import {collection,query, getDoc,doc} from "firebase/firestore";
import { db } from "../../../services/firebase";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function Chatcard(){

   const currentuser = useSelector((state)=>state.auth.user);
   const adduser = useSelector((state)=>state.data.adduser);
   let array = [];
   const [users,setusers] = useState();
  
   const getdata=async()=>{
      const docRef = doc(db, "users-chat", currentuser.uid);
      const docSnap = await getDoc(docRef);
      
      
      if (docSnap.exists()) {
       const result = Object.values(docSnap.data())
        //console.log("Document data:", docSnap.data());
        console.log(result);
        //array.push(docSnap.data());
        setusers(result);
       // console.log(users);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
   }

   useEffect(()=>{
     getdata();
   },[adduser])
    return(
       <div >
         {users ? 
         <div>
          {users.map((users)=>
         <div className="chatcard" key={users.userinfo.uid}>
           <div className="chat-details">
               <img src={users.userinfo.profile} referrerPolicy="no-referrer"/>
    
               <div className="name-message">
                    <div className="name">{users.userinfo.name}</div>
                    <div className="message">hi</div>
               </div>
            </div>

            <div className="date">
               date
            </div>
         </div>
         )}
         </div> : null}

             
       </div>
    );
}