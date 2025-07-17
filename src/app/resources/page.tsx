import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function StudentResourcesPage() {
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
              📚 Student Resources
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-charcoal max-w-3xl mx-auto font-poppins">
            Everything you need to support your artistic journey - from materials guides to practice tips! ✨
          </p>
          
          <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto mt-8">
            <p className="text-lg text-charcoal font-poppins text-center mb-2">
              <span className="font-bold text-emerald-600">Ages 4-16</span> • 
              <span className="font-bold text-blue-600 mx-2">Online: Tue/Thu 5-6 PM</span> • 
              <span className="font-bold text-purple-600">Offline: Mon-Sat 4-6 PM</span>
            </p>
            <p className="text-sm text-charcoal/80 font-poppins text-center">
              📍 Offline classes at Kidee Kasavanahalli Center
            </p>
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 mb-16 shadow-lg border border-white/20">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-fredoka">
            🚀 Quick Start Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-bold mb-2 text-emerald-600 font-fredoka">Step 1: Assessment</h3>
              <p className="text-charcoal font-poppins text-sm">
                Complete your skills assessment to find your perfect starting point.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-lg font-bold mb-2 text-purple-600 font-fredoka">Step 2: Materials</h3>
              <p className="text-charcoal font-poppins text-sm">
                Get your personalized materials list and set up your workspace.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-lg font-bold mb-2 text-blue-600 font-fredoka">Step 3: Schedule</h3>
              <p className="text-charcoal font-poppins text-sm">
                Book your first lesson and establish a regular practice routine.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-bold mb-2 text-coral-600 font-fredoka">Step 4: Create</h3>
              <p className="text-charcoal font-poppins text-sm">
                Start your artistic journey with personalized guidance and support.
              </p>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Materials Guide */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="text-5xl mb-4 text-center">🎨</div>
            <h3 className="text-xl font-bold mb-4 text-emerald-600 font-fredoka text-center">Materials Guide</h3>
            <div className="space-y-3">
              <div className="border-b border-white/20 pb-2">
                <h4 className="font-bold text-charcoal font-poppins">Pastels Starter Kit:</h4>
                <ul className="text-charcoal font-poppins text-sm space-y-1">
                  <li>• 24-color soft pastel set</li>
                  <li>• Pastel paper pad (textured)</li>
                  <li>• Blending stumps</li>
                  <li>• Fixative spray</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-charcoal font-poppins">Oil Colors Starter Kit:</h4>
                <ul className="text-charcoal font-poppins text-sm space-y-1">
                  <li>• Basic color set (6-8 colors)</li>
                  <li>• Canvas boards</li>
                  <li>• Brushes (flat & round)</li>
                  <li>• Palette knife & palette</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Practice Tips */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="text-5xl mb-4 text-center">💡</div>
            <h3 className="text-xl font-bold mb-4 text-purple-600 font-fredoka text-center">Practice Tips</h3>
            <div className="space-y-3">
              <div className="border-b border-white/20 pb-2">
                <h4 className="font-bold text-charcoal font-poppins">Daily Practice:</h4>
                <p className="text-charcoal font-poppins text-sm">
                  Even 15-20 minutes daily is more effective than long, infrequent sessions.
                </p>
              </div>
              <div className="border-b border-white/20 pb-2">
                <h4 className="font-bold text-charcoal font-poppins">Observation Skills:</h4>
                <p className="text-charcoal font-poppins text-sm">
                  Practice looking at objects and breaking them down into shapes and colors.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-charcoal font-poppins">Keep a Sketchbook:</h4>
                <p className="text-charcoal font-poppins text-sm">
                  Document your progress and practice wherever you go.
                </p>
              </div>
            </div>
          </div>

          {/* Workspace Setup */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="text-5xl mb-4 text-center">🏠</div>
            <h3 className="text-xl font-bold mb-4 text-blue-600 font-fredoka text-center">Workspace Setup</h3>
            <div className="space-y-3">
              <div className="border-b border-white/20 pb-2">
                <h4 className="font-bold text-charcoal font-poppins">Lighting:</h4>
                <p className="text-charcoal font-poppins text-sm">
                  Natural light is best, or use a daylight lamp for consistent color viewing.
                </p>
              </div>
              <div className="border-b border-white/20 pb-2">
                <h4 className="font-bold text-charcoal font-poppins">Comfort:</h4>
                <p className="text-charcoal font-poppins text-sm">
                  Set up at a comfortable height to avoid back strain during sessions.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-charcoal font-poppins">Organization:</h4>
                <p className="text-charcoal font-poppins text-sm">
                  Keep materials organized and easily accessible for smooth workflow.
                </p>
              </div>
            </div>
          </div>

          {/* Color Theory */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="text-5xl mb-4 text-center">🌈</div>
            <h3 className="text-xl font-bold mb-4 text-coral-600 font-fredoka text-center">Color Theory Basics</h3>
            <div className="space-y-3">
              <div className="border-b border-white/20 pb-2">
                <h4 className="font-bold text-charcoal font-poppins">Primary Colors:</h4>
                <p className="text-charcoal font-poppins text-sm">
                  Red, Yellow, Blue - the foundation of all other colors.
                </p>
              </div>
              <div className="border-b border-white/20 pb-2">
                <h4 className="font-bold text-charcoal font-poppins">Color Temperature:</h4>
                <p className="text-charcoal font-poppins text-sm">
                  Warm colors (reds, oranges) vs. cool colors (blues, greens).
                </p>
              </div>
              <div>
                <h4 className="font-bold text-charcoal font-poppins">Complementary Colors:</h4>
                <p className="text-charcoal font-poppins text-sm">
                  Colors opposite on the color wheel create vibrant contrast.
                </p>
              </div>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="text-5xl mb-4 text-center">📈</div>
            <h3 className="text-xl font-bold mb-4 text-pink-600 font-fredoka text-center">Track Your Progress</h3>
            <div className="space-y-3">
              <div className="border-b border-white/20 pb-2">
                <h4 className="font-bold text-charcoal font-poppins">Photo Journal:</h4>
                <p className="text-charcoal font-poppins text-sm">
                  Take photos of your work in progress to see your improvement over time.
                </p>
              </div>
              <div className="border-b border-white/20 pb-2">
                <h4 className="font-bold text-charcoal font-poppins">Skill Checklist:</h4>
                <p className="text-charcoal font-poppins text-sm">
                  Keep track of techniques you&apos;ve learned and practiced.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-charcoal font-poppins">Goal Setting:</h4>
                <p className="text-charcoal font-poppins text-sm">
                  Set monthly artistic goals and celebrate your achievements.
                </p>
              </div>
            </div>
          </div>

          {/* Inspiration */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="text-5xl mb-4 text-center">✨</div>
            <h3 className="text-xl font-bold mb-4 text-yellow-600 font-fredoka text-center">Find Inspiration</h3>
            <div className="space-y-3">
              <div className="border-b border-white/20 pb-2">
                <h4 className="font-bold text-charcoal font-poppins">Nature Studies:</h4>
                <p className="text-charcoal font-poppins text-sm">
                  Study flowers, landscapes, and natural forms for endless inspiration.
                </p>
              </div>
              <div className="border-b border-white/20 pb-2">
                <h4 className="font-bold text-charcoal font-poppins">Art History:</h4>
                <p className="text-charcoal font-poppins text-sm">
                  Explore master artists who worked in pastels and oils.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-charcoal font-poppins">Personal Vision:</h4>
                <p className="text-charcoal font-poppins text-sm">
                  Draw from your experiences and emotions to create authentic art.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Student Success Stories */}
        <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 mb-16 shadow-lg border border-white/20">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-fredoka">
            🌟 Student Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3 text-emerald-600 font-fredoka">Sarah&apos;s Journey</h3>
              <p className="text-charcoal font-poppins">
                &quot;Started as a complete beginner and now I&apos;m painting portraits that amaze my family! Shilps helped me discover my artistic voice.&quot;
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 font-fredoka">Mike&apos;s Transformation</h3>
              <p className="text-charcoal font-poppins">
                &quot;I thought I had no artistic talent, but with personalized guidance, I&apos;ve created paintings I never thought possible!&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Get Started */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-purple-500 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4 font-fredoka">🚀 Ready to Use These Resources?</h2>
            <p className="text-xl mb-6 font-poppins">
              Start your artistic journey today with personalized guidance! ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/start-journey"
                className="bg-white text-emerald-600 px-8 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-poppins"
              >
                🎯 Find Your Path
              </a>
              <a 
                href="https://wa.me/918884750750?text=Hi%20Shilps!%20I'm%20interested%20in%20getting%20started%20with%20art%20lessons.%20Can%20you%20help%20me%20with%20materials%20and%20setup?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-poppins"
              >
                💬 Get Personal Help
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
