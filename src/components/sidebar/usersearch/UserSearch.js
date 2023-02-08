import "./UserSearch.css";
import { useDispatch, useSelector } from 'react-redux';
import { canceluserbox } from "../../../redux/Dataslice";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, doc,getDoc, updateDoc, serverTimestamp,setDoc,onSnapshot } from "firebase/firestore";
import {db} from "../../../services/firebase"

function UserSearch() {
    const currentuser = useSelector((state)=>state.auth.user);
    const dark = useSelector((state)=>state.data.darktheme);
    const [username,setusername]=useState(false);
    const [user,setuser] = useState();
    const dispatch = useDispatch();
    

    const checkusername=(users)=>{
      let paradata = users.displayName;
      if(username){
      if(paradata.toLowerCase().includes(username.toLowerCase())){
        return true;
      }
      else{
        return false;
      }
    }
    }

    const getdata=async()=>{
        let array = [];
        
        // Create a reference to the users collection
        const usersRef = collection(db, "users");
        // Create a query against the collection.
        const q = query(usersRef);

        try{
          const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              array.push(doc.data());
              setuser(array);
            });
         }catch(error){
           if(error)
           {
             console.log("error");
           }
         }
        
    }

    const handleclick= async(user)=>{
      let combinedId;
      combinedId = currentuser.uid > user.uid ? currentuser.uid+user.uid : user.uid+currentuser.uid;
      console.log(combinedId)
      if(currentuser){
      await updateDoc(doc(db, "users-chat", currentuser.uid), {
        [combinedId]:{
          userinfo:{
            name:user.displayName,
            profile:user.photoURL,
            uid: user.uid,
          },
          date:serverTimestamp(),
          lastmessage: null,
          
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
          lastmessage: null,
        }
      });
       
      const docRef = doc(db, "chat", combinedId);
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()==false){
        await setDoc(doc(db, "chat", combinedId),{});
      }
      dispatch(canceluserbox());
    }

    }

    useEffect(()=>{
      getdata();
    },[])


  return (
    <div className="UserSearch-container" style={{color: "black"}}>

        <div className="UserSearch">
            <input type={"text"} placeholder="search"  onChange={(e)=>{setusername(e.target.value)}}/>
            <div className="users-container">

              {user ? 
              <div className="results-container">
                {user.map((users)=>
                <div style={{display: checkusername(users) ? "flex" : "none" }} className="result-details-container" key={users.uid} onClick={()=>handleclick(users)}>
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