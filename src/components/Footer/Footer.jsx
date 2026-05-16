import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          {/* Logo */}
          <div className="footer-logo" aria-label="vportfolio">
            <span className="footer-logo-dot" aria-hidden="true" />
            vportfolio
          </div>

          {/* Copyright */}
          <p className="footer-copy">
            © {year} Alex Rivera. Built with{' '}
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a>
            {' & '}
            <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a>.
            No frameworks were harmed. 🙂
          </p>

          {/* Back to top */}
          <button
            className="footer-back-top"
            onClick={scrollTop}
            aria-label="Back to top"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
