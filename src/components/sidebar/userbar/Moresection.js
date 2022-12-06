import {FaSignOutAlt} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/Authslice";

export const Moresection = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlelogout=()=>{
        dispatch(logout());
        window.localStorage.clear();
        navigate('/');
    }

  return (
    <div className="more-container">
        <button className="logout-btn" onClick={handlelogout}>
            <FaSignOutAlt/>
            logout
        </button>
    </div>
  )
}
