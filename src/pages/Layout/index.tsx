import Player from "../../components/Player";
import SideBar from "../../components/Sidebar";
import DisplaySection from "../../components/DisplaySection";

const Layout = () => {
    return(
        <div className="h-screen bg-background">
            <div className="h-[90%] flex">
                <SideBar/>
                <DisplaySection/>
            </div>
            <Player/>
            <audio preload="auto"></audio>
        </div>
    )
}

export default Layout;