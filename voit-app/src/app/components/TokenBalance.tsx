"use client";

import { useActiveAccount } from "thirdweb/react";
import { balanceOf } from "thirdweb/extensions/erc20";
import { CONTRACT_ADDRESS } from "../utils/constants";
import { addTokenToWallet } from "../utils/addToken";
import { useState, useEffect } from "react";

export function TokenBalance() {
  const account = useActiveAccount();
  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (!account?.address) return;
      
      try {
        const result = await balanceOf({
          contract: {
            address: CONTRACT_ADDRESS,
            abi: [{
              inputs: [{ name: "account", type: "address" }],
              name: "balanceOf",
              outputs: [{ name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            }],
          },
          address: account.address,
        });
        setBalance((Number(result) / 1e18).toLocaleString());
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, [account?.address]);

  if (!account || !balance) return null;

  return (
    <button 
      onClick={() => addTokenToWallet(CONTRACT_ADDRESS, "NFTK", 18)}
      className="flex items-center gap-2 bg-purple-900/50 hover:bg-purple-900/70 px-4 py-2 rounded-full transition-colors"
    >
      <span className="font-medium">{balance}</span>
      <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">
        NFTK
      </span>
    </button>
  );
}