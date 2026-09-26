import type { Metadata } from "next";
import { Google_Sans, Google_Sans_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

const googleCode = Google_Sans_Code({
  variable: "--font-google-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediaUtils - JProMi",
  description: "A Brazilian open-source website for manipulating media.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${googleSans.variable} ${googleCode.variable} h-full antialiased`}
    >
      <Header />
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer />
    </html>
  );
}
