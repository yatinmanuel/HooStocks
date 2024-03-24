/** routing/hello-world/index.ts is a template file for each other route */

import { Request, Response } from 'express';
import Webserver from "../../index"

// Package Imports
import bcrypt from 'bcrypt';

import User from '../../schemas/users';

export default {
    // The path of the route
    path: '/signup',
    // The handlers for the route
    GET(req: Request, res: Response, client: Webserver) {
        return res.status(401).send('forbidden');
    },
    // eslint-disable-next-line no-unused-vars
    async POST(req: Request, res: Response, client: Webserver) {
        const { username, password, email, firstname, lastname } = req.body;

        if (!username || !password || !email || !firstname || !lastname) {
            return res.status(400).send({ message: 'bad request' });
        }
        
        console.log(username, password, email, firstname, lastname);

        let user = await User.findOne({
            username: username
        });

        if (user) {
            return res.status(400).send({ message: 'user already exists' });
        }

        user = await User.findOne({
            email: email
        });

        if (user) {
            return res.status(400).send({ message: 'email already exists' });
        }

        const hashedPassword = bcrypt.hash(password, 20);
        
        const new_user = new User({
            username: username,
            password: hashedPassword,
            email: email,
            firstname: firstname,
            lastname: lastname
        });

        await new_user.save();

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

