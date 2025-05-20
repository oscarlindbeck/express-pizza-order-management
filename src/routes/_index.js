import express from "express";
import customers from "./customerRoutes.js";
import orders from "./orderRoutes.js";
import pizzas from "./pizzaRoutes.js";
import users from "./userRoute.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Express is running."));
    app.use(express.json(), customers);
    app.use(express.json(), orders);
    app.use(express.json(), pizzas);
    app.use(express.json(), users);
};

export default routes;