import Customer from "../models/customerModel.js";

class CustomerController {
  static async getAllCustomers(req, res) {
    try {
      const listCustomers = await Customer.find({});
      res.status(200).json(listCustomers);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getCustomerById(req, res) {
    try {
      const customer = await Customer.findById(req.params.id);

      if (!customer) return res.status(404).send("Cliente não encontrado!");

      return res.status(201).json(customer);
    } catch (error) {
      res.status(500).json({ message: `Error: ${error.message}` });
    }
  }

  static async getCustomerByNationalId(req, res) {
    try {
      const customer = await Customer.findOne({ national_id: req.params.national_id });

      if (!customer) return res.status(404).send("Cliente não encontrado!");

      return res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ message: `Error: ${error.message}` });
    }
  }

  static async getCustomerByPhone(req, res) {
    try {
      const customer = await Customer.findOne({ phone: req.params.phone });

      if (!customer) return res.status(404).send("Cliente não encontrado!");

      return res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ message: `Error: ${error.message}` });
    }
  }

  static async createCustomer(req, res) {
    try {
      const newCostumer = new Customer(req.body);

      await newCostumer.save();

      return res.status(201).json({ message: "Cliente criado com sucesso!", post: newCostumer });
    } catch (error) {
      res.status(500).json({ message: `Error: ${error.message}` });
    }
  }

  static async updateCustomer(req, res) {
    try {
      const customer = await Customer.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

      if (!customer) return res.status(404).send("Cliente não encontrado!");

      return res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ message: `Error: ${error.message}` });
    }
  }
}

export default CustomerController;