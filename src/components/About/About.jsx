import { useEffect, useState, useRef } from 'react';
import { useIntersection } from '../../hooks/useIntersection';
import './About.css';

const BIO_TEXT = "I'm Venkateshwar Reddy — a Full Stack Developer from Sri Indu Institute of Engineering and Technology, pursuing B.Tech in Computer Science (Expected May 2027, CGPA 8.2). I specialize in building production-ready web applications using React.js, Node.js, Express.js, Firebase, Git, and GitHub. From real-time collaborative drawing tools to API integrations using Postman, and deployment with secure PayPal integrations via API keys, I love turning complex problems into elegant digital experiences. Currently diving deep into Cloud Computing and DevOps while maintaining a strong algorithmic foundation by solving problems on LeetCode, GeeksforGeeks, and other platforms, focusing on efficient time and space complexity.";

const SKILLS_DATA = [
  { name: 'React.js', percent: 95 },
  { name: 'Node.js', percent: 88 },
  { name: 'Express.js', percent: 80 },
  { name: 'Firebase', percent: 85 },
  { name: 'MongoDB', percent: 78 }
];

export default function About() {
  const [ref, isIntersecting] = useIntersection({ threshold: 0.2 });
  const bioWords = BIO_TEXT.split(' ');

  return (
    <section id="about" className="about-section">
      
      {/* Marquee Ticker */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <div className="marquee-content">
            FULL STACK DEVELOPER · REACT · NODE.JS · EXPRESS.JS · FIREBASE · MONGODB · REST APIs · PROBLEM SOLVER · B.TECH CSE · SRI INDU INSTITUTE ·&nbsp;
          </div>
          <div className="marquee-content" aria-hidden="true">
            FULL STACK DEVELOPER · REACT · NODE.JS · EXPRESS.JS · FIREBASE · MONGODB · REST APIs · PROBLEM SOLVER · B.TECH CSE · SRI INDU INSTITUTE ·&nbsp;
          </div>
        </div>
      </div>

      <div className="container about-container" ref={ref}>
        
        {/* Left Column */}
        <div className="about-left">
          
          {/* Avatar & Orbits */}
          <div className="avatar-system">
            <div className="avatar-circle">MVR</div>
            <div className="orbit-ring ring-1"><div className="orbit-dot"></div></div>
            <div className="orbit-ring ring-2"><div className="orbit-dot"></div></div>
            <div className="orbit-ring ring-3"><div className="orbit-dot"></div></div>
          </div>

          {/* Skill Bars */}
          <div className="skill-bars">
            {SKILLS_DATA.map((skill, i) => (
              <div key={skill.name} className="skill-row">
                <div className="skill-label">{skill.name}</div>
                <div className="skill-track">
                  <div 
                    className="skill-fill" 
                    style={{ 
                      width: isIntersecting ? `${skill.percent}%` : '0%',
                      transitionDelay: `${i * 0.1}s` 
                    }}
                  ></div>
                </div>
                <div className="skill-percent">{skill.percent}%</div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column */}
        <div className="about-right">
          <h2 className="section-title text-left">About Me</h2>
          
          <div className="bio-paragraph">
            {bioWords.map((word, index) => (
              <span 
                key={index} 
                className={`bio-word ${isIntersecting ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.03}s` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </div>

          {/* 2x2 Stats Grid */}
          <div className="stats-grid">
            <StatCard value={8.2} label="CGPA / 10" isDecimal isIntersecting={isIntersecting} />
            <StatCard value={19} label="GitHub Repos" isIntersecting={isIntersecting} />
            <StatCard value={5} label="Apps Shipped" isIntersecting={isIntersecting} />
            <StatCard value={3} suffix="+" label="DSA Platforms" isIntersecting={isIntersecting} />
          </div>

          {/* Currently Learning */}
          <div className="learning-row">
            <div className="learning-label">Currently Learning:</div>
            <div className="learning-badges">
              <span className="learning-badge">
                <span className="live-dot"></span> Cloud Computing
              </span>
              <span className="learning-badge">
                <span className="live-dot"></span> DevOps
              </span>
              <span className="learning-badge">
                <span className="live-dot"></span> Gen AI
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, suffix = '', isDecimal = false, isIntersecting }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isIntersecting) {
      let start = 0;
      const duration = 2000;
      const step = value / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [isIntersecting, value]);

  return (
    <div className="stat-card">
      <div className="stat-value">
        {isDecimal ? count.toFixed(1) : Math.floor(count)}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
