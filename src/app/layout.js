import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohit Raj Panday | Portfolio",
  description: "Mohit Raj Panday | Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-200/20`}>
        <Header />
        <main className="w-full min-h-[90vh] lg:h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
