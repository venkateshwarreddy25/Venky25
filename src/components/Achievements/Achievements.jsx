import { useIntersection } from '../../hooks/useIntersection';
import './Achievements.css';

const DATA = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    title: "Algorithms & Data Structures",
    desc: "Solving problems on LeetCode, GeeksforGeeks, and other platforms, focusing on optimal time and space complexity."
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
    title: "Hackathon Competitor",
    desc: "Built innovative solutions under time pressure in team environments"
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5a5.4 5.4 0 0 0 1-4.66l-2.6-2.6a5.4 5.4 0 0 0-4.66 1l-.5.5Z"></path>
        <path d="m3.5 11.5 8-8"></path>
        <path d="m15 5 4 4"></path>
        <path d="M12 15l-3-3a5.4 5.4 0 0 1-1-4.66L10.6 4.74a1.8 1.8 0 0 1 2.53 0l6.13 6.13a1.8 1.8 0 0 1 0 2.53l-2.6 2.6a5.4 5.4 0 0 1-4.66 1Z"></path>
      </svg>
    ),
    title: "5 Full-Stack Apps Shipped",
    desc: "From collaborative tools to AI interview platforms — all production-ready"
  }
];

export default function Achievements() {
  const [ref, isIntersecting] = useIntersection({ threshold: 0.2 });

  return (
    <section id="achievements" className="achievements-section">
      <h2 className="section-title">Achievements</h2>
      
      <div className="trophy-container" ref={ref}>
        {DATA.map((item, index) => (
          <div 
            key={item.id} 
            className={`trophy-card ${isIntersecting ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 1}s` }} // Levitate stagger
          >
            <div className="trophy-icon">{item.icon}</div>
            <h3 className="trophy-title">{item.title}</h3>
            <p className="trophy-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="stats-ticker-wrapper">
        <div className="stats-ticker-track">
          <div className="stats-ticker-content">
            JavaScript · React.js · Node.js · Firebase · MongoDB · Express.js · PayPal API · JWT Auth · REST APIs · Real-time Systems · 19 Repos · 5 Apps · 8.2 CGPA · B.Tech CSE ·&nbsp;
          </div>
          <div className="stats-ticker-content" aria-hidden="true">
            JavaScript · React.js · Node.js · Firebase · MongoDB · Express.js · PayPal API · JWT Auth · REST APIs · Real-time Systems · 19 Repos · 5 Apps · 8.2 CGPA · B.Tech CSE ·&nbsp;
          </div>
        </div>
      </div>
    </section>
  );
}
