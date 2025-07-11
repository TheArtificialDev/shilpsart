import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sage via-terracotta to-dusty-rose py-20 lg:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight font-fredoka">
            <span className="block">
              Bring Your Inner Vision to Life
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-poppins">
            🎨 Personal fine arts instruction that honors your unique creative voice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/start-journey" className="px-12 py-6 bg-terracotta hover:bg-terracotta-light text-white font-bold text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl">
              🎨 Start Your Journey
            </Link>
            
            <Link href="/gallery" className="px-10 py-6 bg-sage hover:bg-sage-light text-white font-bold text-xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl">
              🖼️ View Gallery
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
