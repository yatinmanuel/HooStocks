import "./globals.scss";

import { GeistSans as FontSans } from "geist/font/sans";
import { cn } from "@/lib/utils";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { ThemeProvider } from "@/components/theme-provider"

import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased", FontSans.variable
      )}>
            <ThemeProvider
                attribute="class"
                storageKey="theme"
                defaultTheme="system"
                disableTransitionOnChange={true}
            >
                {children}
                <Footer/>
                <Toaster />
            </ThemeProvider>
        </body>
    </html>
  );
}
