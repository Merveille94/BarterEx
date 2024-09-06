import { useEffect, useState } from 'react';

const Footer = () => {
    const [footerData, setFooterData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        fetch('http://localhost:8000/footerSection')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const footerSection = data[0]; // Assuming the response is an array
                setTimeout(() => { // Add 2-second delay before setting footer data
                    setFooterData(footerSection);
                    setLoading(false); // Stop loading after 2 seconds
                }, 2000); // 2-second delay
            })
            .catch(error => {
                console.error('Error fetching the footer data:', error);
                setError(error.message);
                setLoading(false); // Stop loading on error
            });
    }, []);

    if (loading) {
        return <div>Loading Data...</div>; // Show this during the 2-second delay
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error if any
    }

    return (
        <footer className='relative h-[30%] text-slate-100 flex items-center justify-center bg-black z-50'>
            <div className='container mx-auto flex items-center justify-center p-2'>
                <p className='text-xs text-center'>{footerData.description}</p>
            </div>
        </footer>
    );
};

export default Footer;
