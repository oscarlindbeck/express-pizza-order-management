import express from "express";
import PizzaController from "../controllers/pizzaController.js";
import authMiddleware from '../middleware/authMiddleware.js';
const routes = express.Router();

routes.get("/pizzas", PizzaController.getAllPizzas);
routes.get("/pizzas/id/:id", PizzaController.getPizzaById);
routes.post("/pizzas", authMiddleware, PizzaController.createPizza);

export default routes;