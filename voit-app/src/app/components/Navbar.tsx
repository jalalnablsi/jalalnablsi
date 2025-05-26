"use client";

import { useState, useEffect } from "react";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { createThirdwebClient } from "thirdweb";
import { readContract } from "thirdweb";
import Link from "next/link";
import { SunIcon, MoonIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID || "",
});

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("app.phantom"),
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [balance, setBalance] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  useEffect(() => {
    if (address) fetchBalance();
  }, [address]);

  const fetchBalance = async () => {
    try {
      const result = await readContract({
        contract: {
          address: process.env.NEXT_PUBLIC_TOKEN_CONTRACT || "",
          abi: [
            {
              inputs: [{ name: "account", type: "address" }],
              name: "balanceOf",
              outputs: [{ name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        method: "balanceOf",
        params: [address],
      });
      setBalance(result.toString());
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <CurrencyDollarIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            NoTalkVote
          </span>
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center space-x-6">
          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-800 dark:text-gray-300 font-medium hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
            >
              Docs
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg overflow-hidden z-50">
                <Link
                  href="/whitepaper"
                  download
                  className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                >
                  Whitepaper
                </Link>
                <Link
                  href="/planning"
                  className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                >
                  Planning
                </Link>
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {darkMode ? (
              <MoonIcon className="h-5 w-5 text-yellow-500" />
            ) : (
              <SunIcon className="h-5 w-5 text-yellow-500" />
            )}
          </button>

          {/* Connect Wallet Button */}
          <ConnectButton
            client={client}
            wallets={wallets}
            connectModal={{ size: "wide" }}
            onConnect={(wallet) => setAddress(wallet.account.address)}
            onDisconnect={() => {
              setAddress(null);
              setBalance(null);
            }}
            theme={darkMode ? "dark" : "light"}
          >
            {address && balance && (
              <div className="ml-3 flex items-center">
                <span className="font-medium mr-2">
                  {(+balance / 10 ** 18).toFixed(2)}
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs">
                  NOTALK
                </span>
              </div>
            )}
          </ConnectButton>
        </div>
      </div>
    </nav>
  );
}