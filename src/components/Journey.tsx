'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  Folder,
  FolderOpen,
  ChevronDown,
  Calendar,
  MapPin,
  Award,
  Eye,
  FileCheck2,
  TrendingUp,
  Layers
} from 'lucide-react';
import { Language, DICTIONARIES } from '@/data/dictionaries';
import { TIMELINE, TimelineEntry, InternshipCertificate } from '@/data/portfolio-data';
import CertificateModal from './CertificateModal';
import { sounds } from '@/lib/sound';

interface JourneyProps {
  currentLang: Language;
}

export default function Journey({ currentLang }: JourneyProps) {
  const [openDrawerId, setOpenDrawerId] = useState<string | null>('timeline-1');
  const [selectedDoc, setSelectedDoc] = useState<InternshipCertificate | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 70%'],
  });

  // Smooth physics spring for the scroll-tracking vertical line
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    restDelta: 0.001,
  });

  const activeDotTop = useTransform(scaleY, (v) => `${Math.max(0, Math.min(100, v * 100))}%`);

  const dict = DICTIONARIES[currentLang];

  const toggleDrawer = (id: string) => {
    sounds.playClick();
    setOpenDrawerId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="journey"
      className="py-20 sm:py-28 bg-[#fafafa] dark:bg-[#050811] text-black dark:text-white transition-colors border-b-2 border-black dark:border-white/20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-slate-950 dark:text-white select-none">
              {dict.journey.sectionTitle}
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-md font-medium">
            {dict.journey.sectionSubtitle}
          </p>
        </motion.div>

        {/* Vertical Timeline Tree with Dynamic Scroll-Following Line */}
        <div ref={containerRef} className="relative pl-7 sm:pl-12 space-y-12">
          {/* Background Guide Line (Muted) */}
          <div className="absolute left-[7px] sm:left-[11px] top-4 bottom-4 w-[3px] bg-slate-200 dark:bg-slate-800 rounded-full" />

          {/* Active Scroll-Following Line that grows downwards as user scrolls! */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-[7px] sm:left-[11px] top-4 bottom-4 w-[3px] bg-black dark:bg-white rounded-full z-10"
          />

          {/* Glowing tracker dot at the head of the moving line */}
          <motion.div
            style={{ top: activeDotTop }}
            className="absolute left-[2.5px] sm:left-[6.5px] w-3 h-3 rounded-full bg-black dark:bg-white border-2 border-white dark:border-black shadow-[0_0_8px_rgba(0,0,0,0.6)] dark:shadow-[0_0_8px_rgba(255,255,255,0.8)] z-20 pointer-events-none -translate-y-1/2"
          />
          {TIMELINE.map((item, index) => {
            const isOpen = openDrawerId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="relative group"
              >
                {/* Node Dot */}
                <div className="absolute -left-[32px] sm:-left-[48px] top-4 w-5 h-5 rounded-full bg-black dark:bg-white border-4 border-white dark:border-[#050811] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] group-hover:scale-125 transition-transform z-20" />

                {/* Node Card with Hover Effect */}
                <div className="rounded-3xl border-2 border-black dark:border-white/20 p-6 sm:p-8 bg-white dark:bg-[#0c121e] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)]">
                  {/* Period & Location Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono text-xs">
                    <span className="font-extrabold text-black dark:text-white flex items-center gap-1.5 bg-black/5 dark:bg-white/10 px-2.5 py-1 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                      {item.grade && (
                        <span className="px-2.5 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold">
                          {item.grade}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-950 dark:text-white mt-2">
                    {item.role}
                  </h3>
                  <p className="text-sm sm:text-base font-mono font-bold text-slate-600 dark:text-slate-400">
                    {item.company}
                  </p>

                  {/* Summary */}
                  <p className="mt-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Action Buttons Row: View Certificate & Toggle Archive */}
                  <div className="mt-6 pt-4 border-t-2 border-black/10 dark:border-white/10 flex flex-wrap items-center gap-3">
                    {/* View Certificate Button */}
                    {item.internshipCertificate && (
                      <button
                        onClick={() => {
                          sounds.playClick();
                          setSelectedDoc(item.internshipCertificate!);
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-extrabold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] cursor-pointer"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>{dict.journey.viewCertificate}</span>
                      </button>
                    )}

                    {/* Expandable Project Archive Drawer Button */}
                    <button
                      onClick={() => toggleDrawer(item.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-black dark:border-white font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                        isOpen
                          ? 'bg-slate-100 dark:bg-slate-800 text-black dark:text-white'
                          : 'bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {isOpen ? <FolderOpen className="w-3.5 h-3.5" /> : <Folder className="w-3.5 h-3.5" />}
                      <span>{isOpen ? dict.journey.closeArchive : dict.journey.openArchive}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Expandable Archive Content */}
                  {isOpen && (
                    <div className="mt-5 p-6 rounded-2xl border-2 border-black/20 dark:border-white/20 bg-[#fafafa] dark:bg-[#070b14] space-y-4 animate-in slide-in-from-top-3 duration-200">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-black dark:text-white">
                        <Layers className="w-4 h-4" />
                        <span>{item.folderArchive.title}</span>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <p className="text-[11px] font-mono font-bold uppercase text-slate-500 mb-1.5">
                          {dict.journey.deliverables}
                        </p>
                        <ul className="space-y-1">
                          {item.folderArchive.deliverables.map((deliv, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                              <span className="font-bold text-black dark:text-white">✓</span>
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <p className="text-[11px] font-mono font-bold uppercase text-slate-500 mb-1.5">
                          {dict.journey.technologies}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.folderArchive.technologies.map((t, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-0.5 rounded-lg border border-black/20 dark:border-white/20 bg-white dark:bg-slate-800 text-xs font-mono font-bold"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Metrics / Impact */}
                      <div>
                        <p className="text-[11px] font-mono font-bold uppercase text-slate-500 mb-1.5">
                          {dict.journey.metrics}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {item.folderArchive.metricsOrImpact.map((metric, idx) => (
                            <div
                              key={idx}
                              className="p-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-slate-800/80 text-xs font-mono font-semibold"
                            >
                              ✦ {metric}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Internship Certificate Modal */}
      <CertificateModal
        certificate={selectedDoc}
        onClose={() => setSelectedDoc(null)}
        currentLang={currentLang}
      />
    </section>
  );
}
