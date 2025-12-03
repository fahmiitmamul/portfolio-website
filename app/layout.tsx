import type { Metadata } from "next";
import { Open_Sans, Raleway } from "next/font/google";
import "./globals.css";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Itmmaul Fahmi | Fullstack Developer",
  description: "Portfolio Website Itmamul Fahmi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${OpenSans.variable} ${raleway.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
