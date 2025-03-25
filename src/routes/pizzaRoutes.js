import express from "express";
import PizzaController from "../controllers/pizzaController.js";

const routes = express.Router();

routes.get("/pizzas", PizzaController.getAllPizzas);
routes.get("/pizzas/id/:id", PizzaController.getPizzaById);
routes.post("/pizzas", PizzaController.createPizza);

export default routes;