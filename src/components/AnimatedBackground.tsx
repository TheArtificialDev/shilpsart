interface AnimatedBackgroundProps {
  showEmojis?: boolean;
}

export default function AnimatedBackground({ showEmojis = true }: AnimatedBackgroundProps) {
  return (
    <>
      {/* Fixed Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-purple-500 to-coral-500"></div>
        <div className="absolute inset-0 rainbow-gradient opacity-20"></div>
        
        {/* Floating Art Elements - Only show if showEmojis is true */}
        {showEmojis && (
          <>
            {/* Top margins */}
            <div className="absolute sparkle-1" style={{top: '8%', left: '5%', fontSize: '2.5rem'}}>🖌️</div>
            <div className="absolute sparkle-8" style={{top: '12%', right: '8%', fontSize: '2.4rem'}}>🌈</div>
            
            {/* Left and right edges */}
            <div className="absolute sparkle-4" style={{top: '35%', left: '3%', fontSize: '2.2rem'}}>🎨</div>
            <div className="absolute sparkle-6" style={{top: '45%', right: '4%', fontSize: '2rem'}}>🖍️</div>
            <div className="absolute sparkle-10" style={{top: '65%', left: '2%', fontSize: '2.3rem'}}>✏️</div>
            <div className="absolute sparkle-3" style={{top: '75%', right: '6%', fontSize: '2.8rem'}}>🌟</div>
            
            {/* Bottom areas - away from footer */}
            <div className="absolute sparkle-7" style={{bottom: '25%', left: '7%', fontSize: '3.2rem'}}>🖌️</div>
            <div className="absolute sparkle-2" style={{bottom: '30%', right: '10%', fontSize: '3rem'}}>🌈</div>
            <div className="absolute sparkle-9" style={{bottom: '15%', left: '85%', fontSize: '2.6rem'}}>🎨</div>
            
            {/* Far edge positions for mobile screens */}
            <div className="absolute sparkle-5 hidden lg:block" style={{top: '55%', left: '92%', fontSize: '2.7rem'}}>✏️</div>
          </>
        )}
      </div>
    </>
  );
}