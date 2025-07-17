import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function LearningPathPage() {
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
                Your Personal Path
              </span>
              <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl color-explosion">
                to Artistic Mastery
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-poppins">
              🎯 One-on-one instruction tailored to your level and artistic goals
              <br />
              <span className="text-yellow-300 font-bold">👶 Ages 4-16 | 💻 Online: Tue/Thu 5-6 PM | 🏫 Offline: Mon-Fri 4-5 PM at Kidee Kasavanahalli</span>
            </p>
            
            <div className="flex justify-center">
              <a href="https://wa.me/918884750750?text=Hello%20Shilp's%20Art!%20I%20found%20you%20through%20your%20website.%20I%20would%20like%20to%20find%20out%20what%20level%20would%20be%20best%20for%20me%20to%20start%20learning%20art.%20Can%20you%20help%20me%20assess%20my%20current%20level?" className="group relative px-12 py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl sparkle-effect color-explosion">
                <span className="relative z-10">📱 Find Your Level</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </section>

        {/* Course Levels Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 sparkle-effect font-fredoka">
                  <span className="bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent">
                    🌟 Your Journey, Your Pace
                  </span>
                </h2>
                <p className="text-xl text-charcoal max-w-3xl mx-auto font-poppins">
                  Choose the perfect starting point for your artistic adventure
                </p>
              </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Level 1: Beginner */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-coral-400 to-pink-500 rounded-full flex items-center justify-center text-4xl">
                    🌱
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2 font-fredoka">Level 1: Discover Your Creative Voice</h3>
                  <p className="text-charcoal font-poppins">Perfect for complete beginners</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                    <span className="text-charcoal">Basic techniques & confidence building</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                    <span className="text-charcoal">Simple still life studies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                    <span className="text-charcoal">Your first personal masterpiece</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-coral-100 to-pink-100 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-charcoal mb-2">What You&apos;ll Learn:</h4>
                  <ul className="text-sm text-charcoal space-y-1">
                    <li>• Brush handling and material introduction</li>
                    <li>• Color theory basics</li>
                    <li>• Building artistic confidence</li>
                    <li>• Finding your unique style</li>
                  </ul>
                </div>
                
                <a href="https://wa.me/918884750750?text=Hello%20Shilp's%20Art!%20I'm%20interested%20in%20Level%201%20-%20Discover%20Your%20Creative%20Voice.%20I'm%20a%20complete%20beginner%20and%20would%20love%20to%20start%20my%20artistic%20journey%20with%20your%20guidance.%20When%20can%20we%20begin?" className="group relative w-full px-6 py-3 bg-gradient-to-r from-coral-500 to-pink-500 hover:from-coral-600 hover:to-pink-600 text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg block text-center">
                  <span className="relative z-10">🌱 Start Your Discovery</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-coral-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>

              {/* Level 2: Intermediate */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300 sparkle-effect border-2 border-purple-300">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-4xl">
                    🎨
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2 font-fredoka">Level 2: Develop Your Artistic Confidence</h3>
                  <p className="text-charcoal font-poppins">For those with basic drawing knowledge</p>
                  <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mt-2">
                    Most Popular
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-charcoal">Technique refinement & style development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-charcoal">Advanced color mixing mastery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-charcoal">Complex composition work</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-100 to-blue-100 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-charcoal mb-2">What You&apos;ll Master:</h4>
                  <ul className="text-sm text-charcoal space-y-1">
                    <li>• Advanced color theory & mixing</li>
                    <li>• Texture and depth techniques</li>
                    <li>• Personal style exploration</li>
                    <li>• Professional finishing methods</li>
                  </ul>
                </div>
                
                <a href="https://wa.me/918884750750?text=Hello%20Shilp's%20Art!%20I'm%20interested%20in%20Level%202%20-%20Develop%20Your%20Artistic%20Confidence.%20I%20have%20some%20basic%20drawing%20knowledge%20and%20want%20to%20improve%20my%20techniques%20and%20develop%20my%20style.%20Can%20we%20discuss%20this%20program?" className="group relative w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg block text-center">
                  <span className="relative z-10">🎨 Build Your Confidence</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>

              {/* Level 3: Advanced */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-yellow-500 rounded-full flex items-center justify-center text-4xl">
                    🏆
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2 font-fredoka">Level 3: Master Your Expressive Freedom</h3>
                  <p className="text-charcoal font-poppins">Ready to perfect your craft</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-charcoal">Advanced pastels & oil techniques</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-charcoal">Personal portfolio development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-charcoal">Independent project guidance</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-100 to-yellow-100 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-charcoal mb-2">What You&apos;ll Achieve:</h4>
                  <ul className="text-sm text-charcoal space-y-1">
                    <li>• Professional-level techniques</li>
                    <li>• Creative problem-solving skills</li>
                    <li>• Portfolio-ready artwork</li>
                    <li>• Complete artistic independence</li>
                  </ul>
                </div>
                
                <a href="https://wa.me/918884750750?text=Hello%20Shilp's%20Art!%20I'm%20ready%20for%20Level%203%20-%20Master%20Your%20Expressive%20Freedom.%20I%20want%20to%20perfect%20my%20craft%20with%20advanced%20techniques%20and%20develop%20a%20professional%20portfolio.%20Can%20we%20start%20this%20advanced%20program?" className="group relative w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-yellow-500 hover:from-purple-600 hover:to-yellow-600 text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg block text-center">
                  <span className="relative z-10">🏆 Master Your Craft</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 sparkle-effect font-fredoka">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ✨ Your Personal Learning Experience
                  </span>
                </h2>
                <p className="text-xl text-charcoal max-w-3xl mx-auto font-poppins">
                  A simple 4-step process designed just for you
                </p>
              </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3 font-fredoka">📋 Assessment</h3>
                <p className="text-charcoal text-sm leading-relaxed font-poppins">
                  We&apos;ll understand your current level, artistic goals, and creative aspirations
                </p>
              </div>
              
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3 font-fredoka">🎯 Personalized Plan</h3>
                <p className="text-charcoal text-sm leading-relaxed font-poppins">
                  Custom curriculum tailored specifically to your learning style and objectives
                </p>
              </div>
              
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-coral-400 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3 font-fredoka">🎨 Live Sessions</h3>
                <p className="text-charcoal text-sm leading-relaxed font-poppins">
                  One-on-one instruction with real-time feedback and guidance
                </p>
              </div>
              
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 sparkle-effect">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  4
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3 font-fredoka">🚀 Ongoing Support</h3>
                <p className="text-charcoal text-sm leading-relaxed font-poppins">
                  Continuous support, assignments, and progress tracking throughout your journey
                </p>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-8 sparkle-effect leading-tight font-fredoka">
                  🎨 Ready to Begin Your Artistic Journey?
                </h2>
                
                <p className="text-lg md:text-xl lg:text-2xl text-charcoal/90 mb-12 leading-relaxed font-poppins">
                  Let&apos;s discover your perfect starting point and create your personalized learning path! ✨
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="https://wa.me/918884750750?text=Hello%20Shilp's%20Art!%20I%20found%20you%20through%20your%20website.%20I%20would%20like%20to%20begin%20my%20assessment%20to%20find%20out%20which%20level%20is%20right%20for%20me.%20Can%20you%20help%20me%20get%20started%20with%20my%20personalized%20learning%20path?" className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg md:text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl color-explosion">
                    <span className="relative z-10">📱 Begin Your Assessment</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  
                  <Link href="/gallery" className="group relative px-6 md:px-10 py-4 md:py-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold text-lg md:text-xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl bounce-3d">
                    <span className="relative z-10">🖼️ See Student Results</span>
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
