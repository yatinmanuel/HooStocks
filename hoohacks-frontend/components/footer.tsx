"use client";

export default function Footer() {
    return <div className="px-4 py-6 bg-primary text-background">
        <div className="grid justify-items-center">
            <h1>All rights reserved HooStocks. 2024-{new Date().getFullYear()}&copy;</h1>
        </div>
    </div>
}
