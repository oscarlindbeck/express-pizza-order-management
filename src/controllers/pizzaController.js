import PizzaService from "../services/pizzaService.js";

class PizzaController {
    static async getAllPizzas(req, res) {
        try {
            const pizzas = await PizzaService.getAllPizzas();
            res.status(200).json(pizzas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getPizzaById(req, res) {
        try {
            const pizza = await PizzaService.getPizzaById(req.params.id);
            res.status(200).json(pizza);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    static async createPizza(req, res) {
        try {
            const newPizza = await PizzaService.createPizza(req.body);
            res.status(201).json({ message: "Pizza criada com sucesso!", pizza: newPizza });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default PizzaController;
