import CustomerService from "../services/customerService.js";

class CustomerController {
  static async getAllCustomers(req, res) {
    try {
      const customers = await CustomerService.getAllCustomers();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getCustomerById(req, res) {
    try {
      const customer = await CustomerService.getCustomerById(req.params.id);
      res.status(200).json(customer);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async getCustomerByNationalId(req, res) {
    try {
      const customer = await CustomerService.getCustomerByNationalId(req.params.national_id);
      res.status(200).json(customer);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async getCustomerByPhone(req, res) {
    try {
      const customer = await CustomerService.getCustomerByPhone(req.params.phone);
      res.status(200).json(customer);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async createCustomer(req, res) {
    try {
      const newCustomer = await CustomerService.createCustomer(req.body);
      res.status(201).json({ message: "Cliente criado com sucesso!", post: newCustomer });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateCustomer(req, res) {
    try {
      const updated = await CustomerService.updateCustomer(req.params.id, req.body);
      res.status(200).json(updated);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default CustomerController;
