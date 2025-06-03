import jwt from 'jsonwebtoken';
import jsonSecret from '../config/jsonSecret';

export default async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(400).send("Access token não foi informado");
    }

    const [, accessToken] = token.split(" ");
    try {
        const decoded = jwt.verify(accessToken, jsonSecret.secret);
        const { id, email } = decoded;
        req.userId = id;
        req.userEmail = email;

        return next();
    } catch (error) {
        return res.status(401).send("Usuário não autorizado");
    }
};