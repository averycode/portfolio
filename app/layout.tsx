import Link from "next/link";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
    title: "Daniel Renz",
    description: "Personal Website from Daniel Renz",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-gradient-to-tr from-[#FFEFBA] to-[#FFFFFF]">
                <Navbar />
                <div>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
