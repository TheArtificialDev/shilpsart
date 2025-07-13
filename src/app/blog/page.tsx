import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Finding Your Unique Artistic Voice",
      excerpt: "Discover why developing your personal style is more important than copying others, and learn practical steps to uncover your authentic artistic expression.",
      date: "January 15, 2025",
      category: "Inspiration",
      readTime: "5 min read",
      emoji: "🎨"
    },
    {
      id: 2,
      title: "The Magic of Pastels: A Beginner's Guide",
      excerpt: "Explore the beautiful world of pastel painting - from choosing the right materials to mastering blending techniques that create stunning effects.",
      date: "January 10, 2025",
      category: "Tutorial",
      readTime: "8 min read",
      emoji: "🌈"
    },
    {
      id: 3,
      title: "Overcoming Creative Blocks",
      excerpt: "Every artist faces creative blocks. Learn proven strategies to break through mental barriers and reignite your artistic passion.",
      date: "January 5, 2025",
      category: "Motivation",
      readTime: "6 min read",
      emoji: "🔥"
    },
    {
      id: 4,
      title: "Color Theory Made Simple",
      excerpt: "Understanding color relationships doesn't have to be complicated. Master the basics of color theory with easy-to-follow explanations and practical examples.",
      date: "December 28, 2024",
      category: "Tutorial",
      readTime: "10 min read",
      emoji: "🎭"
    },
    {
      id: 5,
      title: "Setting Up Your Perfect Art Space",
      excerpt: "Create an inspiring workspace that supports your creativity, whether you have a dedicated studio or just a corner of your home.",
      date: "December 22, 2024",
      category: "Tips",
      readTime: "7 min read",
      emoji: "🏠"
    },
    {
      id: 6,
      title: "From Beginner to Confident Artist",
      excerpt: "Follow one student's incredible journey from picking up a brush for the first time to creating artwork that amazes friends and family.",
      date: "December 15, 2024",
      category: "Student Story",
      readTime: "12 min read",
      emoji: "⭐"
    },
    {
      id: 7,
      title: "The Power of Daily Practice",
      excerpt: "Why consistency beats intensity in artistic development, and how to build a sustainable practice routine that fits your lifestyle.",
      date: "December 8, 2024",
      category: "Motivation",
      readTime: "5 min read",
      emoji: "💪"
    },
    {
      id: 8,
      title: "Oil Painting Fundamentals",
      excerpt: "Dive into the rich world of oil painting with this comprehensive guide covering everything from brush selection to layering techniques.",
      date: "December 1, 2024",
      category: "Tutorial",
      readTime: "15 min read",
      emoji: "🖌️"
    }
  ];

  const categories = [
    { name: "All", color: "emerald" },
    { name: "Tutorial", color: "purple" },
    { name: "Inspiration", color: "coral" },
    { name: "Motivation", color: "blue" },
    { name: "Tips", color: "pink" },
    { name: "Student Story", color: "yellow" }
  ];

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
              📝 Art & Creativity Blog
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-charcoal max-w-3xl mx-auto font-poppins">
            Inspiration, tutorials, and insights to fuel your artistic journey! ✨
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className="px-6 py-3 rounded-full font-bold bg-white/40 backdrop-blur-sm text-charcoal hover:bg-white/60 transition-all duration-300 transform hover:scale-105 font-poppins"
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 mb-16 shadow-lg border border-white/20">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-3">🌟</span>
            <span className="bg-gradient-to-r from-emerald-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold font-poppins">
              Featured
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-emerald-600 font-fredoka">
            🎨 Finding Your Unique Artistic Voice
          </h2>
          <p className="text-charcoal mb-6 font-poppins leading-relaxed">
            One of the most common questions I hear from students is: &quot;How do I develop my own style?&quot; This is such a beautiful question because it shows you&apos;re thinking beyond just copying techniques - you want to create something authentically yours. In this post, I&apos;ll share the journey of discovering your unique artistic voice and why it&apos;s the most rewarding part of being an artist.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-sm text-charcoal font-poppins">📅 January 15, 2025</span>
            <span className="text-sm text-charcoal font-poppins">⏱️ 5 min read</span>
            <span className="bg-coral-200 text-coral-800 px-3 py-1 rounded-full text-sm font-bold font-poppins">
              Inspiration
            </span>
          </div>
          <a 
            href="https://wa.me/918884750750?text=Hi%20Shilps!%20I%20read%20your%20blog%20post%20about%20finding%20artistic%20voice%20and%20would%20love%20to%20learn%20more!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-500 to-purple-500 text-white px-8 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-lg inline-block font-poppins"
          >
            💬 Discuss This Post
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20">
              <div className="text-4xl mb-4 text-center">{post.emoji}</div>
              <h3 className="text-xl font-bold mb-3 text-charcoal font-fredoka">
                {post.title}
              </h3>
              <p className="text-charcoal mb-4 font-poppins leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-sm text-charcoal font-poppins">📅 {post.date}</span>
                <span className="text-sm text-charcoal font-poppins">⏱️ {post.readTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-bold font-poppins">
                  {post.category}
                </span>
                <a 
                  href="https://wa.me/918884750750?text=Hi%20Shilps!%20I'd%20love%20to%20learn%20more%20about%20your%20art%20tips%20and%20tutorials!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-800 font-bold transition-colors font-poppins"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4 font-fredoka">📧 Get Art Tips & Inspiration!</h2>
          <p className="text-xl mb-6 font-poppins">
            Join hundreds of artists who receive weekly tips, tutorials, and motivation directly to their inbox! ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a 
              href="https://wa.me/918884750750?text=Hi%20Shilps!%20I'd%20love%20to%20subscribe%20to%20your%20art%20tips%20and%20inspiration!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-600 px-8 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-poppins"
            >
              💬 Subscribe via WhatsApp
            </a>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-3 text-emerald-600 font-fredoka">Tutorials</h3>
            <p className="text-charcoal mb-4 font-poppins">
              Step-by-step guides to master new techniques and improve your skills.
            </p>
            <a 
              href="/learning-path"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-lg inline-block font-poppins"
            >
              View Learning Path
            </a>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-bold mb-3 text-purple-600 font-fredoka">Student Stories</h3>
            <p className="text-charcoal mb-4 font-poppins">
              Real transformations and inspiring journeys from fellow artists.
            </p>
            <a 
              href="/gallery"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-lg inline-block font-poppins"
            >
              See Transformations
            </a>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 text-center">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-3 text-coral-600 font-fredoka">Art Tips</h3>
            <p className="text-charcoal mb-4 font-poppins">
              Practical advice and insights to improve your artistic practice.
            </p>
            <a 
              href="/resources"
              className="bg-gradient-to-r from-coral-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-lg inline-block font-poppins"
            >
              Browse Resources
            </a>
          </div>
        </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
