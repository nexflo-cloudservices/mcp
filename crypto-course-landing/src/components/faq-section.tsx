"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

const faqs = [
  {
    question: "Is this course suitable for complete beginners?",
    answer: "Absolutely! Our course is designed to take you from zero knowledge to expert level. We start with the fundamentals of cryptocurrency and blockchain technology, then progressively build up to advanced trading strategies and investment techniques. No prior experience is required."
  },
  {
    question: "How long does it take to complete the course?",
    answer: "The course contains 25+ hours of video content, but you can learn at your own pace. Most students complete the entire curriculum within 2-4 weeks studying 1-2 hours per day. You have lifetime access, so you can take as long as you need and revisit materials anytime."
  },
  {
    question: "What if I'm not satisfied with the course?",
    answer: "We offer a comprehensive money-back guarantee (30-90 days depending on your plan). If you're not completely satisfied with the course content or don't feel you've gained valuable knowledge, we'll refund 100% of your payment, no questions asked."
  },
  {
    question: "Do I need a lot of money to start trading?",
    answer: "Not at all! We teach you how to start with as little as $100-500. The course focuses heavily on risk management and capital preservation. We'll show you how to gradually build your portfolio and never risk more than you can afford to lose."
  },
  {
    question: "Is cryptocurrency investing risky?",
    answer: "All investments carry risk, and cryptocurrency is no exception. However, our course emphasizes risk management, diversification, and educated decision-making. We teach you how to minimize risks while maximizing potential returns through proven strategies and proper portfolio management."
  },
  {
    question: "Will I get ongoing support after purchasing?",
    answer: "Yes! All plans include ongoing support through our community Discord server, email support, and regular live Q&A sessions. VIP members get direct access to instructors and priority support with response times under 2 hours."
  },
  {
    question: "Are the trading strategies still relevant in current markets?",
    answer: "Absolutely. Our strategies are based on fundamental market principles and technical analysis that remain effective regardless of market conditions. We regularly update the course content and provide market updates to keep you current with the latest trends and opportunities."
  },
  {
    question: "Can I access the course on mobile devices?",
    answer: "Yes! The course is fully optimized for mobile devices, tablets, and desktops. You can learn on the go using our mobile app, download lessons for offline viewing, and access all course materials from any device with your login credentials."
  },
  {
    question: "Do you cover taxes and legal compliance?",
    answer: "Yes, we have dedicated modules covering tax implications of cryptocurrency trading and investment, record-keeping requirements, and regulatory compliance in major countries including the US, Canada, UK, and EU. We also provide templates for tax reporting."
  },
  {
    question: "What makes this course different from free YouTube content?",
    answer: "While there's valuable free content available, our course provides a structured, comprehensive curriculum created by industry experts. You get direct access to instructors, a supportive community, practical tools, ongoing updates, and personalized guidance—all organized in a logical learning progression."
  },
  {
    question: "Is there a certificate upon completion?",
    answer: "Yes! Upon completing all modules and passing our final assessment, you'll receive a CryptoMaster Academy Certificate of Completion. This demonstrates your knowledge of cryptocurrency trading and investment strategies to employers or clients."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through Stripe with 256-bit SSL encryption. We also offer payment plans for the Professional and VIP tiers."
  }
]

export default function FAQSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Got questions? We have answers! Here are the most common questions from our students.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="border-0 shadow-lg rounded-xl bg-white"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                  <span className="font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 border-0 p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="mb-6 text-white/90">
              Our team is here to help! Get in touch and we'll answer any questions you have about the course.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2">
                <span>📧</span>
                <span>support@cryptomaster-academy.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💬</span>
                <span>Live chat support available</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}