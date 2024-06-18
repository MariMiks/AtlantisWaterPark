import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export default function NavbarFooter() {
    return (
        <div className="navbarfooter-container">
            <NavBar />
            <Footer />
            <Outlet />
        </div>
    )
}