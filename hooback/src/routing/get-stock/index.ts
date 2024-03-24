import Webserver from "../../index";
import { Request, Response } from 'express';

import { config } from 'dotenv';
config();

import OpenAI from "openai";

export default {
    path: "/get-stock",
   
    GET (req: Request, res: Response, client: Webserver) {
        res.status(401).send('forbidden');
    },
    async POST (req: Request, res: Response, client: Webserver) {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_KEY as string
        });

        const { stock_short_name }: {stock_short_name: string} = req.body;

        if (!stock_short_name) {
            return res.status(400).send({ message: 'Missing Data' });
        }

        const api_key = process.env.API_KEY as string;

        const open_close_stocks = await fetch(`https://api.polygon.io/v2/aggs/ticker/${stock_short_name}/prev?adjusted=true&limit=120&apiKey=${encodeURI(api_key)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${api_key}`
            }
        })

        const current_price = await fetch(`https://api.polygon.io/v1/open-close/${stock_short_name}/2024-03-22?adjusted=true&apiKey=${encodeURI(api_key)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${api_key}`
            }
        })

        const company_name = await fetch(`https://api.polygon.io/v3/reference/tickers?ticker=${stock_short_name}&type=CS&active=true&apiKey=${encodeURI(api_key)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${api_key}`
            }
        })

        const json_oc = await open_close_stocks.json();
        const json_cn = await company_name.json();
        const json_cp = await current_price.json();

        if (json_oc.resultsCount === 0) {
            return res.status(400).send({ message: 'No Data' });
        }

        if (json_cn.resultsCount === 0) {
            return res.status(400).send({ message: 'No Data' });
        }

        if (json_cp.resultsCount === 0) {
            return res.status(400).send({ message: 'No Data' });
        }

        const reasoning = await openai.chat.completions.create({ 
            model: "gpt-4",
            messages: [{ role: "user", content: `This is information about a stock, Can you provide a letter rating, index rating (int) ( 1 through 100 ), and a short justification as to why that rating was received? Format this now as a JSON object with the fields 'rating', 'indexrating', 'justify', here it is: ${JSON.stringify(json_oc)}`}],
        })
        
        if (!reasoning.choices[0].message.content) {
            return res.status(400).send({ message: 'No Data' });
        }

        return res.status(200).send({"polygon": json_oc, "reasoning": JSON.parse(reasoning.choices[0].message.content as string), "name": json_cn.results[0].name, "current_price": json_cp});
    },
    PUT (req: Request, res: Response, client: Webserver) {
        res.status(401).send('forbidden');
    },
    DELETE (req: Request, res: Response, client: Webserver) {
        res.status(401).send('forbidden');
    }
}
