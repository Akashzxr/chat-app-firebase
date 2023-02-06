import "./footer.css";
import {IoSendSharp,IoHappy} from "react-icons/io5";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {increment,doc, updateDoc, serverTimestamp,setDoc,arrayUnion } from "firebase/firestore";
import { db } from "../../../services/firebase";
import {v4 as uuidv4} from "uuid";


export default function Footer(){
    const {userdetails} = useSelector((state)=>state.data);
    const currentuser = useSelector((state)=>state.auth.user)
    const [text,settext] = useState("");

    const handleclick=async()=>{
        settext("");
        const uuid = uuidv4();
        await updateDoc(doc(db, "chat", userdetails.combinedid),{
             message: arrayUnion({
                   id: uuid,
                   userid: currentuser.uid,
                   message: text,
            })
          });

        let combinedId = userdetails.combinedid;
     //updating the last message
        await updateDoc(doc(db, "users-chat", currentuser.uid), {
            [combinedId+".lastmessage"]: text,
            [combinedId+".date"]: serverTimestamp(),
          });
    
          await updateDoc(doc(db, "users-chat", userdetails.uid), {
            [combinedId+".lastmessage"]: text,
            [combinedId+".date"]: serverTimestamp(),
          });     
    }

    const handleKeydown=(e)=>{
      if(e.key=='Enter'){
         handleclick();
      }
    }

    useEffect(()=>{
        //console.log(text);
    },[text])
    return(
        <div className="footer">
            <button className="imoji-btn"><IoHappy style={{width:"23px",height:"23px"}}/></button>
            <input type={"text"} onKeyDown={handleKeydown} onChange={(e)=>settext(e.target.value)} value={text} placeholder="Aa"/>
            <button className="send-btn" onClick={handleclick} ><IoSendSharp style={{width:"23px",height:"23px"}}/></button>
        </div>
    )
}