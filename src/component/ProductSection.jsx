import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
import ProductCard from "../component/ProductCard";
import data from "../data.jsx";
import Footer from "./Footer.jsx";
import Banner2 from "./Banner2.jsx"; // Import the ProductCard component

const productSection = () => {
    const { fetchProducts, products } = useProductStore();
    const content = data.heroSection[0]; // Access the first item in heroSection

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    console.log("products", products);

    return (
        <section className="w-full min-h-screen relative flex flex-col items-center justify-between pt-10 text-lg bg-blue-950 text-white">

            {/* Background Image */}
            <img className="h-full w-full absolute inset-0 bg-center bg-cover object-cover z-0"
                 alt="background image"
                 src={content.backgroundImage}
            />

            <div className="container mx-auto relative z-5 p-6 flex flex-col justify-center items-center my-auto">
                <div className='bg-customGray/80 p-2 rounded-xl flex flex-col items-center justify-center mt-4'>
                    <h1 className="md:text-xl text-sm lg:text-2xl uppercase text-slate-900 font-bold">
                        Product Store
                    </h1>
                    <h2 className="md:text-xl text-sm text-slate-900 font-bold mt-2">
                        Current Items
                    </h2>
                </div>

                {/* Card Section */}
                {products.length > 0 ? (
                    <div
                        className="w-full mt-4 bg-customGray/80 rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-slate-200">
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-sm md:text-md text-slate-500 flex items-center mt-4">
                        <h3>No products found 😓</h3>
                        <Link
                            to={"/AddProduct"}
                            className="text-black text-sm md:text-md hover:underline ml-2"
                        >
                            Create a Product
                        </Link>
                    </div>
                )}
            </div>
            <Banner2/>
            <Footer/>
        </section>
    );
};

export default productSection;
