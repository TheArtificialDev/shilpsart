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
      {/* Girl Painting Animation - Left Side */}
      <div className="absolute left-4 md:left-8 lg:left-16 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
        <div className="w-32 h-32 lg:w-40 lg:h-40">
          <DotLottiePlayer
            src="/animations/Girl Painting.lottie"
            autoplay
            loop
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        {/* Sparkles around animation */}
        <div className="absolute -top-3 -left-3 text-xl text-yellow-300 animate-sparkle-1">✨</div>
        <div className="absolute -top-2 -right-3 text-lg text-pink-300 animate-sparkle-2">🎨</div>
        <div className="absolute -bottom-3 -left-2 text-lg text-purple-300 animate-sparkle-3">💖</div>
      </div>

      {/* Artist/Painter Animation - Right Side */}
      <div className="absolute right-4 md:right-8 lg:right-16 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
        <div className="w-32 h-32 lg:w-40 lg:h-40">
          <DotLottiePlayer
            src="/animations/Artist.lottie"
            autoplay
            loop
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        {/* Sparkles around animation */}
        <div className="absolute -top-3 -right-3 text-xl text-red-400 animate-sparkle-1">🎨</div>
        <div className="absolute -top-2 -left-3 text-lg text-blue-400 animate-sparkle-2">🖌️</div>
        <div className="absolute -bottom-3 -right-2 text-lg text-green-400 animate-sparkle-3">💚</div>
      </div>

      {/* Tablet Version - Medium screens */}
      <div className="hidden sm:block md:hidden absolute top-8 left-6 z-20">
        <div className="w-24 h-24">
          {paintBrushAnimation ? (
            <Lottie
              animationData={paintBrushAnimation}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-pink-300 to-purple-400 rounded-full flex items-center justify-center animate-float-gentle">
              <div className="text-3xl">👧🎨</div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden sm:block md:hidden absolute top-8 right-6 z-20">
        <div className="w-24 h-24">
          <DotLottiePlayer
            src="/animations/Painter Painting Picture.lottie"
            autoplay
            loop
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      {/* Mobile Version - Small screens */}
      <div className="sm:hidden absolute top-6 left-4 z-20">
        <div className="w-16 h-16">
          {paintBrushAnimation ? (
            <Lottie
              animationData={paintBrushAnimation}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-pink-300 to-purple-400 rounded-full flex items-center justify-center animate-float-gentle">
              <div className="text-2xl">👧🎨</div>
            </div>
          )}
        </div>
      </div>

      <div className="sm:hidden absolute top-6 right-4 z-20">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-emerald-400 rounded-full flex items-center justify-center animate-float-gentle-delayed">
          <div className="text-2xl">👦🖌️</div>
        </div>
      </div>
    </>
  );
}
