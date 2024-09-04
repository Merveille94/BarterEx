import ScrollToTop from "../component/ScrollToTop.jsx";
import Navbar from "../component/Navbar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../component/Footer.jsx";

// Here is the layout that we will use in all our pages
const MainLayout = () => {
    return (
        <>
            {/*as you can see scroll to the top is above to do what is suppose to when the time comes*/}
            <ScrollToTop />
            <Navbar />
            <Outlet/>
            <Footer />
        </>
    )
}
export default MainLayout
