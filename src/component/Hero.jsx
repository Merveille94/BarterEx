import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import data from "../data.jsx"; // Import the data

const Hero = () => {
    const content = data.heroSection[0]; // Access the first item in the heroSection
    const showcaseContent = data.heroSection[1]; // Access the second item in the heroSection

    return (
        <section className="w-full h-screen relative flex flex-col items-center justify-between pt-10">
            {/* Background Image */}
            <img
                className="h-full w-full absolute inset-0 bg-center bg-cover object-cover z-0"
                alt="background image"
                src={content.backgroundImage}
            />

            {/* Content */}
            <div className="container mx-auto relative z-5 p-6 text-black flex justify-center items-center my-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-2">
                    <div className="col-span-1 row-span-1 gap-y-3 p-8">
                        <div className="flex flex-col justify-center items-start">
                            <h1 className="text-4xl md:text-6xl font-bold">{content.title}</h1>
                            <p className="text-2xl md:text-3xl mt-4">{content.subtitle}</p>
                            <p className="text-purple-900 md:text-black text-lg md:text-xl mt-2 max-w-lg">
                                {content.description}
                            </p>
                            <h2 className='flex items-center justify-center bg-gray-600 hover:bg-gray-800 hover:text-slate-200 text-slate-100 md:px-auto py-2 px-10 rounded-xl mt-4'>
                                <Link to={'/overview'}>Get Started !</Link></h2>
                        </div>
                    </div>
                    <div className="col-span-1 row-span-1 lg:p-8">
                    <div className="relative lg:flex justify-center items-center mx-auto hidden">
                            {showcaseContent && (
                                <>
                                    {/* First Image */}
                                    <img
                                        className="w-[40%] md:w-[50%] h-auto object-contain absolute top-16 left-0 z-10 transform translate-x-4 -translate-y-2 border-2 border-stone-900 rounded-3xl"
                                        alt="Small images"
                                        src={showcaseContent.showcaseImage2}
                                    />
                                    {/* Second Image */}
                                    <img
                                        className="w-[40%] md:w-[50%] h-auto object-contain absolute bottom-0 right-0 z-20 transform -translate-x-1/4 translate-y-[40%] border-2 border-stone-900 rounded-3xl"
                                        alt="Small images"
                                        src={showcaseContent.showcaseImage1}
                                    />
                                </>
                            )}
                        </div>
                        <div className="lg:hidden">
                            {/* First Image */}
                            <img className="w-full h-auto object-contain bg-cover bg-center"
                                alt="Small images"
                                src={showcaseContent.showcaseImage2}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-customGray h-auto w-full text-slate-100 z-0 flex items-center justify-center p-3">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 grid-rows-1 p-4 gap-3">
                    <div className="col-span-1 row-span-1 text-center text-slate-100 bg-gray-600 hover:bg-gray-800 md:py-4 md:px-auto py-2 px-auto rounded-tr-xl rounded-tl-xl hover:-translate-y-4 duration-500 ease-out">
                        <h2>
                            <Link to={"/exchange"}>Get Started</Link>
                        </h2>
                    </div>
                    <div className="col-span-1 row-span-1 text-center text-slate-100 bg-gray-600 hover:bg-gray-800 md:py-4 md:px-auto py-2 px-auto rounded-tr-xl rounded-tl-xl hover:-translate-y-4 duration-700 ease-out">
                        <h2>
                            <Link to={"/instruction"}>Instructions</Link>
                        </h2>
                    </div>
                    <div className="col-span-1 row-span-1 text-center text-slate-100 bg-gray-600 hover:bg-gray-800 md:py-4 md:px-auto py-2 px-auto rounded-tr-xl rounded-tl-xl hover:-translate-y-4 duration-700 ease-out">
                        <h2>
                            <Link to={"/about"}>About</Link>
                        </h2>
                    </div>
                    <div className="col-span-1 row-span-1 text-center text-slate-100 bg-gray-600 hover:bg-gray-800 md:py-4 md:px-auto py-2 px-auto rounded-tr-xl rounded-tl-xl hover:-translate-y-4 duration-500 ease-out">
                        <h2>
                            <Link to={"/contact"}>Contacts</Link>
                        </h2>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
};

export default Hero;
