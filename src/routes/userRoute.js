import express from "express";
import UserController from "../controllers/UserController.js";

const routes = express.Router();

routes.get("/users", UserController.getAllUsers);
routes.get("/users/name/:name", UserController.getUserByName);
routes.post("/users", UserController.createUser);
routes.put("/users/:id", UserController.updateUser);

export default routes;