import {Link} from "react-router-dom";


const Banner = () => {
    return (
        <div className="bg-customGray h-auto w-full text-slate-100 z-0 flex items-center justify-center p-3">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 grid-rows-1 p-4 gap-3">
                <Link to={"/create"}><div className="col-span-1 row-span-1 text-center text-slate-100 bg-gray-600 hover:bg-gray-800 md:py-4 md:px-auto py-2 px-auto rounded-tr-xl rounded-tl-xl hover:-translate-y-2 duration-500 ease-out">
                    <h2>Get Started</h2>
                </div></Link>
                <Link to={"/instructions"}> <div className="col-span-1 row-span-1 text-center text-slate-100 bg-gray-600 hover:bg-gray-800 md:py-4 md:px-auto py-2 px-auto rounded-tr-xl rounded-tl-xl hover:-translate-y-2 duration-700 ease-out">
                    <h2>Instructions</h2>
                </div></Link>
                <Link to={"/about"}><div className="col-span-1 row-span-1 text-center text-slate-100 bg-gray-600 hover:bg-gray-800 md:py-4 md:px-auto py-2 px-auto rounded-tr-xl rounded-tl-xl hover:-translate-y-2 duration-700 ease-out">
                    <h2>About</h2>
                </div></Link>
                <Link to={"/contact"}><div className="col-span-1 row-span-1 text-center text-slate-100 bg-gray-600 hover:bg-gray-800 md:py-4 md:px-auto py-2 px-auto rounded-tr-xl rounded-tl-xl hover:-translate-y-2 duration-500 ease-out">
                    <h2>Contacts</h2>
                </div></Link>
            </div>
        </div>
    )
}
export default Banner
