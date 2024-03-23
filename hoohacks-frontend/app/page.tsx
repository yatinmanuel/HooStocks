import Image from "next/image";
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "HooStocks",
    description: "",
}

import { AuroraBorealis } from "@/components/ui/aurora-borealis";

export default function Home() {
  return (
    <main>
        <AuroraBorealis>
            <div className="grid justify-items-center">
                <h1 className="text-7xl text-primary">HooStocks</h1>
                <p className="text-2xl text-[#9e9e9e] dark:text-[#dfe9e9]">The future of investing is here.</p>
            </div>         
        </AuroraBorealis>
    </main>
  );
}
