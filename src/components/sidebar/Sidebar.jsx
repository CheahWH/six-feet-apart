import "./sidebar.css"
import {RssFeed} from "@mui/icons-material"
import {Chat} from "@mui/icons-material"
import {VideoLibrary} from "@mui/icons-material"
import {Groups} from "@mui/icons-material"
import {Bookmarks} from "@mui/icons-material"
import {QuestionMark} from "@mui/icons-material"
import {Work} from "@mui/icons-material"
import {Event} from "@mui/icons-material"
import {School} from "@mui/icons-material"


export default function Sidebar() {
    return (
        <div className = "sidebar">
            <div className="sidebarWrapper">
                <ul className = "sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItem">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItem">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoLibrary className="sidebarIcon"/>
                        <span className="sidebarListItem">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Groups className="sidebarIcon"/>
                        <span className="sidebarListItem">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmarks className="sidebarIcon"/>
                        <span className="sidebarListItem">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <QuestionMark className="sidebarIcon"/>
                        <span className="sidebarListItem">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className="sidebarIcon"/>
                        <span className="sidebarListItem">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItem">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItem">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend"></li>
                        <img src="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                        <span className = "sidebarFriendName">Joe Biden</span>
                </ul>
            </div>
        </div>
    )
}
   