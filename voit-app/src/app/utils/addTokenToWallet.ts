import { addToWallet } from "thirdweb/wallets";

export async function addTokenToWallet(
  address: string,
  symbol: string,
  decimals: number,
  image?: string
) {
  try {
    if (!window.ethereum) throw new Error("No Ethereum provider found");
    
    await addToWallet({
      type: "ERC20",
      options: {
        address,
        symbol,
        decimals,
        image,
      },
    });
    return true;
  } catch (error) {
    console.error("Error adding token:", error);
    return false;
  }
}

declare global {
  interface Window {
    ethereum?: any;
  }
}