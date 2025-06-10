import express from "express";
import CustomerController from "../controllers/customerController.js";
import authMiddleware from '../middleware/authMiddleware.js';

const routes = express.Router();

routes.get("/customers", CustomerController.getAllCustomers);
routes.get("/customers/id/:id", authMiddleware, CustomerController.getCustomerById);
routes.get("/customers/national_id/:national_id", authMiddleware, CustomerController.getCustomerByNationalId);
routes.get("/customers/phone/:phone", authMiddleware, CustomerController.getCustomerByPhone);
routes.post("/customers", authMiddleware, CustomerController.createCustomer);
routes.put("/customers/:id", authMiddleware, CustomerController.updateCustomer);

export default routes;