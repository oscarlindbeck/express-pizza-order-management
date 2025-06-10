import express from "express";
import UserController from "../controllers/UserController.js";

const routes = express.Router();

import authMiddleware from '../middleware/authMiddleware.js';

routes.get("/users", authMiddleware, UserController.getAllUsers);
routes.get("/users/name/:name", authMiddleware, UserController.getUserByName);
routes.post("/users", authMiddleware, UserController.createUser);
routes.put("/users/:id", authMiddleware, UserController.updateUser);

export default routes;