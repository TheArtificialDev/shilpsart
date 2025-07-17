import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function StartJourneyPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      {/* Scrollable Content Layer */}
      <div className="relative z-10 min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight font-fredoka">
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                Begin Your Artistic
              </span>
              <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl color-explosion">
                Transformation Today
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-poppins">
              🌟 Schedule your complimentary consultation and discover your personalized learning path
            </p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-5xl mx-auto mb-8">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-emerald-300 font-bold text-lg font-poppins">👶 Ages 4-16 Years</p>
                  <p className="text-white/80 text-sm font-poppins">Perfect developmental stage</p>
                </div>
                <div>
                  <p className="text-blue-300 font-bold text-lg font-poppins">💻 Online Classes</p>
                  <p className="text-white/80 text-sm font-poppins">Tue/Thu 5:00-6:00 PM</p>
                </div>
                <div>
                  <p className="text-purple-300 font-bold text-lg font-poppins">🏫 Offline Classes</p>
                  <p className="text-white/80 text-sm font-poppins">Mon-Sat 4:00-6:00 PM</p>
                </div>
              </div>
              <p className="text-center text-white/70 text-sm font-poppins mt-4">
                📍 Offline classes at Kidee Kasavanahalli Center
              </p>
            </div>
          </div>
        </section>

        {/* Assessment Quiz Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 sparkle-effect font-fredoka">
                  <span className="bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent">
                    🎯 Find Your Perfect Starting Point
                  </span>
                </h2>
                <p className="text-xl text-charcoal max-w-3xl mx-auto font-poppins">
                  Take our quick assessment to discover which level matches your goals
                </p>
              </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 mb-12">
              <div className="space-y-8">
                {/* Question 1 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-charcoal font-fredoka">
                    1. What&apos;s your current experience with fine arts? 🎨
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg cursor-pointer hover:bg-white/70 transition-all duration-300">
                      <input type="radio" name="experience" value="beginner" className="text-coral-500" />
                      <span className="text-charcoal font-poppins">Complete beginner</span>
                    </label>
                    <label className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg cursor-pointer hover:bg-white/70 transition-all duration-300">
                      <input type="radio" name="experience" value="some" className="text-coral-500" />
                      <span className="text-charcoal font-poppins">Some drawing experience</span>
                    </label>
                    <label className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg cursor-pointer hover:bg-white/70 transition-all duration-300">
                      <input type="radio" name="experience" value="experienced" className="text-coral-500" />
                      <span className="text-charcoal font-poppins">Experienced artist</span>
                    </label>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-charcoal font-fredoka">
                    2. What&apos;s your main artistic goal? 🌟
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg cursor-pointer hover:bg-white/70 transition-all duration-300">
                      <input type="radio" name="goal" value="explore" className="text-coral-500" />
                      <span className="text-charcoal font-poppins">Explore creativity as a hobby</span>
                    </label>
                    <label className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg cursor-pointer hover:bg-white/70 transition-all duration-300">
                      <input type="radio" name="goal" value="develop" className="text-coral-500" />
                      <span className="text-charcoal font-poppins">Develop serious artistic skills</span>
                    </label>
                    <label className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg cursor-pointer hover:bg-white/70 transition-all duration-300">
                      <input type="radio" name="goal" value="master" className="text-coral-500" />
                      <span className="text-charcoal font-poppins">Master advanced techniques</span>
                    </label>
                    <label className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg cursor-pointer hover:bg-white/70 transition-all duration-300">
                      <input type="radio" name="goal" value="portfolio" className="text-coral-500" />
                      <span className="text-charcoal font-poppins">Build a professional portfolio</span>
                    </label>
                  </div>
                </div>

                {/* Question 3 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-charcoal font-fredoka">
                    3. Which medium interests you most? 🖌️
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg cursor-pointer hover:bg-white/70 transition-all duration-300">
                      <input type="radio" name="medium" value="pastels" className="text-coral-500" />
                      <span className="text-charcoal font-poppins">Pastels</span>
                    </label>
                    <label className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg cursor-pointer hover:bg-white/70 transition-all duration-300">
                      <input type="radio" name="medium" value="oils" className="text-coral-500" />
                      <span className="text-charcoal font-poppins">Oil Colors</span>
                    </label>
                    <label className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg cursor-pointer hover:bg-white/70 transition-all duration-300">
                      <input type="radio" name="medium" value="both" className="text-coral-500" />
                      <span className="text-charcoal font-poppins">Both/Not sure</span>
                    </label>
                  </div>
                </div>

                {/* Question 4 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-charcoal font-fredoka">
                    4. How much time can you dedicate weekly? ⏰
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <label className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg cursor-pointer hover:bg-white/70 transition-all duration-300">
                      <input type="radio" name="time" value="1-2" className="text-coral-500" />
                      <span className="text-charcoal font-poppins">1-2 hours</span>
                    </label>
                    <label className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg cursor-pointer hover:bg-white/70 transition-all duration-300">
                      <input type="radio" name="time" value="3-5" className="text-coral-500" />
                      <span className="text-charcoal font-poppins">3-5 hours</span>
                    </label>
                    <label className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg cursor-pointer hover:bg-white/70 transition-all duration-300">
                      <input type="radio" name="time" value="5-10" className="text-coral-500" />
                      <span className="text-charcoal font-poppins">5-10 hours</span>
                    </label>
                    <label className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg cursor-pointer hover:bg-white/70 transition-all duration-300">
                      <input type="radio" name="time" value="10+" className="text-coral-500" />
                      <span className="text-charcoal font-poppins">10+ hours</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
              <div className="text-center">
                <button className="group relative px-12 py-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl color-explosion">
                  <span className="relative z-10">🎯 Get My Learning Plan</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Booking Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 sparkle-effect font-fredoka">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                    📱 Your Complimentary Consultation
                  </span>
                </h2>
                <p className="text-xl text-charcoal max-w-3xl mx-auto font-poppins">
                  Schedule a personal 30-minute discussion about your artistic goals
                </p>
              </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* What's Included */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                <h3 className="text-2xl font-bold text-charcoal mb-6 font-fredoka">
                  📋 What&apos;s Included in Your Consultation
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal">Personal Goals Discussion</h4>
                      <p className="text-charcoal text-sm">Understanding your artistic aspirations and current skill level</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal">Portfolio Review</h4>
                      <p className="text-charcoal text-sm">If you have existing artwork, we&apos;ll review it together (optional)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal">Personalized Learning Plan</h4>
                      <p className="text-charcoal text-sm">Custom roadmap tailored to your specific needs and goals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal">No Pressure Guidance</h4>
                      <p className="text-charcoal text-sm">Genuine advice about your artistic journey, regardless of enrollment</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                <h3 className="text-2xl font-bold text-charcoal mb-6 font-fredoka">
                  📞 Let&apos;s Connect
                </h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📱</div>
                    <h4 className="font-bold text-charcoal mb-2">WhatsApp (Preferred)</h4>
                    <p className="text-charcoal mb-4">Quick responses and easy scheduling</p>
                    <a 
                      href="https://wa.me/918884750750?text=Hello%20Shilp's%20Art!%20I%20want%20to%20start%20my%20artistic%20journey%20and%20would%20like%20to%20schedule%20a%20consultation.%20When%20would%20be%20a%20good%20time%20to%20discuss%20my%20goals%20and%20get%20started?" 
                      className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg block"
                    >
                      <span className="relative z-10">📱 Chat on WhatsApp</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </div>
                  
                  <div className="text-center pt-6 border-t border-charcoal/20">
                    <div className="text-4xl mb-4">☎️</div>
                    <h4 className="font-bold text-charcoal mb-2">Direct Call</h4>
                    <p className="text-charcoal mb-4">For immediate consultation</p>
                    <a 
                      href="tel:+918884750750" 
                      className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg block"
                    >
                      <span className="relative z-10">📞 Call: 8884750750</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 sparkle-effect font-fredoka">
                  <span className="bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent">
                    🛡️ Your Satisfaction, Guaranteed
                  </span>
                </h2>
              </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-charcoal mb-3 font-fredoka">First Session Guarantee</h3>
                <p className="text-charcoal text-sm leading-relaxed font-poppins">
                  If you&apos;re not completely satisfied with your first session, we&apos;ll work together to make it right
                </p>
              </div>
              
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-xl font-bold text-charcoal mb-3 font-fredoka">Flexible Scheduling</h3>
                <p className="text-charcoal text-sm leading-relaxed font-poppins">
                  Easy rescheduling policy that works with your busy life and commitments
                </p>
              </div>
              
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                <div className="text-4xl mb-4">💖</div>
                <h3 className="text-xl font-bold text-charcoal mb-3 font-fredoka">Personal Attention</h3>
                <p className="text-charcoal text-sm leading-relaxed font-poppins">
                  Commitment to your individual growth and artistic development at every step
                </p>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 sparkle-effect font-fredoka">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ❓ Common Questions About Your Journey
                  </span>
                </h2>
              </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What materials do I need to get started?",
                  answer: "I'll provide a complete materials list after our consultation, tailored to your chosen medium and level. Basic starter sets are available, and I'll guide you on where to find quality supplies locally."
                },
                {
                  question: "How are sessions conducted?",
                  answer: "Sessions are conducted one-on-one, either in-person or via video call, depending on your preference and location. Each session includes real-time guidance, demonstrations, and personalized feedback."
                },
                {
                  question: "Can I reschedule if something comes up?",
                  answer: "Absolutely! Life happens, and I understand that. You can reschedule sessions with reasonable notice, and we'll find a time that works for both of us."
                },
                {
                  question: "What if I've never held a brush before?",
                  answer: "Perfect! Many of my most successful students started as complete beginners. I specialize in helping people discover their artistic voice from the very first stroke."
                },
                {
                  question: "How long does it take to see progress?",
                  answer: "Every student is different, but most notice significant improvement within the first few sessions. The key is consistent practice and personalized guidance."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                  <h3 className="text-xl font-bold text-charcoal mb-3 font-fredoka">{faq.question}</h3>
                  <p className="text-charcoal leading-relaxed font-poppins">{faq.answer}</p>
                  <div className="mt-4 text-center">
                    <a href="https://wa.me/918884750750?text=Hello%20Shilp's%20Art!%20I%20have%20some%20questions%20about%20your%20art%20classes%20and%20would%20love%20to%20get%20more%20details.%20Can%20you%20help%20me%20understand%20more%20about%20the%20programs?" className="inline-block text-green-600 hover:text-green-700 font-medium font-poppins">
                      📱 Ask me more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-8 sparkle-effect leading-tight font-fredoka">
                  🎨 Your Artistic Journey Starts Here
                </h2>
                
                <p className="text-lg md:text-xl lg:text-2xl text-charcoal/90 mb-12 leading-relaxed font-poppins">
                  Join hundreds of students who&apos;ve discovered their creative voice with personalized guidance ✨
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="https://wa.me/918884750750?text=Hello%20Shilp's%20Art!%20I'm%20excited%20to%20start%20my%20artistic%20journey%20and%20would%20like%20to%20schedule%20a%20consultation%20to%20discuss%20my%20goals%20and%20find%20the%20perfect%20program%20for%20me.%20When%20can%20we%20connect?" className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg md:text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl color-explosion">
                    <span className="relative z-10">📱 Schedule Your Consultation</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  
                  <Link href="/gallery" className="group relative px-6 md:px-10 py-4 md:py-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold text-lg md:text-xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl bounce-3d">
                    <span className="relative z-10">🖼️ See More Results</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
