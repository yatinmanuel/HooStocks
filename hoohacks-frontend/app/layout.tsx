import "./globals.scss";

import { GeistSans as FontSans } from "geist/font/sans";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased", FontSans.variable
      )}>{children}</body>
    </html>
  );
}
