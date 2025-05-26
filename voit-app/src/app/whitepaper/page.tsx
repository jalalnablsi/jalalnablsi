"use client";
import Navbar from "../components/Navbar";

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-20">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl font-bold mb-6 gradient-text">NoFreeTalk Whitepaper</h1>
        <p className="text-xl text-gray-300 mb-8">
          Empowering community-driven decision-making through decentralized voting.
        </p>
      </section>

      {/* Content Sections */}
      <main className="container mx-auto px-4 py-12 space-y-12">
        {/* Abstract */}
        <section id="abstract" className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-400">Abstract</h2>
          <p className="text-gray-300">
            NoFreeTalk is a revolutionary token project that blends the viral appeal of meme culture with the practicality of a real-world utility token. Our mission is to empower community-driven decision-making through decentralized voting while fostering entertainment, funding, and corporate collaboration. This whitepaper outlines the vision, tokenomics, and roadmap of NoFreeTalk.
          </p>
        </section>

        {/* Table of Contents */}
        <section id="table-of-contents" className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-400">Table of Contents</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><a href="#overview" className="hover:text-blue-400 transition-colors">Overview</a></li>
            <li><a href="#token-distribution" className="hover:text-blue-400 transition-colors">Token Supply and Distribution</a></li>
            <li><a href="#voting-models" className="hover:text-blue-400 transition-colors">Voting Models</a></li>
            <li><a href="#long-term-utility" className="hover:text-blue-400 transition-colors">Long-Term Utility</a></li>
            <li><a href="#security-rights" className="hover:text-blue-400 transition-colors">Security & Rights</a></li>
            <li><a href="#roadmap" className="hover:text-blue-400 transition-colors">Roadmap</a></li>
            <li><a href="#conclusion" className="hover:text-blue-400 transition-colors">Conclusion</a></li>
          </ul>
        </section>

        {/* Overview */}
        <section id="overview" className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-400">Overview</h2>
          <p className="text-gray-300">
            NoFreeTalk is designed to bridge the gap between meme culture and real-world utility tokens. By leveraging decentralized voting mechanisms, we aim to create a platform where users can participate in fun, funding, and enterprise-level voting. Our token serves as the backbone of this ecosystem, enabling seamless interaction and value transfer.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>Mission:</strong> Empower community-driven decision-making.</li>
            <li><strong>Vision:</strong> Build a decentralized ecosystem for entertainment, funding, and collaboration.</li>
          </ul>
        </section>

        {/* Token Supply and Distribution */}
        <section id="token-distribution" className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-400">Token Supply and Distribution</h2>
          <p className="text-gray-300">
            The total supply of NoFreeTalk tokens is <strong>2,000,000,000 tokens</strong>, distributed as follows:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-blue-400">Presale</h3>
              <p className="text-gray-300">
                <strong>600,000,000 tokens (30%)</strong> - Fundraising for project development and marketing.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-400">Airdrop</h3>
              <p className="text-gray-300">
                <strong>400,000,000 tokens (20%)</strong> - Community engagement and awareness campaigns.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-400">Team & Developers</h3>
              <p className="text-gray-300">
                <strong>300,000,000 tokens (15%)</strong> - Locked for 12 months to ensure long-term commitment.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-400">Treasury & Reserve</h3>
              <p className="text-gray-300">
                <strong>300,000,000 tokens (15%)</strong> - Operational expenses, marketing, and future liquidity.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-indigo-400">Staking Rewards</h3>
              <p className="text-gray-300">
                <strong>200,000,000 tokens (10%)</strong> - Incentivize users to stake tokens and participate in governance.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-pink-400">Strategic Partners</h3>
              <p className="text-gray-300">
                <strong>100,000,000 tokens (5%)</strong> - Allocated to investors and partners supporting the project.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-400">Liquidity Pool</h3>
              <p className="text-gray-300">
                <strong>100,000,000 tokens (5%)</strong> - Ensure stability and liquidity on decentralized exchanges (DEXs).
              </p>
            </div>
          </div>
          <p className="text-gray-300">
            <strong>Key Features of Token Distribution:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Fairness: The distribution ensures a balanced allocation between investors, the community, and the team.</li>
            <li>Transparency: All allocations are publicly disclosed, with vesting schedules for locked tokens.</li>
            <li>Community Focus: A significant portion (20%) is reserved for airdrops to attract early adopters.</li>
          </ul>
        </section>

        {/* Voting Models */}
        <section id="voting-models" className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-400">Voting Models</h2>
          <div className="space-y-6">
            {/* Fun Voting */}
            <div>
              <h3 className="text-2xl font-bold text-blue-400">(a) Fun Voting</h3>
              <p className="text-gray-300">
                <strong>Description:</strong> Users vote for fun without losing their tokens.
              </p>
              <p className="text-gray-300">
                <strong>Mechanism:</strong> Tokens used in voting are returned post-vote.
              </p>
              <p className="text-gray-300">
                <strong>Use Case:</strong> Entertainment and community engagement.
              </p>
            </div>

            {/* Funding Voting */}
            <div>
              <h3 className="text-2xl font-bold text-green-400">(b) Funding Voting</h3>
              <p className="text-gray-300">
                <strong>Description:</strong> Users stake tokens to support projects or initiatives.
              </p>
              <p className="text-gray-300">
                <strong>Mechanism:</strong> Tokens go directly to the project creator, with a 5% platform fee.
              </p>
              <p className="text-gray-300">
                <strong>Use Case:</strong> Crowdfunding for creative projects or startups.
              </p>
            </div>

            {/* Enterprise Voting */}
            <div>
              <h3 className="text-2xl font-bold text-yellow-400">(c) Enterprise Voting</h3>
              <p className="text-gray-300">
                <strong>Description:</strong> Brands and companies launch official polls for product validation or feedback.
              </p>
              <p className="text-gray-300">
                <strong>Mechanism:</strong> Only users holding a defined token value (e.g., $1,000 worth) can participate.
              </p>
              <p className="text-gray-300">
                <strong>Use Case:</strong> Corporate collaboration and market research.
              </p>
            </div>
          </div>
        </section>

        {/* Long-Term Utility */}
        <section id="long-term-utility" className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-400">Long-Term Utility</h2>
          <p className="text-gray-300">
            NoFreeTalk aims to establish affiliate partnerships with global brands. Instead of claiming commissions, our model returns affiliate profits as discounts to token holders. In return, we promote partner brands within our community. This creates a win-win ecosystem where both token holders and brands benefit.
          </p>
        </section>

        {/* Security & Rights */}
        <section id="security-rights" className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-400">Security & Rights</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            
            <li>Token Ownership: The contract is non-mintable beyond the fixed supply.</li>
            <li>Future Governance: Transition to a DAO-based governance model for decentralized decision-making.</li>
          </ul>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-400">Roadmap</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-400">Phase 1: Pre-Launch</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
               <li>Initiate community-building activities (Airdrop campaigns).</li>
                <li>Launch presale rounds (Seed Sale and Private Sale).</li>
                
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-400">Phase 2: Launch</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>List the token on major decentralized exchanges (DEXs).</li>
                <li>Roll out the initial voting dApp.</li>
                <li>Begin staking rewards program.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-400">Phase 3: Expansion</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Partner with affiliate brands for long-term utility.</li>
                <li>Expand the voting ecosystem to include enterprise-level features.</li>
                <li>Introduce NFT-based rewards for active participants.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-400">Phase 4: Decentralization</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Transition to a DAO-based governance model.</li>
                <li>Enable full decentralization of the platform.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-400">Conclusion</h2>
          <p className="text-gray-300">
            NoFreeTalk is more than just a token—it’s a bridge between entertainment, funding, and real-world purchasing power. Our project is built on transparency, utility, and community engagement. Join us early and help shape the future of on-chain interaction.
          </p>
        </section>
      </main>

      {/* Download PDF Button */}
      <footer className="container mx-auto px-4 py-12 text-center">
      
      </footer>
    </div>
  );
}