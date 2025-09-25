"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about the course? Want to speak with our team? We're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Send us a Message
              </CardTitle>
              <CardDescription className="text-gray-600">
                We typically respond within 2-4 hours during business hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your questions or interests..."
                      className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="crypto"
                    size="lg"
                    className="w-full h-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Other Ways to Reach Us
              </h3>
              
              <Card className="p-6 border-l-4 border-l-purple-600">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email Support</h4>
                    <p className="text-gray-600 mb-2">For general inquiries and course questions</p>
                    <a 
                      href="mailto:support@cryptomaster-academy.com" 
                      className="text-purple-600 hover:text-purple-800 font-medium"
                    >
                      support@cryptomaster-academy.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-blue-600">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">💬</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Live Chat</h4>
                    <p className="text-gray-600 mb-2">Instant support during business hours</p>
                    <p className="text-blue-600 font-medium">Available 9 AM - 6 PM EST</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-green-600">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">WhatsApp Support</h4>
                    <p className="text-gray-600 mb-2">VIP members only - Direct instructor access</p>
                    <p className="text-green-600 font-medium">Upgrade to VIP for access</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* FAQ Link */}
            <Card className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6">
              <h4 className="font-semibold mb-3">Quick Answers</h4>
              <p className="text-gray-300 mb-4">
                Check our comprehensive FAQ section for instant answers to common questions.
              </p>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
                onClick={() => {
                  const faqSection = document.querySelector('section:has(h2:contains("Frequently Asked Questions"))')
                  if (faqSection) {
                    faqSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                View FAQ Section
              </Button>
            </Card>

            {/* Response Time Guarantee */}
            <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 text-center">
              <h4 className="font-bold text-xl mb-2">Response Time Guarantee</h4>
              <div className="text-3xl font-bold mb-2">&lt; 4 Hours</div>
              <p className="text-green-100">
                We guarantee a response to all inquiries within 4 hours during business days.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}