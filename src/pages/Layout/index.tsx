import { useEffect, useRef } from "react";
import Player from "../../components/Player";
import SideBar from "../../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom"
import { albumData } from "../../utils/data/musicData";

const Layout = () => {
    const displayRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const isAlbum = location.pathname.includes('album');
    const albumId = isAlbum ? location.pathname.slice(-1) : '';
    const bgColor = albumData[Number(albumId)].bgColor;

    useEffect(() => {
        if(isAlbum){
            displayRef.current!.style.background = `linear-gradient(${bgColor}, var(--card))`;
        }else{
            displayRef.current!.style.background = `var(--card)`;
        }
    },[bgColor, isAlbum])

    return(
        <div className="h-screen bg-background">
            <div className="h-[90%] flex">
                <SideBar/>
                <div ref={displayRef} className="custom-scrollbar w-[100%] m-2 p-6 pt-4 bg-card text-foreground overflow-auto lg:w-[75%] lg:ml-0">
                    <Outlet/>
                </div>
            </div>
            <Player/>
            <audio preload="auto"></audio>
        </div>
    )
}

export default Layout;