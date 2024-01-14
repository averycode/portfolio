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
            <body>
                <Navbar />
                <div>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
