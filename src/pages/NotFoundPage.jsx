import {Link} from 'react-router-dom';
import {FiAlertTriangle} from "react-icons/fi";

const NotFoundPage = () => {
    return (
        // this will be our page 404 or page Notfound
        <section className='bg-backgroundGray text-slate-100 min-h-screen flex flex-col justify-center items-center'>
            <div className=' container mx-auto p-4 flex flex-col justify-center items-center'>
                <FiAlertTriangle size={150} className='text-red-600'/>
                <h1 className='mt-3 text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>404 Page Not Found</h1>
                <p className='text-slate-400 text-sm md:text-lg my-4'> This page does not exist or has not been built yet. Please</p>
                <button className='p-3 text-slate-100 bg-violet-700 rounded-xl font-semibold'><Link to={'/'}>Go Back</Link></button>
                <p className='text-slate-400 text-xs mt-8'> This project was brought to you by King Kyei and Manuele</p>
            </div>
        </section>
    )
}
export default NotFoundPage
