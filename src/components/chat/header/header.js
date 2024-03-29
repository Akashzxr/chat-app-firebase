import "./header.css";
import {useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {FaEllipsisH,FaArrowLeft,FaTrash} from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { sidebardisplaytrue,chatuserdetails } from "../../../redux/Dataslice";
import {getDoc,doc,onSnapshot,collection,deleteField,deleteDoc,updateDoc,arrayUnion,} from "firebase/firestore";
import { db } from "../../../services/firebase";

export default function Header(){

    const {userdetails} = useSelector((state)=>state.data);
    const {date} = useSelector((state)=>state.data);
    const currentuser = useSelector((state)=>state.auth.user);
    const dark = useSelector((state)=>state.data.darktheme);
    const [formatedDate,setdate] = useState("");
    const dispatch =  useDispatch();



    const handleclick=()=>{
       dispatch(sidebardisplaytrue());
    }

    const deletechat=async()=>{
        const combinedid = userdetails.combinedid;
        const chatRef = doc(db, 'chat', combinedid);
        const userdetailsRef = doc(db, "users-chat", userdetails.uid);
        const currentuserRef =  doc(db, "users-chat", currentuser.uid);

        /*await updateDoc(cityRef, {
            "message": deleteField(),
        });*/
        dispatch(chatuserdetails(false));
        dispatch(sidebardisplaytrue());

        await deleteDoc(chatRef);

        await updateDoc(userdetailsRef, {
            [combinedid]: deleteField(),
        });

        await updateDoc(currentuserRef, {
            [combinedid]: deleteField(),
        });
    }

    const formated=(datedata)=>{
        if(datedata){
             var date = new Date(datedata*1000);
             var DD = date.getDate();
             var MM = date.getMonth() +1;
             var YY = date.getFullYear() -2000;
             var hh = date.getHours();
             var mm = date.getMinutes();
             var format = DD+"/"+MM+"/"+YY+"  "+hh+":"+mm;
             setdate(format);
        }
   }
   
    useEffect(()=>{
        console.log(currentuser);
    },[date])

    return(
        <div className="Header" style={{borderBottomColor: dark ? "#282727" : null}}>
            <div className="chat-info">
            <button className="chat-header-backbutton" onClick={handleclick}><FaArrowLeft/></button>
                <img src={userdetails.profile}/>
                <div className="name-date">
                   <div className="chat-header-username">{userdetails.username}</div>
                   <div className="chat-header-date">Last message at {date}</div>
                </div>
            </div>

           <button className="chat-header-morebutton" ><FaEllipsisH/></button>
           <button className="chat-header-delete-btn" onClick={deletechat}><FaTrash/>Delete</button>
        </div>
    )
}