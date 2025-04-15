import Customer from "../models/customerModel.js";

class CustomerRepository {
    static async findAll() {
        return Customer.find({});
    }

    static async findById(id) {
        return Customer.findById(id);
    }

    static async findByNationalId(national_id) {
        return Customer.findOne({ national_id });
    }

    static async findByPhone(phone) {
        return Customer.findOne({ phone });
    }

    static async create(data) {
        const customer = new Customer(data);
        return customer.save();
    }

    static async update(id, data) {
        return Customer.findByIdAndUpdate(id, data, { new: true });
    }
}

export default CustomerRepository;
