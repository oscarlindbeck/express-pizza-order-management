import Order from "../models/orderModel.js";

// TODO: Verificar como está sendo listado o retorno destes objetos
class OrderController {
  static async getAllOrders(req, res) {
    try {
      const listOrders = await Order.find({});
      res.status(200).json(listOrders);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getOrderById(req, res) {
    try {
      const order = await Order.findById(req.params.id);

      if (!order) return res.status(404).send("Ordem não encontrada!");

      return res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ message: `Error: ${error.message}` });
    }
  }

  static async getOrdersByCustomerId(req, res) {
    try {
      const listOrders = await Order.find({ customer_id: req.params.customer_id });

      if (!listOrders) return res.status(404).send("Nenhuma ordem encontrada para este cliente!");

      return res.status(201).json(listOrders);
    } catch (error) {
      res.status(500).json({ message: `Error: ${error.message}` });
    }
  }

  static async createOrder(req, res) {
    try {
      const newOrder = new post(req.body);

      await newOrder.save();

      return res.status(201).json({ message: "Ordem criada com sucesso!", order: newOrder });
    } catch (error) {
      res.status(500).json({ message: `Error: ${error.message}` });
    }
  }

  static async updateOrderStatusById(req, res) {
    try {
      const order = await Customer.findByIdAndUpdate(
        req.params.id,
        {
          $set: { status: req.body.status }
        },
        {
          new: true
        }
      );

      if (!order) return res.status(404).send("Ordem não encontrada!");

      return res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ message: `Error: ${error.message}` });
    }
  }

  static async updateDeliveryStatusById(req, res) {
    try {
      const order = await Customer.findByIdAndUpdate(
        req.params.id,
        {
          $set: { delivery_status: req.body.delivery_status }
        },
        {
          new: true
        }
      );

      if (!order) return res.status(404).send("Ordem não encontrada!");

      return res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ message: `Error: ${error.message}` });
    }
  }
}

export default OrderController;