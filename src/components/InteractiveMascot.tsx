'use client';

import React, { useState, useEffect, useRef } from 'react';
import { sounds } from '@/lib/sound';

interface MascotCommonState {
  posX: number;
  direction: 'left' | 'right';
  isWalking: boolean;
  isScared: boolean;
  isDizzy: boolean;
  speed: number;
  bubbleText: string;
  showBubble: boolean;
}

// -------------------------------------------------------------
// MASCOT 1: ARTICULATED CHIBI SPIDEY
// -------------------------------------------------------------
function SpideyCharacter({
  state,
  onClick,
  mascotRef,
}: {
  state: MascotCommonState;
  onClick: () => void;
  mascotRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={mascotRef}
      onClick={onClick}
      style={{
        transform: `translateX(${state.posX}px)`,
        transition: state.isDizzy
          ? 'none'
          : state.isScared
          ? 'transform 0.28s cubic-bezier(0.25, 1, 0.5, 1)'
          : 'transform 0.12s linear',
      }}
      className="fixed bottom-0.5 sm:bottom-1 left-0 z-40 select-none cursor-pointer group flex flex-col items-center pointer-events-auto"
      title="Spidey"
    >
      {/* Speech Bubble - Compact & Non-Obstructive on Mobile */}
      {state.showBubble && (
        <div className="absolute -top-7 sm:-top-11 left-1/2 -translate-x-1/2 pointer-events-none animate-in fade-in zoom-in-95 duration-200 z-50">
          <div className="relative px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg sm:rounded-xl bg-white text-black border border-black sm:border-2 font-mono text-[9px] sm:text-[11px] font-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1 max-w-[150px] sm:max-w-none text-center">
            <span className="truncate sm:whitespace-nowrap">{state.bubbleText}</span>
            <div className="absolute -bottom-1 sm:-bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white border-r border-b sm:border-r-2 sm:border-b-2 border-black rotate-45" />
          </div>
        </div>
      )}

      {/* Spidey Character Container */}
      <div
        className={`relative transition-transform duration-200 ${
          state.isDizzy
            ? 'animate-spin'
            : state.isScared
            ? 'scale-110 -translate-y-1 sm:-translate-y-2'
            : 'hover:scale-110 -translate-y-0.5'
        }`}
      >
        {/* Dizzy Emojis */}
        {state.isDizzy && (
          <div className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 font-black text-amber-500 font-mono text-xs sm:text-sm animate-bounce whitespace-nowrap z-50 pointer-events-none">
            🕸️ ? 🕸️
          </div>
        )}

        {/* Articulated Chibi Spidey Character - Scaled down on Mobile (w-12 h-16 = 48x64px vs w-20 h-28 on desktop) */}
        <div
          style={{
            transform: state.direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
          }}
          className={`relative w-12 h-16 sm:w-20 sm:h-28 md:w-22 md:h-30 transition-transform duration-150 filter drop-shadow-[2px_5px_8px_rgba(0,0,0,0.35)] select-none pointer-events-none ${
            state.isWalking && !state.isDizzy ? 'animate-bounce-subtle' : ''
          }`}
        >
          {/* Left Leg */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/spidey_articulated/leg_left.png"
            alt="Spidey Left Leg"
            className={`absolute inset-0 w-full h-full object-contain ${
              state.isScared
                ? 'animate-spidey-scurry-l'
                : state.isWalking && !state.isDizzy
                ? 'animate-spidey-leg-l'
                : ''
            }`}
          />

          {/* Right Leg */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/spidey_articulated/leg_right.png"
            alt="Spidey Right Leg"
            className={`absolute inset-0 w-full h-full object-contain ${
              state.isScared
                ? 'animate-spidey-scurry-r'
                : state.isWalking && !state.isDizzy
                ? 'animate-spidey-leg-r'
                : ''
            }`}
          />

          {/* Torso & Body */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/spidey_articulated/body.png"
            alt="Spidey Body"
            className="absolute inset-0 w-full h-full object-contain"
          />

          {/* Waving Arm & Hand */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/spidey_articulated/arm.png"
            alt="Spidey Waving Arm"
            className={`absolute inset-0 w-full h-full object-contain ${
              state.isScared
                ? 'animate-spidey-arm-fast'
                : !state.isDizzy
                ? 'animate-spidey-arm'
                : ''
            }`}
          />

          {/* Head */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/spidey_articulated/head.png"
            alt="Spidey Head"
            className={`absolute inset-0 w-full h-full object-contain ${
              state.isScared
                ? 'animate-spidey-head-fast'
                : !state.isDizzy
                ? 'animate-spidey-head'
                : ''
            }`}
          />
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// MASCOT 2: CUTE 8-LEGGED CRAWLER SPIDER ("Laba-laba")
// -------------------------------------------------------------
function SpiderCrawlerCharacter({
  state,
  onClick,
  mascotRef,
}: {
  state: MascotCommonState;
  onClick: () => void;
  mascotRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={mascotRef}
      onClick={onClick}
      style={{
        transform: `translateX(${state.posX}px)`,
        transition: state.isDizzy
          ? 'none'
          : state.isScared
          ? 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)'
          : 'transform 0.12s linear',
      }}
      className="fixed bottom-2 left-0 z-40 select-none cursor-pointer group hidden md:flex flex-col items-center pointer-events-auto"
      title="Cute Crawler Spider"
    >
      {/* Speech Bubble */}
      {state.showBubble && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap animate-in fade-in zoom-in-95 duration-200 z-50">
          <div className="relative px-2.5 py-1 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-black border-2 border-red-500 font-mono text-[10px] font-black shadow-[2px_2px_0px_0px_#e23636] flex items-center gap-1.5">
            <span>{state.bubbleText}</span>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-white border-r-2 border-b-2 border-red-500 rotate-45" />
          </div>
        </div>
      )}

      {/* Spider Crawler Body & 8 Animated Legs */}
      <div
        className={`relative transition-transform duration-200 ${
          state.isDizzy
            ? 'animate-spin'
            : state.isScared
            ? 'scale-115 -translate-y-1.5'
            : 'hover:scale-110'
        }`}
      >
        <div
          style={{
            transform: state.direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
          }}
          className="relative w-16 h-12 sm:w-20 sm:h-14 flex items-center justify-center filter drop-shadow-[1px_3px_5px_rgba(0,0,0,0.3)]"
        >
          {/* Left Side 4 Legs */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-1 z-0 -translate-x-1">
            {/* Leg 1 */}
            <div
              className={`w-4 sm:w-5 h-1 bg-black dark:bg-white rounded-full border border-black/40 ${
                state.isScared ? 'animate-spider-leg-a-fast' : 'animate-spider-leg-a'
              }`}
              style={{ transformOrigin: 'right center' }}
            />
            {/* Leg 2 */}
            <div
              className={`w-4.5 sm:w-5.5 h-1 bg-black dark:bg-white rounded-full border border-black/40 ${
                state.isScared ? 'animate-spider-leg-b-fast' : 'animate-spider-leg-b'
              }`}
              style={{ transformOrigin: 'right center' }}
            />
            {/* Leg 3 */}
            <div
              className={`w-4.5 sm:w-5.5 h-1 bg-black dark:bg-white rounded-full border border-black/40 ${
                state.isScared ? 'animate-spider-leg-a-fast' : 'animate-spider-leg-a'
              }`}
              style={{ transformOrigin: 'right center' }}
            />
            {/* Leg 4 */}
            <div
              className={`w-4 sm:w-5 h-1 bg-black dark:bg-white rounded-full border border-black/40 ${
                state.isScared ? 'animate-spider-leg-b-fast' : 'animate-spider-leg-b'
              }`}
              style={{ transformOrigin: 'right center' }}
            />
          </div>

          {/* Central Rounded Spider Body */}
          <div className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-red-600 via-slate-950 to-black dark:from-red-500 dark:via-slate-900 dark:to-black border-2 border-black dark:border-white/80 shadow-md flex items-center justify-center">
            {/* Expressive Spider Eyes */}
            <div className="flex items-center gap-1.5">
              {/* Left Eye */}
              <div className="w-2.5 h-2.5 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              </div>
              {/* Right Eye */}
              <div className="w-2.5 h-2.5 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              </div>
            </div>

            {/* Cute Little Spider Hourglass Mark on Abdomen */}
            <div className="absolute bottom-1 w-2 h-2 text-[7px] leading-none text-red-400 font-black">
              ▲
            </div>
          </div>

          {/* Right Side 4 Legs */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-1 z-0 translate-x-1">
            {/* Leg 5 */}
            <div
              className={`w-4 sm:w-5 h-1 bg-black dark:bg-white rounded-full border border-black/40 ${
                state.isScared ? 'animate-spider-leg-b-fast' : 'animate-spider-leg-b'
              }`}
              style={{ transformOrigin: 'left center' }}
            />
            {/* Leg 6 */}
            <div
              className={`w-4.5 sm:w-5.5 h-1 bg-black dark:bg-white rounded-full border border-black/40 ${
                state.isScared ? 'animate-spider-leg-a-fast' : 'animate-spider-leg-a'
              }`}
              style={{ transformOrigin: 'left center' }}
            />
            {/* Leg 7 */}
            <div
              className={`w-4.5 sm:w-5.5 h-1 bg-black dark:bg-white rounded-full border border-black/40 ${
                state.isScared ? 'animate-spider-leg-b-fast' : 'animate-spider-leg-b'
              }`}
              style={{ transformOrigin: 'left center' }}
            />
            {/* Leg 8 */}
            <div
              className={`w-4 sm:w-5 h-1 bg-black dark:bg-white rounded-full border border-black/40 ${
                state.isScared ? 'animate-spider-leg-a-fast' : 'animate-spider-leg-a'
              }`}
              style={{ transformOrigin: 'left center' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// MASCOT 3: ORIGINAL ROUND CREATURE ("Maskot Sebelumnya")
// -------------------------------------------------------------
function OriginalCreatureCharacter({
  state,
  onClick,
  mascotRef,
  eyeOffset,
  blinking,
}: {
  state: MascotCommonState;
  onClick: () => void;
  mascotRef: React.RefObject<HTMLDivElement | null>;
  eyeOffset: { x: number; y: number };
  blinking: boolean;
}) {
  return (
    <div
      ref={mascotRef}
      onClick={onClick}
      style={{
        transform: `translateX(${state.posX}px)`,
        transition: state.isDizzy
          ? 'none'
          : state.isScared
          ? 'transform 0.28s cubic-bezier(0.25, 1, 0.5, 1)'
          : 'transform 0.12s linear',
      }}
      className="fixed bottom-1 left-0 z-40 select-none cursor-pointer group hidden md:flex flex-col items-center pointer-events-auto"
      title="Original Mascot"
    >
      {/* Speech Bubble */}
      {state.showBubble && (
        <div className="absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap animate-in fade-in zoom-in-95 duration-200 z-50">
          <div className="relative px-3 py-1 rounded-xl bg-white text-black border-2 border-black font-mono text-[11px] font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5">
            <span>{state.bubbleText}</span>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-r-2 border-b-2 border-black rotate-45" />
          </div>
        </div>
      )}

      {/* Main Body with Feet */}
      <div
        className={`relative transition-transform duration-200 ${
          state.isDizzy
            ? 'animate-spin'
            : state.isScared
            ? 'scale-115 -translate-y-2'
            : 'hover:scale-110 -translate-y-0.5'
        }`}
      >
        {/* Animated Stepping Feet */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 sm:w-10 flex justify-between px-1 pointer-events-none z-0">
          {/* Left Foot */}
          <div
            className={`w-3.5 h-2 rounded-full bg-black dark:bg-white border border-black/30 shadow-sm ${
              state.isScared
                ? 'animate-scurry-left'
                : state.isWalking && !state.isDizzy
                ? 'animate-leg-left'
                : ''
            }`}
          />
          {/* Right Foot */}
          <div
            className={`w-3.5 h-2 rounded-full bg-black dark:bg-white border border-black/30 shadow-sm ${
              state.isScared
                ? 'animate-scurry-right'
                : state.isWalking && !state.isDizzy
                ? 'animate-leg-right'
                : ''
            }`}
          />
        </div>

        {/* Round Pill Body */}
        <div className="relative z-10 w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white flex flex-col items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]">
          {/* Two Expressive Blinking Eyes */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Left Eye */}
            <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-white dark:bg-black border border-black/20 flex items-center justify-center overflow-hidden">
              {blinking ? (
                <span className="w-2.5 h-0.5 bg-black dark:bg-white rounded" />
              ) : state.isDizzy ? (
                <span className="text-[10px] font-black text-black dark:text-white leading-none">
                  @
                </span>
              ) : (
                <div
                  style={{
                    transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white"
                />
              )}
            </div>

            {/* Right Eye */}
            <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-white dark:bg-black border border-black/20 flex items-center justify-center overflow-hidden">
              {blinking ? (
                <span className="w-2.5 h-0.5 bg-black dark:bg-white rounded" />
              ) : state.isDizzy ? (
                <span className="text-[10px] font-black text-black dark:text-white leading-none">
                  @
                </span>
              ) : (
                <div
                  style={{
                    transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white"
                />
              )}
            </div>
          </div>

          {/* Badge Tag at Bottom */}
          <span className="absolute -bottom-1 text-[8px] font-mono font-bold text-white dark:text-black">
            &lt;/&gt;
          </span>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// MAIN COMPONENT EXPORT: THREE INDEPENDENT INTERACTIVE MASCOTS
// -------------------------------------------------------------
export default function InteractiveMascot() {
  // Mascot 1: Spidey State
  const [spidey, setSpidey] = useState<MascotCommonState>({
    posX: 60,
    direction: 'right',
    isWalking: true,
    isScared: false,
    isDizzy: false,
    speed: 0.9,
    bubbleText: 'Click me! ✋',
    showBubble: true,
  });

  // Mascot 2: Spider Crawler State
  const [spider, setSpider] = useState<MascotCommonState>({
    posX: 340,
    direction: 'right',
    isWalking: true,
    isScared: false,
    isDizzy: false,
    speed: 1.25,
    bubbleText: 'Skitter! 🕷️',
    showBubble: true,
  });

  // Mascot 3: Original Creature State
  const [original, setOriginal] = useState<MascotCommonState>({
    posX: 620,
    direction: 'left',
    isWalking: true,
    isScared: false,
    isDizzy: false,
    speed: 1.0,
    bubbleText: 'Hello! 👋',
    showBubble: true,
  });

  const [blinking, setBlinking] = useState(false);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });

  const spideyRef = useRef<HTMLDivElement>(null);
  const spiderRef = useRef<HTMLDivElement>(null);
  const originalRef = useRef<HTMLDivElement>(null);
  const lastSoundRef = useRef<number>(0);

  // Blinking cycle for Original Mascot
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 150);
    }, 3600);

    return () => clearInterval(blinkInterval);
  }, []);

  // Autonomous wandering tick for all mascots
  useEffect(() => {
    const interval = setInterval(() => {
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const isMobile = screenWidth < 768;
      const minX = isMobile ? 8 : 24;
      const maxX = isMobile ? Math.max(90, screenWidth - 56) : screenWidth - 110;

      // Update Spidey (Always active, perfectly scaled for mobile & desktop)
      setSpidey((prev) => {
        if (prev.isDizzy || prev.isScared) return prev;
        let newX = prev.posX;
        let newDir = prev.direction;

        // Auto correct if window or orientation changed
        if (newX > maxX - 8) {
          newX = maxX - 8;
          newDir = 'left';
        } else if (newX < minX + 8) {
          newX = minX + 8;
          newDir = 'right';
        }

        if (newDir === 'right') {
          newX += prev.speed * 1.5;
          if (newX >= maxX - 10) {
            newX = maxX - 10;
            newDir = 'left';
          }
        } else {
          newX -= prev.speed * 1.5;
          if (newX <= minX + 10) {
            newX = minX + 10;
            newDir = 'right';
          }
        }

        if (Math.random() < 0.012) {
          newDir = newDir === 'right' ? 'left' : 'right';
        }

        return { ...prev, posX: newX, direction: newDir, isWalking: true };
      });

      // Update Spider Crawler & Original Mascot only on tablet/desktop (saves mobile CPU)
      if (!isMobile) {
        // Update Spider Crawler
        setSpider((prev) => {
          if (prev.isDizzy || prev.isScared) return prev;
          let newX = prev.posX;
          let newDir = prev.direction;

          if (prev.direction === 'right') {
            newX += prev.speed * 1.7;
            if (newX >= maxX - 20) {
              newX = maxX - 20;
              newDir = 'left';
            }
          } else {
            newX -= prev.speed * 1.7;
            if (newX <= minX + 20) {
              newX = minX + 20;
              newDir = 'right';
            }
          }

          if (Math.random() < 0.016) {
            newDir = newDir === 'right' ? 'left' : 'right';
          }

          return { ...prev, posX: newX, direction: newDir, isWalking: true };
        });

        // Update Original Mascot
        setOriginal((prev) => {
          if (prev.isDizzy || prev.isScared) return prev;
          let newX = prev.posX;
          let newDir = prev.direction;

          if (prev.direction === 'right') {
            newX += prev.speed * 1.5;
            if (newX >= maxX - 20) {
              newX = maxX - 20;
              newDir = 'left';
            }
          } else {
            newX -= prev.speed * 1.5;
            if (newX <= minX + 20) {
              newX = minX + 20;
              newDir = 'right';
            }
          }

          if (Math.random() < 0.014) {
            newDir = newDir === 'right' ? 'left' : 'right';
          }

          return { ...prev, posX: newX, direction: newDir, isWalking: true };
        });
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Cursor avoidance logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const screenWidth = window.innerWidth;
      const isMobile = screenWidth < 768;
      const minX = isMobile ? 8 : 24;
      const maxX = isMobile ? Math.max(90, screenWidth - 56) : screenWidth - 110;

      // 1. Spidey avoidance
      if (spideyRef.current) {
        const rect = spideyRef.current.getBoundingClientRect();
        const deltaX = rect.left + rect.width / 2 - e.clientX;
        const deltaY = rect.top + rect.height / 2 - e.clientY;
        const dist = Math.hypot(deltaX, deltaY);

        setSpidey((prev) => {
          if (prev.isDizzy) return prev;
          const triggerDist = isMobile ? 75 : 115;
          if (dist < triggerDist) {
            const escapeSpeed = isMobile ? 3.6 : 4.5;
            const newX = deltaX > 0 ? prev.posX + escapeSpeed : prev.posX - escapeSpeed;
            const newDir = deltaX > 0 ? 'right' : 'left';

            const now = Date.now();
            if (now - lastSoundRef.current > 600) {
              sounds.playScurry();
              lastSoundRef.current = now;
            }

            return {
              ...prev,
              posX: Math.max(minX, Math.min(maxX, newX)),
              direction: newDir,
              isScared: true,
              bubbleText: 'Spidey Sense! 🕸️💨',
              showBubble: true,
            };
          } else if (prev.isScared) {
            return { ...prev, isScared: false, bubbleText: 'Click me! ✋' };
          }
          return prev;
        });
      }

      // On mobile devices, skip avoidance checks for hidden mascots
      if (isMobile) return;

      // 2. Spider Crawler avoidance
      if (spiderRef.current) {
        const rect = spiderRef.current.getBoundingClientRect();
        const deltaX = rect.left + rect.width / 2 - e.clientX;
        const deltaY = rect.top + rect.height / 2 - e.clientY;
        const dist = Math.hypot(deltaX, deltaY);

        setSpider((prev) => {
          if (prev.isDizzy) return prev;
          if (dist < 110) {
            const escapeSpeed = 5.2;
            const newX = deltaX > 0 ? prev.posX + escapeSpeed : prev.posX - escapeSpeed;
            const newDir = deltaX > 0 ? 'right' : 'left';

            return {
              ...prev,
              posX: Math.max(minX, Math.min(maxX, newX)),
              direction: newDir,
              isScared: true,
              bubbleText: 'Skittering! 🕷️💨',
              showBubble: true,
            };
          } else if (prev.isScared) {
            return { ...prev, isScared: false, bubbleText: 'Skitter! 🕷️' };
          }
          return prev;
        });
      }

      // 3. Original Mascot avoidance & pupil tracking
      if (originalRef.current) {
        const rect = originalRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = centerX - e.clientX;
        const deltaY = centerY - e.clientY;
        const dist = Math.hypot(deltaX, deltaY);

        // Pupil tracking
        if (dist < 300) {
          const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
          const maxPupilMove = 1.6;
          setEyeOffset({
            x: Math.cos(angle) * maxPupilMove,
            y: Math.sin(angle) * maxPupilMove,
          });
        } else {
          setEyeOffset({ x: 0, y: 0 });
        }

        setOriginal((prev) => {
          if (prev.isDizzy) return prev;
          if (dist < 110) {
            const escapeSpeed = 4.8;
            const newX = deltaX > 0 ? prev.posX + escapeSpeed : prev.posX - escapeSpeed;
            const newDir = deltaX > 0 ? 'right' : 'left';

            return {
              ...prev,
              posX: Math.max(minX, Math.min(maxX, newX)),
              direction: newDir,
              isScared: true,
              bubbleText: 'Whoa! 💨',
              showBubble: true,
            };
          } else if (prev.isScared) {
            return { ...prev, isScared: false, bubbleText: 'Hello! 👋' };
          }
          return prev;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Click handlers
  const handleSpideyClick = () => {
    sounds.playDizzy();
    const phrases = [
      'With great code comes great responsibility! 🕸️',
      'Friendly neighborhood engineer! 🕷️',
      'Web-slinging bugs away! 🚀',
      'Spider-Power! ⚡',
    ];
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    setSpidey((prev) => ({
      ...prev,
      isDizzy: true,
      bubbleText: phrase,
      showBubble: true,
    }));
    setTimeout(() => {
      setSpidey((prev) => ({ ...prev, isDizzy: false, bubbleText: 'Click me! ✋' }));
    }, 1800);
  };

  const handleSpiderClick = () => {
    sounds.playDizzy();
    const spiderPhrases = [
      'Web crawler crawling! 🕸️',
      '8 legs, 0 bugs! 🕷️',
      'Skitter skitter! ⚡',
      'Spinning webs of code! 🕸️',
    ];
    const phrase = spiderPhrases[Math.floor(Math.random() * spiderPhrases.length)];
    setSpider((prev) => ({
      ...prev,
      isDizzy: true,
      bubbleText: phrase,
      showBubble: true,
    }));
    setTimeout(() => {
      setSpider((prev) => ({ ...prev, isDizzy: false, bubbleText: 'Skitter! 🕷️' }));
    }, 1800);
  };

  const handleOriginalClick = () => {
    sounds.playDizzy();
    const origPhrases = [
      'Full-Stack Vibe! ✨',
      'Beep boop! 🤖',
      'Next.js 15 inside! 🚀',
      'Nice to meet you! 👋',
    ];
    const phrase = origPhrases[Math.floor(Math.random() * origPhrases.length)];
    setOriginal((prev) => ({
      ...prev,
      isDizzy: true,
      bubbleText: phrase,
      showBubble: true,
    }));
    setTimeout(() => {
      setOriginal((prev) => ({ ...prev, isDizzy: false, bubbleText: 'Hello! 👋' }));
    }, 1800);
  };

  return (
    <>
      {/* 1. Spidey Mascot */}
      <SpideyCharacter
        state={spidey}
        onClick={handleSpideyClick}
        mascotRef={spideyRef}
      />

      {/* 2. Cute Crawler Spider ("Laba-laba") */}
      <SpiderCrawlerCharacter
        state={spider}
        onClick={handleSpiderClick}
        mascotRef={spiderRef}
      />

      {/* 3. Original Mascot with Blinking Eyes and Walking Feet */}
      <OriginalCreatureCharacter
        state={original}
        onClick={handleOriginalClick}
        mascotRef={originalRef}
        eyeOffset={eyeOffset}
        blinking={blinking}
      />
    </>
  );
}

