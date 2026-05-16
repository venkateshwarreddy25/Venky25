import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#timeline' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Progress bar logic
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledRatio = (winScroll / height) * 100;
      setScrolled(scrolledRatio);

      // Scroll Spy
      const sections = NAV_LINKS.map(l => l.href.substring(1));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="main-navbar">
      <div className="nav-container">
        
        <div className="nav-left">
          <div className="online-dot"></div>
          <a href="#hero" className="nav-logo">MVR</a>
        </div>

        {/* Mobile Toggle Checkbox Hack */}
        <input type="checkbox" id="nav-toggle" className="nav-toggle-cb" />
        <label htmlFor="nav-toggle" className="nav-toggle-btn">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>

        <div className="nav-center">
          <ul className="nav-links-list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a 
                  href={href} 
                  className={`nav-link hoverable ${active === href.substring(1) ? 'active' : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-right">
          <div className="open-to-work-badge">
            <span className="pulse-dot"></span>
            OPEN TO WORK
          </div>
        </div>

      </div>
      <div className="nav-progress" style={{ '--prog': `${scrolled}%` }}></div>
    </header>
  );
}
