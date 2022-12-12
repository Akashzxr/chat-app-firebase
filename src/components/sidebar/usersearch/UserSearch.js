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
              <div className="results-container">
                {user.map((users)=>
                <div className="result-details-container" key={users.uid}>
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