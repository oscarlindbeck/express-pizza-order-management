import CustomerRepository from "../repositories/customerRepository.js";

class CustomerService {
    static async getAllCustomers() {
        return CustomerRepository.findAll();
    }

    static async getCustomerById(id) {
        const customer = await CustomerRepository.findById(id);
        if (!customer) throw new Error("Cliente não encontrado!");
        return customer;
    }

    static async getCustomerByNationalId(national_id) {
        const customer = await CustomerRepository.findByNationalId(national_id);
        if (!customer) throw new Error("Cliente não encontrado!");
        return customer;
    }

    static async getCustomerByPhone(phone) {
        const customer = await CustomerRepository.findByPhone(phone);
        if (!customer) throw new Error("Cliente não encontrado!");
        return customer;
    }

    static async createCustomer(data) {
        return CustomerRepository.create(data);
    }

    static async updateCustomer(id, data) {
        const updated = await CustomerRepository.update(id, data);
        if (!updated) throw new Error("Cliente não encontrado!");
        return updated;
    }
}

export default CustomerService;
