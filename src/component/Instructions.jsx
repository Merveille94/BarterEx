import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import data from '../data.jsx';

const Instructions = () => {
    const content = data.heroSection[0]; // Access the first item in heroSection
    const instructions = data.instructionSection;

    return (
        <section className='w-full h-screen relative flex flex-col items-center justify-between pt-12'>
            {/* Background Image */}
            <img className="h-full w-full absolute inset-0 bg-center bg-cover object-cover z-0"
                 alt="background image"
                 src={content.backgroundImage}
            />
            <div className='container mx-auto relative z-5 p-6 text-slate-300 flex flex-col justify-center items-center my-auto'>
                <div className='flex flex-col items-center justify-center bg-backgroundGray/80 md:py-4 md:px-auto py-2 px-4 rounded-xl'>
                    <h2 className='flex items-center justify-center bg-customGray text-black md:px-auto py-2 px-10 rounded-xl'>BarterEx Manual</h2>
                    {/* Instruction Section */}
                    {instructions.map((instruction, index) => (
                        // Alternate layout for each div
                        <div key={index} className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 p-2 mt-2 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Image div */}
                            <div className="md:w-1/2">
                                <img src={instruction[`image${index + 1}`]}
                                    alt={`Step ${index + 1} image`}
                                    className="w-full h-auto object-cover rounded-xl"
                                />
                            </div>

                            {/* Steps div */}
                            <div className="md:w-1/2 pr-4">
                                <h2 className="text-sm lg:text-xl font-bold">Step {index + 1}</h2>
                                <p className="text-sm lg:text-lg text-justify">{instruction[`step${index + 1}`]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Banner/>
            <Footer/>
        </section>
    )
}
export default Instructions
