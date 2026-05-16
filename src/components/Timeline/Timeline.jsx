import { useIntersection } from '../../hooks/useIntersection';
import './Timeline.css';

const TIMELINE_DATA = [
  { year: "2023", title: "Started B.Tech at Sri Indu Institute", desc: "Began journey in Computer Science and Engineering." },
  { year: "Mar 2024", title: "Shipped mockmate-ai & HomeSphere", desc: "Built an AI-powered mock interview platform and a real estate web app with Firebase & PayPal integration." },
  { year: "Apr 2024", title: "Shipped TastyTrail & Heal-Connect", desc: "Developed a full-stack food ordering platform and a healthcare interface with strict TypeScript architecture." },
  { year: "Recent", title: "Built DrawSphere-Live", desc: "Engineered a real-time collaborative whiteboard app with live multi-user canvas synchronization." },
  { year: "May 2027", title: "Expected Graduation", desc: "B.Tech Computer Science and Engineering." }
];

export default function Timeline() {
  return (
    <section id="timeline" className="timeline-section">
      <h2 className="section-title">Journey</h2>
      
      <div className="timeline-container">
        <div className="timeline-center-line"></div>
        
        {TIMELINE_DATA.map((item, index) => {
          const isLeft = index % 2 === 0;
          return <TimelineCard key={item.year} item={item} isLeft={isLeft} index={index} />;
        })}
      </div>
    </section>
  );
}

function TimelineCard({ item, isLeft, index }) {
  const [ref, isIntersecting] = useIntersection({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className={`timeline-row ${isLeft ? 'row-left' : 'row-right'} ${isIntersecting ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="timeline-card">
        <div className="timeline-year">{item.year}</div>
        <h3 className="timeline-card-title">{item.title}</h3>
        <p className="timeline-card-desc">{item.desc}</p>
      </div>
      <div className="timeline-connector"></div>
    </div>
  );
}
