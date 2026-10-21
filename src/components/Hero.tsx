'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Language, DICTIONARIES } from '@/data/dictionaries';
import { sounds } from '@/lib/sound';
import { ThemeMode } from '@/components/Navbar';

interface HeroProps {
  currentLang: Language;
  theme?: ThemeMode;
}

interface InteractivePill {
  id: string;
  type: 'fullstack' | 'aiResearcher' | 'cumLaude' | 'dimasTag' | 'instructor' | 'code' | 'star';
  x: number;
  y: number;
  rot: number;
  isCircle?: boolean;
}

export default function Hero({ currentLang, theme = 'light' }: HeroProps) {
  const [currentDateStr, setCurrentDateStr] = useState('21 OCT 2026');
  const [typedCode, setTypedCode] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  const dict = DICTIONARIES[currentLang];
  const targetCode = dict.hero.terminalCode;

  const getInitialPills = (): InteractivePill[] => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    if (isMobile) {
      return [
        { id: 'pill-star', type: 'star', x: -115, y: -22, rot: 0, isCircle: true },
        { id: 'pill-fullstack', type: 'fullstack', x: -40, y: -22, rot: 0 },
        { id: 'pill-ai', type: 'aiResearcher', x: 50, y: -22, rot: 0 },
        { id: 'pill-code', type: 'code', x: 120, y: -22, rot: 0, isCircle: true },
        { id: 'pill-informatics', type: 'cumLaude', x: -85, y: 24, rot: 0 },
        { id: 'pill-dimas', type: 'dimasTag', x: 10, y: 24, rot: 0 },
        { id: 'pill-instructor', type: 'instructor', x: 95, y: 24, rot: 0 },
      ];
    }
    return [
      { id: 'pill-star', type: 'star', x: -280, y: -22, rot: 0, isCircle: true },
      { id: 'pill-fullstack', type: 'fullstack', x: -140, y: -22, rot: 0 },
      { id: 'pill-ai', type: 'aiResearcher', x: 50, y: -22, rot: 0 },
      { id: 'pill-code', type: 'code', x: 220, y: -22, rot: 0, isCircle: true },
      { id: 'pill-informatics', type: 'cumLaude', x: -210, y: 24, rot: 0 },
      { id: 'pill-dimas', type: 'dimasTag', x: -10, y: 24, rot: 0 },
      { id: 'pill-instructor', type: 'instructor', x: 195, y: 24, rot: 0 },
    ];
  };

  const [pills, setPills] = useState<InteractivePill[]>(getInitialPills);

  const activeDragIdRef = useRef<string | null>(null);
  const boundaryRef = useRef<HTMLDivElement>(null);

  // Responsive pills layout on resize
  useEffect(() => {
    const handleResize = () => {
      if (!activeDragIdRef.current) {
        setPills(getInitialPills());
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Format date dynamically with current language
  useEffect(() => {
    const now = new Date();
    const formatted = now
      .toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
      .toUpperCase();
    setCurrentDateStr(formatted);
  }, [currentLang]);

  // Terminal typewriter typing effect
  useEffect(() => {
    setTypedCode('');
    setIsTypingDone(false);

    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeNextChar = () => {
      if (currentIndex < targetCode.length) {
        currentIndex++;
        setTypedCode(targetCode.slice(0, currentIndex));
        const char = targetCode[currentIndex - 1];
        const delay =
          char === ';' || char === '{' || char === '}' || char === ','
            ? 110
            : 36;
        timeoutId = setTimeout(typeNextChar, delay);
      } else {
        setIsTypingDone(true);
      }
    };

    timeoutId = setTimeout(typeNextChar, 250);
    return () => clearTimeout(timeoutId);
  }, [targetCode]);

  // Smooth collision displacement so pills never overlap or cover each other
  const handlePillDrag = (id: string, info: PanInfo) => {
    setPills((prevPills) => {
      const activeIdx = prevPills.findIndex((p) => p.id === id);
      if (activeIdx === -1) return prevPills;

      // Restrict dragged tilt strictly between -12° and +12°
      const dragTilt = Math.max(-12, Math.min(12, info.delta.x * 1.4));

      const newX = prevPills[activeIdx].x + info.delta.x;
      const newY = prevPills[activeIdx].y + info.delta.y;

      const updated = [...prevPills];
      updated[activeIdx] = {
        ...updated[activeIdx],
        x: newX,
        y: newY,
        rot: dragTilt,
      };

      // Elliptical collision detection tailored to pill width & height
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
      const maxX = isMobile ? 120 : 380;
      const maxY = 50;

      for (let i = 0; i < updated.length; i++) {
        if (i === activeIdx) continue;

        const dx = updated[i].x - newX;
        const dy = updated[i].y - newY;

        // Pills are wider than they are tall (~160px vs ~45px)
        const radiusX = updated[i].isCircle ? 85 : 135;
        const radiusY = 52;

        const normDist = Math.hypot(dx / radiusX, dy / radiusY);

        if (normDist < 1.0 && normDist > 0.01) {
          const pushDepth = (1.0 - normDist);
          // Solid, smooth push displacement so other pill actively slides aside
          const pushX = (dx / (Math.abs(dx) + 0.01)) * pushDepth * radiusX * 0.65;
          const pushY = (dy / (Math.abs(dy) + 0.01)) * pushDepth * radiusY * 0.65;

          const clampedX = Math.max(-maxX, Math.min(maxX, updated[i].x + pushX));
          const clampedY = Math.max(-maxY, Math.min(maxY, updated[i].y + pushY));

          // Subtle tilt (-10° to +10° max)
          const pushTilt = Math.max(-10, Math.min(10, pushX * 0.8));

          updated[i] = {
            ...updated[i],
            x: clampedX,
            y: clampedY,
            rot: pushTilt,
          };
        }
      }

      return updated;
    });
  };

  // Leisurely, relaxed slow scroll all the way down to the bottom of the page
  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    sounds.playClick();

    // Calculate the absolute bottom of the document
    const targetY = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight
    );
    const startY = window.pageYOffset || document.documentElement.scrollTop;
    const distance = targetY - startY;
    // 5.2s gentle, relaxed glide matching the slow comfortable scroll to about
    const duration = 5200;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    let animFrame: number;

    const cancelOnUserScroll = () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('wheel', cancelOnUserScroll);
      window.removeEventListener('touchmove', cancelOnUserScroll);
    };

    window.addEventListener('wheel', cancelOnUserScroll, { passive: true });
    window.addEventListener('touchmove', cancelOnUserScroll, { passive: true });

    const step = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutQuad(progress);

      window.scrollTo(0, startY + distance * ease);

      if (elapsed < duration) {
        animFrame = requestAnimationFrame(step);
      } else {
        window.removeEventListener('wheel', cancelOnUserScroll);
        window.removeEventListener('touchmove', cancelOnUserScroll);
      }
    };

    animFrame = requestAnimationFrame(step);
  };

  const renderPillContent = (pill: InteractivePill) => {
    switch (pill.type) {
      case 'fullstack':
        return dict.hero.pills.fullstack;
      case 'aiResearcher':
        return dict.hero.pills.aiResearcher;
      case 'cumLaude':
        return dict.hero.pills.cumLaude;
      case 'dimasTag':
        return (
          <span className="flex items-center gap-1">
            <span>{dict.hero.pills.dimasTag}</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
          </span>
        );
      case 'instructor':
        return dict.hero.pills.instructor;
      case 'code':
        return '</>';
      case 'star':
        return '✱';
      default:
        return null;
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-0 bg-white dark:bg-[#070b14] text-black dark:text-white transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-12 sm:pb-16 flex flex-col items-center relative z-10">
        {/* Invisible Boundary Playground for Draggable Badges */}
        <div
          ref={boundaryRef}
          className="w-full max-w-4xl relative h-32 sm:h-36 flex items-center justify-center select-none z-30 mb-4 sm:mb-6 overflow-hidden sm:overflow-visible"
        >

          {pills.map((pill) => {
            const isCircle = pill.isCircle;
            const isCode = pill.type === 'code';

            return (
              <motion.div
                key={pill.id}
                drag
                dragConstraints={boundaryRef}
                dragMomentum={false}
                dragElastic={0.08}
                animate={{
                  x: pill.x,
                  y: pill.y,
                  rotate: pill.rot,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 160,
                  damping: 20,
                  mass: 0.8,
                }}
                whileHover={{ scale: 1.08, cursor: 'grab', zIndex: 40 }}
                whileDrag={{
                  scale: 1.15,
                  zIndex: 60,
                  cursor: 'grabbing',
                  boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
                }}
                onDragStart={() => {
                  activeDragIdRef.current = pill.id;
                  sounds.playClick();
                }}
                onDrag={(event, info) => handlePillDrag(pill.id, info)}
                onDragEnd={() => {
                  activeDragIdRef.current = null;
                  sounds.playClick();
                }}
                className={`absolute touch-none select-none transition-shadow ${
                  theme === 'spiderman'
                    ? isCircle
                      ? isCode
                        ? 'w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-red-600 to-black text-white border-2 border-white flex items-center justify-center font-mono font-bold text-[10px] sm:text-xs shadow-[3px_3px_0px_0px_#0284c7]'
                        : 'w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-sky-600 text-white border-2 border-white flex items-center justify-center font-black text-sm sm:text-base shadow-[3px_3px_0px_0px_#e23636]'
                      : pill.id === 'pill-fullstack' || pill.id === 'pill-informatics'
                      ? 'px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border-2 border-white font-extrabold text-[11px] sm:text-xs md:text-sm uppercase tracking-wide bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-[3px_3px_0px_0px_#0284c7] whitespace-nowrap active:scale-95'
                      : pill.id === 'pill-ai' || pill.id === 'pill-dimas'
                      ? 'px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border-2 border-white font-extrabold text-[11px] sm:text-xs md:text-sm uppercase tracking-wide bg-gradient-to-r from-sky-600 to-blue-700 text-white shadow-[3px_3px_0px_0px_#e23636] whitespace-nowrap active:scale-95'
                      : 'px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border-2 border-red-500 font-extrabold text-[11px] sm:text-xs md:text-sm uppercase tracking-wide bg-slate-950 text-white shadow-[3px_3px_0px_0px_#ef4444] whitespace-nowrap active:scale-95'
                    : isCircle
                    ? isCode
                      ? 'w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white flex items-center justify-center font-mono font-bold text-[10px] sm:text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]'
                      : 'w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-[#0c121e] text-black dark:text-white border-2 border-black dark:border-white flex items-center justify-center font-black text-sm sm:text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]'
                    : 'px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border-2 border-black dark:border-white font-extrabold text-[11px] sm:text-xs md:text-sm uppercase tracking-wide bg-white dark:bg-[#0c121e] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)] whitespace-nowrap active:scale-95'
                }`}
              >
                {renderPillContent(pill)}
              </motion.div>
            );
          })}
        </div>

        {/* Giant Hero Title: DIMAS ARBI ARDIAN */}
        <h1 className="w-full text-center font-black tracking-tighter text-4xl sm:text-7xl md:text-8xl lg:text-[130px] xl:text-[150px] leading-[0.92] select-none text-slate-950 dark:text-white uppercase transition-all relative z-10 break-words">
          {dict.hero.titleFirst} {dict.hero.titleLast}
        </h1>

        {/* Live Typewriter Monospace Terminal Code */}
        <div className="mt-6 sm:mt-8 min-h-[52px] sm:min-h-[48px] max-w-4xl text-center font-mono text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed px-2 relative z-10">
          <span>{typedCode}</span>
          <span
            className={`inline-block w-2 text-cyan-600 dark:text-cyan-400 font-bold ml-0.5 ${
              isTypingDone ? 'animate-cursor-blink' : ''
            }`}
          >
            ▋
          </span>
        </div>
      </div>

      {/* Bottom Grid Status Bar (4 Border-Divided Columns) */}
      <div className="w-full border-t-2 border-b-2 border-black dark:border-white/20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 font-mono text-[11px] sm:text-xs uppercase font-bold tracking-wider relative z-20">
        {/* Cell 1: Open to Work */}
        <div className="p-3.5 sm:p-4 border-b sm:border-b-0 sm:border-r-2 border-black dark:border-white/20 flex items-center justify-start gap-2.5">
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-slate-900 dark:text-slate-100">{dict.nav.statusOpen}</span>
        </div>

        {/* Cell 2: Location */}
        <div className="p-3.5 sm:p-4 border-b sm:border-b-0 md:border-r-2 border-black dark:border-white/20 flex items-center justify-start">
          <span className="text-slate-700 dark:text-slate-300 font-bold">
            {dict.nav.basedIn}
          </span>
        </div>

        {/* Cell 3: Today Date */}
        <div className="p-3.5 sm:p-4 border-b sm:border-b-0 sm:border-r-2 border-black dark:border-white/20 flex items-center justify-start">
          <span className="text-slate-600 dark:text-slate-400">
            {dict.nav.today}: <strong className="text-black dark:text-white">{currentDateStr}</strong>
          </span>
        </div>

        {/* Cell 4: Scroll Down Indicator (Smooth Glide All The Way to Bottom of Page) */}
        <div className="p-3.5 sm:p-4 flex items-center justify-between">
          <a
            href="#footer"
            onClick={handleScrollDown}
            className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer group"
          >
            <span className="group-hover:underline">{dict.nav.scrollDown}</span>
            <ArrowDownRight className="w-4 h-4 stroke-[2.5] group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
