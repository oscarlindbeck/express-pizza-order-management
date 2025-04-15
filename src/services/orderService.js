import OrderRepository from "../repositories/orderRepository.js";

class OrderService {
    static async getAllOrders() {
        return OrderRepository.findAll();
    }

    static async getOrderById(id) {
        const order = await OrderRepository.findById(id);
        if (!order) throw new Error("Ordem não encontrada!");
        return order;
    }

    static async getOrdersByCustomerId(customer_id) {
        const orders = await OrderRepository.findByCustomerId(customer_id);
        if (!orders || orders.length === 0)
            throw new Error("Nenhuma ordem encontrada para este cliente!");
        return orders;
    }

    static async createOrder(data) {
        return OrderRepository.create(data);
    }

    static async updateOrderStatusById(id, status) {
        const order = await OrderRepository.updateStatusById(id, status);
        if (!order) throw new Error("Ordem não encontrada!");
        return order;
    }

    static async updateDeliveryStatusById(id, delivery_status) {
        const order = await OrderRepository.updateDeliveryStatusById(id, delivery_status);
        if (!order) throw new Error("Ordem não encontrada!");
        return order;
    }
}

export default OrderService;
