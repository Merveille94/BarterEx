import data from "../data.jsx";
import Footer from "./Footer.jsx";
import {Link} from "react-router-dom";
import {FaHome} from "react-icons/fa";

const Contact = () => {
    const content = data.heroSection[0]; // Access the first item in heroSection

    return (
        <section>
            <section className='w-full h-screen relative flex flex-col items-center justify-between pt-10'>
                {/* Background Image */}
                <img className="h-full w-full absolute inset-0 bg-center bg-cover object-cover z-0"
                     alt="background image"
                     src={content.backgroundImage}
                />

                <div className='container mx-auto relative z-5 p-6 text-slate-300 flex flex-col justify-center items-center my-auto'>
                    {/* About Section */}
                    <div
                        className='flex flex-col items-center justify-center bg-backgroundGray md:py-4 md:px-auto py-2 px-4 rounded-xl'>
                        <h2 className='flex items-center justify-center bg-customGray text-black md:px-auto py-2 px-10 rounded-xl'>About</h2>

                        {/* About Section Text */}

                        {/*Back icon*/}
                        <div className='flex items-center justify-center'><Link to={'/'}><FaHome size={30}/></Link>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        </section>
    )
}
export default Contact
