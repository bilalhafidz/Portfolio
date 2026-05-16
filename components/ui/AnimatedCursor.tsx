'use client';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    const handleHover = () => setHovering(true);
    const handleUnhover = () => setHovering(false);

    document.addEventListener('mousemove', move);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const interactables = document.querySelectorAll('a, button, [role="button"], input, textarea, select, label');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ willChange: 'transform' }}
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            clicking ? 'w-3 h-3 bg-white' : hovering ? 'w-2 h-2 bg-[#22D3EE]' : 'w-2 h-2 bg-[#00D9FF]'
          }`}
          style={{
            transform: 'translate(-50%, -50%)',
            boxShadow: hovering
              ? '0 0 12px rgba(34,211,238,0.9)'
              : '0 0 8px rgba(0,217,255,0.8)',
          }}
        />
      </div>
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ willChange: 'transform' }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            hovering
              ? 'w-12 h-12 border-[#22D3EE] opacity-80'
              : clicking
              ? 'w-8 h-8 border-white opacity-90'
              : 'w-9 h-9 border-[#00D9FF] opacity-50'
          }`}
          style={{
            transform: 'translate(-50%, -50%)',
            boxShadow: hovering
              ? '0 0 16px rgba(34,211,238,0.3), inset 0 0 16px rgba(34,211,238,0.05)'
              : '0 0 12px rgba(0,217,255,0.2)',
          }}
        />
      </div>
    </>
  );
}
