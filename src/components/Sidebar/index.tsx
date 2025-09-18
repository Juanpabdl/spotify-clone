import { ArrowRight, Home, LibraryBig, Plus, Search } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate();

    return (
        <div className="w-[25%] h-full p-2 flex-col gap-2 text-foreground hidden lg:flex">
            <div className="bg-card h-[20%] rounded flex flex-col justify-around">
                <div className="container flex items-start pl-8 cursor-pointer">
                    <ThemeToggle/>
                </div>
                <div onClick={() => navigate('/')} className="container flex items-center gap-3 pl-8 cursor-pointer">
                    <Home className="w-5 h-5 stroke-2"/>
                    <p className="font-bold">Home</p>
                </div>
                <div className="container flex items-center gap-3 pl-8 cursor-pointer">
                    <Search className="w-5 h-5 stroke-2"/>
                    <p className="font-bold">Search</p>
                </div>
            </div>
            <div className="bg-card h-[80%] rounded">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <LibraryBig className="w-8 h-8 stroke-2"/>
                        <p>Your Library</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <ArrowRight className="w-5 h-5"/>
                        <Plus className="w-5 h-5"/>
                    </div>
                </div>
                <div className="p-4 m-2 bg-background rounded font-semibold flex flex-col items-start justify-start gap-1">
                    <h1>Create Your First Playlist</h1>
                    <p className="font-light">It´s easy, we´ll help you!</p>
                    <button className="spoty-btn text-[15px] mt-4">Create Playlist</button>
                </div>
                <div className="p-4 m-2 bg-background rounded font-semibold flex flex-col items-start justify-start gap-1 mt-4">
                    <h1>Find some Podcast to Follow</h1>
                    <p className="font-light">We'll keep you updated!</p>
                    <button className="spoty-btn text-[15px] mt-4">Browse Podcast</button>
                </div>
            </div>
        </div>
    )
}

export default SideBar;