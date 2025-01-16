//Next.js
import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow } from "next/font/google";

//Global css
import "./globals.css";

//Theme provider
import { ThemeProvider } from "next-themes";

//Clerk provider
import { ClerkProvider } from "@clerk/nextjs";

//Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlowFont = Barlow({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

//Meta data
export const metadata: Metadata = {
  title: "MiniShop",
  description:
    "Welcome to MiniShop, your ultimate destination for seamless online shopping, and exprerience the joy of hassle-free online shopping. Start explore today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable}  ${barlowFont.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
