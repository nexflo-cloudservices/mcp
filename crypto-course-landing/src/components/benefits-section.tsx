"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const benefits = [
  {
    title: "Master Trading Strategies",
    description: "Learn proven trading techniques, technical analysis, and risk management from professional traders with years of experience.",
    icon: "📈"
  },
  {
    title: "Blockchain Technology",
    description: "Understand the fundamentals of blockchain, smart contracts, and how different cryptocurrencies work under the hood.",
    icon: "🔗"
  },
  {
    title: "Portfolio Management",
    description: "Discover how to build and manage a diversified crypto portfolio that maximizes returns while minimizing risks.",
    icon: "💼"
  },
  {
    title: "DeFi & NFTs",
    description: "Explore decentralized finance protocols, yield farming, staking, and the exciting world of non-fungible tokens.",
    icon: "🏦"
  },
  {
    title: "Market Analysis",
    description: "Master fundamental and technical analysis to identify profitable opportunities and avoid common pitfalls.",
    icon: "🔍"
  },
  {
    title: "Regulatory Compliance",
    description: "Stay compliant with tax regulations and understand the legal landscape of cryptocurrency investments.",
    icon: "⚖️"
  }
]

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            What You'll Learn
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive curriculum covers everything you need to become a successful cryptocurrency trader and investor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed text-base">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Value Props */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Why Choose CryptoMaster Academy?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-white/90">Video Lessons</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Lifetime</div>
                <div className="text-white/90">Access</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">30-Day</div>
                <div className="text-white/90">Money Back Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}