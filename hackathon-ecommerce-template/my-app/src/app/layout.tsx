
import "./globals.css";
import Navbarup from "./component/Navbarup";
import NavbarBottom from "./component/NavbarBottom";

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
        
      </body>
    </html>
  );
}
{/* <div style={{ flexGrow: 1 }}>{children}</div> */}