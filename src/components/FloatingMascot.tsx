'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, X, MessageCircle } from 'lucide-react';
import { Language, DICTIONARIES } from '@/data/dictionaries';

interface FloatingMascotProps {
  currentLang: Language;
}

export default function FloatingMascot({ currentLang }: FloatingMascotProps) {
  const [mascotState, setMascotState] = useState<'idle' | 'hover' | 'active'>('idle');
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const dict = DICTIONARIES[currentLang];

  const triggerCelebration = () => {
    setMascotState('active');
    setBubbleOpen(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.85, x: 0.9 },
        colors: ['#06b6d4', '#10b981', '#f59e0b', '#8b5cf6'],
      });
    } catch {
      // Fallback silently if canvas is unavailable
    }

    // Auto-close bubble after 5 seconds
    setTimeout(() => {
      setBubbleOpen(false);
      setMascotState('idle');
    }, 5000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Speech Bubble Toast */}
      {bubbleOpen && (
        <div className="mb-3 max-w-xs p-3.5 rounded-2xl bg-[#0e172a] border border-cyan-500/40 shadow-2xl text-xs text-white relative animate-in fade-in slide-in-from-bottom-2 duration-200">
          <button
            onClick={() => setBubbleOpen(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-start gap-2 pr-4">
            <span className="text-xl">🖐</span>
            <div>
              <p className="font-bold text-cyan-300 font-mono text-[11px] mb-0.5">
                Dimas&apos;s AI Assistant
              </p>
              <p className="text-slate-300 font-sans leading-relaxed">
                {dict.mascot.greeting}
              </p>
            </div>
          </div>
          {/* Speech bubble pointer arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#0e172a] border-r border-b border-cyan-500/40 rotate-45" />
        </div>
      )}

      {/* Interactive Mascot Button */}
      <button
        onClick={triggerCelebration}
        onMouseEnter={() => mascotState !== 'active' && setMascotState('hover')}
        onMouseLeave={() => mascotState !== 'active' && setMascotState('idle')}
        className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0c1427] to-[#162238] border border-cyan-500/30 hover:border-cyan-400 shadow-xl shadow-cyan-950/40 hover:scale-110 active:scale-95 transition-all cursor-pointer"
        aria-label="Interactive portfolio mascot"
      >
        {/* Glow halo */}
        <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 group-hover:bg-cyan-500/20 blur-md transition-all -z-10" />

        {/* Mascot Face / States */}
        <div className="flex flex-col items-center justify-center select-none font-mono">
          {mascotState === 'idle' && (
            <span className="text-base font-bold text-cyan-300 flex items-center animate-pulse">
              z<span className="text-xs text-emerald-300">Z</span>
            </span>
          )}

          {mascotState === 'hover' && (
            <span className="text-lg font-black text-yellow-400 animate-bounce">
              !
            </span>
          )}

          {mascotState === 'active' && (
            <span className="text-lg animate-wiggle">
              🖐
            </span>
          )}
        </div>

        {/* Status indicator dot */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#050811] flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        </span>
      </button>
    </div>
  );
}
