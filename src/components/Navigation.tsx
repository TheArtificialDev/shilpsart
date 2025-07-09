'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-emerald-200 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent sparkle-effect font-fredoka">
              🎨 Shilps Art
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-charcoal hover:text-emerald-500 font-medium transition-colors duration-200 font-poppins">
              🏠 Home
            </Link>
            <Link href="/about" className="text-charcoal hover:text-purple-500 font-medium transition-colors duration-200 font-poppins">
              👩‍🎨 About
            </Link>
            <Link href="/learning-path" className="text-charcoal hover:text-blue-500 font-medium transition-colors duration-200 font-poppins">
              🎯 Learning Path
            </Link>
            <Link href="/gallery" className="text-charcoal hover:text-coral-500 font-medium transition-colors duration-200 font-poppins">
              🖼️ Gallery
            </Link>
            <Link 
              href="/start-journey" 
              className="bg-gradient-to-r from-coral-500 to-pink-500 hover:from-coral-600 hover:to-pink-600 text-white px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all duration-200 shadow-lg font-poppins"
            >
              ✨ Start Creating
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal hover:text-emerald-500 transition-colors p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-200 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-charcoal hover:text-emerald-500 font-medium transition-colors px-4 font-poppins">
                🏠 Home
              </Link>
              <Link href="/about" className="text-charcoal hover:text-purple-500 font-medium transition-colors px-4 font-poppins">
                👩‍🎨 About
              </Link>
              <Link href="/learning-path" className="text-charcoal hover:text-blue-500 font-medium transition-colors px-4 font-poppins">
                🎯 Learning Path
              </Link>
              <Link href="/gallery" className="text-charcoal hover:text-coral-500 font-medium transition-colors px-4 font-poppins">
                🖼️ Gallery
              </Link>
              <Link 
                href="/start-journey" 
                className="bg-gradient-to-r from-coral-500 to-pink-500 hover:from-coral-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-medium text-center mx-4 transform hover:scale-105 transition-all duration-200 shadow-lg font-poppins"
              >
                ✨ Start Creating
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
