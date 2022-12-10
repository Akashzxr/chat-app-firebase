import "./UserSearch.css";
import { useDispatch } from 'react-redux';
import { canceluserbox } from "../../../redux/Dataslice";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../../../services/firebase"

function UserSearch() {
    const [username,setusername]=useState();
    const [user,setuser] = useState();
    const dispatch = useDispatch();

    const handleKeydown=async(e)=>{
      if(e.key=='Enter'){
        // Create a reference to the users collection
        const usersRef = collection(db, "users");
        // Create a query against the collection.
        const q = query(usersRef, where("displayName", "==", username));

        try{
          const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              console.log(doc.data())
              setuser(doc.data());
            });
         }catch(error){
           if(error){
             console.log("error");
           }
         }
     }
    }

    useEffect(()=>{

    },[user,username])


  return (
    <div className="UserSearch-container">

        <div className="UserSearch">
            <input type={"text"} placeholder="search" onKeyDown={handleKeydown} onChange={(e)=>{setusername(e.target.value)}}/>
            <div className="users-container">

              {user ? 
                <div className="search-result">
                    <img className="result-user-img" src={user.photoURL}/>
                    <span>{user.displayName}</span>
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