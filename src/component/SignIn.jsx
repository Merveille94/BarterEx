import {useState} from 'react'
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import { Link } from 'react-router-dom';
import data from "../data.jsx";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const content = data.heroSection[0]; // Access the first item in heroSection

    return (
        <section className='w-full h-screen relative flex flex-col items-center justify-between pt-12'>
            {/* Background Image */}
            <img className="h-full w-full absolute inset-0 bg-center bg-cover object-cover z-0"
                 alt="background image"
                 src={content.backgroundImage}
            />

            <div className='container mx-auto relative z-5 p-6 text-slate-300 flex flex-col justify-center items-center my-auto'>
                {/* SingIn Section */}
                <div className='flex flex-col items-center justify-center bg-backgroundGray/80 md:py-4 md:px-auto py-2 px-4 rounded-xl'>
                    <h2 className='flex items-center justify-center bg-customGray text-black md:px-auto py-2 px-10 rounded-xl'>SignIn / SignUp</h2>

                    {/* SignIn Section Text */}
                    <div className='text-slate-300 mt-3'>
                        <form className='flex flex-col items-center justify-center md:py-4 md:px-auto'>
                            <div className='mb-4 '>
                                <label htmlFor="email"></label>
                                <input
                                    type="email"
                                    placeholder='Email...'
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className='bg-black text-slate-300 rounded-xl p-2'
                                />
                            </div>
                            <div className='mb-4 '>
                                <label htmlFor="password"></label>
                                <input
                                    type="password"
                                    placeholder='Password...'
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className='bg-black text-slate-300 rounded-xl p-2'
                                />
                            </div>
                            <Link to="/create">
                                <button type="button" className='p-2 border-stone-900 border-2 px-4 hover:bg-backgroundGray rounded-xl'>Sign In</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
            <Banner/>
            <Footer/>
        </section>
    )
}
export default SignIn
