import express from "express";
import OrderController from "../controllers/orderController.js";
import authMiddleware from '../middleware/authMiddleware.js';
const routes = express.Router();

routes.get("/orders", OrderController.getAllOrders);
routes.get("/orders/id/:id", OrderController.getOrderById);
routes.get("/orders/customer_id/:customer_id", OrderController.getOrdersByCustomerId);
routes.post("/orders", authMiddleware, OrderController.createOrder);
routes.put("/orders/id/:id/status", authMiddleware, OrderController.updateOrderStatusById);
routes.put("/orders/id/:id/delivery-status", authMiddleware, OrderController.updateDeliveryStatusById);

export default routes;