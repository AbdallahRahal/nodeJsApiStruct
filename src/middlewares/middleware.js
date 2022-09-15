import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const testMiddleware = async (req, res, next) => {

    if (1 == 1) {
        return next();

    } else {
        return res.status(401).send("A token is required for authentication");

    }

};
