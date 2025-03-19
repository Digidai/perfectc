import Link from "next/link"
import { ArrowUp, Star, Users, Zap, Clock, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#ff3366] via-[#ff3366] to-[#5271ff]">
        <header className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-white text-2xl font-bold flex items-center">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z" fill="white"/>
                <path d="M24.5 15.5C24.5 19.366 21.366 22.5 17.5 22.5C13.634 22.5 10.5 19.366 10.5 15.5C10.5 11.634 13.634 8.5 17.5 8.5C21.366 8.5 24.5 11.634 24.5 15.5Z" fill="#FF3366"/>
                <path d="M17.5 27.5C19.9853 27.5 22 25.4853 22 23C22 20.5147 19.9853 18.5 17.5 18.5C15.0147 18.5 13 20.5147 13 23C13 25.4853 15.0147 27.5 17.5 27.5Z" fill="#FF3366"/>
              </svg>
              perfect
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-white hover:text-white/80 transition-colors">
              Home
            </Link>
            <Link href="#" className="text-white hover:text-white/80 transition-colors">
              Success Stories
            </Link>
            <Link href="#" className="text-white hover:text-white/80 transition-colors">
              Blog
            </Link>
            <Link href="#" className="text-white hover:text-white/80 transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10 rounded-full px-6 font-normal">
              Login
            </Button>
            <Button className="bg-[#ff3366] hover:bg-[#e62e5c] text-white rounded-full px-6 shadow-lg border border-white/20">
              Book a Demo
            </Button>
          </div>
        </header>
        
        <main className="container mx-auto px-4 pt-16 pb-24 flex flex-col items-center">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Perfect Hire<br />in Seconds.
            </h1>
            <p className="text-white text-xl mb-12 font-light">
              Type what you're looking for, and let AI find the best matches - faster than ever
            </p>
            
            <div className="relative w-full max-w-2xl mx-auto mb-8">
              <textarea 
                className="w-full p-6 pr-16 rounded-2xl resize-none h-32 focus:outline-none shadow-lg text-gray-700 text-lg"
                placeholder="Ask PerfectAI to find me a..."
              />
              <button className="absolute bottom-6 right-6 bg-[#ff3366] hover:bg-[#e62e5c] text-white p-3 rounded-full transition-colors shadow-md">
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
            
            <p className="text-white/90 text-sm flex items-center justify-center gap-2 font-light">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              No Strings Attached, No credit card required
            </p>
          </div>
          
          <div className="mt-32 flex flex-wrap justify-center items-center gap-10 md:gap-16">
            <div className="text-white font-bold text-xl opacity-80">Stripe</div>
            <div className="text-white font-bold text-xl opacity-80">Coinbase</div>
            <div className="text-white font-bold text-2xl opacity-80">Rocco</div>
            <div className="text-white font-bold text-xl opacity-80">Fiverr</div>
            <div className="text-white font-bold text-xl opacity-80">McCann</div>
            <div className="text-white font-bold text-sm border border-white px-3 py-1 opacity-80">MINA</div>
            <div className="text-white font-bold text-xl opacity-80">Optimove</div>
            <div className="text-white font-bold text-sm bg-white text-[#ff3366] px-2 py-1 rounded">WORKIZ</div>
            <div className="text-white font-bold text-xl opacity-80">eToro</div>
          </div>
        </main>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-[#ff3366] font-semibold mb-2 inline-block">FEATURES</span>
            <h2 className="text-4xl font-bold mb-4">Why Recruiters Love Perfect</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Our AI-powered platform transforms how you find talent, saving time and improving match quality.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#ff3366]/10 p-4 rounded-full w-fit mb-6">
                <Zap className="h-7 w-7 text-[#ff3366]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">10x Faster Hiring</h3>
              <p className="text-gray-600 text-lg">Find qualified candidates in seconds instead of days. Our AI matches skills, experience, and culture fit instantly.</p>
              <a href="#" className="text-[#ff3366] font-semibold flex items-center mt-6 group">
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            
            <div className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#ff3366]/10 p-4 rounded-full w-fit mb-6">
                <Users className="h-7 w-7 text-[#ff3366]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Better Quality Matches</h3>
              <p className="text-gray-600 text-lg">Our AI understands nuanced requirements and finds candidates that truly match your needs, not just keyword matches.</p>
              <a href="#" className="text-[#ff3366] font-semibold flex items-center mt-6 group">
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            
            <div className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#ff3366]/10 p-4 rounded-full w-fit mb-6">
                <Clock className="h-7 w-7 text-[#ff3366]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reduced Time-to-Hire</h3>
              <p className="text-gray-600 text-lg">Streamline your entire recruitment process from sourcing to screening, cutting your time-to-hire by up to 70%.</p>
              <a href="#" className="text-[#ff3366] font-semibold flex items-center mt-6 group">
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-[#ff3366] font-semibold mb-2 inline-block">HOW IT WORKS</span>
            <h2 className="text-4xl font-bold mb-4">Three Simple Steps</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Revolutionize your hiring process with Perfect AI</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-6">
              <div className="bg-[#ff3366] text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-8 shadow-lg">1</div>
              <h3 className="text-2xl font-bold mb-4">Describe Your Ideal Candidate</h3>
              <p className="text-gray-600 text-lg">Simply type what you're looking for in natural language. No need for complex boolean searches or keywords.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-[#ff3366] text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-8 shadow-lg">2</div>
              <h3 className="text-2xl font-bold mb-4">AI Finds Perfect Matches</h3>
              <p className="text-gray-600 text-lg">Our AI analyzes millions of profiles to find candidates that truly match your requirements in seconds.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-[#ff3366] text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-8 shadow-lg">3</div>
              <h3 className="text-2xl font-bold mb-4">Connect & Hire</h3>
              <p className="text-gray-600 text-lg">Reach out to candidates directly through our platform and track your hiring pipeline in one place.</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button className="bg-[#ff3366] hover:bg-[#e62e5c] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-md">
              Try Perfect AI Now
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-[#ff3366] font-semibold mb-2 inline-block">TESTIMONIALS</span>
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">See how companies are transforming their hiring with Perfect</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                <Star className="h-5 w-5 fill-[#ff3366] text-[#ff3366]" />
                <Star className="h-5 w-5 fill-[#ff3366] text-[#ff3366]" />
                <Star className="h-5 w-5 fill-[#ff3366] text-[#ff3366]" />
                <Star className="h-5 w-5 fill-[#ff3366] text-[#ff3366]" />
                <Star className="h-5 w-5 fill-[#ff3366] text-[#ff3366]" />
              </div>
              <p className="text-gray-700 mb-6 italic text-lg">"Perfect has completely transformed our hiring process. We found a senior developer in just 2 days when it used to take us weeks. The quality of candidates is outstanding."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Head of Talent, Fiverr</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                <Star className="h-5 w-5 fill-[#ff3366] text-[#ff3366]" />
                <Star className="h-5 w-5 fill-[#ff3366] text-[#ff3366]" />
                <Star className="h-5 w-5 fill-[#ff3366] text-[#ff3366]" />
                <Star className="h-5 w-5 fill-[#ff3366] text-[#ff3366]" />
                <Star className="h-5 w-5 fill-[#ff3366] text-[#ff3366]" />
              </div>
              <p className="text-gray-700 mb-6 italic text-lg">"The AI understanding of our requirements is incredible. We're getting candidates that truly match our company culture and technical needs, not just keyword matches."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-600 text-sm">CTO, Optimove</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                <Star className="h-5 w-5 fill-[#ff3366] text-[#ff3366]" />
                <Star className="h-5 w-5 fill-[#ff3366] text-[#ff3366]" />
                <Star className="h-5 w-5 fill-[#ff3366] text-[#ff3366]" />
                <Star className="h-5 w-5 fill-[#ff3366] text-[#ff3366]" />
                <Star className="h-5 w-5 fill-[#ff3366] text-[#ff3366]" />
              </div>
              <p className="text-gray-700 mb-6 italic text-lg">"We've reduced our cost-per-hire by 60% and improved retention rates since using Perfect. The platform's ability to match candidates based on culture fit is game-changing."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Emma Rodriguez</h4>
                  <p className="text-gray-600 text-sm">HR Director, WORKIZ</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="text-[#ff3366] font-semibold flex items-center justify-center gap-2 text-lg">
              View all success stories <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#ff3366] mb-2">93%</div>
              <p className="text-lg">Faster Time-to-Hire</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#ff3366] mb-2">85%</div>
              <p className="text-lg">Better Candidate Quality</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#ff3366] mb-2">60%</div>
              <p className="text-lg">Cost Reduction</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#ff3366] mb-2">10K+</div>
              <p className="text-lg">Successful Placements</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#ff3366] via-[#ff3366] to-[#5271ff] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Hiring?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-light">Join thousands of companies finding their perfect hires faster than ever before.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#ff3366] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg">
              Book a Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#ff3366] font-semibold mb-2 inline-block">FAQ</span>
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Everything you need to know about Perfect AI</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How does Perfect AI find candidates?",
                answer: "Perfect AI uses advanced machine learning algorithms to analyze millions of candidate profiles across various platforms. It goes beyond keyword matching to understand the context, skills, experience, and cultural fit to find the most suitable candidates for your specific requirements."
              },
              {
                question: "How much does Perfect AI cost?",
                answer: "Perfect AI offers flexible pricing plans tailored to your organization's size and hiring needs. We have plans for startups, SMBs, and enterprise companies. Contact us for a custom quote or check our pricing page for standard plans."
              },
              {
                question: "Can Perfect AI integrate with our existing ATS?",
                answer: "Yes, Perfect AI seamlessly integrates with most popular Applicant Tracking Systems including Greenhouse, Lever, Workday, and more. Our team can help set up custom integrations if needed."
              },
              {
                question: "How accurate are the candidate matches?",
                answer: "Perfect AI has a 95% accuracy rate in matching candidates to job requirements. Our AI continuously learns from feedback to improve match quality over time. Most clients report significantly higher quality candidates compared to traditional recruitment methods."
              },
              {
                question: "Is my data secure with Perfect AI?",
                answer: "Absolutely. We take data security very seriously. Perfect AI is SOC 2 Type II certified and GDPR compliant. All data is encrypted both in transit and at rest, and we never share your data with third parties without explicit permission."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6 border-b border-gray-200 pb-6 last:border-0">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button className="bg-[#ff3366] hover:bg-[#e62e5c] text-white rounded-full px-6 py-2 font-semibold">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <div className="text-white text-2xl font-bold flex items-center mb-6">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z" fill="white"/>
                  <path d="M24.5 15.5C24.5 19.366 21.366 22.5 17.5 22.5C13.634 22.5 10.5 19.366 10.5 15.5C10.5 11.634 13.634 8.5 17.5 8.5C21.366 8.5 24.5 11.634 24.5 15.5Z" fill="#FF3366"/>
                  <path d="M17.5 27.5C19.9853 27.5 22 25.4853 22 23C22 20.5147 19.9853 18.5 17.5 18.5C15.0147 18.5 13 20.5147 13 23C13 25.4853 15.0147 27.5 17.5 27.5Z" fill="#FF3366"/>
                </svg>
                perfect
              </div>
              <p className="text-gray-400 mb-6 text-lg">AI-powered recruitment platform that finds your perfect hires in seconds.</p>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.3\

