export default function AnimatedBackground() {
  return (
    <>
      {/* Fixed Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-purple-500 to-coral-500"></div>
        <div className="absolute inset-0 rainbow-gradient opacity-20"></div>
        
        {/* Floating Sparkles */}
        <div className="absolute top-20 left-20 text-6xl sparkle-effect">🎨</div>
        <div className="absolute top-40 right-32 text-4xl sparkle-effect">✨</div>
        <div className="absolute bottom-32 left-1/4 text-5xl sparkle-effect">🌈</div>
        <div className="absolute top-1/2 right-20 text-5xl sparkle-effect">⭐</div>
        <div className="absolute bottom-20 right-1/3 text-4xl sparkle-effect">🌟</div>
        <div className="absolute top-1/3 left-1/2 text-4xl sparkle-effect">💫</div>
        <div className="absolute bottom-1/2 left-10 text-3xl sparkle-effect">🎭</div>
        <div className="absolute top-3/4 right-1/4 text-5xl sparkle-effect">🔮</div>
      </div>
    </>
  );
}
