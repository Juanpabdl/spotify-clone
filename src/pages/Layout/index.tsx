import Player from "../../components/Player";
import SideBar from "../../components/Sidebar";
import DisplaySection from "../../components/DisplaySection";
import { usePlayer } from "../../utils/hooks/usePlayer";

const Layout = () => {
    const {audioRef, currentTrack} = usePlayer();

    return(
        <div className="h-screen bg-background">
            <div className="h-[90%] flex">
                <SideBar/>
                <DisplaySection/>
            </div>
            <Player/>
            <audio ref={audioRef} src={currentTrack.file!} preload="auto"></audio>
        </div>
    )
}

export default Layout;