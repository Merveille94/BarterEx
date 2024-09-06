import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbarData, setNavbarData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        fetch('http://localhost:8000/navbarSection')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const navbarSection = data[0]; // Assuming the response is an array
                setTimeout(() => { // Add a 2-second delay before setting the navbar data
                    setNavbarData(navbarSection);
                    setLoading(false); // Stop the loading state
                }, 2000); // 2-second delay
            })
            .catch(error => {
                console.error('Error fetching the navbar data:', error);
                setError(error.message);
                setLoading(false); // Stop the loading state on error
            });
    }, []);

    if (loading) {
        return <div>Loading Navbar...</div>; // Show this during the loading period
    }

    if (error) {
        return <div>Error: {error}</div>; // Show the error message if there is one
    }

    return (
        <nav className='text-black bg-transparent fixed w-full z-50 p-4'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between p-2 px-4 mx-8 border-2 border-stone-900 rounded-full bg-transparent'>
                    <div className='text-lg font-bold'><Link to={'/'}>{navbarData.logo}</Link></div>
                    <div className='ml-auto'>
                        <Link to={'/signIn'} className='text-md lg:text-slate-100'>{navbarData.link}</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
