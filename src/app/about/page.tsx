import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function AboutPage() {
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
                Meet Your Guide
              </span>
              <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl color-explosion">
                15 Years of Artistic Expression, 20 Years of Teaching Wisdom
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-poppins">
              🌟 Self-taught artist turned passionate instructor, dedicated to helping you discover your unique creative voice
            </p>
          </div>
        </section>

        {/* Your Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 sparkle-effect font-fredoka">
                <span className="bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent">
                  🎭 From Self-Discovery to Guiding Others
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                  <h3 className="text-2xl font-bold text-charcoal mb-4 font-fredoka">🎨 15 Years of Artistic Exploration</h3>
                  <p className="text-charcoal text-lg leading-relaxed font-poppins">
                    My journey began as a self-taught artist, exploring the depths of creative expression through trial, 
                    discovery, and countless hours of passionate practice. Every brushstroke taught me something new about 
                    translating inner vision into reality.
                  </p>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                  <h3 className="text-2xl font-bold text-charcoal mb-4 font-fredoka">👩‍🎨 20 Years of Teaching Experience</h3>
                  <p className="text-charcoal text-lg leading-relaxed font-poppins">
                    What started as sharing my passion with friends became a calling to guide others on their artistic journeys. 
                    Two decades of teaching has shown me that every student has a unique voice waiting to be discovered.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                <h3 className="text-2xl font-bold text-charcoal mb-6 font-fredoka">🌈 Specialization in Traditional Fine Arts</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-coral-400 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">🎨</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal">Pastels Mastery</h4>
                      <p className="text-charcoal/80">Soft, vibrant expressions that capture emotion</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">🖌️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal">Oil Colors Expertise</h4>
                      <p className="text-charcoal/80">Rich, textured works with depth and character</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✨</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal">Multiple Styles</h4>
                      <p className="text-charcoal/80">Self-taught approach that embraces artistic freedom</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Teaching Philosophy Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 sparkle-effect font-fredoka">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  💫 Why I Teach Differently
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-charcoal mb-4 font-fredoka">Expression Over Imitation</h3>
                <p className="text-charcoal text-lg leading-relaxed font-poppins">
                  "While others sell courses, I teach independence. Your unique vision matters more than copying techniques."
                </p>
              </div>
              
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                <div className="text-6xl mb-6">🌟</div>
                <h3 className="text-2xl font-bold text-charcoal mb-4 font-fredoka">Your Vision, Brought to Life</h3>
                <p className="text-charcoal text-lg leading-relaxed font-poppins">
                  "I don't create cookie-cutter artists. I help you discover and develop your authentic creative voice."
                </p>
              </div>
              
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold text-charcoal mb-4 font-fredoka">Confident Independence</h3>
                <p className="text-charcoal text-lg leading-relaxed font-poppins">
                  "My goal is to make you a self-reliant artist who can create with confidence and joy."
                </p>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Personal Connection Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-8 sparkle-effect leading-tight font-fredoka">
                🎨 Beyond Technique: Understanding Your Creative Journey
              </h2>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 mb-12">
              <p className="text-lg md:text-xl text-charcoal/95 leading-relaxed font-poppins italic">
                "Art is not about perfection—it's about expression. Every student brings their own story, their own way of seeing the world. 
                My role is to help you translate that unique perspective into beautiful, meaningful artwork. Whether you're picking up a brush 
                for the first time or looking to refine your skills, I'm here to guide you with patience, understanding, and genuine care for your artistic growth."
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/gallery" className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold text-lg md:text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl color-explosion">
                <span className="relative z-10">🖼️ See My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <a href="https://wa.me/918884750750" className="group relative px-6 md:px-10 py-4 md:py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg md:text-xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl bounce-3d">
                <span className="relative z-10">📱 Let's Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
