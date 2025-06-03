import { user } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import jsonSecret from "../config/jsonSecret.js";


const { compare } = bcryptjs;

class AuthService {
    async login(userAuth) {
        try {
            const userObj = await user.findOne({
                email: userAuth.email,
            }).select("id email password");
    
            if (!userObj) {
                throw new Error("Usuário não encontrado");
            }
    
            const passwordMatch = await compare(userAuth.password, userObj.password);
    
            if (!passwordMatch) {
                throw new Error("Usuário ou senha errado");
            }
    
            const accessToken = jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                },
                jsonSecret.secret,
                {
                    expiresIn: 86400,
                }
            );
    
            return { accessToken };
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default AuthService;
