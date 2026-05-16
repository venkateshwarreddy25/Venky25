import { useIntersection } from '../../hooks/useIntersection';
import './Contact.css';

export default function Contact() {
  const [ref, isIntersecting] = useIntersection({ threshold: 0.5 });

  return (
    <section id="contact" className="contact-sci-section">
      
      {/* Decorative Watermark */}
      <div className="watermark-text" aria-hidden="true">
        LET'S BUILD
      </div>

      <div className="container contact-container" ref={ref}>
        <h2 className="section-title">Get In Touch</h2>
        
        <a href="mailto:mvredddy052005@gmail.com" className="primary-email">
          mvredddy052005@gmail.com
        </a>

        <div className="contact-divider"></div>

        <div className="info-grid">
          <div className="info-col">
            <div className="info-label">PHONE</div>
            <div className="info-value">+91-8317527369</div>
          </div>
          <div className="info-col">
            <div className="info-label">LOCATION</div>
            <div className="info-value">Hyderabad, India</div>
          </div>
          <div className="info-col">
            <div className="info-label">STATUS</div>
            <div className="info-value">Open to Opportunities</div>
          </div>
        </div>

        <div className="social-squares">
          <a href="https://github.com/venkateshwarreddy25" target="_blank" rel="noreferrer" className="social-sq hoverable" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://linkedin.com/in/muduganti-venkateshwar-reddy" target="_blank" rel="noreferrer" className="social-sq hoverable" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="mailto:mvredddy052005@gmail.com" className="social-sq hoverable" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>

        <a href="mailto:mvredddy052005@gmail.com" className="final-cta-btn hoverable">
          Say Hello →
        </a>

      </div>
    </section>
  );
}
