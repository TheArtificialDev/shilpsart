import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      {/* Scrollable Content Layer */}
      <div className="relative z-10 min-h-screen">
        <Navigation />
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-fredoka">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              💬 Let&apos;s Connect!
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-charcoal max-w-3xl mx-auto font-poppins">
            Ready to start your artistic journey? I&apos;d love to hear about your creative goals and help you find the perfect path forward! ✨
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Cards */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="text-center">
              <div className="text-6xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-600 font-fredoka">Call or Text</h3>
              <p className="text-charcoal mb-6 font-poppins">
                Ready to chat about your artistic goals? Give me a call or send a text - I&apos;d love to hear from you!
              </p>
              <a 
                href="tel:8884750750"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-lg inline-block font-poppins"
              >
                📞 Call 8884750750
              </a>
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="text-center">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-600 font-fredoka">WhatsApp Chat</h3>
              <p className="text-charcoal mb-6 font-poppins">
                Prefer to chat? Send me a message on WhatsApp and I&apos;ll get back to you as soon as possible!
              </p>
              <a 
                href="https://wa.me/918884750750?text=Hi%20Shilps!%20I'm%20interested%20in%20learning%20about%20your%20art%20classes.%20Can%20we%20chat?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-lg inline-block font-poppins"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </div>

        {/* Why Connect Section */}
        <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 mb-16 shadow-lg border border-white/20">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-coral-500 to-pink-500 bg-clip-text text-transparent font-fredoka">
            🌟 Why Connect With Me?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-emerald-600 font-fredoka">Personalized Guidance</h3>
              <p className="text-charcoal font-poppins">
                Get tailored advice about your artistic journey and find the perfect learning path for your goals.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 font-fredoka">Expert Insights</h3>
              <p className="text-charcoal font-poppins">
                Benefit from 20+ years of teaching experience and 15+ years of artistic practice.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-coral-600 font-fredoka">No Pressure</h3>
              <p className="text-charcoal font-poppins">
                Just a friendly chat about your artistic dreams - no sales pressure, just genuine guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Common Questions Section */}
        <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 mb-16 shadow-lg border border-white/20">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent font-fredoka">
            ❓ Common Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-white/20 pb-4">
              <h3 className="text-lg font-bold text-emerald-600 mb-2 font-fredoka">🕐 When can I reach you?</h3>
              <p className="text-charcoal font-poppins">
                I&apos;m typically available Monday through Saturday, 9 AM to 7 PM. If you call outside these hours, feel free to leave a message and I&apos;ll get back to you soon!
              </p>
            </div>
            <div className="border-b border-white/20 pb-4">
              <h3 className="text-lg font-bold text-purple-600 mb-2 font-fredoka">🎨 What should I expect from our first chat?</h3>
              <p className="text-charcoal font-poppins">
                We&apos;ll talk about your artistic goals, current experience level, and what you hope to achieve. I&apos;ll help you understand which learning path would work best for you.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-coral-600 mb-2 font-fredoka">📅 How do I schedule lessons?</h3>
              <p className="text-charcoal font-poppins">
                After our initial chat, we&apos;ll discuss scheduling that works for both of us. I offer flexible timing to accommodate your schedule.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-purple-500 rounded-xl p-8 text-white mb-8">
            <h2 className="text-3xl font-bold mb-4 font-fredoka">🚀 Ready to Start Your Artistic Journey?</h2>
            <p className="text-xl mb-6 font-poppins">
              Don&apos;t wait - your creative breakthrough is just a conversation away! ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:8884750750"
                className="bg-white text-emerald-600 px-8 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-poppins"
              >
                📞 Call Now
              </a>
              <a 
                href="https://wa.me/918884750750?text=Hi%20Shilps!%20I'm%20ready%20to%20start%20my%20artistic%20journey.%20Can%20we%20chat?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-poppins"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
