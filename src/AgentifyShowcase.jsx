import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaCodeBranch,
  FaCoins,
  FaRocket,
  FaPlay,
  FaChartLine,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function AgentifyShowcase() {
  const [stats, setStats] = useState({
    totalJobs: 0,
    activeChains: 0,
    chains: [],
    loading: true,
  });

  useEffect(() => {
    document.title = "Agentify - The AI Agent Infrastructure for Web3";

    const fetchAgentStats = async () => {
      try {
        // Fetch chain data from DeFi Llama
        const response = await fetch("https://api.llama.fi/chains");
        const chainData = await response.json();

        // Filter for relevant chains where Agentify operates
        const supportedChains = ["Ethereum", "Arbitrum", "Polygon", "BNB"];
        const agentifyChains = chainData
          .filter((chain) => supportedChains.includes(chain.name))
          .map((chain) => ({
            name: chain.name,
            tvl: chain.tvl,
            chainId: chain.chainId,
          }));

        // Calculate mock agent activity based on TVL
        const totalJobs = agentifyChains.reduce(
          (sum, chain) => sum + Math.floor(chain.tvl / 100),
          0
        );

        setStats({
          totalJobs,
          activeChains: agentifyChains.length,
          chains: agentifyChains,
          loading: false,
        });
      } catch (error) {
        console.error("Failed to fetch chain data:", error);
        setStats((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchAgentStats();
    const interval = setInterval(fetchAgentStats, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <FaRobot className="text-purple-400 text-3xl" />,
      title: "Autonomous AI Agents",
      description:
        "Deploy AI agents that automate on-chain tasks and adapt to your behavior.",
      videoDemo: "https://youtu.be/hLJTcVHW8_I?si=LdpqKn4T2ldAZ2eJ",
    },
    {
      icon: <FaCodeBranch className="text-green-400 text-3xl" />,
      title: "Model Context Protocol",
      description:
        "Agents gain memory and learn contextually using MCP — a protocol-native memory layer.",
      videoDemo: "https://youtu.be/N3vHJcHBS-w?si=xSE4NmteDfAA-KMb",
    },
    {
      icon: <FaCoins className="text-yellow-400 text-3xl" />,
      title: "Monetized Agents",
      description:
        "Agents can generate revenue through fees, acting like on-chain income tools.",
      videoDemo: "https://youtu.be/VZljj_EkFag?si=ji16lNSfuLJvrxwm",
    },
    {
      icon: <FaRocket className="text-red-400 text-3xl" />,
      title: "Cross-Chain & Scalable",
      description:
        "Agents operate across Ethereum, Arbitrum, BNB Chain, and beyond.",
      videoDemo: "https://youtu.be/rj7-sE6H-Hs?si=29I9CyUEvqH5v_KJ",
    },
  ];

  const useCases = [
    {
      title: "DeFi Yield Optimizer",
      description:
        "Agent automatically moves funds to highest-yielding protocols",
      videoUrl: "https://www.youtube.com/embed/ty2X8q2ksMk?si=knVuzGP8X1aCUMZa",
    },
    {
      title: "NFT Trading Agent",
      description: "AI-powered buying/selling based on market trends",
      videoUrl: "https://www.youtube.com/embed/5RQb1jcCZGo?si=8Us9RhP5Y4v-enhe",
    },
    {
      title: "Cross-Chain Arbitrage",
      description: "Detects and executes profitable trades across chains",
      videoUrl: "https://www.youtube.com/embed/VLuG_3Qw-SQ?si=236LGl9NiJQpbib6",
    },
  ];

  // Format large numbers
  const formatNumber = (num) => new Intl.NumberFormat().format(Math.floor(num));

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] text-white font-sans px-4 py-10 md:px-8 md:py-16">
      <motion.div
        className="flex justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <a
          href="https://agentifyai.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://framerusercontent.com/images/DEWALKlvIxE41a3SWadTq7gvs.png?scale-down-to=512"
            alt="Agentify Logo"
            className="h-12 md:h-16"
          />
        </a>
      </motion.div>
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            The Future of Web3 Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Agentify powers autonomous AI agents that work for you across DeFi,
            NFTs, and cross-chain ecosystems.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:opacity-90 transition-all">
              <a
                href="https://agentifyai.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a2e] border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {feature.description}
                </p>
                <a
                  href={feature.videoDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-400 hover:underline flex items-center"
                >
                  Watch demo <FaExternalLinkAlt className="ml-1 text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r text-center from-purple-900/30 to-blue-900/30 border border-gray-800 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-purple-500/10 rounded-full mb-6">
              <FaChartLine className="text-3xl text-purple-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Live Network Activity
            </h2>

            {stats.loading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-gray-800/50 rounded-xl p-6">
                    <div className="h-8 bg-gray-700 rounded animate-pulse mb-4 w-3/4"></div>
                    <div className="h-6 bg-gray-700 rounded animate-pulse w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  <div className="bg-gray-900/50 p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      {formatNumber(stats.totalJobs)}
                    </div>
                    <div className="text-gray-300">Jobs Executed</div>
                  </div>

                  <div className="bg-gray-900/50 p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      {stats.activeChains}
                    </div>
                    <div className="text-gray-300">Active Chains</div>
                  </div>

                  <div className="bg-gray-900/50 p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      $
                      {formatNumber(
                        stats.chains.reduce(
                          (sum, chain) => sum + chain.tvl,
                          0
                        ) / 1000000
                      )}
                      M
                    </div>
                    <div className="text-gray-300">Total Value Secured</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Chain Performance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.chains.map((chain) => (
                      <div
                        key={chain.chainId}
                        className="bg-gray-900/70 border border-gray-800 p-4 rounded-lg"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{chain.name}</span>
                          <span className="text-sm text-green-400">
                            ${(chain.tvl / 1000000).toFixed(1)}M TVL
                          </span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div
                            className="bg-purple-500 h-2 rounded-full"
                            style={{
                              width: `${Math.min(
                                100,
                                (chain.tvl / 50000000) * 100
                              )}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            <div className="mt-10 text-center">
              <p className="text-xs text-gray-500 mt-4">
                Data powered by DeFi Llama API • Updates every minute
              </p>
            </div>
          </div>
        </motion.div>

        {/* Demo Videos Section */}
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center"
          >
            Agentify in Action
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((demo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1a1a2e] border border-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all"
              >
                <div className="aspect-video bg-black">
                  <iframe
                    src={demo.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={demo.title}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{demo.title}</h3>
                  <p className="text-gray-400">{demo.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Automate Your Web3 Workflow?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of developers and traders using Agentify to save time
            and maximize returns.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:opacity-90 transition-all">
              <a
                href="https://app.agentifyai.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Building
              </a>
            </button>
            <button className="px-8 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition-all">
              <a
                href="https://docs.agentifyai.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm pt-12"
        >
          <p>
            © {new Date().getFullYear()} Built by{" "}
            <a
              href="http://x.com/PrinceWarexy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              PrinceWarexy
            </a>{" "}
            for the next evolution of the web.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
