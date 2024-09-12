import { Link } from "react-router-dom";
import data from '../data.jsx'; // Import the data

const Navbar = () => {
    const navbarData = data.navbarSection[0]; // Access the first item in navbarSection

    return (
        <nav className='text-black bg-transparent fixed w-full z-50 p-4'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between p-2 px-4 mx-8 border-2 border-stone-900 rounded-full bg-transparent'>
                    <div className='text-lg font-bold'>
                        <Link to={'/'} >{navbarData.logo}</Link>
                    </div>
                    <div className='ml-auto'>
                        <Link to={'/signIn'} className='text-md lg:text-slate-100'>
                            {navbarData.link}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
