import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function GalleryPage() {
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
                Where Vision
              </span>
              <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl color-explosion">
                Becomes Reality
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-poppins">
              🖼️ Explore original works and witness incredible student transformations
            </p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 sparkle-effect font-fredoka">
                <span className="bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent">
                  🎨 Original Works by Shilps
                </span>
              </h2>
              <p className="text-xl text-charcoal max-w-3xl mx-auto font-poppins">
                A collection of pastels and oil paintings showcasing various techniques and styles
              </p>
            </div>
            
            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <div key={item} className="group bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 sparkle-effect">
                  <div className="aspect-square bg-gradient-to-br from-coral-200 via-purple-200 to-blue-200 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-coral-300/50 to-purple-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-center z-10">
                      <div className="text-4xl mb-2">🎨</div>
                      <p className="text-charcoal font-bold text-sm">Original Artwork #{item}</p>
                      <p className="text-charcoal/70 text-xs mt-1">
                        {item % 2 === 0 ? "Oil on Canvas" : "Pastel Study"}
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-charcoal mb-2 font-fredoka">
                      {item % 3 === 0 ? "Portrait Study" : item % 2 === 0 ? "Landscape Expression" : "Still Life Mastery"}
                    </h3>
                    <p className="text-charcoal/80 text-sm font-poppins">
                      Demonstrating {item % 2 === 0 ? "oil painting" : "pastel"} techniques and artistic vision
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/learning-path" className="group relative px-12 py-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl color-explosion">
                <span className="relative z-10">🎯 Learn These Techniques</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
            </div>
          </div>
        </section>

        {/* Student Transformations Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 sparkle-effect font-fredoka">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    🌟 Student Journeys: From First Stroke to Confident Expression
                  </span>
                </h2>
                <p className="text-xl text-charcoal max-w-3xl mx-auto font-poppins">
                  Witness incredible transformations across all skill levels
                </p>
              </div>
            
            {/* Level Tabs */}
            <div className="flex justify-center mb-12">
              <div className="bg-white/50 backdrop-blur-sm rounded-full p-2 flex space-x-2">
                <button className="px-6 py-3 bg-gradient-to-r from-coral-500 to-pink-500 text-white font-bold rounded-full font-poppins">
                  🌱 Beginner
                </button>
                <button className="px-6 py-3 text-charcoal hover:bg-white/50 rounded-full font-poppins transition-all duration-300">
                  🎨 Intermediate
                </button>
                <button className="px-6 py-3 text-charcoal hover:bg-white/50 rounded-full font-poppins transition-all duration-300">
                  🏆 Advanced
                </button>
              </div>
            </div>
            
            {/* Transformation Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 sparkle-effect">
                  <div className="grid grid-cols-2">
                    <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-48 flex items-center justify-center relative">
                      <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-charcoal">
                        BEFORE
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">📝</div>
                        <p className="text-charcoal/70 text-xs">Week 1</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-200 to-blue-200 h-48 flex items-center justify-center relative">
                      <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-charcoal">
                        AFTER
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">🎨</div>
                        <p className="text-charcoal/70 text-xs">Week {item + 6}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-coral-400 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">S</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal font-fredoka">Sarah M.</h3>
                        <p className="text-charcoal/70 text-xs">Beginner Level</p>
                      </div>
                    </div>
                    <p className="text-charcoal italic font-medium font-caveat text-sm mb-2">
                      "I never thought I could create something so beautiful! Shilps helped me discover my artistic voice."
                    </p>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
              <div className="text-center">
                <a href="https://wa.me/918884750750" className="group relative px-12 py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl color-explosion">
                  <span className="relative z-10">🚀 Start Your Transformation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Student Work */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 sparkle-effect font-fredoka">
                  <span className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    🎨 Latest Creations from Our Community
                  </span>
                </h2>
                <p className="text-xl text-charcoal max-w-3xl mx-auto font-poppins">
                  Fresh inspiration from our talented students
                </p>
              </div>
            
            {/* Recent Work Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 sparkle-effect">
                  <div className="aspect-square bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/50 to-red-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-center z-10">
                      <div className="text-3xl mb-2">
                        {item % 4 === 0 ? "🖼️" : item % 3 === 0 ? "🌸" : item % 2 === 0 ? "🏞️" : "🎭"}
                      </div>
                      <p className="text-charcoal/70 text-xs">
                        {item % 2 === 0 ? "Oil Study" : "Pastel Work"}
                      </p>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-charcoal font-bold text-sm font-fredoka">
                      Student Work #{item}
                    </p>
                    <p className="text-charcoal/70 text-xs font-poppins">
                      {item % 3 === 0 ? "Advanced" : item % 2 === 0 ? "Intermediate" : "Beginner"} Level
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
              <div className="text-center">
                <a href="https://wa.me/918884750750" className="group relative px-12 py-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl color-explosion">
                  <span className="relative z-10">🌟 Join Our Community</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Gallery */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 sparkle-effect font-fredoka">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ✨ The Journey of Creation
                  </span>
                </h2>
                <p className="text-xl text-charcoal max-w-3xl mx-auto font-poppins">
                  Step-by-step process showing how masterpieces come to life
                </p>
              </div>
            
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
              {[
                { step: 1, title: "Sketch", emoji: "✏️" },
                { step: 2, title: "Base Colors", emoji: "🎨" },
                { step: 3, title: "Details", emoji: "🖌️" },
                { step: 4, title: "Refinement", emoji: "✨" },
                { step: 5, title: "Final Touch", emoji: "🏆" }
              ].map((process) => (
                <div key={process.step} className="text-center">
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 mb-4 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                    <div className="text-4xl mb-4">{process.emoji}</div>
                    <div className="aspect-square bg-gradient-to-br from-coral-200 to-purple-200 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <div className="text-2xl mb-2">🎨</div>
                        <p className="text-charcoal/70 text-xs">Step {process.step}</p>
                      </div>
                    </div>
                    <h3 className="font-bold text-charcoal text-sm font-fredoka">{process.title}</h3>
                  </div>
                  {process.step < 5 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-charcoal text-2xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/learning-path" className="group relative px-12 py-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl color-explosion">
                <span className="relative z-10">🎯 Learn This Process</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
