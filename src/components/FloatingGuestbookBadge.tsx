'use client';

import React from 'react';
import { PenTool, MessageSquareQuote } from 'lucide-react';
import { sounds } from '@/lib/sound';

interface FloatingGuestbookBadgeProps {
  count: number;
  onOpen?: () => void;
}

export default function FloatingGuestbookBadge({ count, onOpen }: FloatingGuestbookBadgeProps) {
  const handleClick = () => {
    sounds.playClick();
    if (onOpen) {
      onOpen();
    } else {
      const el = document.getElementById('guestbook');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#0c121e] text-black dark:text-white border-2 border-black dark:border-white font-bold text-xs font-mono tracking-tight shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
        aria-label="Scroll to guestbook"
      >
        <span className="text-sm">✍️</span>
        <span className="font-extrabold uppercase font-sans tracking-wide">Guestbook</span>
        <span className="ml-1 px-1.5 py-0.5 rounded-md bg-black text-white dark:bg-white dark:text-black text-[11px] font-bold">
          {count}
        </span>
      </button>
    </div>
  );
}
