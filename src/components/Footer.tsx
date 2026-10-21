'use client';

import React from 'react';
import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { Language, DICTIONARIES } from '@/data/dictionaries';
import { DEVELOPER_INFO } from '@/data/portfolio-data';
import { sounds } from '@/lib/sound';

interface FooterProps {
  currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
  const dict = DICTIONARIES[currentLang];

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-[#070b14] text-black dark:text-white border-t-2 border-black dark:border-white/20 font-mono text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand Monogram */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-black text-sm border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)]">
            D
          </div>
          <div>
            <p className="font-black text-sm uppercase text-slate-950 dark:text-white">
              {DEVELOPER_INFO.name}
            </p>
            <p className="text-[11px] text-slate-500">
              © {new Date().getFullYear()} {dict.footer.rights}
            </p>
          </div>
        </div>

        {/* Center: Zero-Client-Key Badge */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border-2 border-black dark:border-white/20 bg-slate-50 dark:bg-slate-800 text-[11px] font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 stroke-[2.5]" />
          <span>Don't Forget to Smile Today😊</span>
        </div>

        {/* Right: Social Links with Instagram + Back To Top */}
        <div className="flex items-center gap-4">
          {/* Instagram */}
          <a
            href={DEVELOPER_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            className="p-2 rounded-full border border-black/20 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            title="Instagram"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          {/* LinkedIn */}
          <a
            href={DEVELOPER_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            className="p-2 rounded-full border border-black/20 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* GitHub */}
          <a
            href={DEVELOPER_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            className="p-2 rounded-full border border-black/20 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            title="GitHub"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Email */}
          <a
            href={`mailto:${DEVELOPER_INFO.email}`}
            onClick={() => sounds.playClick()}
            className="p-2 rounded-full border border-black/20 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            title="Email"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-black dark:border-white text-xs font-bold uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)] cursor-pointer"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
