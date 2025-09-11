import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { albumData } from "../../utils/data/musicData";

const DisplaySection = () => {
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

    return (
        <div ref={displayRef} className="custom-scrollbar w-[100%] m-2 p-6 pt-4 bg-card text-foreground overflow-auto lg:w-[75%] lg:ml-0">
            <Outlet/>
        </div>
    )
}

export default DisplaySection;