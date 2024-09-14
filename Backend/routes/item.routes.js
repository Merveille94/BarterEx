import express from "express";
import {
    createItem,
    deleteItem,
    getItems,
    updateItem,
} from "../controllers/item.controller.js";

const router = express.Router();

router.get("/", getItems); // For trading dashboard
router.post("/", createItem); // Create a new item
router.put("/:id", updateItem); // Update an item
router.delete("/:id", deleteItem); // Delete an item

export default router;
