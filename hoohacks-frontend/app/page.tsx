import Image from "next/image";
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "HooStocks",
    description: "",
}

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

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
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
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
                        <p className="text-lg text-[#9e9e9e] dark:text-[#dfe9e9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div>
                </div>
            </div>
            <div className="py-6 lg:py-12">
                <h1 className="text-4xl text-primary">Pricing</h1>
                <p className="text-lg text-[#9e9e9e] dark:text-[#dfe9e9]">The future of investing is here.</p>
               <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead></TableHead>
                            <TableHead>Free</TableHead>
                            <TableHead>Pro</TableHead>
                            <TableHead>Enterprise</TableHead>
                            <TableHead>Ultimate</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Price</TableCell>
                            <TableCell>Free</TableCell>
                            <TableCell>$10</TableCell>
                            <TableCell>$20</TableCell>
                            <TableCell>$30</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Storage</TableCell>
                            <TableCell>5GB</TableCell>
                            <TableCell>10GB</TableCell>
                            <TableCell>20GB</TableCell>
                            <TableCell>30GB</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Users</TableCell>
                            <TableCell>5</TableCell>
                            <TableCell>10</TableCell>
                            <TableCell>20</TableCell>
                            <TableCell>30</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Support</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>API Requests</TableCell>
                            <TableCell>No</TableCell>
                            <TableCell>100 per hour</TableCell>
                            <TableCell>5000 per hour</TableCell>
                            <TableCell>unlimited</TableCell>
                        </TableRow>
                    </TableBody>
               </Table>
            </div>
        </div>
   </main>
  );
}
