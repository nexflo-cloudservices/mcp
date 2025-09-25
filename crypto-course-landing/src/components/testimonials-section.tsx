"use client"

import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Financial Analyst",
    content: "This course completely transformed my understanding of cryptocurrency. I went from knowing nothing to successfully trading and managing a profitable portfolio. The instructors are incredibly knowledgeable and supportive.",
    rating: 5,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b43dacac-5943-441b-b6fa-5763932e6c92.png",
    profit: "$25,000+ profit in 6 months"
  },
  {
    name: "Marcus Chen",
    title: "Software Engineer", 
    content: "As a tech person, I thought I understood crypto, but this course opened my eyes to the trading and investment side. The strategies taught here are practical and actually work in real markets.",
    rating: 5,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6f164693-49e0-4ab9-bf4c-67aa2e7eb25f.png",
    profit: "$18,000+ profit in 4 months"
  },
  {
    name: "Emily Rodriguez",
    title: "Marketing Director",
    content: "I was skeptical about crypto investing, but the instructors made everything so clear and easy to understand. Now I'm confidently building my crypto portfolio and seeing great returns.",
    rating: 5,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f3242769-5181-488b-ad09-69e5d97016ae.png",
    profit: "$12,000+ profit in 3 months"
  },
  {
    name: "David Kim",
    title: "Investment Banker",
    content: "Even with my finance background, I learned so much from this course. The DeFi and NFT modules were particularly valuable. This is the most comprehensive crypto education available.",
    rating: 5,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20b5bd6d-5400-4372-9e80-e47ada6905f2.png",
    profit: "$40,000+ profit in 8 months"
  },
  {
    name: "Lisa Thompson",
    title: "Business Owner",
    content: "The course content is exceptional, but what really sets this apart is the ongoing support and community. I never feel alone in my crypto journey thanks to the amazing instructors and fellow students.",
    rating: 5,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e953d843-56e2-4b46-b38c-7780fd1d6981.png",
    profit: "$22,000+ profit in 5 months"
  },
  {
    name: "Ahmed Hassan",
    title: "Data Scientist",
    content: "The analytical approach to crypto investing taught in this course is phenomenal. I now use data-driven strategies to make informed decisions and my portfolio performance has improved dramatically.",
    rating: 5,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/747b6a47-7206-4b5a-80f4-b84fafe1dfac.png",
    profit: "$35,000+ profit in 7 months"
  }
]

export default function TestimonialsSection() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Student Success Stories
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful students who have transformed their financial future with our proven crypto curriculum
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50,000+</div>
            <div className="text-gray-600">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">$2M+</div>
            <div className="text-gray-600">Student Profits</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Profit Badge */}
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold text-center mb-4">
                  {testimonial.profit}
                </div>
                
                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={`${testimonial.name} - ${testimonial.title}`}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold shadow-lg">
            <span className="mr-2">✓</span>
            Verified Reviews from Real Students
          </div>
        </div>
      </div>
    </section>
  )
}