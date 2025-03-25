import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    national_id: { type: String, required: true, unique: true },
    name: { type: String, require: true },
    phone: { type: String, required: true }
}, { versionKey: false });

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;