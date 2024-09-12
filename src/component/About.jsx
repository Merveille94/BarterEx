import {useState} from "react";
import data from '../data.jsx';  // No need to import 'aboutSection' separately
import Footer from "./Footer.jsx";
import Banner from "./Banner.jsx";
import {FaArrowDownWideShort, FaArrowUpWideShort} from "react-icons/fa6";

const About = () => {
    const content = data.heroSection[0]; // Access the first item in heroSection
    const aboutContent = data.aboutSection; // Access aboutSection from data
    const [showFullText, setShowFullText] = useState(false);
    const toggleText = () => setShowFullText(!showFullText);

    return (
        <section className='w-full h-screen relative flex flex-col items-center justify-between pt-12'>
            {/* Background Image */}
            <img className="h-full w-full absolute inset-0 bg-center bg-cover object-cover z-0"
                alt="background image"
                src={content.backgroundImage}
            />

            <div className='container mx-auto relative z-5 p-6 text-slate-300 flex flex-col justify-center items-center my-auto'>
                {/* About Section */}
                <div className='flex flex-col items-center justify-center bg-backgroundGray/80 md:py-4 md:px-auto py-2 px-4 rounded-xl'>
                    <h2 className='flex items-center justify-center bg-customGray text-black md:px-auto py-2 px-10 rounded-xl'>About</h2>

                    {/* About Section Text */}
                    <div className={`p-4 mx-auto ${showFullText ? '' : 'max-h-96 md:max-h-svh overflow-hidden'}`} style={{lineHeight: '1.75'}}>
                        {aboutContent.map((paragraph, index) => (
                            <p key={index} className="my-4 text-justify text-slate-200" >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className='text-slate-100 md:hidden p-2' onClick={toggleText}>{showFullText ?
                        <FaArrowUpWideShort size={25} className='text-slate-300'/> :
                        <FaArrowDownWideShort size={25} className='text-slate-300'/>}</div>
                </div>
            </div>
            <Banner/>
            <Footer/>
        </section>
    );
};

export default About;
