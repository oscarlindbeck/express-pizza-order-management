import { User } from'../models/userModel.js';

export class UserRepository{

    static async getAllUsers(){
        return await User.find({});
    }

    static async findByName(name){
        return await User.findOne({ name });
    }

    static async create(user) {
        const userCreated = new User(user);
        return userCreated.save();
    }

    static async update(id, user) {
        return User.findByIdAndUpdate(id, user, { new: true });
    }
}