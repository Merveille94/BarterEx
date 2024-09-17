import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import InstructionPage from "./pages/InstructionPage.jsx";
import ProductSectionPage from "./pages/ProductSectionPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import AlternateLayout from "./layout/AlternateLayout.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<LandingPage/>}/>
                <Route path="/signup" element={<SignInPage/>}/>
                <Route path='/instructions' element={<InstructionPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
            </Route>
            <Route path='/' element={<AlternateLayout/>}>
                <Route path='/AddProduct' element={<CreatePage/>}/>
                <Route path='/dashboard' element={<ProductSectionPage/>}/>
            </Route>
            <Route path='*' element={<NotFoundPage/>}/>
        </>
    )
);



const App = () => {
    return <RouterProvider router={router}/>
}
export default App
