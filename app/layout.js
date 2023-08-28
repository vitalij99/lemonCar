import { Header } from "./_componets/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Limon Car",
    description: "Limon Car ren",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />

                {children}
            </body>
        </html>
    );
}
