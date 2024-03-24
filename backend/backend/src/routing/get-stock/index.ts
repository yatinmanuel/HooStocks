import Webserver from "../../index";
import { Request, Response } from 'express';

import { config } from 'dotenv';
config();

export default {
    path: "/get-stock",
   
    async GET (req: Request, res: Response, client: Webserver) {
        const { stockShortName }: {stockShortName: string} = req.body;

        if (!stockShortName) {
            return res.status(400).send({ message: 'Missing Data' });
        }

        // Date in format YYYY-MM-DD
        const date = new Date().toISOString().split('T')[0];

        const data = await fetch(`https://api.polygon.io/v2/aggs/ticker/${stockShortName}/range/1/day/${date}/${date}?adjusted=true&sort=asc&limit=${process.env.API_KEY}`, {
            method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.API_KEY}`
        }
        })

        const json = await data.json();

        if (json.resultsCount === 0) {
            return res.status(400).send({ message: 'No Data' });
        }

        return res.status(200).send(json);
    },
    POST (req: Request, res: Response, client: Webserver) {
        res.status(401).send('forbidden');
    },
    PUT (req: Request, res: Response, client: Webserver) {
        res.status(401).send('forbidden');
    },
    DELETE (req: Request, res: Response, client: Webserver) {
        res.status(401).send('forbidden');
    }
}
