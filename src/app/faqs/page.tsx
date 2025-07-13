'use client';

import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'lessons' | 'technical' | 'pricing';
}

const faqs: FAQItem[] = [
  // General Questions
  {
    category: 'general',
    question: "What makes your art classes different from others?",
    answer: "I focus on helping you develop your unique artistic voice rather than copying a specific style. With 20+ years of teaching experience, I provide personalized one-on-one instruction that honors your individual creative vision. Unlike group classes or online courses, you get real-time feedback and guidance tailored specifically to your needs and goals."
  },
  {
    category: 'general',
    question: "Do I need any art experience to start?",
    answer: "Absolutely not! I welcome complete beginners and have helped many students pick up a brush for the first time. I also work with intermediate and advanced artists looking to refine their skills. During our initial consultation, we'll assess your current level and create a personalized learning path that's perfect for you."
  },
  {
    category: 'general',
    question: "What art mediums do you teach?",
    answer: "I specialize in pastels and oil colors, two beautiful traditional mediums that allow for incredible expression and depth. These mediums are perfect for developing fundamental skills while creating stunning artwork. I'll guide you through the unique properties and techniques of each medium."
  },
  {
    category: 'general',
    question: "How long does it take to see results?",
    answer: "Every student progresses at their own pace, but most see noticeable improvement within the first few sessions. The key is consistent practice and applying what we work on together. Some students create pieces they're proud of in just a few weeks, while others take a bit longer - and that's perfectly fine! I'm here to support you throughout your entire journey."
  },

  // Lessons & Scheduling
  {
    category: 'lessons',
    question: "How do the one-on-one lessons work?",
    answer: "Each lesson is completely personalized to your needs and goals. We'll work together in real-time, where I can provide immediate feedback, demonstrate techniques, and help you overcome any challenges. Sessions are typically 1-2 hours long, giving us plenty of time to explore techniques and work on your projects without feeling rushed."
  },
  {
    category: 'lessons',
    question: "How flexible is the scheduling?",
    answer: "Very flexible! I understand that life can be unpredictable, so I work with you to find times that fit your schedule. We can schedule regular weekly sessions or book individual lessons as needed. If you need to reschedule, just let me know as soon as possible and we'll find another time that works."
  },
  {
    category: 'lessons',
    question: "Can I take lessons from anywhere?",
    answer: "Yes! I offer both in-person and online lessons. Online lessons work surprisingly well for art instruction - I can see your work clearly, demonstrate techniques, and provide real-time guidance just like in-person lessons. Many students actually prefer online lessons for the convenience and comfort of learning from home."
  },
  {
    category: 'lessons',
    question: "What happens if I miss a lesson?",
    answer: "Life happens, and I understand that! If you need to cancel or reschedule, just let me know as soon as possible. We can easily reschedule to another time that works for both of us. I want you to feel comfortable and stress-free about your artistic journey."
  },

  // Technical & Materials
  {
    category: 'technical',
    question: "What materials do I need to get started?",
    answer: "I'll provide you with a personalized materials list based on your chosen medium and skill level. You don't need to invest in expensive supplies right away - I'll recommend quality starter materials that won't break the bank. As you progress, we can discuss upgrading your supplies gradually."
  },
  {
    category: 'technical',
    question: "Do I need special equipment for online lessons?",
    answer: "For online lessons, you'll need a device with a camera (smartphone, tablet, or computer) and a stable internet connection. I'll help you set up your workspace and camera angle to get the best learning experience. It's simpler than you might think!"
  },
  {
    category: 'technical',
    question: "Can you help me set up my art space?",
    answer: "Absolutely! Whether you have a dedicated studio or just a corner of your kitchen table, I'll help you optimize your space for creating art. Good lighting and organization make a huge difference in your artistic experience, and I'm happy to share tips for setting up your perfect creative space."
  },

  // Pricing & Investment
  {
    category: 'pricing',
    question: "How does the investment work?",
    answer: "I offer flexible session packages to suit different budgets and goals. During our initial consultation, we'll discuss what works best for you. I believe in making quality art education accessible, and I'm happy to work with you to find an investment level that fits your situation."
  },
  {
    category: 'pricing',
    question: "Is there a free trial or consultation?",
    answer: "Yes! I offer a complimentary 30-minute consultation where we can discuss your goals, assess your current level, and create a personalized learning plan. This helps ensure we're a good fit before you make any commitment. No pressure - just genuine guidance about your artistic journey."
  },
  {
    category: 'pricing',
    question: "Do you offer any guarantees?",
    answer: "I'm committed to your success and satisfaction. If you're not completely happy with your first lesson, I'll work with you to make it right. My goal is to help you discover and develop your artistic voice, and I'll do everything I can to ensure you have a positive, encouraging experience."
  },
  {
    category: 'pricing',
    question: "Can I pause or stop lessons if needed?",
    answer: "Of course! I understand that life circumstances can change. You can pause your lessons anytime and resume when you're ready. There are no long-term contracts or penalties - just flexible, supportive instruction that adapts to your needs."
  }
];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'general', name: '🎨 General', color: 'emerald' },
    { id: 'lessons', name: '📚 Lessons', color: 'purple' },
    { id: 'technical', name: '🛠️ Technical', color: 'blue' },
    { id: 'pricing', name: '💰 Investment', color: 'coral' }
  ];

  const filteredFAQs = faqs.filter(faq => faq.category === activeCategory);

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
              ❓ Frequently Asked Questions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-charcoal max-w-3xl mx-auto font-poppins">
            Get answers to common questions about starting your artistic journey with personalized instruction! ✨
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setOpenFAQ(null);
              }}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 font-poppins ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/40 backdrop-blur-sm text-charcoal hover:bg-white/60'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div className="bg-white/40 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left hover:bg-white/20 transition-all duration-200 flex justify-between items-center"
                >
                  <span className="font-bold text-charcoal font-poppins pr-4">
                    {faq.question}
                  </span>
                  <span className={`text-2xl transform transition-transform duration-200 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}>
                    ⬇️
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 border-t border-white/20">
                    <p className="text-charcoal font-poppins leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-purple-500 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4 font-fredoka">🤔 Still Have Questions?</h2>
            <p className="text-xl mb-6 font-poppins">
              I&apos;d love to chat with you personally about your artistic journey! ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:8884750750"
                className="bg-white text-emerald-600 px-8 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-poppins"
              >
                📞 Call Me
              </a>
              <a 
                href="https://wa.me/918884750750?text=Hi%20Shilps!%20I%20have%20some%20questions%20about%20your%20art%20classes.%20Can%20we%20chat?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-poppins"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        {/* Popular Resources */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-emerald-600 font-fredoka">Find Your Level</h3>
            <p className="text-charcoal mb-4 font-poppins">
              Discover which learning path is perfect for your current skill level and goals.
            </p>
            <a 
              href="/learning-path"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-lg inline-block font-poppins"
            >
              Explore Paths
            </a>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 text-center">
            <div className="text-4xl mb-4">🖼️</div>
            <h3 className="text-xl font-bold mb-3 text-purple-600 font-fredoka">See Student Work</h3>
            <p className="text-charcoal mb-4 font-poppins">
              Get inspired by amazing transformations from students just like you.
            </p>
            <a 
              href="/gallery"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-lg inline-block font-poppins"
            >
              View Gallery
            </a>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-coral-600 font-fredoka">Ready to Start?</h3>
            <p className="text-charcoal mb-4 font-poppins">
              Begin your artistic journey with a free consultation and personalized plan.
            </p>
            <a 
              href="/start-journey"
              className="bg-gradient-to-r from-coral-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-lg inline-block font-poppins"
            >
              Start Journey
            </a>
          </div>
        </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
