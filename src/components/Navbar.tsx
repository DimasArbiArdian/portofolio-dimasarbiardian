'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Moon, Sun, Menu, X } from 'lucide-react';
import { Language, DICTIONARIES } from '@/data/dictionaries';
import { sounds } from '@/lib/sound';

export type ThemeMode = 'light' | 'dark' | 'spiderman';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenGuestbook?: () => void;
}

export default function Navbar({
  currentLang,
  onLanguageChange,
  theme,
  onToggleTheme,
  onOpenGuestbook,
}: NavbarProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const dict = DICTIONARIES[currentLang];

  const toggleSound = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    sounds.setMuted(nextState);
    if (!nextState) sounds.playClick();
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'journey', 'guestbook', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: dict.nav.home },
    { id: 'about', label: dict.nav.about },
    { id: 'projects', label: dict.nav.projects },
    { id: 'journey', label: dict.nav.journey },
    { id: 'guestbook', label: dict.nav.guestbook },
    { id: 'contact', label: dict.nav.contact },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors ${
      theme === 'spiderman'
        ? 'bg-[#060812]/95 border-b-2 border-red-600 shadow-[0_4px_25px_rgba(226,54,54,0.35)]'
        : 'bg-white/95 dark:bg-[#070b14]/95 border-b border-black/10 dark:border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Hexagonal Monogram Logo */}
        <a
          href="#home"
          onClick={() => sounds.playClick()}
          className="group flex items-center gap-2"
          aria-label="Dimas Arbi Ardian Home"
        >
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-black text-lg border-2 group-hover:-translate-y-0.5 transition-all ${
            theme === 'spiderman'
              ? 'bg-gradient-to-br from-red-600 to-red-800 text-white border-white shadow-[2px_2px_0px_0px_#0284c7]'
              : 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)]'
          }`}>
            D
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  sounds.playClick();
                  if (link.id === 'guestbook' && onOpenGuestbook) {
                    e.preventDefault();
                    onOpenGuestbook();
                  }
                }}
                className={`text-xs font-black tracking-widest uppercase transition-all relative ${
                  isActive
                    ? theme === 'spiderman'
                      ? 'text-red-400'
                      : 'text-black dark:text-white'
                    : 'text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                    theme === 'spiderman'
                      ? 'bg-red-500 shadow-[0_0_8px_#ef4444]'
                      : 'bg-black dark:bg-white'
                  }`} />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Sound, Theme, Language */}
        <div className="flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="w-8 h-8 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all cursor-pointer"
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Theme Toggle: Cycles Light -> Dark -> Spider-Man -> Light */}
          <button
            onClick={() => {
              sounds.playClick();
              onToggleTheme();
            }}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              theme === 'spiderman'
                ? 'border-red-500 bg-red-500/15 text-red-500 hover:bg-red-500 hover:text-white shadow-[0_0_10px_rgba(226,54,54,0.7)]'
                : 'border-black/20 dark:border-white/20 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white'
            }`}
            title={
              theme === 'light'
                ? 'Switch to Dark Mode'
                : theme === 'dark'
                ? 'Switch to Spider-Man Theme 🕷️'
                : 'Switch to Light Mode ☀️'
            }
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4" />
            ) : theme === 'dark' ? (
              <span className="text-sm select-none" role="img" aria-label="Spider">
                🕷️
              </span>
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          {/* US / ID Language Switcher Pill */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-full border border-black/15 dark:border-white/15 text-[11px] font-bold font-mono">
            <button
              onClick={() => {
                sounds.playClick();
                onLanguageChange('en');
              }}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                  : 'text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              US
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                onLanguageChange('id');
              }}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                currentLang === 'id'
                  ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                  : 'text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              ID
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg border border-black/20 dark:border-white/20 text-black dark:text-white cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#070b14] border-b border-black/10 dark:border-white/10 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                sounds.playClick();
                setMobileMenuOpen(false);
                if (link.id === 'guestbook' && onOpenGuestbook) {
                  e.preventDefault();
                  onOpenGuestbook();
                }
              }}
              className="block py-2 text-sm font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
