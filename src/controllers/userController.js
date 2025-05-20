import UserService from "../services/userService.js";

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getUserByName(req, res) {
    try {
      const user = await UserService.getUserByName(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }


  static async createUser(req, res) {
    try {
      const newUser = await UserService.register(req.body);
      res.status(201).json({ message: "Usuário criado com sucesso!", post: newUser });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateUser(req, res) {
    try {
      const updated = await UserService.updateUser(req.params.id, req.body);
      res.status(200).json(updated);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default UserController;
