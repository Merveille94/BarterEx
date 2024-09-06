import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Spinner from "./Spinner.jsx";
import Footer from "./Footer.jsx";

const Hero = () => {
    const [content, setContent] = useState(null); // State to store the fetched data
    const [showcaseContent, setShowcaseContent] = useState(null); // State to store the showcase images
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage error state

    useEffect(() => {
        // Fetch data from your API endpoint
        const fetchContent = async () => {
            try {
                const response = await fetch('/api/heroSection');
                const data = await response.json();
                setContent(data[0]); // Access the first item in the array
                setShowcaseContent(data[1]); // Access the second item in the array
            } catch (error) {
                console.log("Error fetching data", error);
                setError(error);
            } finally {
                // Simulate delay before setting loading to false
                setTimeout(() => {
                    setLoading(false);
                }, 2000); // 2-second delay (2000ms)
            }
        }
        fetchContent();
    }, []); // Empty dependency array means this runs once when the component mounts

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <Spinner loading={loading} />
            </div>
        );
    }

    if (error) return <div className='flex justify-center items-center h-screen'>Error loading content</div>;

    return (
        <section className='w-full h-screen relative flex flex-col items-center justify-between pt-10'>
            {/* Background Image */}
            <img className='h-full w-full absolute inset-0 bg-center bg-cover object-cover z-0'
                 alt='background image'
                 src={content.backgroundImage}
            />

            {/* Content */}
            <div className='container mx-auto relative z-5 p-6 text-black flex justify-center items-center my-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-2'>
                    <div className='col-span-1 row-span-1 gap-y-3 p-8'>
                        <div className='flex flex-col justify-center items-start'>
                            <h1 className='text-4xl md:text-6xl font-bold'>{content.title}</h1>
                            <p className='text-2xl md:text-3xl mt-4'>{content.subtitle}</p>
                            <p className='text-purple-900 md:text-black text-lg md:text-xl mt-2 max-w-lg'>{content.description}</p>
                        </div>
                    </div>
                    <div className='col-span-1 row-span-1 lg:p-8'>
                        <div className='relative lg:flex justify-center items-center mx-auto hidden'>
                            {showcaseContent && (
                                <>
                                    {/* First Image */}
                                    <img
                                        className='w-[40%] md:w-[50%] h-auto object-contain absolute top-16 left-0 z-10 transform translate-x-4 -translate-y-2 border-2 border-stone-900 rounded-3xl'
                                        alt='Small images'
                                        src={showcaseContent.showcaseImage2}
                                    />
                                    {/* Second Image */}
                                    <img
                                        className='w-[40%] md:w-[50%] h-auto object-contain absolute bottom-0 right-0 z-20 transform -translate-x-1/4 translate-y-[40%] border-2 border-stone-900 rounded-3xl'
                                        alt='Small images'
                                        src={showcaseContent.showcaseImage1}
                                    />
                                </>
                            )}
                        </div>
                        <div className='lg:hidden'>
                            {/* First Image */}
                            <img
                                className='w-full h-auto object-contain bg-cover bg-center '
                                alt='Small images'
                                src={showcaseContent.showcaseImage2}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-customGray h-auto w-full text-slate-100 z-0 flex items-center justify-center p-4'>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 grid-rows-1 p-8 gap-5'>
                    <div className='col-span-1 row-span-1 text-center text-slate-100 bg-gray-600 md:py-4 md:px-auto py-2 px-8 rounded-tr-xl rounded-tl-xl hover:-translate-y-4 duration-500 ease-out'>
                        <h2><Link to={'/exchange'}>Exchange</Link></h2>
                    </div>
                    <div className='col-span-1 row-span-1 text-center text-slate-100 bg-gray-600 md:py-4 md:px-auto py-2 px-8 rounded-tr-xl rounded-tl-xl hover:-translate-y-4 duration-700 ease-out'>
                        <h2><Link to={'/overview'}>Overview</Link></h2>
                    </div>
                    <div className='col-span-1 row-span-1 text-center text-slate-100 bg-gray-600 md:py-4 md:px-auto py-2 px-8 rounded-tr-xl rounded-tl-xl hover:-translate-y-4 duration-500 ease-out'>
                        <h2><Link to={'/contact'}>Contacts</Link></h2>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Hero;
