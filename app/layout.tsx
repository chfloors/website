import type { Metadata } from "next";
import "./ui/globals.css";
import "./ui/custom.scss";
import { inter } from "./ui/fonts";
import Navbar from "./ui/navbar";
import Script from "next/script";
import Footer from "./ui/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <Script src="/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <body className={inter.className}>
          <Navbar />
          <div className="container-fluid p-0 m-0">{children}</div>
          <Footer/>
        </body>
      </html>
    </>
  );
}
