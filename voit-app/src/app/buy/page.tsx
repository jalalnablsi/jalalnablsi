import { Navbar } from "../components/Navbar";
import { PayEmbed } from "thirdweb/react";
import { polygon } from "thirdweb/chains";
import { CLIENT_ID, CONTRACT_ADDRESS } from "../utils/constants";

export default function BuyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 pt-20">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto glass-card rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
            <h1 className="text-2xl font-bold">Purchase NFTK Tokens</h1>
            <p className="opacity-90">1 NFTK = 1 MATIC</p>
          </div>
          
          <div className="p-6">
            <PayEmbed
              clientId={CLIENT_ID}
              chain={polygon}
              payOptions={{
                mode: "buy",
                metadata: {
                  name: "NFTK Token Purchase",
                },
                prefillBuy: {
                  tokenAddress: CONTRACT_ADDRESS,
                  tokenAmount: "10",
                },
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}