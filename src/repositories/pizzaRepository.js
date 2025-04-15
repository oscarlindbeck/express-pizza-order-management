import Pizza from "../models/pizzaModel.js";

class PizzaRepository {
    static async findAll() {
        return Pizza.find({});
    }

    static async findById(id) {
        return Pizza.findById(id);
    }

    static async create(data) {
        const pizza = new Pizza(data);
        return pizza.save();
    }
}

export default PizzaRepository;
