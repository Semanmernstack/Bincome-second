import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import getCurrentUser from "./getActions/getCurrentUser";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser()
  console.log(currentUser)
  return (
    <html lang="en">
      <body className="bg-blue-300  p-8 shadow-sm">
        <Nav currentUser = {currentUser}/>
        {children}
      </body>
    </html>
  );
}
