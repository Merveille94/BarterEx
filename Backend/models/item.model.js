import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        },
        timestamp: {
            type: Date,
            default: Date.now,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            enum: ["mobile", "electronics", "laptops"],
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;
