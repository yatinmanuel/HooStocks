import Image from "next/image";
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "HooStocks",
    description: "",
}

import {
    Card,
    CardTitle,
    CardFooter,
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
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
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
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
                </CardContent>
            </Card>

        </div>
        </div>
    </main>
  );
}
