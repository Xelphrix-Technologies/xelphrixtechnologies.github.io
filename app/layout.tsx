import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Script from "next/script";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xelphrixtechnologies.com"),
  applicationName: "Xelphrix Technologies",
  authors: [{ name: "Xelphrix Technologies" }],
  creator: "Xelphrix Technologies",
  publisher: "Xelphrix Technologies",
  category: "Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#25343F]">
      <body className="bg-[#EAEFEF] text-[#25343F] overscroll-none">
        
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-VG4RJ9K2RP`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VG4RJ9K2RP);
          `}
        </Script>

      </body>
    </html>
  );
}