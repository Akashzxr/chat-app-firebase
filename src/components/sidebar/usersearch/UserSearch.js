import "./UserSearch.css";
import { useDispatch } from 'react-redux';
import { canceluserbox } from "../../../redux/Dataslice";

function UserSearch() {
    const dispatch = useDispatch();

  return (
    <div className="UserSearch-container">

        <div className="UserSearch">
            <input type={"text"} placeholder="search"/>
            <div className="users-container"></div>
            <button className="cancel-btn" onClick={()=>{dispatch(canceluserbox())}}>
                Cancel
            </button>
        </div>
       
    </div>
  )
}

export default UserSearch