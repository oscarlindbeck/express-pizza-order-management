import OrderService from "../services/orderService.js";

class OrderController {
  static async getAllOrders(req, res) {
    try {
      const orders = await OrderService.getAllOrders();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getOrderById(req, res) {
    try {
      const order = await OrderService.getOrderById(req.params.id);
      res.status(200).json(order);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async getOrdersByCustomerId(req, res) {
    try {
      const orders = await OrderService.getOrdersByCustomerId(req.params.customer_id);
      res.status(200).json(orders);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async createOrder(req, res) {
    try {
      const newOrder = await OrderService.createOrder(req.body);
      res.status(201).json({ message: "Ordem criada com sucesso!", order: newOrder });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateOrderStatusById(req, res) {
    try {
      const updatedOrder = await OrderService.updateOrderStatusById(req.params.id, req.body.status);
      res.status(200).json(updatedOrder);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async updateDeliveryStatusById(req, res) {
    try {
      const updatedOrder = await OrderService.updateDeliveryStatusById(req.params.id, req.body.delivery_status);
      res.status(200).json(updatedOrder);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default OrderController;
