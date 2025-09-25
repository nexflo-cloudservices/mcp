"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function HeroSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-medium">🚀 Over 50,000+ Students Enrolled</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Master <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Cryptocurrency</span><br />
            Trading & Investment
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Learn from industry experts and join thousands of successful traders. 
            Get comprehensive training in blockchain technology, trading strategies, 
            and portfolio management with our proven curriculum.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="xl" 
              variant="crypto"
              onClick={scrollToPricing}
              className="text-lg px-8 py-4 h-auto shadow-2xl"
            >
              Start Learning Today
            </Button>
            <Button 
              size="xl" 
              variant="outline"
              className="text-lg px-8 py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={() => {
                const curriculumSection = document.getElementById('curriculum')
                if (curriculumSection) {
                  curriculumSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              View Curriculum
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50,000+</div>
              <div className="text-white/80">Active Students</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">92%</div>
              <div className="text-white/80">Success Rate</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-white/80">Expert Support</div>
            </Card>
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-center">
            <p className="text-white/70 mb-4">Trusted by students from</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold text-lg">Harvard</div>
              <div className="text-white font-semibold text-lg">Stanford</div>
              <div className="text-white font-semibold text-lg">MIT</div>
              <div className="text-white font-semibold text-lg">Goldman Sachs</div>
              <div className="text-white font-semibold text-lg">JP Morgan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  )
}