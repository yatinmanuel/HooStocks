/** routing/hello-world/index.ts is a template file for each other route */

import { Request, Response } from 'express';
import Webserver from "../../index"

import bcrypt from 'bcrypt';
import User from '../../schemas/users';


export default {
    // The path of the route
    path: '/login',
    // The handlers for the route
    GET(req: Request, res: Response, client: Webserver) {
        return res.status(401).send('forbidden');
    },
    // eslint-disable-next-line no-unused-vars
    async POST(req: Request, res: Response, client: Webserver) {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send({ message: 'bad request' });
        }

        const user = await User.findOne({ username: username } || { email: username });

        if ( !user ) {
            return res.status(400).send({ message: 'user not found' });
        }

        const passwordCheck = await bcrypt.compare(password, user.password);
        
        if (!passwordCheck) {
            return res.status(401).send({ message: 'wrong password' });
        }

        return res.status(200).send({ message: 'success' });
    },
    // eslint-disable-next-line no-unused-vars
    PUT(req: Request, res: Response, client: Webserver) {
        return res.status(401).send('forbidden'); 
    },
    // eslint-disable-next-line no-unused-vars
    DELETE(req: Request, res: Response, client: Webserver) {
        return res.status(401).send('forbidden');
    }
}

