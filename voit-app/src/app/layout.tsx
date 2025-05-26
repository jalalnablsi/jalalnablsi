// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoTalkVote - Decentralized Voting Platform",
  description: "Vote using cryptocurrency and earn rewards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThirdwebProvider
          activeChain="polygon-amoy"
          clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
        >
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}