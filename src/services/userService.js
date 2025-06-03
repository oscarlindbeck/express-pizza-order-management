import { UserRepository } from '../repositories/userRepository.js';

//const { hash } = bcrypt;

export class UserService{
    constructor(){
        this.UserRepository = new UserRepository();
    }

    static async getAllUsers(){
        return UserRepository.getAllUsers();
    }

    static async getUserByName(name){
        return UserRepository.getUserByName(name);
    } 

    // static async createUser(user) {
    //     return UserRepository.create(user);
    // }

    static async register(userData){
        const userExists = await UserRepository.findByName(userData.email)
        if(userExists){
            throw new Error("Usuário já existe com esse email");
        }

        const passwordHash = await hash(userData.password, 8);


        const userToCreate = {
            name: userData.name,
            email: userData.email,
            password: passwordHash,
            active: userData.active
        };
        

        const createdUser = UserRepository.create(userToCreate);

        return createdUser;
    }

    static async updateUser(id, user){
        const order = await UserRepository.updateStatusById(id, user);
        if (!order) throw new Error("Ordem não encontrada!");
        return order;
    }
}

export default UserService;
