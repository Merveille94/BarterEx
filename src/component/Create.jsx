import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useProductStore } from "../store/product";
import { toast } from "react-hot-toast";
import data from "../data.jsx";  // Import toast

const Create = () => {
  const content = data.heroSection[0]; // Access the first item in heroSection
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);

    if (success) {
      toast.success(message, {
        duration: 4000,
        position: "top-center",
      });
    } else {
      toast.error(message, {
        duration: 4000,
        position: "top-center",
      });
    }

    // Optionally reset the form after submission
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <section className="w-full h-screen relative flex flex-col items-center justify-between pt-10 text-lg bg-blue-950 text-white">
      {/* Background Image */}
      <img className="h-full w-full absolute inset-0 bg-center bg-cover object-cover z-0"
           alt="background image"
           src={content.backgroundImage}
      />

      <div className="container mx-auto relative z-5 p-6 flex flex-col justify-center items-center my-auto">
        <div className="p-2 flex items-center bg-backgroundGray rounded-xl text-slate-300">
          <Link to={"/dashboard"}>
            <FaArrowLeft size={30} />
          </Link>
          <h1 className="text-sm md:text-xl lg:text-2xl  uppercase text-white font-bold ml-10">
            Create Product
          </h1>
        </div>
        <div className="mt-5 border-2 border-stone-900 p-4 rounded-lg w-full md:w-1/2 h-auto">
          <input
            type="text"
            placeholder="Name of Product"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="p-2 w-full border-2 border-slate-500 bg-backgroundGray text-slate-300 rounded-xl"
          />
          <input
            type="Number"
            placeholder="Amount of item to trade"
            name="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            className="p-2 w-full border-2 border-slate-500 bg-backgroundGray text-slate-300 rounded-xl my-4"
          />
          <input
            placeholder="IMAGE URL"
            name="image"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            className="p-2 w-full border-2 border-slate-500 bg-backgroundGray text-slate-300 rounded-xl"
          />
          <button
            className="mt-4 p-2 w-full border-2 font-bold border-slate-500 bg-black hover:bg-slate-200 hover:font-bold hover:text-slate-900 text-slate-200 rounded-lg"
            onClick={handleAddProduct}
          >
            Add Product
          </button>
        </div>
      </div>
    </section>
  );
};

export default Create;
