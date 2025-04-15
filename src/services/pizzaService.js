import PizzaRepository from "../repositories/pizzaRepository.js";

class PizzaService {
    static async getAllPizzas() {
        return PizzaRepository.findAll();
    }

    static async getPizzaById(id) {
        const pizza = await PizzaRepository.findById(id);
        if (!pizza) throw new Error("Pizza não encontrada!");
        return pizza;
    }

    static async createPizza(data) {
        return PizzaRepository.create(data);
    }
}

export default PizzaService;
