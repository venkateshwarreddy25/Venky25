import { useState, useEffect } from 'react';
import './Preloader.css';

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('converge'); // converge -> hold -> glitch -> shatter -> done

  useEffect(() => {
    // Sequence the preloader animations
    const seq1 = setTimeout(() => setPhase('hold'), 1200); // Wait for converge
    const seq2 = setTimeout(() => setPhase('glitch'), 1700); // 0.5s hold
    const seq3 = setTimeout(() => setPhase('shatter'), 2200); // Glitch for 0.5s
    const seq4 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 3500); // Wait for shatter to finish

    return () => {
      clearTimeout(seq1);
      clearTimeout(seq2);
      clearTimeout(seq3);
      clearTimeout(seq4);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div className="preloader-overlay">
      {phase !== 'shatter' ? (
        <div className={`preloader-text-wrapper ${phase}`}>
          <span className="letter letter-m">M</span>
          <span className="letter letter-v">V</span>
          <span className="letter letter-r">R</span>
        </div>
      ) : (
        <div className="shatter-container">
           {/* Generate 12 shattered fragments */}
           {Array.from({ length: 12 }).map((_, i) => (
             <div 
               key={i} 
               className={`fragment fragment-${i}`} 
               style={{ animationDelay: `${i * 25}ms` }}
             >
               MVR
             </div>
           ))}
        </div>
      )}
    </div>
  );
}
