import "./sidebar.css"
import {RssFeed,
    Chat, 
    VideoLibrary, 
    Groups,
    Bookmarks,
    QuestionMark,
    Work,
    Event, 
    School,
} from "@mui/icons-material"
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend";


export default function Sidebar() {
    return (
        <div className = "sidebar">
            <div className="sidebarWrapper">
                <ul className = "sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItem">Feed</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map((u)=>(
                        <CloseFriend key = {u.id} user= {u}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}
   