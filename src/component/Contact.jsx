import data from "../data.jsx";
import Footer from "./Footer.jsx";
import Banner from "./Banner.jsx";

const Contact = () => {
    const content = data.heroSection[0]; // Access the first item in heroSection
    const showcaseContent = data.heroSection[1]; // Access the second item in the heroSection
    const contacts1 = data.contactsSection1; // Access contactsSection1 from data
    const contacts2 = data.contactsSection2; // Access contactsSection2 from data

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
                    <div className='flex flex-col items-center justify-center bg-backgroundGray/80 md:py-4 md:px-auto py-2 px-4 rounded-xl'>
                        <h2 className='flex items-center justify-center bg-customGray text-black md:px-auto py-2 px-10 rounded-xl'>Contact</h2>

                        {/* Image 1 */}
                        <div className='grid grid-cols-1 md:grid-cols-2 w-full p-4 mt-2 gap-4'>
                            <div className='col-span-1 row-span-1 w-full p-2 bg-backgroundGray rounded-xl'>
                                <div className='flex items-center flex-col justify-between'>
                                    <div className='flex items-center justify-center mb-2'>
                                        <img src={showcaseContent.showcaseImage3} alt='profile image Emanuele Merveille'
                                             className='h-auto w-[40%] bg-center object-contain bg-cover rounded-xl'/>
                                        <div className='flex flex-col items-start w-[50%] ml-4'>
                                            <h2>Emanuele Merveille G</h2>
                                            <h4 className='mt-3'>Co-Developer of BarterEx</h4>
                                        </div>
                                    </div>
                                    <div>
                                        {contacts1.map((paragraph, index) => (
                                            <p key={index} className="mb-4 text-justify p-2">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/*image 2*/}
                            <div className='col-span-1 row-span-1 w-full p-2 bg-backgroundGray rounded-xl'>
                                <div className='flex items-center flex-col justify-between'>
                                    <div className='flex items-center justify-center mb-2'>
                                        <img src={showcaseContent.showcaseImage4} alt='profile image Emanuele Merveille'
                                             className='h-auto w-[40%] bg-center object-contain bg-cover rounded-xl'/>
                                        <div className='flex flex-col items-start w-[50%] ml-4'>
                                            <h2>King Kyei Boakye</h2>
                                            <h4 className='mt-3'>Co-Developer of BarterEx</h4>
                                        </div>
                                    </div>
                                    <div>
                                        {contacts2.map((paragraph, index) => (
                                            <p key={index} className="mb-4 text-justify p-2">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Banner/>
                <Footer/>
            </section>
        </section>
    )
}
export default Contact
