import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbarup from "./component/Navbarup";
import NavbarBottom from "./component/NavbarBottom";
import Footer from "./component/Footer";
import FontAwesomeConfig from "./fontawesome";



export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <FontAwesomeConfig/>
      </head>
      <body>
        <Navbarup/>
        <NavbarBottom/>
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
