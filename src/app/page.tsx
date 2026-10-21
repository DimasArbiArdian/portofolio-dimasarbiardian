'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/data/dictionaries';
import { INITIAL_GUESTBOOK_ENTRIES } from '@/data/portfolio-data';
import Navbar, { ThemeMode } from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import Journey from '@/components/Journey';
import Guestbook from '@/components/Guestbook';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingGuestbookBadge from '@/components/FloatingGuestbookBadge';
import InteractiveMascot from '@/components/InteractiveMascot';
import GuestbookDrawer from '@/components/GuestbookDrawer';

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [guestbookCount, setGuestbookCount] = useState<number>(INITIAL_GUESTBOOK_ENTRIES.length);
  const [isGuestbookDrawerOpen, setIsGuestbookDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'theme-spiderman');

    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'spiderman') {
      root.classList.add('dark', 'theme-spiderman');
    }
  }, [theme]);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'spiderman';
      return 'light';
    });
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col font-sans transition-colors ${
        theme === 'spiderman'
          ? 'bg-[#060812] text-white selection:bg-[#e23636] selection:text-white'
          : 'bg-white dark:bg-[#070b14] text-black dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black'
      }`}
    >
      {/* Sticky Header Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenGuestbook={() => setIsGuestbookDrawerOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero currentLang={currentLang} theme={theme} />
        <About currentLang={currentLang} />
        <Projects currentLang={currentLang} />
        <Research currentLang={currentLang} />
        <Journey currentLang={currentLang} />
        <Guestbook
          currentLang={currentLang}
          onCountUpdate={(cnt) => setGuestbookCount(cnt)}
          onOpenDrawer={() => setIsGuestbookDrawerOpen(true)}
        />
        <Contact currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Floating Interactive Guestbook Badge (Bottom-Right, matching screenshots) */}
      <FloatingGuestbookBadge
        count={guestbookCount}
        onOpen={() => setIsGuestbookDrawerOpen(true)}
      />

      {/* Two Walking Autonomous Black Creatures with Feet that avoid cursor and spin when cornered */}
      <InteractiveMascot />

      {/* Guestbook Slide-Over Drawer matching user reference screenshot (~/guestbook.log) */}
      <GuestbookDrawer
        isOpen={isGuestbookDrawerOpen}
        onClose={() => setIsGuestbookDrawerOpen(false)}
        currentLang={currentLang}
        onCountUpdate={(cnt) => setGuestbookCount(cnt)}
      />
    </div>
  );
}
