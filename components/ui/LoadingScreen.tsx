'use client';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const steps = [
      { target: 30, delay: 100 },
      { target: 60, delay: 300 },
      { target: 85, delay: 600 },
      { target: 100, delay: 1000 },
    ];

    let timer: ReturnType<typeof setTimeout>;
    let current = 0;

    const runStep = (stepIdx: number) => {
      if (stepIdx >= steps.length) return;
      const { target, delay } = steps[stepIdx];
      timer = setTimeout(() => {
        const interval = setInterval(() => {
          current += 1;
          setProgress(current);
          if (current >= target) {
            clearInterval(interval);
            if (target === 100) {
              setTimeout(() => {
                setDone(true);
                setTimeout(() => setHidden(true), 600);
              }, 300);
            } else {
              runStep(stepIdx + 1);
            }
          }
        }, delay / (target - (stepIdx === 0 ? 0 : steps[stepIdx - 1].target)));
      }, 100);
    };

    runStep(0);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
      style={{
        background: '#050505',
        opacity: done ? 0 : 1,
        transition: 'opacity 0.6s ease',
        pointerEvents: done ? 'none' : 'all',
      }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-x-0 h-[2px]"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0,217,255,0.6), transparent)',
            animation: 'scan 3s linear infinite',
          }}
        />
      </div>

      {/* Logo ring */}
      <div className="relative mb-10 w-28 h-28 flex items-center justify-center">
        <div
          className="absolute inset-0 rounded-full border-2 border-transparent animate-spin-slow"
          style={{
            background: 'linear-gradient(#050505, #050505) padding-box, linear-gradient(135deg, #00D9FF, #8B5CF6, #22D3EE) border-box',
          }}
        />
        <div
          className="absolute inset-3 rounded-full border border-[rgba(0,217,255,0.2)] animate-spin-reverse"
        />
        <div className="relative text-center">
          <div className="text-2xl font-black text-gradient" style={{ fontFamily: 'var(--font-space-grotesk)' }}>B</div>
          <div className="text-[9px] font-mono text-[#00D9FF] opacity-70 tracking-[0.2em]">DEV</div>
        </div>
      </div>

      {/* Loading text */}
      <div className="mb-6 text-center">
        <div className="text-[#00D9FF] font-mono text-sm tracking-[0.25em] mb-1 opacity-80">
          INITIALIZING SYSTEM
        </div>
        <div className="text-[#F8FAFC]/30 font-mono text-xs tracking-widest">
          LOADING PORTFOLIO v2.0
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-64 mb-3">
        <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #00D9FF, #8B5CF6)',
              boxShadow: '0 0 12px rgba(0,217,255,0.8)',
            }}
          />
        </div>
      </div>

      {/* Counter */}
      <div className="font-mono text-xs text-[#00D9FF]/60 tracking-widest">
        {String(progress).padStart(3, '0')}%
      </div>

      {/* Corner decorations */}
      {[
        'top-6 left-6 border-t-2 border-l-2',
        'top-6 right-6 border-t-2 border-r-2',
        'bottom-6 left-6 border-b-2 border-l-2',
        'bottom-6 right-6 border-b-2 border-r-2',
      ].map((cls, i) => (
        <div key={i} className={`absolute w-8 h-8 border-[#00D9FF]/40 ${cls}`} />
      ))}
    </div>
  );
}
