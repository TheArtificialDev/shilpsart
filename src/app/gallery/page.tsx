import Link from "next/link";
import Image from "next/image";
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
              🖼️ Explore original works and incredible teaching sessions
            </p>
          </div>
        </section>

        {/* Shilp's Original Artwork Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 sparkle-effect font-fredoka">
                  <span className="ml-2">🎨</span>
                  <span className="bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent">
                    Original Works by Shilp
                  </span>
                  <span className="ml-2">🎨</span>
                </h2>
                <p className="text-xl text-gray-800 max-w-3xl mx-auto font-poppins font-medium">
                  A comprehensive collection of original paintings showcasing various techniques and artistic mastery
                </p>
              </div>
              
              {/* Portfolio Grid - Using different images than homepage */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map((item, index) => (
                  <div key={item} className="group bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 sparkle-effect">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image 
                        src={`/images/my-paintings/${item}.jpeg`}
                        alt={`Original artwork by Shilp - ${
                          index % 6 === 0 ? "Floral Study" :
                          index % 6 === 1 ? "Portrait Mastery" :
                          index % 6 === 2 ? "Landscape Poetry" :
                          index % 6 === 3 ? "Abstract Expression" :
                          index % 6 === 4 ? "Still Life Beauty" :
                          "Nature Study"
                        }`}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        priority={index < 6}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-coral-300/30 to-purple-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-coral-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Original
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-charcoal mb-2 font-fredoka">
                        {index % 6 === 0 ? "🌺 Floral Study" :
                         index % 6 === 1 ? "🎭 Portrait Mastery" :
                         index % 6 === 2 ? "🌅 Landscape Poetry" :
                         index % 6 === 3 ? "🌈 Abstract Expression" :
                         index % 6 === 4 ? "🍃 Still Life Beauty" :
                         "🌿 Nature Study"}
                      </h3>
                      <p className="text-charcoal text-sm font-poppins">
                        Original artwork demonstrating {index % 2 === 0 ? "oil painting" : "pastel"} techniques and creative vision
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

        {/* Teaching Sessions Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 sparkle-effect font-fredoka">
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    Live Teaching Sessions
                  </span>
                  <span className="ml-2">👩‍🏫📚</span>
                </h2>
                <p className="text-xl text-gray-800 max-w-3xl mx-auto font-poppins font-medium">
                  Experience the magic of personalized art instruction and witness students discovering their artistic potential!
                </p>
              </div>
              
              {/* Session Categories */}
              <div className="flex justify-center mb-12">
                <div className="bg-white/50 backdrop-blur-sm rounded-full p-2 flex space-x-2">
                  <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-bold rounded-full font-poppins">
                    🎯 One-on-One
                  </button>
                  <button className="px-6 py-3 text-charcoal hover:bg-white/50 rounded-full font-poppins transition-all duration-300">
                    👥 Small Groups
                  </button>
                  <button className="px-6 py-3 text-charcoal hover:bg-white/50 rounded-full font-poppins transition-all duration-300">
                    🏠 Home Sessions
                  </button>
                </div>
              </div>
              
              {/* Teaching Sessions Gallery - Using different session images */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item, index) => (
                  <div key={item} className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 sparkle-effect">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={`/images/student-paintings/${item}.jpeg`}
                        alt={`Teaching session ${item} - Art instruction in progress`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/30 to-blue-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 bg-emerald-500/90 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Live Session
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">📚</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-charcoal font-fredoka">
                            {index % 4 === 0 ? "🖌️ Technique Workshop" :
                             index % 4 === 1 ? "🎯 Personal Guidance" :
                             index % 4 === 2 ? "🌈 Color Theory Session" :
                             "✨ Creative Breakthrough"}
                          </h3>
                          <p className="text-charcoal text-xs">
                            {index % 3 === 0 ? "Advanced Session" : index % 2 === 0 ? "Intermediate Class" : "Beginner Workshop"}
                          </p>
                        </div>
                      </div>
                      <p className="text-charcoal font-medium font-poppins text-sm mb-2">
                        {index % 4 === 0 ? "Mastering professional painting techniques with step-by-step guidance." :
                         index % 4 === 1 ? "One-on-one instruction tailored to individual artistic goals." :
                         index % 4 === 2 ? "Understanding color relationships and harmony in composition." :
                         "The magical moment when artistic vision becomes reality on canvas."}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-emerald-600 font-bold text-xs font-poppins">Live Instruction</span>
                        <span className="text-charcoal/70 text-xs">Session {item}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <a href="https://wa.me/918884750750?text=Hello%20Shilp's%20Art!%20I%20saw%20your%20beautiful%20gallery%20and%20I'm%20inspired%20by%20your%20teaching%20sessions.%20I%20would%20love%20to%20join%20and%20learn%20these%20amazing%20techniques.%20Can%20we%20discuss%20the%20options?" className="group relative px-12 py-6 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl color-explosion">
                  <span className="relative z-10">🚀 Join Our Sessions!</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Student Progress Journey */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 sparkle-effect font-fredoka">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Student Learning Journey
                  </span>
                  <span className="ml-2">🌟</span>
                </h2>
                <p className="text-xl text-gray-800 max-w-3xl mx-auto font-poppins font-medium">
                  Behind-the-scenes glimpses of our students&apos; artistic development and breakthrough moments!
                </p>
              </div>
              
              {/* Student Learning Grid - First 6 session images */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 sparkle-effect">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={`/images/student-paintings/${item}.jpeg`}
                        alt={`Student learning session ${item} - artistic development in progress`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 to-pink-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 bg-purple-500/90 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Learning Progress
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-charcoal mb-2 font-fredoka">
                        {item === 1 && "🎯 First Steps Into Art"}
                        {item === 2 && "🖌️ Discovering Technique"}
                        {item === 3 && "🌈 Color Confidence"}
                        {item === 4 && "✨ Personal Style Emerging"}
                        {item === 5 && "🎨 Advanced Skills"}
                        {item === 6 && "💡 Artistic Breakthrough"}
                      </h4>
                      <p className="text-gray-800 font-poppins text-sm mb-3 font-medium">
                        {item === 1 && "The exciting beginning of every student's artistic journey with foundational skills."}
                        {item === 2 && "Learning professional techniques through personalized, hands-on instruction."}
                        {item === 3 && "Building confidence with color theory and harmonious combinations."}
                        {item === 4 && "The moment when students start developing their unique artistic voice."}
                        {item === 5 && "Mastering advanced concepts and pushing creative boundaries."}
                        {item === 6 && "The magical breakthrough when artistic vision becomes fluent expression."}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-purple-600 font-bold text-xs font-poppins">Student Progress</span>
                        <span className="text-charcoal/70 text-xs">Session {item}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <a href="https://wa.me/918884750750?text=Hello%20Shilp's%20Art!%20I%20saw%20the%20amazing%20student%20learning%20journey%20in%20your%20gallery%20and%20I'm%20excited%20to%20start%20my%20own%20artistic%20journey.%20Can%20you%20help%20me%20begin%20this%20transformation?" className="group relative px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl color-explosion">
                  <span className="relative z-10">🌟 Start Your Journey!</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
