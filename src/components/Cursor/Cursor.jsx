import { useState, useEffect } from 'react';
import './Cursor.css';

export default function Cursor() {
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth <= 768) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setDotPos({ x: targetX, y: targetY });
    };

    let animationFrameId;
    const render = () => {
      setRingPos((prev) => {
        const dx = targetX - prev.x;
        const dy = targetY - prev.y;
        return {
          x: prev.x + dx * 0.12,
          y: prev.y + dy * 0.12,
        };
      });
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    animationFrameId = requestAnimationFrame(render);

    const checkHover = () => {
      const hoveredElements = document.querySelectorAll('a:hover, button:hover, .hoverable:hover');
      setIsHovering(hoveredElements.length > 0);
    };
    
    // Efficiently checking hover state for interactive elements
    const hoverInterval = setInterval(checkHover, 50);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearInterval(hoverInterval);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <div className="cursor-wrapper">
      <div 
        className="cursor-dot" 
        style={{ transform: `translate(${dotPos.x}px, ${dotPos.y}px)` }}
      />
      <div 
        className={`cursor-ring ${isHovering ? 'hovering' : ''}`} 
        style={{ transform: `translate(${ringPos.x}px, ${ringPos.y}px)` }}
      />
    </div>
  );
}
