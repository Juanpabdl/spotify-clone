//import SideBar from "../../components/Sidebar";
import { Outlet } from "react-router-dom"
//import ScrollToTop from "../../components/ScrollToTop";
const Layout = () => {
    return(
        <div className="h-screen bg-background">
            <div className="h-[90%] flex">
                {/*<SideBar/>*/}
                <Outlet/>
                {/*<ScrollToTop/>*/}
            </div>
        </div>
    )
}

export default Layout;