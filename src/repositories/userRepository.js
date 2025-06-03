import { user } from'../models/userModel.js';

export class UserRepository{

    static async getAllUsers(){
        return await user.find({});
    }

    static async findByName(name){
        return await user.findOne({ name });
    }

    static async create(userToCreate) {
        const userCreated = new user(userToCreate);
        return userCreated.save();
    }

    static async update(id, userUpdated) {
        return user.findByIdAndUpdate(id, userUpdated, { new: true });
    }
}