import { useState, useEffect } from 'react';

// Modern SVG Icons
const Flask = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v6l-5 9h16l-5-9V3M9 3h6M9 3H7M15 3h2" />
  </svg>
);

const Heart = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const Brain = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const Sparkles = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const Menu = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const X = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Check = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const Star = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function YalaModernWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showContactModal, setShowContactModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowProductModal(true);
  };

  const handleContactClick = () => {
    setShowContactModal(true);
  };

  const products = [
    { 
      name: "Calaya-M", 
      category: "Bone Health",
      description: "Complete calcium supplement with Vitamin D3, Methylcobalamin, Folic Acid & Zinc",
      features: ["Stronger Bones", "Better Absorption", "Enhanced Vitality"],
      color: "from-blue-400 to-cyan-400"
    },
    { 
      name: "Doxy-Yolin", 
      category: "Women's Health",
      description: "Trusted anti-emetic solution for pregnancy wellness",
      features: ["Safe for Baby", "Reduces Nausea", "Folic Acid Enriched"],
      color: "from-pink-400 to-rose-400"
    },
    { 
      name: "Lozigo Plus", 
      category: "Mental Wellness",
      description: "Advanced combination therapy for depression & anxiety",
      features: ["Fast Relief", "Dual Action", "Clinically Proven"],
      color: "from-purple-400 to-indigo-400"
    },
    { 
      name: "Lozigo", 
      category: "Sleep Support",
      description: "Effective anxiolytic for peaceful sleep",
      features: ["Quick Action", "Restful Sleep", "Minimal Side Effects"],
      color: "from-indigo-400 to-blue-400"
    },
  ];

  const stats = [
    { value: "25+", label: "Years Excellence", icon: "🏆" },
    { value: "100+", label: "Countries", icon: "🌍" },
    { value: "33M+", label: "Lives Touched", icon: "❤️" },
    { value: "500+", label: "Experts", icon: "👨‍⚕️" }
  ];

  return (
    <div className="bg-[#0A0F1C] text-white overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Clash+Display:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: #0A0F1C;
          overflow-x: hidden;
        }

        .font-display {
          font-family: 'Clash Display', sans-serif;
        }

        /* Glassmorphism */
        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glass-dark {
          background: rgba(10, 15, 28, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Modern gradients */
        .gradient-mesh {
          background: 
            radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.3) 0px, transparent 50%),
            radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 0.2) 0px, transparent 50%),
            radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 0.2) 0px, transparent 50%),
            radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 0.3) 0px, transparent 50%),
            radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 0.2) 0px, transparent 50%),
            radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 0.3) 0px, transparent 50%),
            radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 0.2) 0px, transparent 50%);
        }

        /* Animated gradient */
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient-xy 15s ease infinite;
        }

        /* Floating animation */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(3deg);
          }
        }

        .float {
          animation: float 6s ease-in-out infinite;
        }

        /* Pulse glow */
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
          }
        }

        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        /* Shimmer effect */
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }

        /* Card hover effects */
        .modern-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .modern-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .modern-card:hover::before {
          opacity: 1;
        }

        .modern-card:hover {
          transform: translateY(-8px);
        }

        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #0A0F1C;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #3B82F6, #8B5CF6);
          border-radius: 10px;
        }

        /* Neon text */
        .neon-text {
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.8),
                       0 0 20px rgba(59, 130, 246, 0.6),
                       0 0 30px rgba(59, 130, 246, 0.4);
        }

        /* Grid pattern */
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        /* Spotlight effect */
        .spotlight {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .spotlight::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(40px);
          transform: translate(-50%, -50%);
        }

        /* Bento box layout */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(12, 1fr);
          }
          
          .bento-item-1 { grid-column: span 6; }
          .bento-item-2 { grid-column: span 6; }
          .bento-item-3 { grid-column: span 4; }
          .bento-item-4 { grid-column: span 8; }
        }

        /* Modern button */
        .modern-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
        }

        .modern-btn::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .modern-btn:hover::after {
          width: 300px;
          height: 300px;
        }

        /* Particle effect */
        @keyframes particle-float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
          }
        }

        .particle {
          animation: particle-float 4s ease-in-out infinite;
        }
      `}</style>

      {/* Spotlight cursor effect */}
      <div 
        className="spotlight"
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`,
        }}
      >
        <div 
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
          className="spotlight::before"
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-50"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Flask className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  YALA
                </div>
                <div className="text-xs text-gray-400 -mt-1">Healthcare</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Products', 'Solutions', 'Research', 'About'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button 
                onClick={handleContactClick}
                className="modern-btn px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden glass p-2 rounded-xl"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 glass rounded-2xl p-6 space-y-4">
              {['Products', 'Solutions', 'Research', 'About'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={handleContactClick}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-medium"
              >
                Contact Us
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh grid-pattern">
        {/* Animated circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl float" style={{ animationDelay: '4s' }}></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="inline-block mb-6">
            <div className="glass px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Caring for Healthy Life
              </span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              The Future of
            </span>
            <br />
            <span className="neon-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Healthcare
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionary pharmaceutical solutions powered by cutting-edge research and 25+ years of excellence
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('products')}
              className="modern-btn group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-lg flex items-center space-x-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="modern-btn px-8 py-4 glass rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Watch Demo
            </button>
          </div>

          {/* Floating stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-dark rounded-2xl p-6 modern-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-display font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mx-auto animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Products Section - Bento Grid */}
      <section id="products" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block glass px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Innovative Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Scientifically proven medications trusted by millions worldwide
            </p>
          </div>

          <div className="bento-grid">
            {products.map((product, index) => (
              <div
                key={index}
                className={`bento-item-${(index % 4) + 1} modern-card glass-dark rounded-3xl p-8 relative overflow-hidden group cursor-pointer`}
                onMouseEnter={() => setActiveProduct(index)}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center pulse-glow`}>
                      <Flask className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs px-3 py-1 glass rounded-full">{product.category}</span>
                  </div>

                  <h3 className="text-3xl font-display font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-400 mb-6">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleProductClick(product)}
                    className="modern-btn w-full py-3 glass rounded-xl font-medium group-hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Decorative element */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${product.color} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section id="solutions" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-block glass px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Therapeutic Solutions
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Therapeutic Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive healthcare solutions across multiple therapeutic areas
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Heart className="w-10 h-10" />, title: "Cardiovascular", desc: "Heart health solutions", color: "from-red-500 to-pink-500" },
              { icon: <Users className="w-10 h-10" />, title: "Women's Health", desc: "Maternal care products", color: "from-pink-500 to-purple-500" },
              { icon: <Brain className="w-10 h-10" />, title: "Mental Wellness", desc: "Anxiety & depression", color: "from-purple-500 to-indigo-500" },
              { icon: <Sparkles className="w-10 h-10" />, title: "Bone Health", desc: "Calcium supplements", color: "from-blue-500 to-cyan-500" },
            ].map((area, index) => (
              <div
                key={index}
                className="modern-card glass-dark rounded-3xl p-8 text-center group hover:scale-105 transition-transform cursor-pointer"
                onClick={() => scrollToSection('products')}
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center pulse-glow`}>
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                <p className="text-gray-400 text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block glass px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Innovation & Research
                </span>
              </div>
              <h2 className="text-5xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Advancing Medical Science
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Our state-of-the-art research facilities and collaboration with leading institutions drive breakthrough discoveries in pharmaceutical science.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: "200+ Clinical Trials", desc: "Active research across therapeutic areas" },
                  { title: "50+ Partnerships", desc: "Global research institutions" },
                  { title: "$2.5B+ Investment", desc: "Annual R&D commitment" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 glass-dark rounded-2xl p-4">
                    <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleContactClick}
                className="modern-btn px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center space-x-2"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <div className="glass-dark rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="glass rounded-2xl p-6 text-center">
                      <div className="text-4xl font-display font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                        350+
                      </div>
                      <div className="text-sm text-gray-400">Scientists</div>
                    </div>
                    <div className="glass rounded-2xl p-6 text-center">
                      <div className="text-4xl font-display font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                        45+
                      </div>
                      <div className="text-sm text-gray-400">Patents</div>
                    </div>
                    <div className="glass rounded-2xl p-6 text-center col-span-2">
                      <div className="text-4xl font-display font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                        15+
                      </div>
                      <div className="text-sm text-gray-400">Novel Therapies in Pipeline</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-block glass px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                About YALA
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Our Mission & Values
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Dedicated to improving lives through innovative medicines and unwavering commitment to patient care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Patient First",
                desc: "Every decision we make is guided by what's best for patients and their families",
                color: "from-blue-500 to-cyan-500",
                icon: "❤️"
              },
              {
                title: "Scientific Excellence",
                desc: "Upholding the highest standards of research integrity and evidence-based medicine",
                color: "from-purple-500 to-indigo-500",
                icon: "🔬"
              },
              {
                title: "Global Impact",
                desc: "Making quality healthcare accessible and affordable to communities worldwide",
                color: "from-cyan-500 to-teal-500",
                icon: "🌍"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="modern-card glass-dark rounded-3xl p-8 relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={handleContactClick}
              className="modern-btn px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
            >
              Join Our Mission
            </button>
          </div>
        </div>
      </section>

      {/* Therapeutic Areas - Moved from original position */}
      <section className="py-32 relative overflow-hidden hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Therapeutic Excellence
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Heart className="w-10 h-10" />, title: "Cardiovascular", color: "from-red-500 to-pink-500" },
              { icon: <Users className="w-10 h-10" />, title: "Women's Health", color: "from-pink-500 to-purple-500" },
              { icon: <Brain className="w-10 h-10" />, title: "Mental Wellness", color: "from-purple-500 to-indigo-500" },
              { icon: <Sparkles className="w-10 h-10" />, title: "Bone Health", color: "from-blue-500 to-cyan-500" },
            ].map((area, index) => (
              <div
                key={index}
                className="modern-card glass-dark rounded-3xl p-8 text-center group hover:scale-105 transition-transform"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center pulse-glow`}>
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold">{area.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="glass-dark rounded-3xl p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-gradient"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Join thousands of healthcare professionals trusting YALA
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('products')}
                  className="modern-btn px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50"
                >
                  Get Started
                </button>
                <button 
                  onClick={handleContactClick}
                  className="modern-btn px-10 py-4 glass rounded-full font-semibold text-lg"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Flask className="w-6 h-6" />
                </div>
                <span className="text-xl font-display font-bold">YALA</span>
              </div>
              <p className="text-gray-400 text-sm">
                Caring for Healthy Life
              </p>
            </div>

            {['Products', 'Company', 'Resources'].map((section, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-4">{section}</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">Our Portfolio</button></li>
                  <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                  <li><button onClick={handleContactClick} className="hover:text-white transition-colors">Contact</button></li>
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2026 YALA Healthcare. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="hover:text-white transition-colors">Privacy</button>
              <button className="hover:text-white transition-colors">Terms</button>
              <button className="hover:text-white transition-colors">Cookies</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowContactModal(false)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          <div className="relative glass-dark rounded-3xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 glass p-2 rounded-xl hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-3xl font-display font-bold mb-2">Get in Touch</h3>
            <p className="text-gray-400 mb-6">Fill out the form and we'll get back to you within 24 hours.</p>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your inquiry! We will contact you soon.'); setShowContactModal(false); }}>
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/5"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/5"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/5"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows="4"
                  required
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/5 resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="modern-btn w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {showProductModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowProductModal(false)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          <div className="relative glass-dark rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowProductModal(false)}
              className="absolute top-4 right-4 glass p-2 rounded-xl hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedProduct.color} flex items-center justify-center pulse-glow mb-6`}>
              <Flask className="w-10 h-10 text-white" />
            </div>

            <span className="inline-block px-3 py-1 glass rounded-full text-sm mb-4">{selectedProduct.category}</span>
            
            <h3 className="text-4xl font-display font-bold mb-4">{selectedProduct.name}</h3>
            <p className="text-xl text-gray-300 mb-8">{selectedProduct.description}</p>

            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-bold">Key Benefits</h4>
              {selectedProduct.features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-3 glass-dark rounded-xl p-4">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="glass-dark rounded-2xl p-6 mb-8">
              <h4 className="text-xl font-bold mb-4">Product Information</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Category:</span>
                  <span className="font-medium">{selectedProduct.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Availability:</span>
                  <span className="font-medium text-green-400">In Stock</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Prescription:</span>
                  <span className="font-medium">Required</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={handleContactClick}
                className="modern-btn flex-1 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Request Information
              </button>
              <button 
                onClick={() => setShowProductModal(false)}
                className="modern-btn px-6 py-4 glass rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}