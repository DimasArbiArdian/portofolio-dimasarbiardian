'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Layers, Monitor } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Language, DICTIONARIES } from '@/data/dictionaries';
import { PROJECTS, Project } from '@/data/portfolio-data';
import CaseStudyModal from './CaseStudyModal';
import { sounds } from '@/lib/sound';

function ProjectPreviewCard({
  projectId,
  title,
  previewImage,
  liveUrl,
  onOpenModal,
  currentLang,
}: {
  projectId: string;
  title: string;
  previewImage?: string;
  liveUrl?: string;
  onOpenModal: () => void;
  currentLang: Language;
}) {
  const [imgError, setImgError] = useState(false);
  const targetImg = previewImage || `/images/projects/${projectId}.png`;

  if (!imgError) {
    return (
      <div
        onClick={onOpenModal}
        className="w-full relative cursor-pointer group/screen overflow-hidden rounded-xl border border-black/15 dark:border-white/15 bg-slate-900/5 dark:bg-black/50"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={targetImg}
          alt={title}
          onError={() => setImgError(true)}
          className="w-full h-44 sm:h-48 object-cover object-top transition-transform duration-300 group-hover/screen:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/screen:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-3 py-1.5 rounded-full bg-white text-black font-mono text-xs font-bold shadow-md">
            {currentLang === 'id' ? 'Buka Detail Studi Kasus ↗' : 'View Case Study ↗'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onOpenModal}
      className="w-full h-44 sm:h-48 rounded-xl border border-dashed border-black/20 dark:border-white/20 p-4 bg-slate-100/70 dark:bg-slate-900/60 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-200/50 dark:hover:bg-slate-800/60 transition-colors group/ph"
    >
      <Monitor className="w-8 h-8 text-slate-400 dark:text-slate-500 mb-2 group-hover/ph:scale-110 transition-transform" />
      <p className="font-bold text-xs uppercase tracking-tight text-slate-800 dark:text-slate-200 line-clamp-1">
        {title}
      </p>
      <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-1">
        /images/projects/{projectId}.png
      </p>
      <span className="mt-2 text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-400 underline">
        {currentLang === 'id' ? 'Pratinjau Aplikasi' : 'Preview App'} ↗
      </span>
    </div>
  );
}

interface ProjectsProps {
  currentLang: Language;
}

export default function Projects({ currentLang }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const dict = DICTIONARIES[currentLang];

  const filterTabs = [
    { id: 'all', label: dict.projects.filters.all },
    { id: 'Full-Stack Web', label: dict.projects.filters.web },
    { id: 'AI & Computer Vision', label: dict.projects.filters.ai },
    { id: 'Enterprise & POS', label: dict.projects.filters.enterprise },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 bg-[#fafafa] dark:bg-[#050811] text-black dark:text-white transition-colors border-b-2 border-black dark:border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-slate-950 dark:text-white select-none">
              {dict.projects.sectionTitle}
            </h2>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-md font-medium">
            {dict.projects.sectionSubtitle}
          </p>
        </motion.div>

        {/* Filter Tabs with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="flex flex-wrap gap-2 mb-10 select-none"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                sounds.playClick();
                setActiveCategory(tab.id);
              }}
              className={`px-4 py-2 rounded-full border-2 border-black dark:border-white font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-black text-white dark:bg-white dark:text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]'
                  : 'bg-white dark:bg-[#0c121e] text-black dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Projects List: Big Editorial Showcase Cards with Scroll Reveal & Hover Lift */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="rounded-3xl border-2 border-black dark:border-white/20 p-6 sm:p-10 bg-white dark:bg-[#0c121e] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.9)] flex flex-col lg:flex-row gap-8 items-start justify-between group cursor-default"
            >
              {/* Left Column: Project Details */}
              <div className="max-w-2xl flex flex-col justify-between h-full">
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full border border-black/30 dark:border-white/30 text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[10px] font-mono font-bold uppercase">
                        {dict.projects.featuredBadge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-950 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm font-mono font-bold text-slate-500 dark:text-slate-400 uppercase mb-4">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metrics Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg border border-black/20 dark:border-white/20 bg-slate-50 dark:bg-slate-800 text-xs font-mono font-bold text-slate-900 dark:text-slate-100"
                      >
                        ✦ {metric}
                      </span>
                    ))}
                  </div>

                  {/* Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/10 dark:border-white/10 mb-6">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 text-[11px] font-mono text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-extrabold text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{dict.projects.readCaseStudy}</span>
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sounds.playClick()}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border-2 border-black dark:border-white font-bold text-xs uppercase tracking-wider hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
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
                      className="p-2.5 rounded-full border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                      title={dict.projects.sourceCode}
                      aria-label="Source Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Application / Website Preview Window */}
              <div className="w-full lg:w-96 rounded-2xl border-2 border-black dark:border-white/20 overflow-hidden bg-[#fafafa] dark:bg-[#070b14] flex flex-col shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] flex-shrink-0">
                {/* Browser Window Header */}
                <div className="px-3.5 py-2.5 bg-slate-100 dark:bg-slate-900 border-b-2 border-black/10 dark:border-white/10 flex items-center justify-between gap-2">
                  {/* Traffic Light Dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>

                  {/* Browser URL Pill */}
                  <div className="flex-1 max-w-[200px] px-2 py-0.5 rounded-md bg-white dark:bg-black/50 border border-black/10 dark:border-white/10 text-[10px] font-mono text-slate-600 dark:text-slate-400 truncate text-center font-bold">
                    {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : `${project.id}.app`}
                  </div>

                  <span className="w-2.5" />
                </div>

                {/* Screenshot Preview Image Area */}
                <div className="p-3 bg-white dark:bg-[#090d16] flex items-center justify-center">
                  <ProjectPreviewCard
                    projectId={project.id}
                    title={project.title}
                    previewImage={project.previewImage}
                    liveUrl={project.liveUrl}
                    onOpenModal={() => {
                      sounds.playClick();
                      setSelectedProject(project);
                    }}
                    currentLang={currentLang}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        currentLang={currentLang}
      />
    </section>
  );
}
