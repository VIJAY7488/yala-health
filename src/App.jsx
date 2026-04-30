import { useState, useEffect, useRef, useCallback } from 'react';

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
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [showContactModal, setShowContactModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      // Parallax: map mouse to -1..1 range
      const px = (e.clientX / window.innerWidth - 0.5) * 2;
      const py = (e.clientY / window.innerHeight - 0.5) * 2;
      setParallax({ x: px, y: py });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Scroll-triggered 3D entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible-3d');
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.scroll-3d').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Advanced 3D tilt with moving specular highlight
  const useTilt = (intensity = 12) => {
    const ref = useRef(null);
    const handleMouseMove = useCallback((e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -intensity;
      const rotY = ((x - cx) / cx) * intensity;
      // Specular highlight position (percentage)
      const hx = (x / rect.width) * 100;
      const hy = (y / rect.height) * 100;
      el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(24px) scale(1.025)`;
      el.style.setProperty('--shine-x', `${hx}%`);
      el.style.setProperty('--shine-y', `${hy}%`);
      el.style.boxShadow = `${-rotY * 2.5}px ${rotX * 2}px 50px rgba(34,197,94,0.28), 0 25px 70px rgba(34,197,94,0.12), inset 0 1px 0 rgba(255,255,255,0.5)`;
      const shine = el.querySelector('.card-shine');
      if (shine) {
        shine.style.opacity = '1';
        shine.style.background = `radial-gradient(circle at ${hx}% ${hy}%, rgba(255,255,255,0.45) 0%, transparent 65%)`;
      }
    }, [intensity]);
    const handleMouseLeave = useCallback(() => {
      const el = ref.current;
      if (!el) return;
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
      el.style.boxShadow = '';
      const shine = el.querySelector('.card-shine');
      if (shine) shine.style.opacity = '0';
    }, []);
    return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
  };

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

  // 3D tilt instances for cards
  const tilt1 = useTilt();
  const tilt2 = useTilt();
  const tilt3 = useTilt();
  const tilt4 = useTilt();
  const tiltStat1 = useTilt();
  const tiltStat2 = useTilt();
  const tiltStat3 = useTilt();
  const tiltStat4 = useTilt();
  const tiltArea1 = useTilt();
  const tiltArea2 = useTilt();
  const tiltArea3 = useTilt();
  const tiltArea4 = useTilt();
  const tiltVal1 = useTilt();
  const tiltVal2 = useTilt();
  const tiltVal3 = useTilt();
  const tiltTiles = [tilt1, tilt2, tilt3, tilt4];
  const tiltStats = [tiltStat1, tiltStat2, tiltStat3, tiltStat4];
  const tiltAreas = [tiltArea1, tiltArea2, tiltArea3, tiltArea4];
  const tiltVals = [tiltVal1, tiltVal2, tiltVal3];

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
    <div className="bg-[#F0FAF4] text-gray-800 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'DM Sans', sans-serif;
          background: #F0FAF4;
          overflow-x: hidden;
          color: #1a2e1a;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-size: 16px;
          line-height: 1.6;
        }

        .font-display {
          font-family: 'Space Grotesk', sans-serif;
          letter-spacing: -0.02em;
          font-weight: 700;
        }

        /* Glassmorphism - green tinted */
        .glass {
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(52, 168, 83, 0.2);
        }

        .glass-dark {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(52, 168, 83, 0.15);
          box-shadow: 0 4px 32px rgba(34, 139, 34, 0.08);
        }

        /* Modern gradients - green mesh */
        .gradient-mesh {
          background:
            radial-gradient(at 27% 37%, hsla(142, 76%, 85%, 0.55) 0px, transparent 50%),
            radial-gradient(at 97% 21%, hsla(152, 82%, 78%, 0.45) 0px, transparent 50%),
            radial-gradient(at 52% 99%, hsla(120, 60%, 88%, 0.4) 0px, transparent 50%),
            radial-gradient(at 10% 29%, hsla(160, 70%, 80%, 0.5) 0px, transparent 50%),
            radial-gradient(at 97% 96%, hsla(135, 55%, 90%, 0.35) 0px, transparent 50%),
            radial-gradient(at 33% 50%, hsla(145, 65%, 82%, 0.45) 0px, transparent 50%),
            radial-gradient(at 79% 53%, hsla(130, 60%, 87%, 0.3) 0px, transparent 50%);
        }

        /* Animated gradient */
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient-xy 15s ease infinite;
        }

        /* Floating animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }

        .float {
          animation: float 6s ease-in-out infinite;
        }

        /* Pulse glow - green */
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.5); }
          50% { box-shadow: 0 0 45px rgba(34, 197, 94, 0.85); }
        }

        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        /* Shimmer effect */
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.6) 50%,
            rgba(255,255,255,0) 100%
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
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, rgba(34,197,94,0.08) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .modern-card:hover::before { opacity: 1; }
        .modern-card:hover { transform: translateY(-8px); box-shadow: 0 20px 60px rgba(34,197,94,0.15); }

        html { scroll-behavior: smooth; }

        /* Custom scrollbar - green */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f0faf4; }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #22c55e, #16a34a);
          border-radius: 10px;
        }

        /* Neon text - green */
        .neon-text {
          text-shadow: 0 0 10px rgba(34,197,94,0.6),
                       0 0 20px rgba(34,197,94,0.4),
                       0 0 35px rgba(34,197,94,0.25);
        }

        /* Grid pattern - subtle green */
        .grid-pattern {
          background-image:
            linear-gradient(rgba(34,197,94,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.06) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        /* Spotlight */
        .spotlight {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        /* Bento box layout */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .bento-grid { grid-template-columns: repeat(12, 1fr); }
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
          top: 50%; left: 50%;
          width: 0; height: 0;
          background: rgba(255,255,255,0.25);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .modern-btn:hover::after { width: 300px; height: 300px; }

        @keyframes particle-float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
        }

        .particle { animation: particle-float 4s ease-in-out infinite; }

        /* ===== 3D EFFECTS ===== */

        /* Global 3D context */
        .scene-3d {
          perspective: 1200px;
          transform-style: preserve-3d;
        }

        /* Smooth 3D transition */
        .tilt-card {
          transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
          transform-style: preserve-3d;
          will-change: transform;
        }

        /* 3D floating pill badge */
        .badge-3d {
          transform: perspective(600px) translateZ(8px);
          box-shadow: 0 4px 15px rgba(34,197,94,0.2), 0 2px 4px rgba(0,0,0,0.06);
        }

        /* 3D hero title depth */
        .hero-title-3d {
          text-shadow:
            1px 1px 0 rgba(34,197,94,0.3),
            2px 2px 0 rgba(34,197,94,0.2),
            3px 3px 0 rgba(34,197,94,0.15),
            4px 4px 8px rgba(34,197,94,0.1);
          transform: perspective(800px) translateZ(0px);
        }

        /* 3D icon box */
        .icon-3d {
          transform: perspective(400px) translateZ(12px);
          box-shadow:
            0 8px 20px rgba(34,197,94,0.35),
            0 3px 6px rgba(0,0,0,0.1),
            inset 0 1px 0 rgba(255,255,255,0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .icon-3d:hover {
          transform: perspective(400px) translateZ(24px) rotateY(15deg);
          box-shadow:
            0 16px 35px rgba(34,197,94,0.45),
            -6px 8px 20px rgba(34,197,94,0.2);
        }

        /* 3D nav logo */
        .logo-3d {
          transform: perspective(500px) translateZ(6px);
          box-shadow: 0 6px 18px rgba(34,197,94,0.35), 0 2px 4px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }
        .logo-3d:hover {
          transform: perspective(500px) translateZ(16px) rotateY(10deg);
        }

        /* 3D CTA button */
        .btn-3d {
          transform: perspective(500px) translateZ(0px);
          box-shadow:
            0 6px 20px rgba(34,197,94,0.4),
            0 3px 6px rgba(0,0,0,0.1),
            inset 0 1px 0 rgba(255,255,255,0.25);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-3d:hover {
          transform: perspective(500px) translateZ(14px) translateY(-3px);
          box-shadow:
            0 16px 40px rgba(34,197,94,0.5),
            0 8px 16px rgba(0,0,0,0.12),
            inset 0 1px 0 rgba(255,255,255,0.3);
        }
        .btn-3d:active {
          transform: perspective(500px) translateZ(4px) translateY(0px);
          box-shadow: 0 4px 12px rgba(34,197,94,0.3);
        }

        /* 3D section card with depth layers */
        .card-3d-base {
          position: relative;
          transform-style: preserve-3d;
        }
        .card-3d-base::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%);
          pointer-events: none;
          z-index: 2;
        }
        .card-3d-base::before {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 4px;
          right: 4px;
          height: 100%;
          background: rgba(34,197,94,0.12);
          border-radius: inherit;
          z-index: -1;
          filter: blur(8px);
          transform: translateZ(-20px);
        }

        /* 3D spinning orb for hero decoration */
        @keyframes orb-rotate {
          0% { transform: perspective(600px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: perspective(600px) rotateX(360deg) rotateY(180deg) rotateZ(90deg); }
        }

        .orb-3d {
          animation: orb-rotate 12s linear infinite;
          transform-style: preserve-3d;
        }

        /* 3D layered stat card */
        .stat-3d {
          transform-style: preserve-3d;
          position: relative;
        }
        .stat-3d .stat-value {
          transform: translateZ(30px);
          display: inline-block;
        }
        .stat-3d .stat-icon {
          transform: translateZ(20px);
          display: inline-block;
        }

        /* 3D depth shadow under sections */
        .section-3d-shadow {
          box-shadow:
            0 20px 60px rgba(34,197,94,0.08),
            0 4px 16px rgba(34,197,94,0.04);
        }

        /* 3D flip card for therapeutic areas */
        .flip-container {
          perspective: 1000px;
        }
        .flip-inner {
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
          transform-style: preserve-3d;
          position: relative;
        }
        .flip-container:hover .flip-inner {
          transform: rotateY(8deg) rotateX(-5deg) translateZ(16px);
        }

        /* 3D research panel */
        .research-3d {
          transform: perspective(1200px) rotateY(-4deg);
          box-shadow:
            20px 20px 60px rgba(34,197,94,0.12),
            -4px -4px 20px rgba(255,255,255,0.8),
            0 2px 4px rgba(0,0,0,0.04);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .research-3d:hover {
          transform: perspective(1200px) rotateY(0deg) translateZ(12px);
          box-shadow:
            0 30px 80px rgba(34,197,94,0.18),
            0 4px 16px rgba(0,0,0,0.06);
        }

        /* 3D footer logo */
        .footer-logo-3d {
          transform: perspective(400px) translateZ(4px);
          box-shadow: 0 4px 12px rgba(34,197,94,0.3);
          transition: transform 0.3s;
        }
        .footer-logo-3d:hover {
          transform: perspective(400px) translateZ(12px) rotateY(12deg);
        }

        /* Ambient 3D light effect on hover */
        @keyframes ambient-light {
          0%, 100% { opacity: 0.4; transform: translateX(-20px) translateY(-20px); }
          50% { opacity: 0.7; transform: translateX(20px) translateY(20px); }
        }
        .ambient-light {
          animation: ambient-light 4s ease-in-out infinite;
          pointer-events: none;
        }

        /* ===== ADVANCED 3D ===== */

        /* Moving specular highlight on tilt cards */
        .card-shine {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 10;
          mix-blend-mode: screen;
        }

        /* Scroll-triggered 3D entrance */
        .scroll-3d {
          opacity: 0;
          transform: perspective(1000px) rotateX(20deg) translateY(60px) scale(0.95);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .scroll-3d.visible-3d {
          opacity: 1;
          transform: perspective(1000px) rotateX(0deg) translateY(0px) scale(1);
        }
        .scroll-3d:nth-child(2) { transition-delay: 0.1s; }
        .scroll-3d:nth-child(3) { transition-delay: 0.2s; }
        .scroll-3d:nth-child(4) { transition-delay: 0.3s; }

        /* 3D DNA / Helix rotating rings */
        @keyframes ring-spin-1 {
          from { transform: perspective(600px) rotateX(60deg) rotateZ(0deg); }
          to   { transform: perspective(600px) rotateX(60deg) rotateZ(360deg); }
        }
        @keyframes ring-spin-2 {
          from { transform: perspective(600px) rotateX(60deg) rotateZ(120deg); }
          to   { transform: perspective(600px) rotateX(60deg) rotateZ(480deg); }
        }
        @keyframes ring-spin-3 {
          from { transform: perspective(600px) rotateX(60deg) rotateZ(240deg); }
          to   { transform: perspective(600px) rotateX(60deg) rotateZ(600deg); }
        }
        .ring-1 { animation: ring-spin-1 8s linear infinite; }
        .ring-2 { animation: ring-spin-2 8s linear infinite; }
        .ring-3 { animation: ring-spin-3 8s linear infinite; }

        .helix-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid;
          opacity: 0.6;
          transform-style: preserve-3d;
        }

        /* 3D floating molecule orb */
        @keyframes molecule-float {
          0%, 100% { transform: perspective(800px) translateZ(0px) rotateY(0deg) translateY(0px); }
          33%       { transform: perspective(800px) translateZ(40px) rotateY(120deg) translateY(-15px); }
          66%       { transform: perspective(800px) translateZ(20px) rotateY(240deg) translateY(8px); }
        }
        .molecule-orb {
          animation: molecule-float 7s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        /* 3D depth parallax layers */
        .parallax-layer-1 { will-change: transform; transition: transform 0.1s linear; }
        .parallax-layer-2 { will-change: transform; transition: transform 0.08s linear; }
        .parallax-layer-3 { will-change: transform; transition: transform 0.05s linear; }

        /* 3D pill / capsule */
        @keyframes pill-spin {
          0%   { transform: perspective(600px) rotateX(15deg) rotateY(0deg) rotateZ(10deg); }
          50%  { transform: perspective(600px) rotateX(-10deg) rotateY(180deg) rotateZ(-5deg); }
          100% { transform: perspective(600px) rotateX(15deg) rotateY(360deg) rotateZ(10deg); }
        }
        .pill-3d {
          animation: pill-spin 10s ease-in-out infinite;
          transform-style: preserve-3d;
          border-radius: 50px;
          background: linear-gradient(135deg, rgba(34,197,94,0.9) 0%, rgba(16,185,129,0.7) 50%, rgba(5,150,105,0.9) 100%);
          box-shadow:
            0 0 30px rgba(34,197,94,0.5),
            inset 0 2px 8px rgba(255,255,255,0.4),
            inset 0 -2px 8px rgba(0,0,0,0.1);
        }

        /* 3D cube decoration */
        @keyframes cube-rotate {
          0%   { transform: perspective(500px) rotateX(0deg)  rotateY(0deg)  rotateZ(0deg); }
          100% { transform: perspective(500px) rotateX(360deg) rotateY(720deg) rotateZ(180deg); }
        }
        .cube-3d {
          animation: cube-rotate 15s linear infinite;
          transform-style: preserve-3d;
        }

        /* 3D grid floor effect */
        .grid-3d-floor {
          background-image:
            linear-gradient(rgba(34,197,94,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          transform: perspective(600px) rotateX(55deg) scale(2.5);
          transform-origin: center bottom;
          mask-image: linear-gradient(to bottom, transparent 0%, black 40%, black 60%, transparent 100%);
        }

        /* Glassmorphism depth border gradient */
        .glass-depth {
          border: 1px solid transparent;
          background:
            linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)) padding-box,
            linear-gradient(135deg, rgba(34,197,94,0.5) 0%, rgba(16,185,129,0.2) 50%, rgba(52,211,153,0.5) 100%) border-box;
          box-shadow:
            0 8px 32px rgba(34,197,94,0.1),
            0 2px 8px rgba(0,0,0,0.04),
            inset 0 1px 0 rgba(255,255,255,0.8);
        }

        /* 3D neon text with extrusion layers */
        .text-3d-extrude {
          text-shadow:
            0 1px 0 #bbf7d0,
            0 2px 0 #86efac,
            0 3px 0 #4ade80,
            0 4px 0 #22c55e,
            0 5px 0 #16a34a,
            0 6px 1px rgba(0,0,0,0.08),
            0 8px 6px rgba(34,197,94,0.2),
            0 12px 20px rgba(34,197,94,0.15),
            0 20px 40px rgba(34,197,94,0.08);
        }

        /* Input focus green */
        input:focus, textarea:focus {
          border-color: #22c55e !important;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.15);
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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark shadow-lg shadow-green-100/50 py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-lg opacity-50"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center logo-3d">
                  <Flask className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  YALA
                </div>
                <div className="text-xs text-green-500 font-medium -mt-1">Healthcare</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Products', 'Solutions', 'Research', 'About'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-green-700 transition-colors relative group font-medium"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button 
                onClick={handleContactClick}
                className="modern-btn px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-green-400/50 transition-all btn-3d"
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
                className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold"
              >
                Contact Us
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh grid-pattern">
        {/* 3D Parallax background blobs — each layer moves at a different depth speed */}
        <div className="parallax-layer-1 absolute top-20 left-10 w-72 h-72 bg-green-400/30 rounded-full blur-3xl float"
          style={{ transform: `translate(${parallax.x * -25}px, ${parallax.y * -25}px)`, animationDelay: '0s' }}></div>
        <div className="parallax-layer-2 absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/25 rounded-full blur-3xl float"
          style={{ transform: `translate(${parallax.x * 40}px, ${parallax.y * 40}px)`, animationDelay: '2s' }}></div>
        <div className="parallax-layer-3 absolute top-1/2 left-1/3 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl float"
          style={{ transform: `translate(${parallax.x * -15}px, ${parallax.y * -15}px)`, animationDelay: '4s' }}></div>

        {/* 3D DNA Helix rings — top-right corner decoration */}
        <div className="absolute top-16 right-16 w-40 h-40 hidden md:block" style={{ perspective: '600px' }}>
          <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
            <div className="helix-ring ring-1" style={{ width: '100%', height: '100%', borderColor: 'rgba(34,197,94,0.5)' }}></div>
            <div className="helix-ring ring-2" style={{ width: '75%', height: '75%', top: '12.5%', left: '12.5%', borderColor: 'rgba(16,185,129,0.4)' }}></div>
            <div className="helix-ring ring-3" style={{ width: '50%', height: '50%', top: '25%', left: '25%', borderColor: 'rgba(52,211,153,0.6)' }}></div>
          </div>
        </div>

        {/* 3D Floating Pill — left side decoration */}
        <div className="parallax-layer-2 absolute left-12 top-1/3 hidden lg:block"
          style={{ transform: `translate(${parallax.x * 30}px, ${parallax.y * 20}px)` }}>
          <div className="pill-3d w-8 h-20 opacity-80"></div>
        </div>

        {/* 3D Rotating Cube — bottom-left decoration */}
        <div className="parallax-layer-1 absolute bottom-24 left-24 hidden lg:block"
          style={{ transform: `translate(${parallax.x * -20}px, ${parallax.y * -10}px)` }}>
          <div className="cube-3d w-10 h-10 rounded-lg border-2 border-green-400/60 bg-gradient-to-br from-green-300/30 to-emerald-400/20 backdrop-blur-sm"></div>
        </div>

        {/* Molecule orb — floating between content layers */}
        <div className="parallax-layer-3 absolute right-24 bottom-32 hidden lg:block"
          style={{ transform: `translate(${parallax.x * 55}px, ${parallax.y * 35}px)` }}>
          <div className="molecule-orb w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400/70 to-teal-500/60"
            style={{ boxShadow: '0 0 30px rgba(34,197,94,0.5), inset 0 2px 6px rgba(255,255,255,0.4)' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="inline-block mb-6">
              <div className="glass px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2 border border-green-200 badge-3d">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent font-semibold">
                ISO Certified · Trusted by 500+ Doctors
              </span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight hero-title-3d">
            <span className="bg-gradient-to-r from-gray-800 via-green-800 to-emerald-700 bg-clip-text text-transparent">
              Trusted Medicines,
            </span>
            <br />
            <span className="text-3d-extrude bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent animate-gradient">
              Healthier Lives
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            YALA Healthcare delivers clinically proven, doctor-recommended pharmaceutical solutions — backed by 25+ years of research excellence and trusted by millions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('products')}
              className="modern-btn group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold text-lg flex items-center space-x-2 hover:shadow-2xl hover:shadow-green-400/50 transition-all btn-3d"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="modern-btn px-8 py-4 bg-white/50 border border-green-200 text-green-700 rounded-full font-semibold text-lg hover:bg-green-50 transition-all"
            >
              Watch Demo
            </button>
          </div>

          {/* Floating stats with specular card-shine */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`glass-depth rounded-2xl p-6 tilt-card card-3d-base stat-3d scene-3d scroll-3d relative`}
                {...tiltStats[index]}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-shine rounded-2xl"></div>
                <div className="text-4xl mb-2 stat-icon">{stat.icon}</div>
                <div className="text-3xl font-display font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent stat-value">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-green-400/60 rounded-full p-1">
            <div className="w-1 h-3 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full mx-auto animate-bounce"></div>
          </div>
        </div>
      </section>



      {/* Products Section - Bento Grid */}
      <section id="products" className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block glass px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
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
                className={`bento-item-${(index % 4) + 1} tilt-card card-3d-base modern-card glass-dark rounded-3xl p-8 relative overflow-hidden group cursor-pointer scroll-3d`}
                {...tiltTiles[index]}
              >
                <div className="card-shine rounded-3xl"></div>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center icon-3d`}>
                      <Flask className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs px-3 py-1 glass rounded-full">{product.category}</span>
                  </div>

                  <h3 className="text-3xl font-display font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-400 mb-6">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-block glass px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Therapeutic Solutions
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
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
                className="modern-card flip-container glass-dark rounded-3xl p-8 text-center group hover:scale-105 transition-transform cursor-pointer"
                onClick={() => scrollToSection('products')}
              >
                <div className="flip-inner">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center pulse-glow`}>
                    {area.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                  <p className="text-gray-500 text-sm">{area.desc}</p>
                </div>
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
                <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Innovation & Research
                </span>
              </div>
              <h2 className="text-5xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-green-800 to-emerald-600 bg-clip-text text-transparent">
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
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleContactClick}
                className="modern-btn px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-green-400/50 transition-all flex items-center space-x-2 btn-3d"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <div className="glass-dark rounded-3xl p-12 relative overflow-hidden research-3d">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="glass rounded-2xl p-6 text-center">
                      <div className="text-4xl font-display font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-2">
                        350+
                      </div>
                      <div className="text-sm text-gray-400">Scientists</div>
                    </div>
                    <div className="glass rounded-2xl p-6 text-center">
                      <div className="text-4xl font-display font-bold bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent mb-2">
                        45+
                      </div>
                      <div className="text-sm text-gray-400">Patents</div>
                    </div>
                    <div className="glass rounded-2xl p-6 text-center col-span-2">
                      <div className="text-4xl font-display font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-2">
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
      <section id="about" className="py-32 relative overflow-hidden bg-[#f8fffe]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-block glass px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                About YALA
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
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
                className="modern-card tilt-card card-3d-base glass-dark rounded-3xl p-8 relative overflow-hidden group"
                {...tiltVals[index]}
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
              className="modern-btn px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-green-400/50 transition-all btn-3d"
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
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/25 animate-gradient"></div>
            
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
                  className="modern-btn px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-green-400/50 btn-3d"
                >
                  Get Started
                </button>
                <button 
                  onClick={handleContactClick}
                  className="modern-btn px-10 py-4 glass border border-green-200 text-green-700 rounded-full font-semibold text-lg"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center footer-logo-3d">
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

          <div className="border-t border-green-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
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
                  className="w-full px-4 py-3 bg-white border border-green-200 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 bg-white border border-green-200 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-white border border-green-200 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-white border border-green-200 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="modern-btn w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-400/50 transition-all"
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
                className="modern-btn flex-1 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-400/50 transition-all"
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