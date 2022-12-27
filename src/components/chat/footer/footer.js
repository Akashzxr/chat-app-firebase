import "./footer.css";
import {IoSendSharp,IoHappy} from "react-icons/io5";


export default function Footer(){
    return(
        <div className="footer">
            <button className="imoji-btn"><IoHappy style={{width:"23px",height:"23px"}}/></button>
            <input type={"text"} placeholder="Aa"/>
            <button className="send-btn"><IoSendSharp style={{width:"23px",height:"23px"}}/></button>
        </div>
    )
}