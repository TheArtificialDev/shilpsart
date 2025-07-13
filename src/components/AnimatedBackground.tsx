export default function AnimatedBackground() {
  return (
    <>
      {/* Fixed Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-purple-500 to-coral-500"></div>
        <div className="absolute inset-0 rainbow-gradient opacity-20"></div>
        
        {/* Floating Art Elements - Randomized Positions */}
        <div className="absolute sparkle-1" style={{top: '15%', left: '8%', fontSize: '2.5rem'}}>🖌️</div>
        <div className="absolute sparkle-2" style={{top: '73%', right: '12%', fontSize: '3rem'}}>🌈</div>
        <div className="absolute sparkle-3" style={{top: '35%', right: '25%', fontSize: '2.8rem'}}>🖼️</div>
        <div className="absolute sparkle-4" style={{bottom: '28%', left: '15%', fontSize: '2.2rem'}}>🎨</div>
        <div className="absolute sparkle-5" style={{top: '58%', left: '45%', fontSize: '2.7rem'}}>✏️</div>
        <div className="absolute sparkle-6" style={{bottom: '45%', right: '8%', fontSize: '2rem'}}>🖍️</div>
        <div className="absolute sparkle-7" style={{top: '82%', left: '22%', fontSize: '3.2rem'}}>🖌️</div>
        <div className="absolute sparkle-8" style={{top: '12%', right: '35%', fontSize: '2.4rem'}}>🌈</div>
        <div className="absolute sparkle-9" style={{bottom: '15%', left: '55%', fontSize: '2.6rem'}}>🎨</div>
        <div className="absolute sparkle-10" style={{top: '48%', right: '45%', fontSize: '2.3rem'}}>✏️</div>
      </div>
    </>
  );
}