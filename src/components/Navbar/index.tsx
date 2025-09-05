import { ArrowLeft, ArrowRight } from "lucide-react";

const Navbar = () => {
    return(
        <>
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <ArrowLeft className="w-8 h-8 bg-background stroke-foreground p-2 rounded-2xl cursor-pointer"/>
                    <ArrowRight className="w-8 h-8 bg-background stroke-foreground p-2 rounded-2xl cursor-pointer"/>
                </div>
                <div className="flex items-center gap-4">
                    <p className="bg-foreground text-background text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">Explore Premium</p>
                    <p className="bg-background text-[15px] px-3 py-1 rounded-2xl hidden md:block cursor-pointer">Install App</p>
                    <p className="bg-purple-400 text-background w-7 h-7 rounded-full flex items-center justify-center">J</p>{/*Username first letter*/}
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <p className="bg-foreground text-background px-4 py-1 rounded-2xl cursor-pointer">All</p>
                <p className="bg-background  px-4 py-1 rounded-2xl cursor-pointer">Music</p>
                <p className="bg-background  px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>
            </div>
        </>
    )
}

export default Navbar;