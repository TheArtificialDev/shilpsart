'use client';

import { useEffect, useState } from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import Lottie from 'lottie-react';

export default function AnimatedChildren() {
  const [paintBrushAnimation, setPaintBrushAnimation] = useState(null);

  useEffect(() => {
    // Load Paint Brush JSON animation
    fetch('/animations/Paint Brush.json')
      .then(response => response.json())
      .then(data => setPaintBrushAnimation(data))
      .catch(error => console.log('Error loading Paint Brush animation:', error));
  }, []);

  return (
    <>
      {/* Desktop/Large Screen Layout - All 5 animations positioned strategically */}
      
      {/* Girl Painting Animation - Left Side Center */}
      <div className="absolute left-4 md:left-8 lg:left-16 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block animate-float-gentle">
        <div className="w-48 h-48 xl:w-56 xl:h-56 hover:scale-105 transition-transform duration-300 rounded-full overflow-hidden animation-container">
          <DotLottiePlayer
            src="/animations/Girl Painting.lottie"
            autoplay
            loop
            className="lottie-transparent"
            style={{ 
              width: '100%', 
              height: '100%',
              backgroundColor: 'transparent',
              mixBlendMode: 'multiply'
            }}
          />
        </div>
        <div className="absolute -top-4 -left-4 text-2xl text-yellow-300 animate-sparkle-1">✨</div>
        <div className="absolute -top-3 -right-4 text-xl text-pink-300 animate-sparkle-2">🎨</div>
        <div className="absolute -bottom-4 -left-3 text-xl text-purple-300 animate-sparkle-3">💖</div>
      </div>

      {/* Artist Animation - Right Side Center */}
      <div className="absolute right-4 md:right-8 lg:right-16 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block animate-float-gentle-delayed">
        <div className="w-48 h-48 xl:w-56 xl:h-56 hover:scale-105 transition-transform duration-300 rounded-full overflow-hidden">
          <DotLottiePlayer
            src="/animations/Artist.lottie"
            autoplay
            loop
            style={{ 
              width: '100%', 
              height: '100%',
              backgroundColor: 'transparent',
              mixBlendMode: 'multiply'
            }}
          />
        </div>
        <div className="absolute -top-4 -right-4 text-2xl text-red-400 animate-sparkle-1">🎨</div>
        <div className="absolute -top-3 -left-4 text-xl text-blue-400 animate-sparkle-2">🖌️</div>
        <div className="absolute -bottom-4 -right-3 text-xl text-green-400 animate-sparkle-3">💚</div>
      </div>

      {/* Painter Painting Picture - Top Left */}
      <div className="absolute left-8 md:left-16 lg:left-24 top-16 md:top-20 z-20 hidden md:block animate-float-gentle-slow">
        <div className="w-36 h-36 lg:w-44 lg:h-44 hover:scale-110 transition-transform duration-300 rounded-full overflow-hidden">
          <DotLottiePlayer
            src="/animations/Painter Painting Picture.lottie"
            autoplay
            loop
            style={{ 
              width: '100%', 
              height: '100%',
              backgroundColor: 'transparent',
              mixBlendMode: 'multiply'
            }}
          />
        </div>
        <div className="absolute -top-2 -right-2 text-lg text-orange-400 animate-sparkle-2">🖼️</div>
        <div className="absolute -bottom-2 -left-2 text-lg text-cyan-400 animate-sparkle-3">🌟</div>
      </div>

      {/* Painting Alone on Balcony - Top Right */}
      <div className="absolute right-8 md:right-16 lg:right-24 top-16 md:top-20 z-20 hidden md:block animate-gentle-sway">
        <div className="w-36 h-36 lg:w-44 lg:h-44 hover:scale-110 transition-transform duration-300 rounded-full overflow-hidden">
          <DotLottiePlayer
            src="/animations/Painting alone on balcony.lottie"
            autoplay
            loop
            style={{ 
              width: '100%', 
              height: '100%',
              backgroundColor: 'transparent',
              mixBlendMode: 'multiply'
            }}
          />
        </div>
        <div className="absolute -top-2 -left-2 text-lg text-purple-400 animate-sparkle-1">🌈</div>
        <div className="absolute -bottom-2 -right-2 text-lg text-pink-400 animate-sparkle-3">✨</div>
      </div>

      {/* Paint Brush Animation - Bottom Center */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16 md:bottom-20 z-20 hidden lg:block animate-float-gentle-bounce">
        <div className="w-40 h-40 xl:w-48 xl:h-48 hover:scale-105 transition-transform duration-300">
          {paintBrushAnimation ? (
            <Lottie
              animationData={paintBrushAnimation}
              loop={true}
              autoplay={true}
              style={{ 
                width: '100%', 
                height: '100%',
                backgroundColor: 'transparent'
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-pink-300 to-purple-400 rounded-full flex items-center justify-center animate-float-gentle">
              <div className="text-4xl">🖌️</div>
            </div>
          )}
        </div>
        <div className="absolute -top-3 -left-3 text-xl text-yellow-400 animate-sparkle-1">🎭</div>
        <div className="absolute -top-3 -right-3 text-xl text-green-400 animate-sparkle-2">🎨</div>
      </div>

      {/* Tablet/Medium Screen Layout */}
      <div className="hidden sm:block lg:hidden absolute top-12 left-6 z-20 animate-float-gentle">
        <div className="w-32 h-32 hover:scale-105 transition-transform duration-300 rounded-full overflow-hidden">
          <DotLottiePlayer
            src="/animations/Girl Painting.lottie"
            autoplay
            loop
            style={{ 
              width: '100%', 
              height: '100%',
              backgroundColor: 'transparent',
              mixBlendMode: 'multiply'
            }}
          />
        </div>
        <div className="absolute -top-2 -right-2 text-lg text-pink-300 animate-sparkle-2">💖</div>
      </div>

      <div className="hidden sm:block lg:hidden absolute top-12 right-6 z-20 animate-float-gentle-delayed">
        <div className="w-32 h-32 hover:scale-105 transition-transform duration-300 rounded-full overflow-hidden">
          <DotLottiePlayer
            src="/animations/Artist.lottie"
            autoplay
            loop
            style={{ 
              width: '100%', 
              height: '100%',
              backgroundColor: 'transparent',
              mixBlendMode: 'multiply'
            }}
          />
        </div>
        <div className="absolute -top-2 -left-2 text-lg text-blue-300 animate-sparkle-1">🎨</div>
      </div>

      <div className="hidden sm:block lg:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 animate-gentle-sway">
        <div className="w-28 h-28 hover:scale-105 transition-transform duration-300">
          {paintBrushAnimation ? (
            <Lottie
              animationData={paintBrushAnimation}
              loop={true}
              autoplay={true}
              style={{ 
                width: '100%', 
                height: '100%',
                backgroundColor: 'transparent'
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-orange-300 to-red-400 rounded-full flex items-center justify-center animate-float-gentle">
              <div className="text-3xl">🖌️</div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden sm:block lg:hidden absolute top-1/3 left-2 z-20 animate-float-gentle-slow">
        <div className="w-24 h-24 hover:scale-105 transition-transform duration-300 rounded-full overflow-hidden">
          <DotLottiePlayer
            src="/animations/Painter Painting Picture.lottie"
            autoplay
            loop
            style={{ 
              width: '100%', 
              height: '100%',
              backgroundColor: 'transparent',
              mixBlendMode: 'multiply'
            }}
          />
        </div>
      </div>

      <div className="hidden sm:block lg:hidden absolute top-1/3 right-2 z-20 animate-float-gentle-bounce">
        <div className="w-24 h-24 hover:scale-105 transition-transform duration-300 rounded-full overflow-hidden">
          <DotLottiePlayer
            src="/animations/Painting alone on balcony.lottie"
            autoplay
            loop
            style={{ 
              width: '100%', 
              height: '100%',
              backgroundColor: 'transparent',
              mixBlendMode: 'multiply'
            }}
          />
        </div>
      </div>

      {/* Mobile/Small Screen Layout */}
      <div className="sm:hidden absolute top-8 left-4 z-20 animate-float-gentle">
        <div className="w-20 h-20 hover:scale-105 transition-transform duration-300 rounded-full overflow-hidden">
          <DotLottiePlayer
            src="/animations/Girl Painting.lottie"
            autoplay
            loop
            style={{ 
              width: '100%', 
              height: '100%',
              backgroundColor: 'transparent',
              mixBlendMode: 'multiply'
            }}
          />
        </div>
      </div>

      <div className="sm:hidden absolute top-8 right-4 z-20 animate-float-gentle-delayed">
        <div className="w-20 h-20 hover:scale-105 transition-transform duration-300 rounded-full overflow-hidden">
          <DotLottiePlayer
            src="/animations/Artist.lottie"
            autoplay
            loop
            style={{ 
              width: '100%', 
              height: '100%',
              backgroundColor: 'transparent',
              mixBlendMode: 'multiply'
            }}
          />
        </div>
      </div>

      <div className="sm:hidden absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-gentle-sway">
        <div className="w-16 h-16 hover:scale-105 transition-transform duration-300">
          {paintBrushAnimation ? (
            <Lottie
              animationData={paintBrushAnimation}
              loop={true}
              autoplay={true}
              style={{ 
                width: '100%', 
                height: '100%',
                backgroundColor: 'transparent'
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-pink-300 to-purple-400 rounded-full flex items-center justify-center animate-float-gentle">
              <div className="text-2xl">🖌️</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}