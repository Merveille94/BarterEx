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


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<LandingPage/>}/>
            <Route path='/AddProduct' element={<CreatePage/>}/>
            <Route path='/create' element={<ProductSectionPage/>}/>
            <Route path='/instructions' element={<InstructionPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Route>
    )
);



const App = () => {
    return <RouterProvider router={router}/>
}
export default App
