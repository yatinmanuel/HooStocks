import Webserver from "../../index";
import { Request, Response } from 'express';

import { config } from 'dotenv';
config();

export default {
    path: "/get-stock",
   
    GET (req: Request, res: Response, client: Webserver) {
        res.status(401).send('forbidden');
    },
    async POST (req: Request, res: Response, client: Webserver) {
        const { stock_short_name }: {stock_short_name: string} = req.body;

        if (!stock_short_name) {
            return res.status(400).send({ message: 'Missing Data' });
        }

        // Date in format YYYY-MM-DD
        const date = new Date().toISOString().split('T')[0];
        
        const api_key = process.env.API_KEY as string;

        const data = await fetch(`https://api.polygon.io/v2/aggs/ticker/${stock_short_name}/range/1/day/${date}/${date}?adjusted=true&sort=asc&limit=120&apiKey=${encodeURI(api_key)}`, {
            method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${api_key}`
        }
        })

        const json = await data.json();

        if (json.resultsCount === 0) {
            return res.status(400).send({ message: 'No Data' });
        }

        return res.status(200).send(json);
    },
    PUT (req: Request, res: Response, client: Webserver) {
        res.status(401).send('forbidden');
    },
    DELETE (req: Request, res: Response, client: Webserver) {
        res.status(401).send('forbidden');
    }
}
