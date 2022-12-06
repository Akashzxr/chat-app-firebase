import {FaUser,FaUsers} from "react-icons/fa"
import { useDispatch } from "react-redux";
import { useradd } from "../../../redux/Dataslice";


export const Adduser = () => {
  const dispatch = useDispatch();
  
  return (
    <div className="add-user-container">
        <button className="add-private-btn" onClick={()=>{dispatch(useradd())}}>
            <FaUser/>
            private
        </button>

        <button className="add-public-btn">
           <FaUsers/>
            public
        </button>
    </div>
  )
}
