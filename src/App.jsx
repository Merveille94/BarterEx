import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<LandingPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Route>
    )
);



const App = () => {
    return <RouterProvider router={router}/>
}
export default App
