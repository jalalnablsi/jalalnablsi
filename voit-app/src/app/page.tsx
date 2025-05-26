import Navbar from "./components/Navbar";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 pt-20">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Welcome to NoFreeTalk
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Empower your voice in the decentralized world. With NFTK tokens, you can actively participate in governance and shape the future of our community.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="https://x.com/No_Free_Talk "
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Follow us on Twitter
            </a>
            <Link
              href="/whitepaper"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
            Whitepaper
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Card 1: Buy NFTK */}
          <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-purple-300 mb-4">Buy NFTK</h2>
            <p className="text-gray-400 mb-4">
             Stay tuned, big updates are coming soon !
            </p>
          </div>

          {/* Card 2: Start Voting */}
          <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">Start Voting</h2>
            <p className="text-gray-400 mb-4">
              Use your NFTK tokens to vote on proposals and influence the direction of our community.
              Stay tuned, big updates are coming soon !
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}