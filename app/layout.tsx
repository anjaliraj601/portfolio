import { Button } from "@/components/ui/button";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Anjali Raj",
  description: "Hello welcome to my website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[#1E1B2E] text-white md:px-20">
          <header className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Portfolio.</h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="hover:text-cyan-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-cyan-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-cyan-400">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact-me" className="hover:text-cyan-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="md:hidden">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content className="bg-[#1E1B2E] p-2 rounded-md shadow-md">
                    <DropdownMenu.Item className="p-2 hover:bg-cyan-400 hover:text-black rounded-md cursor-pointer">
                      <Link href="#">Home</Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="p-2 hover:bg-cyan-400 hover:text-black rounded-md cursor-pointer">
                      <Link href="#">About</Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="p-2 hover:bg-cyan-400 hover:text-black rounded-md cursor-pointer">
                      <Link href="#">Projects</Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="p-2 hover:bg-cyan-400 hover:text-black rounded-md cursor-pointer">
                      <Link href="#">Contact</Link>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>
          </header>
        </div>
        {children}
      </body>
    </html>
  );
}
