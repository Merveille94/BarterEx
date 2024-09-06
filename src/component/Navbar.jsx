import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbarData, setNavbarData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset); // Track previous scroll position
    const [showNavbar, setShowNavbar] = useState(true); // Control navbar visibility
    const [isScrolled, setIsScrolled] = useState(false); // Control background change when scrolled

    useEffect(() => {
        fetch('/api/navbarSection')
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

    // Scroll handling function
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrollingUp = prevScrollPos < currentScrollPos;

        setShowNavbar(isScrollingUp || currentScrollPos < 100); // Show navbar when scrolling up or near the top
        setIsScrolled(currentScrollPos > 30); // Change background after scrolling down 50px

        setPrevScrollPos(currentScrollPos); // Update the previous scroll position
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]); // Track the scroll position change

    // Return loading, error, or navbar based on the state
    if (loading) {
        return <div>Loading Navbar...</div>; // Show this during the loading period
    }

    if (error) {
        return <div>Error: {error}</div>; // Show the error message if there is one
    }

    return (
        <nav className={`text-black bg-transparent fixed w-full z-50 p-4 transition-transform duration-300 ${
                showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
            }`}>
            <div className='container mx-auto'>
                <div className={`flex items-center justify-between p-2 px-4 mx-8 border-2 border-stone-900 rounded-full bg-transparent ${isScrolled ? 'bg-slate-300 transition duration-700' : 'bg-transparent'}`}>
                    <div className='text-lg font-bold'>
                        <Link to={'/'}>{navbarData.logo}</Link>
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
