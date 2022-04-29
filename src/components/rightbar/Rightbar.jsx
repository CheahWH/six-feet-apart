import "./rightbar.css"
import Online from "../online/Online"
import {Users} from "../../dummyData"

export default function Rightbar() {
    return (
        <div className = "rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Donkey Doug</b> and <b>3 other friends</b> have a birthday today!
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u)=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
} 