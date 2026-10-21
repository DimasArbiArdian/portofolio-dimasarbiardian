'use client';

import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Layers, TrendingUp } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Project } from '@/data/portfolio-data';
import { Language, DICTIONARIES } from '@/data/dictionaries';
import { sounds } from '@/lib/sound';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  currentLang: Language;
}

export default function CaseStudyModal({ project, onClose, currentLang }: CaseStudyModalProps) {
  const dict = DICTIONARIES[currentLang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0c121e] border-2 border-black dark:border-white/20 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)] p-6 sm:p-10 text-slate-900 dark:text-white z-10 transition-all animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full border-2 border-black dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          aria-label={dict.projects.modal.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 border-b-2 border-black/10 dark:border-white/10 pb-6 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/30 dark:border-white/30 text-xs font-mono font-bold uppercase mb-3 bg-slate-100 dark:bg-slate-800">
            <span>{project.category}</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-950 dark:text-white">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm font-mono font-bold text-slate-500 dark:text-slate-400 uppercase mt-1">
            {project.tagline}
          </p>

          {/* Metrics Ribbon */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.metrics.map((metric, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg border border-black/20 dark:border-white/20 bg-slate-50 dark:bg-slate-800 font-mono text-xs font-bold text-slate-900 dark:text-slate-100"
              >
                ✦ {metric}
              </span>
            ))}
          </div>

          {/* Links Row */}
          <div className="flex flex-wrap items-center gap-3 mt-5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-extrabold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{dict.projects.liveDemo}</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border-2 border-black dark:border-white text-black dark:text-white font-extrabold text-xs uppercase tracking-wider hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>{dict.projects.sourceCode}</span>
              </a>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 text-sm leading-relaxed">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-2">
              {dict.projects.modal.overview}
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{caseStudy.overview}</p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border-2 border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-slate-900/60">
              <h5 className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <span>{dict.projects.modal.challenge}</span>
              </h5>
              <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm">{caseStudy.challenge}</p>
            </div>

            <div className="p-5 rounded-2xl border-2 border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-slate-900/60">
              <h5 className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{dict.projects.modal.solution}</span>
              </h5>
              <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm">{caseStudy.solution}</p>
            </div>
          </div>

          {/* Architecture */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>{dict.projects.modal.architecture}</span>
            </h4>
            <ul className="space-y-1.5 pl-1">
              {caseStudy.architecture.map((arch, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                  <span className="font-bold text-black dark:text-white">▸</span>
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Capabilities */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-2">
              {dict.projects.modal.keyFeatures}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {caseStudy.keyFeatures.map((feat, i) => (
                <div key={i} className="p-3 rounded-xl border border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-slate-900 text-xs text-slate-800 dark:text-slate-200 flex items-start gap-2">
                  <span className="font-bold text-black dark:text-white">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="p-5 rounded-2xl border-2 border-black dark:border-white/20 bg-slate-50 dark:bg-slate-900">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{dict.projects.modal.impact}</span>
            </h4>
            <ul className="space-y-1.5">
              {caseStudy.impact.map((imp, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold">
                  <span className="text-emerald-600 dark:text-emerald-400">★</span>
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t-2 border-black/10 dark:border-white/10 flex justify-end">
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="px-6 py-2.5 rounded-full border-2 border-black dark:border-white font-bold text-xs uppercase tracking-wider hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
          >
            {dict.projects.modal.close}
          </button>
        </div>
      </div>
    </div>
  );
}
