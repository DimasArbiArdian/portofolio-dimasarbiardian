'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  GraduationCap,
  Code2,
  Brain,
} from 'lucide-react';
import { Language, DICTIONARIES } from '@/data/dictionaries';
import { DEVELOPER_INFO, TECH_STACK } from '@/data/portfolio-data';
import { sounds } from '@/lib/sound';
import { TechIcon } from '@/components/TechIcons';

interface AboutProps {
  currentLang: Language;
}

export default function About({ currentLang }: AboutProps) {
  const [photoSrc, setPhotoSrc] = useState('/images/profile.png');
  const [photoError, setPhotoError] = useState(false);
  const dict = DICTIONARIES[currentLang];

  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-white dark:bg-[#070b14] text-black dark:text-white transition-colors border-b-2 border-black dark:border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header with Scroll Reveal */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-slate-950 dark:text-white mb-10 select-none"
        >
          {dict.about.sectionTitle}
        </motion.h2>

        {/* Bento Grid: Row 1 - Intro & Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Card 1: Bio Intro & Resume Button (7 cols) with Hover Elevation */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 rounded-3xl border-2 border-black dark:border-white/20 p-6 sm:p-10 bg-white dark:bg-[#0c121e] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] flex flex-col justify-between group cursor-default"
          >
            <div>
              {/* Waving Hand Badge */}
              <div className="w-12 h-12 rounded-full border-2 border-black dark:border-white/20 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                👋
              </div>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 dark:text-white uppercase mb-4">
                {dict.about.introTitle}
              </h3>

              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{dict.about.bioParagraph1}</p>
                <p>{dict.about.bioParagraph2}</p>
              </div>
            </div>

            {/* Resume Button */}
            <div className="mt-8 pt-4">
              <a
                href={DEVELOPER_INFO.resumeUrl}
                download="CV_Dimas_Arbi_Ardian.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-extrabold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>{dict.about.downloadCv}</span>
              </a>
            </div>
          </motion.div>

          {/* Card 2: Visual Profile & Status Badge (5 cols) with Hover Elevation */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 rounded-3xl border-2 border-black dark:border-white/20 p-6 sm:p-8 bg-[#fafafa] dark:bg-[#0c121e] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] flex flex-col justify-between relative overflow-hidden group cursor-default"
          >
            {/* Halftone Pattern Background */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
                backgroundSize: '16px 16px',
              }}
            />

            {/* Top Identity Avatar Display: Shows /images/profile.png or /images/profile.jpg, enlarged per user request */}
            <div className="relative z-10 flex flex-col items-center justify-center py-4">
              {!photoError ? (
                <div className="w-56 h-56 sm:w-68 sm:h-68 md:w-80 md:h-80 rounded-3xl border-3 border-black dark:border-white overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.85)] relative bg-slate-200 dark:bg-slate-800 flex items-center justify-center transition-transform hover:scale-[1.02] duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photoSrc}
                    alt="Dimas Arbi Ardian"
                    className="w-full h-full object-cover"
                    onError={() => {
                      if (photoSrc === '/images/profile.png') {
                        setPhotoSrc('/images/profile.jpg');
                      } else {
                        setPhotoError(true);
                      }
                    }}
                  />
                </div>
              ) : (
                <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-3xl bg-black text-white dark:bg-white dark:text-black border-3 border-black dark:border-white flex flex-col items-center justify-center font-black text-5xl sm:text-6xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.85)] relative group">
                  <span>DA</span>
                  <span className="text-xs font-mono tracking-widest mt-2 opacity-80 uppercase">
                    Engineer
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Status & Hire Me Overlay */}
            <div className="relative z-10 p-4 rounded-2xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-between gap-3 shadow-md mt-4">
              <div>
                <p className="font-mono text-xs font-bold">@dimasarbiardian</p>
                <p className="text-[10px] text-emerald-400 dark:text-emerald-600 font-mono flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 dark:bg-emerald-600 animate-pulse" />
                  {dict.about.statusOnline}
                </p>
              </div>

              <a
                href="#contact"
                onClick={() => sounds.playClick()}
                className="px-4 py-2 rounded-xl bg-white text-black dark:bg-black dark:text-white font-extrabold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-sm"
              >
                {dict.about.hireMe}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bento Grid: Row 2 - Education & Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Card 3: Education Bento (5 cols) with Hover Elevation */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 rounded-3xl border-2 border-black dark:border-white/20 p-6 sm:p-8 bg-white dark:bg-[#0c121e] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] flex flex-col justify-between group cursor-default"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full border-2 border-black dark:border-white/20 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-5 h-5 text-black dark:text-white" />
                </div>
                <span className="px-3 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black text-[11px] font-mono font-bold uppercase tracking-wider">
                  {dict.about.graduatedYear}
                </span>
              </div>

              {/* Institution & Degree */}
              <p className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1">
                {dict.about.university}
              </p>
              <h4 className="text-xl sm:text-2xl font-black text-black dark:text-white uppercase tracking-tight mt-1 mb-5">
                {dict.about.educationTitle}
              </h4>

              {/* Coursework Tags */}
              <p className="text-[11px] font-mono font-bold uppercase text-slate-500 mb-2">
                {dict.about.courseworkLabel}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {dict.about.coursework.map((course, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg border border-black/20 dark:border-white/20 text-xs font-medium text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/50"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* GPA Stat */}
            <div className="pt-4 border-t-2 border-black/10 dark:border-white/10 flex items-baseline gap-3">
              <span className="text-4xl sm:text-5xl font-black text-black dark:text-white font-mono tracking-tighter">
                {dict.about.gpaScore}
              </span>
              <div className="text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-400 leading-tight">
                <p className="text-black dark:text-white">{dict.about.gpaDistinction}</p>
                <p>{dict.about.gpaScale}</p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Tech Stack Card (7 cols) with Hover Elevation */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-7 rounded-3xl border-2 border-black dark:border-white/20 p-6 sm:p-8 bg-white dark:bg-[#0c121e] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] group cursor-default"
          >
            <h4 className="text-xl font-black uppercase tracking-tight text-black dark:text-white mb-6 flex items-center gap-2 font-mono">
              <span className="px-2 py-0.5 rounded bg-black text-white dark:bg-white dark:text-black text-xs font-mono">
                &gt;_
              </span>
              <span>{dict.about.techStackTitle}</span>
            </h4>

            <div className="space-y-4">
              {/* Core Languages */}
              <div>
                <p className="text-[11px] font-mono font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">
                  {dict.about.categories.languages}
                </p>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.languages.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl border border-black/20 dark:border-white/20 text-xs font-bold text-slate-900 dark:text-slate-100 bg-[#fafafa] dark:bg-slate-800/80 flex items-center gap-2 shadow-sm hover:scale-105 transition-transform"
                    >
                      <TechIcon name={item.name} className="w-4 h-4 flex-shrink-0" />
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks & UI */}
              <div>
                <p className="text-[11px] font-mono font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">
                  {dict.about.categories.frontend}
                </p>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.frontend.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl border border-black/20 dark:border-white/20 text-xs font-bold text-slate-900 dark:text-slate-100 bg-[#fafafa] dark:bg-slate-800/80 flex items-center gap-2 shadow-sm hover:scale-105 transition-transform"
                    >
                      <TechIcon name={item.name} className="w-4 h-4 flex-shrink-0" />
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend & Databases */}
              <div>
                <p className="text-[11px] font-mono font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">
                  {dict.about.categories.backend}
                </p>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.backend.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl border border-black/20 dark:border-white/20 text-xs font-bold text-slate-900 dark:text-slate-100 bg-[#fafafa] dark:bg-slate-800/80 flex items-center gap-2 shadow-sm hover:scale-105 transition-transform"
                    >
                      <TechIcon name={item.name} className="w-4 h-4 flex-shrink-0" />
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* AI & Cloud Ecosystem */}
              <div>
                <p className="text-[11px] font-mono font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">
                  {dict.about.categories.aiCloud}
                </p>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.aiAndCloud.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl border border-black/20 dark:border-white/20 text-xs font-bold text-slate-900 dark:text-slate-100 bg-[#fafafa] dark:bg-slate-800/80 flex items-center gap-2 shadow-sm hover:scale-105 transition-transform"
                    >
                      <TechIcon name={item.name} className="w-4 h-4 flex-shrink-0" />
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bento Grid: Row 3 - MY FOCUS Solid Black Card with Hover Elevation */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          className="rounded-3xl border-2 border-black dark:border-white/20 p-6 sm:p-8 bg-black text-white dark:bg-white dark:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group cursor-default"
        >
          <div className="max-w-2xl">
            <h4 className="text-2xl font-black uppercase tracking-tight mb-2">
              {dict.about.focusTitle}
            </h4>
            <p className="text-slate-300 dark:text-slate-700 text-sm sm:text-base leading-relaxed">
              {dict.about.focusDesc}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2.5 rounded-2xl border-2 border-white/30 dark:border-black/30 bg-white/10 dark:bg-black/10 text-xs font-mono font-extrabold flex items-center gap-2 group-hover:scale-105 transition-transform">
              <Code2 className="w-4 h-4 text-cyan-400 dark:text-cyan-600" />
              <span>{dict.about.focusPills.fullstack}</span>
            </div>

            <div className="px-4 py-2.5 rounded-2xl border-2 border-white/30 dark:border-black/30 bg-white/10 dark:bg-black/10 text-xs font-mono font-extrabold flex items-center gap-2 group-hover:scale-105 transition-transform">
              <Brain className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
              <span>{dict.about.focusPills.aiVision}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
