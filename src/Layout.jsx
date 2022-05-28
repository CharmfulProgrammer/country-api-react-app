import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"
const Layout = () => {
    return (
        <div>
            <Navbar/>
            <main className="flex justify-center">
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;