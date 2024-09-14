import Item from "../models/item.model.js";
import mongoose from "mongoose";

// Fetch all items (for trading dashboard)
export const getItems = async (req, res) => {
    try {
        const items = await Item.find({});
        res.status(200).json({ success: true, data: items });
    } catch (error) {
        console.error("Error in fetching items:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Create an item (for user dashboard)
export const createItem = async (req, res) => {
    const { name, image, number, description, category } = req.body;
    const userId = req.user.id; // Assuming user is logged in and their id is available

    if (!name || !image || !number || !description || !category) {
        return res
            .status(400)
            .json({ success: false, message: "Please provide all fields" });
    }

    try {
        const newItem = new Item({
            name,
            image,
            number,
            description,
            category,
            userId,
        });
        await newItem.save();
        res.status(201).json({ success: true, data: newItem });
    } catch (error) {
        console.error("Error in creating item:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Update an item
export const updateItem = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid item ID" });
    }

    try {
        const updatedItem = await Item.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json({ success: true, data: updatedItem });
    } catch (error) {
        console.error("Error in updating item:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Delete an item
export const deleteItem = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid item ID" });
    }

    try {
        await Item.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Item deleted" });
    } catch (error) {
        console.error("Error in deleting item:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
