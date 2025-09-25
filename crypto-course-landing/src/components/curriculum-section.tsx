"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

const curriculumModules = [
  {
    module: "Module 1",
    title: "Cryptocurrency Fundamentals",
    duration: "4 hours",
    lessons: 12,
    description: "Build a solid foundation in cryptocurrency and blockchain technology",
    topics: [
      "What is Cryptocurrency and How It Works",
      "Blockchain Technology Deep Dive", 
      "Bitcoin vs Altcoins: Understanding the Differences",
      "Cryptocurrency Wallets and Security",
      "Public and Private Keys",
      "Transaction Verification and Mining",
      "Consensus Mechanisms (PoW, PoS)",
      "Reading Cryptocurrency Whitepapers"
    ]
  },
  {
    module: "Module 2", 
    title: "Technical Analysis & Chart Reading",
    duration: "6 hours",
    lessons: 18,
    description: "Master the art of reading charts and identifying profitable trading opportunities",
    topics: [
      "Candlestick Patterns and Market Psychology",
      "Support and Resistance Levels",
      "Trend Lines and Chart Patterns",
      "Moving Averages and Technical Indicators", 
      "RSI, MACD, Bollinger Bands",
      "Volume Analysis and Market Sentiment",
      "Fibonacci Retracements and Extensions",
      "Risk Management and Position Sizing"
    ]
  },
  {
    module: "Module 3",
    title: "Trading Strategies & Risk Management", 
    duration: "5 hours",
    lessons: 15,
    description: "Learn proven trading strategies and how to manage risk like a professional",
    topics: [
      "Day Trading vs Swing Trading vs HODLing",
      "Entry and Exit Strategies",
      "Stop-Loss and Take-Profit Orders",
      "Portfolio Diversification",
      "Dollar-Cost Averaging (DCA)",
      "Scalping and Arbitrage Opportunities",
      "Managing Emotions and Trading Psychology",
      "Creating Your Trading Plan"
    ]
  },
  {
    module: "Module 4",
    title: "DeFi & Advanced Concepts",
    duration: "7 hours", 
    lessons: 21,
    description: "Explore decentralized finance and advanced cryptocurrency concepts",
    topics: [
      "Decentralized Finance (DeFi) Fundamentals",
      "Yield Farming and Liquidity Mining",
      "Staking and Passive Income Strategies",
      "DEXs vs CEXs: Choosing the Right Exchange",
      "Smart Contracts and DApps",
      "NFTs and the Digital Art Market",
      "Layer 1 vs Layer 2 Solutions", 
      "Cross-Chain and Interoperability"
    ]
  },
  {
    module: "Module 5",
    title: "Portfolio Management & Tax Compliance",
    duration: "3 hours",
    lessons: 9,
    description: "Learn professional portfolio management and stay compliant with regulations",
    topics: [
      "Building a Balanced Crypto Portfolio",
      "Rebalancing Strategies",
      "Tax Implications of Crypto Trading",
      "Record Keeping and Reporting",
      "Regulatory Compliance by Country",
      "Estate Planning with Cryptocurrency",
      "Insurance and Security Best Practices",
      "Long-term Wealth Building Strategies"
    ]
  }
]

export default function CurriculumSection() {
  const totalHours = curriculumModules.reduce((sum, module) => sum + parseInt(module.duration), 0)
  const totalLessons = curriculumModules.reduce((sum, module) => sum + module.lessons, 0)

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Complete Course Curriculum
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Our comprehensive curriculum is designed to take you from beginner to expert cryptocurrency trader and investor
          </p>
          
          {/* Course Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
              <span className="text-purple-600 font-semibold">{totalHours} hours</span>
              <span className="text-gray-600">of content</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
              <span className="text-blue-600 font-semibold">{totalLessons} lessons</span>
              <span className="text-gray-600">total</span>
            </div>
            <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
              <span className="text-green-600 font-semibold">Lifetime</span>
              <span className="text-gray-600">access</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {curriculumModules.map((module, index) => (
              <AccordionItem 
                key={index} 
                value={`module-${index}`}
                className="border-0 shadow-lg rounded-xl bg-white"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center justify-between w-full mr-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-lg text-gray-800 group-hover:text-purple-600 transition-colors">
                          {module.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {module.module} • {module.duration} • {module.lessons} lessons
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      {module.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">What you'll learn:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <span className="text-gray-700 text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bonus Content */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 border-0 p-8 text-center text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🎁 Exclusive Bonus Content
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-lg font-semibold mb-2">Trading Tools</div>
                <div className="text-white/90 text-sm">Custom indicators and calculators</div>
              </div>
              <div>
                <div className="text-lg font-semibold mb-2">Private Community</div>
                <div className="text-white/90 text-sm">Access to exclusive Discord group</div>
              </div>
              <div>
                <div className="text-lg font-semibold mb-2">Monthly Q&A</div>
                <div className="text-white/90 text-sm">Live sessions with instructors</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}