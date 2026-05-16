import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%';

export default function Hero() {
  const [time, setTime] = useState('');
  const [decodedRole, setDecodedRole] = useState('');
  const targetRole = "Full Stack Developer";

  // Scramble text effect
  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const text = targetRole.split('').map((char, index) => {
        if (char === ' ') return ' ';
        // Unlock characters progressively
        if (frame > index * 3 + 10) return char;
        // Random character
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }).join('');

      setDecodedRole(text);
      if (frame > targetRole.length * 3 + 10) clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // Live Clock
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString('en-US', { hour12: false }));
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  // Generate particles
  const particles = Array.from({ length: 300 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 4 + 2}s`
  }));

  const dusts = Array.from({ length: 20 }).map((_, i) => ({
    id: `d-${i}`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 7 + 8}s`
  }));

  // Magnetic Button
  const handleMagneticMove = (e, ref) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * 0.2; // up to ~8px
    const distanceY = (e.clientY - centerY) * 0.2;
    ref.current.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
  };

  const resetMagnetic = (ref) => {
    if (!ref.current) return;
    ref.current.style.transform = `translate(0px, 0px)`;
  };

  const btn1Ref = useRef(null);

  return (
    <section id="hero" className="hero-section">

      {/* Background SVG Grid */}
      <div className="hero-grid-wrapper">
        <svg className="hero-grid" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(0, 245, 255, 0.15)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Particles */}
      <div className="particles-layer">
        {particles.map(p => (
          <div key={p.id} className="particle-star"
            style={{ top: p.top, left: p.left, animationDelay: p.delay, animationDuration: p.duration }} />
        ))}
        {dusts.map(d => (
          <div key={d.id} className="particle-dust"
            style={{ top: d.top, left: d.left, animationDelay: d.delay, animationDuration: d.duration }} />
        ))}
      </div>

      {/* Ambient Text */}
      <div className="ambient-text">FULL STACK DEV</div>

      {/* Clock */}
      <div className="live-clock">
        <div className="clock-label">LOCAL TIME</div>
        <div className="clock-time">{time}</div>
      </div>

      {/* Scroll Hint */}
      <div className="hero-scroll">
        <div className="scroll-text">SCROLL TO EXPLORE</div>
        <div className="scroll-line"></div>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-name-group">
          <div className="name-line line-1">Muduganti</div>
          <div className="name-line line-2">Venkateshwar</div>
          <div className="name-line line-3">Reddy</div>
        </div>

        <div className="hero-role">{decodedRole}</div>

        <div className="hero-badges">
          <span className="hero-badge badge-1">React.js</span>
          <span className="hero-badge badge-2">Node.js</span>
          <span className="hero-badge badge-3">Express.js</span>
          <span className="hero-badge badge-3" style={{ animationDelay: '0.9s' }}>API Integration</span>
          <span className="hero-badge badge-3" style={{ animationDelay: '1.0s' }}>Postman</span>
          <span className="hero-badge badge-3" style={{ animationDelay: '1.1s' }}>Git</span>
          <span className="hero-badge badge-3" style={{ animationDelay: '1.2s' }}>GitHub</span>
          <span className="hero-badge badge-3" style={{ animationDelay: '1.3s' }}>Firebase</span>
          <span className="hero-badge badge-3" style={{ animationDelay: '1.4s' }}>PayPal Integration's</span>
        </div>

        <div className="hero-ctas">
          <a
            href="#projects"
            ref={btn1Ref}
            className="btn btn-outline hoverable"
            onMouseMove={(e) => handleMagneticMove(e, btn1Ref)}
            onMouseLeave={() => resetMagnetic(btn1Ref)}
          >
            View Projects
          </a>
        </div>
      </div>

    </section>
  );
}
