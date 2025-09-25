"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const instructors = [
  {
    name: "Dr. Michael Chen",
    title: "Lead Instructor & Blockchain Expert",
    credentials: "PhD in Computer Science, Former Goldman Sachs",
    experience: "12 years",
    specialties: ["Blockchain Technology", "Technical Analysis", "Risk Management"],
    bio: "Dr. Chen has over 12 years of experience in financial markets and blockchain technology. He previously worked as a quantitative analyst at Goldman Sachs and has been investing in cryptocurrencies since 2011. He holds a PhD in Computer Science from MIT.",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7cc14b8f-ccb3-40c8-937e-f5dd988d36df.png",
    achievements: [
      "Published 15+ research papers on blockchain",
      "Managed $500M+ crypto fund",
      "Keynote speaker at 50+ conferences"
    ]
  },
  {
    name: "Sarah Williams",
    title: "Trading Strategy Expert",
    credentials: "CFA, Former JP Morgan VP",
    experience: "10 years",
    specialties: ["Day Trading", "Options Strategies", "Market Psychology"],
    bio: "Sarah is a CFA charterholder with 10 years of institutional trading experience. She was a Vice President at JP Morgan before transitioning to crypto markets. She specializes in developing algorithmic trading strategies.",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/480e7dde-6a00-4041-9c9f-05a6300f3d87.png",
    achievements: [
      "Generated 300%+ returns annually",
      "Trained 1000+ professional traders",
      "Featured in Forbes & Wall Street Journal"
    ]
  },
  {
    name: "Alex Rodriguez",
    title: "DeFi & NFT Specialist",
    credentials: "MS in Finance, Ethereum Foundation",
    experience: "8 years",
    specialties: ["DeFi Protocols", "NFT Markets", "Smart Contracts"],
    bio: "Alex has been involved in the DeFi space since its inception and has worked with the Ethereum Foundation. He has a Master's in Finance and has helped launch several successful DeFi protocols with over $1B in TVL.",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d14e3849-25cc-4ef6-a0e6-4ba2230e065b.png",
    achievements: [
      "Launched 3 DeFi protocols ($1B+ TVL)",
      "Early NFT collector & advisor",
      "Solidity smart contract expert"
    ]
  }
]

export default function InstructorSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Meet Your Expert Instructors
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from industry veterans with decades of combined experience in traditional finance and cryptocurrency markets
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {instructors.map((instructor, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 relative">
                  <img 
                    src={instructor.avatar} 
                    alt={`${instructor.name} - ${instructor.title}`}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    {instructor.experience}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  {instructor.name}
                </CardTitle>
                <CardDescription className="text-purple-600 font-semibold mb-1">
                  {instructor.title}
                </CardDescription>
                <CardDescription className="text-gray-600 text-sm">
                  {instructor.credentials}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {instructor.bio}
                </p>
                
                {/* Specialties */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {instructor.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instructor Stats */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Combined Instructor Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">30+</div>
              <div className="text-white/90 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$2B+</div>
              <div className="text-white/90 text-sm">Assets Managed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-white/90 text-sm">Speaking Engagements</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-white/90 text-sm">Students Taught</div>
            </div>
          </div>
        </div>

        {/* Support Team */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Plus 24/7 Support Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our dedicated support team of teaching assistants and community moderators ensure you get help whenever you need it. 
            With average response times under 2 hours, you're never alone on your learning journey.
          </p>
          <div className="flex justify-center items-center gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">&lt; 2hrs</div>
              <div className="text-sm text-gray-600">Avg Response Time</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Community Support</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">99%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}