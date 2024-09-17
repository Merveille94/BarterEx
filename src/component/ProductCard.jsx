import { useState } from "react";
import { toast } from "react-hot-toast";
import { useProductStore } from "../store/product";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import Modal from "react-modal";

// Ensure to bind modal to your app element
Modal.setAppElement("#root");

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const { deleteProduct, updateProduct } = useProductStore();

  // Open and close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle product deletion
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);

    if (success) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  // Handle product update
  const handleUpdateProduct = async (pid) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    closeModal();

    if (success) {
      toast.success("Product updated successfully");
    } else {
      toast.error(message);
    }
  };

  return (
    <div className="border-1 border-slate-700 bg-backgroundGray rounded-lg overflow-hidden hover:-translate-y-2 duration-500 ease-in-out w-full">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-48 object-cover w-full"
      />

      {/* Product Name and Amount */}
      <div className="p-4">
        <h4 className="text-white">Name: {product.name}</h4>
        <p className="text-gray-300">Number of Items: {product.price}</p>
        
        {/* Edit and Delete Icons */}
        <div className="flex items-center space-x-4 mt-4">
          <FiEdit
            size={25}
            className="text-blue-300 cursor-pointer"
            onClick={openModal}
          />
          <MdOutlineDelete
            size={25}
            className="text-red-300 cursor-pointer"
            onClick={() => handleDeleteProduct(product._id)}
          />
        </div>
      </div>

      {/* Update Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Update Product"
        className="w-96 p-8 bg-customGray/80 rounded-xl mx-auto my-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <h2 className="text-xl text-black uppercase font-bold mb-4">Update Product</h2>
        <div className="space-y-4">
          <input
            type="text"
            className="w-full bg-black text-slate-300 rounded-xl p-2"
            placeholder="Product Name"
            value={updatedProduct.name}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, name: e.target.value })
            }
          />
          <input
            type="number"
            className="w-full bg-black text-slate-300 rounded-xl p-2"
            placeholder="Product Amount"
            value={updatedProduct.price}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, price: e.target.value })
            }
          />
          <input
            type="text"
            className="w-full bg-black text-slate-300 rounded-xl p-2"
            placeholder="Image URL"
            value={updatedProduct.image}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, image: e.target.value })
            }
          />
        </div>

        {/* Modal Actions */}
        <div className="flex justify-end space-x-4 mt-6">
          <button
            className="px-4 py-2 bg-gray-700  hover:bg-black text-white rounded-md"
            onClick={() => handleUpdateProduct(product._id)}
          >
            Update
          </button>
          <button
            className="px-4 py-2 hover:bg-black bg-gray-700 text-red-400 hover:text-white rounded-md"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
