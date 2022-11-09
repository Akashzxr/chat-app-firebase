import "./header.css"

export default function Header(){
    return(
        <div className="Header">
            <div className="chat-info">
                <div>profile image</div>
                <div className="name-date">
                   <div>Test Room</div>
                   <div>Last message at 27/10 17:27</div>
                </div>
            </div>

            <div>threedot</div>
        </div>
    )
}