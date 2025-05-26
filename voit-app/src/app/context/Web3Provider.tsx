"use client";

import { ThirdwebProvider, smartWallet } from "thirdweb/react";
import { polygon } from "thirdweb/chains";
import { CLIENT_ID } from "../utils/constants";
import { defineChain } from "thirdweb/chains";

const customChain = defineChain({
  id: 137,
  name: "Polygon Mainnet",
  rpc: "https://polygon-rpc.com",
});

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider
      activeChain={customChain}
      clientId={CLIENT_ID}
      supportedWallets={[
        smartWallet({
          factoryAddress: "0x...", // أضف عنوان العقد الذكي إذا كنت تستخدم Smart Wallets
          chain: customChain,
          gasless: true,
        }),
      ]}
    >
      {children}
    </ThirdwebProvider>
  );
}