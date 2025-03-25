import mongoose from "mongoose";

const pizzaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    size: {
        type: String,
        enum: ["medium", "large", "family", "extraordinary"],
        required: true,
        default: "medium"
    },
    flavours: { type: [String], required: true }
}, { versionKey: false });

const Pizza = mongoose.model("Pizza", pizzaSchema);

export default Pizza;