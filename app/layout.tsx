import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import RecoilStateProvider from "@/state-management/RecoilStateProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Prayer",
  description:
    "We believe that praying together strengthens our fellowship in Jesus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RecoilStateProvider>{children}</RecoilStateProvider>
      </body>
    </html>
  );
}
