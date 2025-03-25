import express from "express";
import CustomerController from "../controllers/customerController.js";

const routes = express.Router();

routes.get("/customers", CustomerController.getAllCustomers);
routes.get("/customers/id/:id", CustomerController.getCustomerById);
routes.get("/customers/national_id/:national_id", CustomerController.getCustomerByNationalId);
routes.get("/customers/phone/:phone", CustomerController.getCustomerByPhone);
routes.post("/customers", CustomerController.createCustomer);
routes.put("/customers/:id", CustomerController.updateCustomer);

export default routes;