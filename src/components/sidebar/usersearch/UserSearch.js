import "./UserSearch.css";
import { useDispatch, useSelector } from 'react-redux';
import { canceluserbox } from "../../../redux/Dataslice";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, doc, updateDoc, serverTimestamp,setDoc } from "firebase/firestore";
import {db} from "../../../services/firebase"

function UserSearch() {
    const currentuser = useSelector((state)=>state.auth.user)
    const [username,setusername]=useState();
    const [user,setuser] = useState();
    const dispatch = useDispatch();
    

    const handleKeydown=async(e)=>{
      if(e.key=='Enter'){
        let array = [];
        // Create a reference to the users collection
        const usersRef = collection(db, "users");
        // Create a query against the collection.
        const q = query(usersRef, where("displayName", "==", username));

        try{
          const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              array.push(doc.data());
              //console.log(doc.data())
              setuser(array);
              //console.log(user)
            });
         }catch(error){
           if(error)
           {
             console.log("error");
           }
         }
     }
    }

    const handleclick= async(user)=>{
      let combinedId;
      combinedId = currentuser.uid > user.uid ? currentuser.uid+user.uid : user.uid+currentuser.uid;
      console.log(combinedId)
      
      await updateDoc(doc(db, "users-chat", currentuser.uid), {
        [combinedId]:{
          userinfo:{
            name:user.displayName,
            profile:user.photoURL,
            uid: user.uid,
          },
          date:serverTimestamp(),
        }
      });

      await updateDoc(doc(db, "users-chat", user.uid), {
        [combinedId]:{
          userinfo:{
            name: currentuser.userName,
            profile: currentuser.profile,
            uid: currentuser.uid,
          },
          date:serverTimestamp(),
        }
      });

      await setDoc(doc(db, "chat", combinedId),{});

      dispatch(canceluserbox());

    }

    useEffect(()=>{
      
    },[user,username])


  return (
    <div className="UserSearch-container">

        <div className="UserSearch">
            <input type={"text"} placeholder="search" onKeyDown={handleKeydown} onChange={(e)=>{setusername(e.target.value)}}/>
            <div className="users-container">

              {user ? 
              <div className="results-container">
                {user.map((users)=>
                <div className="result-details-container" key={users.uid} onClick={()=>handleclick(users)}>
                <img className="result-user-img" src={users.photoURL} referrerPolicy="no-referrer"/>
                <span>{users.displayName}</span>
                </div>
                )}
              </div>
                 
              : null}

            </div>
            <button className="cancel-btn" onClick={()=>{dispatch(canceluserbox())}}>
                Cancel
            </button>
        </div>
       
    </div>
  )
}

export default UserSearch