import { ReactNode } from "react";
import "@/app/styles/global.scss";

export default function RootLayout({
  children,
}: 
Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
};