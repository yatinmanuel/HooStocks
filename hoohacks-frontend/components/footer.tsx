"use client";

export default function Footer() {
    return <div className="px-4 py-6 bg-primary text-background">
        <div className="grid justify-items-center">
            <h1>&copy; 2024-{new Date().getFullYear()} HooHacks. All Rights Reserved.</h1>
        </div>
    </div>
}
