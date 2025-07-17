import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import AnimatedChildren from "@/components/AnimatedChildren";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground hideEmojisInHero={true} />

      {/* Scrollable Content Layer */}
      <div className="relative z-10 min-h-screen">
        <Navigation />

        {/* Hero Section - Transparent to show background */}
        <section className="relative overflow-hidden py-20 lg:py-32">
        
        {/* Animated Children Characters */}
        <AnimatedChildren />
        
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
            🎨 Art classes for kids
            <br /><br />
            <span className="text-yellow-300 font-bold">👶 Ages 4-16 Years | 💻 Online: Tue & Thu 5-6 PM | 🏫 Offline: Mon-Fri 4-5 PM at Kidee Kasavanahalli</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://wa.me/918884750750?text=Hello%20Shilp's%20Art!%20I%20found%20your%20website%20and%20I'm%20inspired%20to%20start%20my%20artistic%20journey.%20Can%20you%20help%20me%20begin%20discovering%20my%20creative%20potential?" className="group relative px-12 py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl sparkle-effect color-explosion">
              <span className="relative z-10">📱 Reach Out on WhatsApp</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <Link href="/gallery" className="group relative px-10 py-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold text-xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl bounce-3d">
              <span className="relative z-10">▶️ Watch Magic Happen</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </section>

        {/* Trust Indicators Strip */}
        <section className="relative py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="text-charcoal sparkle-effect pulse-1">
                  <h3 className="text-3xl font-bold mb-2 font-fredoka">20+</h3>
                  <p className="text-charcoal/95 font-medium font-poppins">🖌️ Years Teaching Magic</p>
                </div>
                <div className="text-charcoal sparkle-effect pulse-2">
                  <h3 className="text-3xl font-bold mb-2 font-fredoka">1-on-1</h3>
                  <p className="text-charcoal/95 font-medium font-poppins">🎯 Personal Attention</p>
                </div>
                <div className="text-charcoal sparkle-effect pulse-3">
                  <h3 className="text-3xl font-bold mb-2 font-fredoka">Real-time</h3>
                  <p className="text-charcoal/95 font-medium font-poppins">⚡ Instant Feedback</p>
                </div>
                <div className="text-charcoal sparkle-effect pulse-4">
                  <h3 className="text-3xl font-bold mb-2 font-fredoka">Specialty</h3>
                  <p className="text-charcoal/95 font-medium font-poppins">🌈 All Art Styles</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Class Information Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 sparkle-effect font-fredoka">
                  <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                    📅 Class Schedules & Information
                  </span>
                </h2>
                <p className="text-xl text-gray-800 max-w-3xl mx-auto font-poppins font-medium">
                  Choose the perfect learning format for your young artist! 🎨
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Age Group */}
                <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-coral-400 to-pink-500 rounded-full flex items-center justify-center text-4xl">
                    👶
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4 font-fredoka">Age Group</h3>
                  <p className="text-charcoal text-lg font-poppins mb-4">
                    <span className="text-2xl font-bold text-coral-500">4-16 Years</span>
                  </p>
                  <p className="text-charcoal text-sm font-poppins">
                    Perfect developmental age for creative expression and artistic skill building
                  </p>
                </div>

                {/* Online Classes */}
                <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-4xl">
                    💻
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4 font-fredoka">Online Classes</h3>
                  <p className="text-charcoal text-lg font-poppins mb-2">
                    <span className="font-bold text-emerald-600">Tuesday & Thursday</span>
                  </p>
                  <p className="text-charcoal text-lg font-poppins mb-4">
                    <span className="font-bold text-emerald-600">5:00 PM - 6:00 PM</span>
                  </p>
                  <p className="text-charcoal text-sm font-poppins">
                    Interactive online sessions from the comfort of your home
                  </p>
                </div>

                {/* Offline Classes */}
                <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-yellow-500 rounded-full flex items-center justify-center text-4xl">
                    🏫
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4 font-fredoka">Offline Classes</h3>
                  <p className="text-charcoal text-lg font-poppins mb-2">
                    <span className="font-bold text-purple-600">Monday - Saturday</span>
                  </p>
                  <p className="text-charcoal text-lg font-poppins mb-2">
                    <span className="font-bold text-purple-600">4:00 PM - 6:00 PM</span>
                  </p>
                  <p className="text-charcoal text-sm font-poppins mb-2">
                    <span className="font-bold">📍 Kidee Kasavanahalli Center</span>
                  </p>
                  <p className="text-charcoal text-xs font-poppins">
                    Hands-on experience with professional art supplies
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <a href="https://wa.me/918884750750?text=Hello%20Shilp's%20Art!%20I'm%20interested%20in%20learning%20more%20about%20your%20class%20schedules%20and%20enrollment%20for%20my%20child.%20Can%20you%20help%20me%20choose%20between%20online%20and%20offline%20classes?" className="group relative px-12 py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl color-explosion">
                  <span className="relative z-10">📱 Book Your Child&apos;s Spot!</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with Card Design */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 font-fredoka">
                <span className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Why Choose Shilp&apos;s Art?
                </span>
                <span className="ml-2">🎨🖼️</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center group transform hover:scale-105 transition-all duration-300">
                  <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-coral-400 to-pink-500 rounded-full flex items-center justify-center text-6xl sparkle-effect bounce-3d">
                    🎭
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4 font-fredoka">Personal Vision Focus</h3>
                  <p className="text-charcoal text-lg font-poppins">We don&apos;t create cookie-cutter artists. Discover YOUR unique creative voice! 🎭</p>
                </div>
                
                <div className="text-center group transform hover:scale-105 transition-all duration-300">
                  <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-6xl sparkle-effect color-explosion">
                    👩‍🎨
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4 font-fredoka">Expert Guidance</h3>
                  <p className="text-charcoal text-lg font-poppins">20 years of teaching wisdom meets artistic intuition for amazing results! 🎨</p>
                </div>
                
                <div className="text-center group transform hover:scale-105 transition-all duration-300">
                  <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-purple-400 to-yellow-500 rounded-full flex items-center justify-center text-6xl sparkle-effect bounce-3d">
                    🎨
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4 font-fredoka">Mind to Canvas</h3>
                  <p className="text-charcoal text-lg font-poppins">Learn to translate what you see in your mind&apos;s eye into beautiful reality! 🖌️</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Sessions Gallery */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 sparkle-effect font-fredoka">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Live Teaching Sessions!
                  </span>
                  <span className="ml-2">👩‍🏫📚</span>
                </h2>
                <p className="text-xl text-charcoal max-w-3xl mx-auto font-poppins">
                  Experience the magic of personalized instruction and see students discovering their artistic potential! 🎨
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 sparkle-effect">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={`/images/student-paintings/${item}.jpeg`}
                        alt={`Teaching session ${item} - Shilp's Art class`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/30 to-blue-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 bg-emerald-500/90 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Live Session
                      </div>
                    </div>
                    <div className="p-6 bg-white">
                      <h4 className="text-lg font-bold text-charcoal mb-2 font-fredoka">
                        {item === 1 && "🎯 One-on-One Guidance"}
                        {item === 2 && "🖌️ Technique Mastery"}
                        {item === 3 && "🌈 Color Theory in Action"}
                        {item === 4 && "✨ Creative Breakthrough"}
                        {item === 5 && "🎨 Personal Style Development"}
                        {item === 6 && "💡 Vision to Reality"}
                      </h4>
                      <p className="text-gray-800 font-poppins text-sm font-medium">
                        {item === 1 && "Personalized instruction tailored to each student's unique learning style and artistic goals."}
                        {item === 2 && "Hands-on demonstration of professional techniques that bring immediate improvement."}
                        {item === 3 && "Understanding color relationships and how to use them effectively in artwork."}
                        {item === 4 && "The moment when students discover their unique creative voice and artistic confidence."}
                        {item === 5 && "Helping students develop their individual artistic style and expression."}
                        {item === 6 && "Transforming inner artistic vision into beautiful, tangible reality on canvas."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <a href="https://wa.me/918884750750?text=Hello%20Shilp's%20Art!%20I%20saw%20your%20teaching%20sessions%20on%20your%20website%20and%20I'm%20impressed%20by%20the%20results.%20I%20would%20love%20to%20join%20your%20live%20teaching%20sessions.%20Can%20we%20discuss%20the%20details?" className="group relative px-12 py-6 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl color-explosion">
                  <span className="relative z-10">🚀 Join Our Sessions!</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Shilp's Original Artwork Gallery */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 sparkle-effect font-fredoka">
                  <span className="ml-2">🎨🖼️</span>
                  <span className="bg-gradient-to-r from-coral-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent">
                    Original Works by Shilp
                  </span>
                  <span className="ml-2">🎨🖼️</span>
                </h2>
                <p className="text-xl text-charcoal max-w-3xl mx-auto font-poppins">
                  Explore the artistic mastery and creative vision that guides our teaching! These original pieces showcase the depth of skill and passion behind every lesson. ✨
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 sparkle-effect group">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <Image
                        src={`/images/my-paintings/${item + 6}.jpeg`}
                        alt={`Original artwork by Shilp - Piece ${item}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-coral-300/20 to-purple-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-coral-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Original
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-charcoal font-medium font-caveat text-center">
                        {item === 1 && "🌺 Floral Mastery"}
                        {item === 2 && "🌅 Landscape Poetry"}
                        {item === 3 && "🎭 Portrait Elegance"}
                        {item === 4 && "🌈 Abstract Expression"}
                        {item === 5 && "🏛️ Architectural Beauty"}
                        {item === 6 && "🍃 Nature's Symphony"}
                        {item === 7 && "✨ Dreamy Impressions"}
                        {item === 8 && "🎨 Creative Vision"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Link href="/gallery" className="group relative px-12 py-6 bg-gradient-to-r from-coral-500 to-pink-500 hover:from-coral-600 hover:to-pink-600 text-white font-bold text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl bounce-3d">
                  <span className="relative z-10">🖼️ View Full Gallery</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section with Card Design */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 relative overflow-hidden">
              {/* Facing rainbows decoration */}
              <div className="absolute top-4 left-4 text-3xl md:text-4xl">🌈</div>
              <div className="absolute top-4 right-4 text-3xl md:text-4xl transform scale-x-[-1]">🌈</div>
              
              <div className="relative text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-8 sparkle-effect leading-tight font-fredoka">
                  🌈 Ready to Create Magic? 🌈
                </h2>
                
                <p className="text-lg md:text-xl text-charcoal/90 mb-12 leading-relaxed font-poppins">
                  Join thousands of students who&apos;ve discovered their artistic superpowers with Shilp&apos;s Art! 🎨
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="https://wa.me/918884750750?text=Hello%20Shilp's%20Art!%20I'm%20ready%20to%20start%20my%20artistic%20journey%20and%20transform%20my%20creative%20vision%20into%20reality.%20Can%20you%20guide%20me%20on%20how%20to%20begin?" className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg md:text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl color-explosion">
                    <span className="relative z-10">📱 Start Your Journey</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  
                  <a href="tel:+918884750750" className="group relative px-6 md:px-10 py-4 md:py-6 bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200 text-purple-600 font-bold text-lg md:text-xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl bounce-3d">
                    <span className="relative z-10">📞 Call Us: 8884750750</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
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
