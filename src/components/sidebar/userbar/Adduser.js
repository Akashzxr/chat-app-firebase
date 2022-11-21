import {FaUser,FaUsers} from "react-icons/fa"

export const Adduser = () => {
  return (
    <div className="add-user-container">
        <button className="add-private-btn">
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
