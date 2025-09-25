"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const pricingPlans = [
  {
    name: "Basic",
    price: 297,
    originalPrice: 497,
    description: "Perfect for beginners who want to start their crypto journey",
    features: [
      "Complete 25-hour video course",
      "Downloadable resources & guides",
      "Basic trading templates",
      "Email support",
      "Mobile app access",
      "30-day money back guarantee"
    ],
    popular: false,
    savings: "40% OFF"
  },
  {
    name: "Professional",
    price: 497,
    originalPrice: 797,
    description: "Most popular choice for serious crypto investors",
    features: [
      "Everything in Basic plan",
      "Live weekly Q&A sessions",
      "Private Discord community",
      "Advanced trading tools & indicators",
      "Portfolio tracking templates",
      "1-on-1 mentorship session (30 min)",
      "Bonus: DeFi masterclass ($200 value)",
      "Lifetime updates",
      "60-day money back guarantee"
    ],
    popular: true,
    savings: "37% OFF"
  },
  {
    name: "VIP",
    price: 997,
    originalPrice: 1497,
    description: "For serious traders who want maximum success",
    features: [
      "Everything in Professional plan",
      "3 one-on-one mentorship sessions",
      "Personal portfolio review & optimization",
      "Direct access to instructors via WhatsApp",
      "VIP-only trading alerts & signals", 
      "Custom trading strategy development",
      "Bonus: NFT investing course ($300 value)",
      "Bonus: Tax optimization consultation",
      "Priority support (< 2 hour response)",
      "90-day money back guarantee"
    ],
    popular: false,
    savings: "33% OFF"
  }
]

export default function PricingSection() {
  const handleEnrollClick = (planName: string, price: number) => {
    // This would typically integrate with Stripe or payment processor
    console.log(`Enrolling in ${planName} plan for $${price}`)
    // For now, we'll scroll to a contact section or show a modal
    alert(`Ready to enroll in the ${planName} plan for $${price}! Payment integration would go here.`)
  }

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Choose Your Success Path
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Join thousands of successful students and start your cryptocurrency mastery journey today
          </p>
          
          {/* Limited Time Offer */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full font-semibold shadow-lg mb-8">
            <span className="mr-2">🔥</span>
            Limited Time: Save up to 40% - Ends in 24 hours!
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 ${
                plan.popular 
                  ? 'border-gradient-to-r from-purple-600 to-blue-600 bg-gradient-to-b from-purple-50 to-blue-50 scale-105' 
                  : 'border-gray-200 bg-white hover:border-purple-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}

              {/* Savings Badge */}
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {plan.savings}
              </div>

              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {plan.description}
                </CardDescription>
                
                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-gray-800">
                      ${plan.price}
                    </span>
                    <span className="text-xl text-gray-400 line-through">
                      ${plan.originalPrice}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">One-time payment</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  size="lg"
                  variant={plan.popular ? "crypto" : "default"}
                  className="w-full text-lg py-6 h-auto font-semibold"
                  onClick={() => handleEnrollClick(plan.name, plan.price)}
                >
                  {plan.popular ? "Start Learning Now" : "Get Started"}
                </Button>

                {/* Money Back Guarantee */}
                <div className="text-center text-sm text-gray-600">
                  <span className="inline-flex items-center gap-1">
                    <span>🛡️</span>
                    {plan.name === "VIP" ? "90" : plan.name === "Professional" ? "60" : "30"}-day money back guarantee
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Comparison */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Compare This To Traditional Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-xl font-semibold mb-2 text-red-200">Traditional Finance Course</div>
                <div className="text-3xl font-bold mb-2">$15,000+</div>
                <div className="text-sm text-white/80">+ 2-4 years time commitment</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold mb-2 text-green-200">CryptoMaster Academy</div>
                <div className="text-3xl font-bold mb-2">$297-$997</div>
                <div className="text-sm text-white/80">Learn at your own pace</div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="text-lg font-semibold">Save over $14,000 and years of your time!</div>
            </div>
          </div>
        </div>

        {/* Payment Security */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Secure payment processing powered by Stripe</p>
          <div className="flex justify-center items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span className="text-sm">256-bit SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💳</span>
              <span className="text-sm">All Major Cards Accepted</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span className="text-sm">PCI Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}