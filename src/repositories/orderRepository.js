import Order from "../models/orderModel.js";

class OrderRepository {
    static async findAll() {
        return Order.find({})
            .populate("customer_id")
            .populate("pizza_id");
    }

    static async findById(id) {
        return Order.findById(id)
            .populate("customer_id")
            .populate("pizza_id");
    }

    static async findByCustomerId(customer_id) {
        return Order.find({ customer_id })
            .populate("customer_id")
            .populate("pizza_id");
    }

    static async create(data) {
        const newOrder = new Order(data);
        return newOrder.save();
    }

    static async updateStatusById(id, status) {
        return Order.findByIdAndUpdate(
            id,
            { $set: { status } },
            { new: true }
        );
    }

    static async updateDeliveryStatusById(id, delivery_status) {
        return Order.findByIdAndUpdate(
            id,
            { $set: { delivery_status } },
            { new: true }
        );
    }
}

export default OrderRepository;
