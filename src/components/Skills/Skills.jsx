import { useIntersection } from '../../hooks/useIntersection';
import './Skills.css';

const SKILLS_DATA = {
  inner: ['JavaScript', 'Python', 'C'],
  middle: ['React.js', 'Node.js', 'Express.js', 'Firebase', 'MongoDB', 'SQL', 'HTML5', 'CSS3'],
  outer: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'PayPal API', 'JWT']
};

const ALL_SKILLS = [
  ...SKILLS_DATA.inner, 
  ...SKILLS_DATA.middle, 
  ...SKILLS_DATA.outer
];

export default function Skills() {
  const [ref, isIntersecting] = useIntersection({ threshold: 0.1 });

  return (
    <section id="skills" className="skills-sci-section">
      <h2 className="section-title">Tech Stack</h2>

      <div className="skills-zone-a">
        <div className="orbit-system">
          
          {/* Outer Ring */}
          <div className="orbit-ring-3d ring-outer-3d">
            {SKILLS_DATA.outer.map((skill, index) => {
              const angle = (360 / SKILLS_DATA.outer.length) * index;
              return (
                <div key={skill} className="orbit-node" style={{ transform: `rotate(${angle}deg) translateX(300px) rotate(-${angle}deg)` }}>
                  <div className="node-pill spin-outer">{skill}</div>
                </div>
              );
            })}
          </div>

          {/* Middle Ring */}
          <div className="orbit-ring-3d ring-middle-3d">
            {SKILLS_DATA.middle.map((skill, index) => {
              const angle = (360 / SKILLS_DATA.middle.length) * index;
              return (
                <div key={skill} className="orbit-node" style={{ transform: `rotate(${angle}deg) translateX(210px) rotate(-${angle}deg)` }}>
                  <div className="node-pill spin-middle">{skill}</div>
                </div>
              );
            })}
          </div>

          {/* Inner Ring */}
          <div className="orbit-ring-3d ring-inner-3d">
            {SKILLS_DATA.inner.map((skill, index) => {
              const angle = (360 / SKILLS_DATA.inner.length) * index;
              return (
                <div key={skill} className="orbit-node" style={{ transform: `rotate(${angle}deg) translateX(120px) rotate(-${angle}deg)` }}>
                  <div className="node-pill spin-inner">{skill}</div>
                </div>
              );
            })}
          </div>

          <div className="core-reactor">CORE</div>

        </div>
      </div>

      <div className="skills-zone-b" ref={ref}>
        <div className="hex-grid">
          {ALL_SKILLS.map((skill, index) => (
            <div 
              key={skill} 
              className={`hex-cell ${isIntersecting ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className="hex-inner">
                <span className="hex-icon">{skill.substring(0, 2).toUpperCase()}</span>
                <span className="hex-name">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
