import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-purple-900 to-emerald-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              🎨 Shilps Art
            </h3>
            <p className="text-white/90">
              ✨ Personal fine arts instruction that honors your unique creative voice and brings your inner vision to life!
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-emerald-300">🧭 Navigation</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link href="/" className="hover:text-emerald-300 transition-colors">🏠 Home</Link></li>
              <li><Link href="/about" className="hover:text-purple-300 transition-colors">👩‍🎨 About</Link></li>
              <li><Link href="/learning-path" className="hover:text-blue-300 transition-colors">🎯 Learning Path</Link></li>
              <li><Link href="/gallery" className="hover:text-coral-300 transition-colors">🖼️ Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-purple-300">💬 Support</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link href="/contact" className="hover:text-yellow-300 transition-colors">📞 Contact</Link></li>
              <li><Link href="/faqs" className="hover:text-pink-300 transition-colors">❓ FAQs</Link></li>
              <li><Link href="/resources" className="hover:text-blue-300 transition-colors">📚 Student Resources</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-coral-300">🚀 Get Started</h4>
            <Link 
              href="/start-journey" 
              className="bg-gradient-to-r from-coral-500 to-pink-500 hover:from-coral-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-bold text-center block transform hover:scale-105 transition-all duration-200 shadow-lg sparkle-effect"
            >
              ✨ Start Your Journey
            </Link>
            <p className="text-white/70 text-sm mt-3">
              🎨 Join thousands of happy artists!
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
          <p>&copy; 2025 Shilps Art. All rights reserved. Made with 💖 for artists everywhere! ✨</p>
        </div>
      </div>
    </footer>
  );
}
