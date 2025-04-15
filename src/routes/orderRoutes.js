import express from "express";
import OrderController from "../controllers/orderController.js";

const routes = express.Router();

routes.get("/orders", OrderController.getAllOrders);
routes.get("/orders/id/:id", OrderController.getOrderById);
routes.get("/orders/customer_id/:customer_id", OrderController.getOrdersByCustomerId);
routes.post("/orders", OrderController.createOrder);
routes.put("/orders/id/:id/status", OrderController.updateOrderStatusById);
routes.put("/orders/id/:id/delivery-status", OrderController.updateDeliveryStatusById);

export default routes;