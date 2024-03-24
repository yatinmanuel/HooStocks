/** routing/hello-world/index.ts is a template file for each other route */

import { Request, Response } from 'express';
import Webserver from "../../index"

// Package Imports
import bcrypt from 'bcrypt';



export default {
    // The path of the route
    path: '/signup',
    // The handlers for the route
    GET(req: Request, res: Response, client: Webserver) {
        return res.status(401).send('forbidden');
    },
    // eslint-disable-next-line no-unused-vars
    POST(req: Request, res: Response, client: Webserver) {
        const { username, password, email, firstname, lastname } = req.body;

        if (!username || !password || !email || !firstname || !lastname) {
            return res.status(400).send({ message: 'bad request' });
        }

        const hashedPassword = bcrypt.hash(password, 20);

        let user = client.database.User.findOne({
            where: {
                username: username
            }
        });

        if (user) {
            return res.status(400).send({ message: 'user already exists' });
        }

        user = client.database.User.findOne({
           email: email
        });
        
        if (user) {
            return res.status(400).send({ message: 'email already exists' });
        }

        client.database.User.create({
            data: {
                username: username,
                password: hashedPassword,
                email: email,
                firstname: firstname,
                lastname: lastname,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        });

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

