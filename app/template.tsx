"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from './Components/SideBar'
import NavBar from './Components/NavBar'
const inter = Inter({ subsets: ["latin"] });
import TitleBar from './Components/TitleBar'
import { usePathname } from "next/navigation";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const [MainPath, SubPath] = parts.slice(-2);
  

  return (
    <html lang="en">
      <body className={inter.className}>
        { SubPath === "Login" &&  <div>{children}</div> }
        { SubPath !== "Login" && 
        <div className="h-screen max-h-screen bg-[#ffffff]">
          <NavBar />
          <div className="flex h-[90%]">
            <SideBar route={pathname} />
            <div className="h-full w-[82%] ">
              <TitleBar/>
            {children}
            </div>
          </div>
        </div>
        }
      </body>
    </html>
  );
}
