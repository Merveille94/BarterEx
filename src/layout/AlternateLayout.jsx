import ScrollToTop from "../component/ScrollToTop.jsx";
import {Outlet} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Navigation from "../component/Navigation.jsx";

// Here is the layout that we will use in all our pages
const MainLayout = () => {
    return (
        <>
            {/*as you can see scroll to the top is above to do what is supposed to when the time comes*/}
            <Toaster/>
            <ScrollToTop />
            <Navigation/>
            <Outlet/>
        </>
    )
}
export default MainLayout
