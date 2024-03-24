"use client";

import NavUser from "@/components/nav-user";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import axios from "axios";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
        
    const [ stock, setStock ] = useState<any>(null);
    
    async function GetStock(stock_short_name: string) {
        await axios.post('http://localhost:8080/get-stock', {
            stock_short_name: stock_short_name
        }).then((response) => {
            setStock(response.data);
        }).catch((error) => {
            console.error(error);
        });

    }


    useEffect(() => {
        GetStock('AAPL');
        console.log("running")
    }, []);

    return (
        <>
            <NavUser />
            <main className="h-screen mt-12 px-6 py-6 lg:py-12 lg:px-12">
                    <form className="w-full inline-flex gap-4">
                        <input id="stock" type="text" className="w-full p-2 border-2 border-gray-300 rounded-lg" 
                        onSubmit={(e) => {
                            e.preventDefault();
                            let stock = document.getElementById('stock') as HTMLInputElement;
                            GetStock(stock.value);
                        }}
                        placeholder="Search for a stock shortname" />
                        <Button onClick={(e) => {
                            e.preventDefault();
                            let stock = document.getElementById('stock') as HTMLInputElement;
                            GetStock(stock.value);}
                        }>Search</Button>
                    </form>
                <div className="my-4">
                    <h1 className="font-bold text-4xl ">Dashboard</h1>
                </div>
                <div className="py-2 gap-4 grid grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <div className="flex gap-6">
                                        <p className="font-bold text-xl">Name: </p>
                                        <p className="text-xl text-left">{stock ? (stock.name) : ""}</p>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <div className="flex gap-6">
                                        <p className="font-bold text-xl">Ticker: </p>
                                        <p className="text-xl text-left">{stock ? (stock.polygon.ticker) : "ticker"}</p>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <div className="flex gap-6">
                                        <p className="font-bold text-xl">Current Price: </p>
                                        <p className="text-xl text-left">{ stock ? (`$${stock.current_price.close}` ) : (`$0`) }</p>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                        </Card>
                </div>
                <div className="pb-[2rem] grid grid-cols-3 gap-4 ">
                        <Card>
                            <CardHeader>
                                <CardTitle className="grid justify-items-center text-xl font-bold">Letter Score</CardTitle>
                                <CardDescription className="grid justify-items-center text-center" >A letter representation calculated based on history and current performance</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="grid justify-items-center text-7xl font-bold">{stock ? (stock.reasoning.rating) : "F"}</p>
                            </CardContent>
                        </Card>
                        <Card >
                            <CardHeader>
                                <CardTitle className="grid justify-items-center text-xl font-bold">Justification</CardTitle>
                                <CardDescription className="grid justify-items-center text-center" >Scoring reasoning</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{stock ? (stock.reasoning.justify) : "No Data"}</p>
                            </CardContent>
                        </Card>
                        <Card >
                            <CardHeader>
                                <CardTitle className="grid justify-items-center text-xl font-bold">Index Score</CardTitle>
                                <CardDescription className="grid justify-items-center text-center" >A number representation calculated based on history and current performance, out of 100</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="grid justify-items-center text-7xl font-bold">{stock ? (stock.reasoning.indexrating) : "0"}</p>
                            </CardContent>
                        </Card>
                </div>
            </main>
        </>
    )
}
