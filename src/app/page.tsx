import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Vibrant Colors and 3D Effects */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-purple-500 to-coral-500 py-20 lg:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 rainbow-gradient opacity-20"></div>
        
        {/* Floating Sparkles */}
        <div className="absolute top-20 left-20 text-6xl sparkle-effect">🎨</div>
        <div className="absolute top-40 right-32 text-4xl sparkle-effect">✨</div>
        <div className="absolute bottom-32 left-1/4 text-5xl sparkle-effect">🌈</div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight font-fredoka">
            <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Bring Your 
            </span>
            <span className="block mt-2 color-explosion">
              Inner Vision to Life
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-poppins">
            🌟 Art classes that honor your unique voice and help you express your creativity with confidence! 
            Join our magical artistic journey where every stroke tells your story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/start-journey" className="group relative px-12 py-6 bg-coral-500 hover:bg-coral-600 text-white font-bold text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-coral-500/50 sparkle-effect color-explosion">
              <span className="relative z-10">🎨 Start Creating Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link href="/gallery" className="px-10 py-6 bg-purple-500 hover:bg-purple-600 text-white font-bold text-xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl bounce-3d">
              ▶️ Watch Magic Happen
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators Strip */}
      <section className="bg-gradient-to-r from-emerald-500 to-blue-500 py-12 relative">
        {/* Smooth transition from hero */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="text-white sparkle-effect pulse-1">
              <h3 className="text-3xl font-bold mb-2 font-fredoka">20+</h3>
              <p className="text-white/95 font-medium font-poppins">✨ Years Teaching Magic</p>
            </div>
            <div className="text-white sparkle-effect pulse-2">
              <h3 className="text-3xl font-bold mb-2 font-fredoka">1-on-1</h3>
              <p className="text-white/95 font-medium font-poppins">🎯 Personal Attention</p>
            </div>
            <div className="text-white sparkle-effect pulse-3">
              <h3 className="text-3xl font-bold mb-2 font-fredoka">Real-time</h3>
              <p className="text-white/95 font-medium font-poppins">⚡ Instant Feedback</p>
            </div>
            <div className="text-white sparkle-effect pulse-4">
              <h3 className="text-3xl font-bold mb-2 font-fredoka">Specialty</h3>
              <p className="text-white/95 font-medium font-poppins">🌈 All Art Styles</p>
            </div>
          </div>
        </div>
        
        {/* Smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-white/30"></div>
      </section>

      {/* Features Section with High-Impact Colors */}
      <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 font-fredoka">
            <span className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              ✨ Why Choose Shilps Art? ✨
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group transform hover:scale-105 transition-all duration-300">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-coral-400 to-pink-500 rounded-full flex items-center justify-center text-6xl sparkle-effect bounce-3d">
                �
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4 font-fredoka">Personal Vision Focus</h3>
              <p className="text-charcoal text-lg font-poppins">We don&apos;t create cookie-cutter artists. Discover YOUR unique creative voice! 🌟</p>
            </div>
            
            <div className="text-center group transform hover:scale-105 transition-all duration-300">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-6xl sparkle-effect color-explosion">
                👩‍🎨
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4 font-fredoka">Expert Guidance</h3>
              <p className="text-charcoal text-lg font-poppins">20 years of teaching wisdom meets artistic intuition for amazing results! 🚀</p>
            </div>
            
            <div className="text-center group transform hover:scale-105 transition-all duration-300">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-purple-400 to-yellow-500 rounded-full flex items-center justify-center text-6xl sparkle-effect bounce-3d">
                🎨
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4 font-fredoka">Mind to Canvas</h3>
              <p className="text-charcoal text-lg font-poppins">Learn to translate what you see in your mind&apos;s eye into beautiful reality! ✨</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Transformation Gallery */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative">
        {/* Smooth transition from previous section */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-blue-500/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 sparkle-effect font-fredoka">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                🌈 Amazing Transformations! 🌈
              </span>
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto font-poppins">
              Watch students discover their incredible artistic potential and create magic! ✨
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 sparkle-effect">
                <div className="grid grid-cols-2">
                  <div className="bg-gradient-to-br from-coral-200 to-pink-200 h-48 flex items-center justify-center">
                    <p className="text-charcoal font-bold text-sm text-center">✨ Before</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-200 to-blue-200 h-48 flex items-center justify-center">
                    <p className="text-charcoal font-bold text-sm text-center">🌟 After</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-charcoal italic font-medium font-caveat text-lg">&quot;This transformation changed my life! I never knew I could create such beauty!&quot; 💫</p>
                  <p className="text-purple-600 font-bold mt-2 font-poppins">- Happy Student ⭐</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/start-journey" className="px-12 py-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl color-explosion">
              🚀 See Your Potential!
            </Link>
          </div>
        </div>
        
        {/* Smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-pink-500/20"></div>
      </section>

      {/* CTA Section with Electric Colors */}
      <section className="py-20 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 relative overflow-hidden">
        {/* Smooth transition from previous section */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-pink-500/30 to-transparent"></div>
        
        <div className="absolute inset-0 rainbow-gradient opacity-30"></div>
        
        {/* Facing rainbows decoration */}
        <div className="absolute top-10 left-10 text-4xl md:text-6xl">🌈</div>
        <div className="absolute top-10 right-10 text-4xl md:text-6xl transform scale-x-[-1]">🌈</div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 sparkle-effect leading-tight font-fredoka">
            🌈 Ready to Create Magic? 🌈
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-12 leading-relaxed font-poppins">
            Join thousands of students who&apos;ve discovered their artistic superpowers with Shilps Art! ✨
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/start-journey" className="px-8 md:px-12 py-4 md:py-6 bg-yellow-400 hover:bg-yellow-500 text-charcoal font-bold text-lg md:text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl color-explosion">
              🎨 Start Your Journey - $49/month
            </Link>
            
            <Link href="/contact" className="px-6 md:px-10 py-4 md:py-6 bg-white hover:bg-gray-100 text-purple-600 font-bold text-lg md:text-xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl bounce-3d">
              📞 Talk to Our Team
            </Link>
          </div>
        </div>
        
        {/* Smooth transition to footer */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-charcoal/20"></div>
      </section>

      <Footer />
    </div>
  );
}
