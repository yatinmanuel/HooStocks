import Image from "next/image";
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "HooStocks",
    description: "",
}

import Navbar from "@/components/navigation-bar";

import { Button } from "@/components/ui/button"

import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
    CardDescription
} from "@/components/ui/card";

import { AuroraBorealis } from "@/components/ui/aurora-borealis";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <AuroraBorealis>
                    <div className="grid justify-items-center">
                        <h1 className="text-7xl text-primary">HooStocks</h1>
                        <p className="text-2xl text-[#9e9e9e] dark:text-[#dfe9e9]">stock analysis platform</p>
                    </div>
                </AuroraBorealis>
                <div className="px-6 py-6 lg:px-12 lg:py-12">
                    <h1 className="text-4xl text-primary">Welcome to HooStocks</h1>
                    <p className="text-lg text-[#9e9e9e] dark:text-[#dfe9e9]">The future of investing is here.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 lg:mt-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Real Time Analytics</CardTitle>
                                <CardDescription>monitor your assets by the minute</CardDescription>
                            </CardHeader>
                            <CardContent>
                                Time is everything, our platform provides instantaneous updates on market movements, stock performance, and key events that impact your investments.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Unlimited API Calls</CardTitle>
                                <CardDescription>zero-interruption</CardDescription>
                            </CardHeader>
                            <CardContent>
                                Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>AI Analysis</CardTitle>
                                <CardDescription>fine-tuned scoring engine</CardDescription>
                            </CardHeader>
                            <CardContent>
                                Our AI engine collects and processes vast amounts of financial data, including historical performance, market trends, company fundamentals, and macroeconomic indicators.
                            </CardContent>
                        </Card>
                    </div>
                    <div className="mt-4 lg:mt-8">
                        <h1 className="text-4xl text-primary">About Us</h1>
                        <p className="text-lg text-[#9e9e9e] dark:text-[#dfe9e9]">The future of investing is here.</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 lg:mt-8">
                            <div className="hidden lg:block">
                                <Image src="/StockMarket.png" width={500} height={500} alt="The Stock Market" />
                            </div>
                            <div>
                                <p className="text-lg text-[#9e9e9e] dark:text-[#dfe9e9]"> We are a team of high school seniors from Northern Virginia competing in HooHacks 2024. We are dedicated to creating impactful tools that bridge any gaps in financial literacy with this web-app dedicated towards the stock market.</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 lg:py-12">
                        <h1 className="text-4xl text-primary">Pricing</h1>
                        <p className="text-lg text-[#9e9e9e] dark:text-[#dfe9e9]">The future of investing is here.</p>

                        <div className="grid grid-cols-4">
                            <div className="p-2">
                                <Card>
                                    <div className="p-3">
                                        <CardHeader>
                                            <CardTitle>Free Plan</CardTitle>
                                            <CardDescription></CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <li> No aditional costs </li>
                                            <li> 5GB of storage space </li>
                                            <li> Up to 5 users </li>
                                            <li> Full email support </li>
                                            <Button className="grid justify-items-center w-full mt-6">Buy Now</Button>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                            <div className="p-2">

                                <Card>
                                    <div className="p-3">
                                        <CardHeader>
                                            <CardTitle>Pro Plan</CardTitle>
                                            <CardDescription></CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <li> $10 per month </li>
                                            <li> 10GB of storage space </li>
                                            <li> Up to 10 users </li>
                                            <li> Full email support </li>
                                            <Button className="grid justify-items-center w-full mt-6">Buy Now</Button>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                            <div className="p-2">

                                <Card>
                                    <div className="p-3">
                                        <CardHeader>
                                            <CardTitle>Ultimate Plan</CardTitle>
                                            <CardDescription></CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <li> $20 per month </li>
                                            <li> 20GB of storage space </li>
                                            <li> Up to 20 users </li>
                                            <li> Full email support </li>
                                            <Button className="grid justify-items-center w-full mt-6">Buy Now</Button>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                            <div className="p-2">

                                <Card>
                                    <div className="p-3">
                                        <CardHeader>
                                            <CardTitle>Enterprise Plan</CardTitle>
                                            <CardDescription></CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <li> $30 per month </li>
                                            <li> 30GB of storage space </li>
                                            <li> Up to 30 users </li>
                                            <li> Full email support </li>
                                            <Button className="grid justify-items-center w-full mt-6">Buy Now</Button>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
