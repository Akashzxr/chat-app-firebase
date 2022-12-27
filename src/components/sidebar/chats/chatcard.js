import "./chatcard.css";
import {getDoc,doc} from "firebase/firestore";
import { db } from "../../../services/firebase";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { chatuserdetails } from "../../../redux/Dataslice";


export default function Chatcard(){

   const currentuser = useSelector((state)=>state.auth.user);
   const adduser = useSelector((state)=>state.data.adduser);
   const dispatch = useDispatch();
   const [users,setusers] = useState();
  
   const getdata=async()=>{
      const docRef = doc(db, "users-chat", currentuser.uid);
      const docSnap = await getDoc(docRef);
      
      
      if (docSnap.exists()) {
       const result = Object.values(docSnap.data());
       const r = Object.entries(docSnap.data())
       const t = docSnap.data();
       
        //console.log("Document data:", docSnap.data());
       // console.log(r);
        //array.push(docSnap.data());
        setusers(r);
        console.log(users);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
   }

   const handleclick=(user)=>{
      const details={
         username:user[1].userinfo.name,
         profile:user[1].userinfo.profile,
         uid:user[1].userinfo.uid,
         combinedid:user[0],
      }
      dispatch(chatuserdetails(details));
   }

   useEffect(()=>{
     getdata();
   },[adduser])
    return(
       <div >
         {users ? 
         <div>
          {users.map((users)=>
         <div className="chatcard" key={users[1].userinfo.uid} onClick={()=>handleclick(users)}>
           <div className="chat-details">
               <img src={users[1].userinfo.profile} referrerPolicy="no-referrer"/>
    
               <div className="name-message">
                    <div className="name">{users[1].userinfo.name}</div>
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