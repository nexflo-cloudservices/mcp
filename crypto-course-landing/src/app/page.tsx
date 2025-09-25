import HeroSection from "@/components/hero-section"
import BenefitsSection from "@/components/benefits-section"
import TestimonialsSection from "@/components/testimonials-section"
import CurriculumSection from "@/components/curriculum-section"
import InstructorSection from "@/components/instructor-section"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CurriculumSection />
      <InstructorSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">CryptoMaster Academy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering the next generation of cryptocurrency traders and investors with expert knowledge and proven strategies.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Course</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#curriculum" className="block hover:text-white transition-colors">Curriculum</a>
                <a href="#pricing" className="block hover:text-white transition-colors">Pricing</a>
                <a href="#" className="block hover:text-white transition-colors">Free Resources</a>
                <a href="#" className="block hover:text-white transition-colors">Student Portal</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block hover:text-white transition-colors">Contact Us</a>
                <a href="#" className="block hover:text-white transition-colors">Community</a>
                <a href="#" className="block hover:text-white transition-colors">Live Chat</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="block hover:text-white transition-colors">Refund Policy</a>
                <a href="#" className="block hover:text-white transition-colors">Disclaimer</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p>&copy; 2024 CryptoMaster Academy. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <span>🔒 Secure Payment Processing</span>
                <span>✓ 30-90 Day Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}