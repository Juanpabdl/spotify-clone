import Player from "../../components/Player";
import SideBar from "../../components/Sidebar";
import { Outlet } from "react-router-dom"
//import ScrollToTop from "../../components/ScrollToTop";
const Layout = () => {
    return(
        <div className="h-screen bg-background">
            <div className="h-[90%] flex">
                <SideBar/>
                <div className="custom-scrollbar w-[100%] m-2 p-6 pt-4 bg-card text-foreground overflow-auto lg:w-[75%] lg:ml-0">
                    <Outlet/>
                </div>
                {/*<ScrollToTop/>*/}
            </div>
            <Player/>
        </div>
    )
}

export default Layout;