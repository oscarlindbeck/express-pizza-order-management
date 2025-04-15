import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    pizza_id: { type: mongoose.Schema.Types.ObjectId, ref: "Pizza", required: true },
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled", "completed"],
        required: true,
        default: "pending"
    },
    delivery_status: {
        type: String,
        enum: ["not_started", "in_progress", "delivered"],
        required: true,
        default: "not_started"
    }
}, { versionKey: false });

const Order = mongoose.model("Order", orderSchema);

export default Order;
