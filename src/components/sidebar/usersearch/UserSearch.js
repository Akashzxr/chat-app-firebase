import "./UserSearch.css";

function UserSearch() {
  return (
    <div className="UserSearch-container">

        <div className="UserSearch">
            <input type={"text"} placeholder="search"/>
            <div className="users-container"></div>
            <button className="cancel-btn">Cancel</button>
        </div>
       
    </div>
  )
}

export default UserSearch