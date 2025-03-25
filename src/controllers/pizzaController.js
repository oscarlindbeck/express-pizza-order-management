import Pizza from "../models/pizzaModel.js";

class PizzaController {
    static async getAllPizzas(req, res) {
        try {
            const listPizzas = await Pizza.find({});
            res.status(200).json(listPizzas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getPizzaById(req, res) {
        try {
            const pizza = await Pizza.findById(req.params.id);

            if (!pizza) return res.status(404).send("Pizza não encontrada!");

            return res.status(201).json(pizza);
        } catch (error) {
            res.status(500).json({ message: `Error: ${error.message}` });
        }
    }

    static async createPizza(req, res) {
        try {
            const newPizza = new Pizza(req.body);

            await newPizza.save();

            return res.status(201).json({ message: "Pizza criada com sucesso!", pizza: newPizza });
        } catch (error) {
            res.status(500).json({ message: `Error: ${error.message}` });
        }
    }
}

export default PizzaController;