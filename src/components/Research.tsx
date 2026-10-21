'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  BookMarked,
  Languages,
  ExternalLink,
  Eye,
  CheckCircle2,
  Calendar,
  ShieldCheck
} from 'lucide-react';
import { Language, DICTIONARIES } from '@/data/dictionaries';
import { PUBLICATIONS, CERTIFICATIONS, TEST_SCORES, Certification } from '@/data/portfolio-data';
import CertificateModal from './CertificateModal';
import { sounds } from '@/lib/sound';

interface ResearchProps {
  currentLang: Language;
}

export default function Research({ currentLang }: ResearchProps) {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const dict = DICTIONARIES[currentLang];

  return (
    <section
      id="research"
      className="py-20 sm:py-28 bg-white dark:bg-[#070b14] text-black dark:text-white transition-colors border-b-2 border-black dark:border-white/20"
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
              {dict.research.sectionTitle}
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-md font-medium">
            {dict.research.sectionSubtitle}
          </p>
        </motion.div>

        {/* Part 1: Scientific Publications Showcase (4 Papers) */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black dark:text-white mb-6 flex items-center gap-2 font-mono"
          >
            <BookMarked className="w-5 h-5" />
            <span>{dict.research.publicationsTitle}</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PUBLICATIONS.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="rounded-3xl border-2 border-black dark:border-white/20 p-6 sm:p-8 bg-[#fafafa] dark:bg-[#0c121e] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full border border-black/30 dark:border-white/30 text-xs font-mono font-bold uppercase bg-white dark:bg-black">
                      {pub.tier}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 font-mono text-[11px] font-bold border border-emerald-500/30">
                      {pub.role}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg sm:text-xl font-black tracking-tight text-slate-950 dark:text-white uppercase leading-snug mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {pub.title}
                  </h4>

                  {/* Journal info */}
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                    <strong className="text-black dark:text-white">{pub.journal}</strong>
                    <span>•</span>
                    <span>{pub.year}</span>
                  </div>

                  {/* Abstract summary */}
                  <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {pub.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1 pt-3 border-t border-black/10 dark:border-white/10">
                    {pub.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
                        <span className="text-black dark:text-white font-bold">✦</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">
                    {dict.research.statusLabel}: <strong className="text-emerald-600 dark:text-emerald-400">{pub.status}</strong>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 2: Industry Certifications with Interactive Viewer */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black dark:text-white mb-6 flex items-center gap-2 font-mono"
          >
            <Award className="w-5 h-5" />
            <span>{dict.research.certificationsTitle}</span>
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                className="rounded-3xl border-2 border-black dark:border-white/20 p-6 bg-white dark:bg-[#0c121e] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    {cert.previewUrl ? (
                      <div className="relative w-16 h-12 rounded-xl overflow-hidden border-2 border-black dark:border-white/20 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-slate-100 dark:bg-slate-800 flex-shrink-0 group-hover:scale-105 transition-transform">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={cert.previewUrl}
                          alt={cert.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ) : (
                      <span className="text-3xl">{cert.badgeUrl}</span>
                    )}
                    <span className="px-2 py-0.5 rounded-full border border-black/20 dark:border-white/20 text-[10px] font-mono font-bold uppercase text-slate-600 dark:text-slate-400">
                      {cert.category}
                    </span>
                  </div>

                  <h4 className="text-base font-black text-slate-950 dark:text-white uppercase tracking-tight leading-snug mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {cert.summary}
                  </p>
                </div>

                {/* View Certificate Trigger */}
                <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setSelectedCert(cert);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-extrabold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{dict.research.viewCertificate}</span>
                  </button>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full border border-black/20 dark:border-white/20 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white"
                      title={dict.research.verifiedOnCredly}
                      aria-label="Verify on Credly"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 3: Standardized Tests & Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black dark:text-white mb-6 flex items-center gap-2 font-mono">
            <Languages className="w-5 h-5" />
            <span>{dict.research.testScoresTitle}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TEST_SCORES.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border-2 border-black dark:border-white/20 p-5 bg-[#fafafa] dark:bg-[#0c121e] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] flex flex-col justify-between group cursor-default"
              >
                <div>
                  <p className="text-[11px] font-mono font-bold uppercase text-slate-500">
                    {item.test}
                  </p>
                  <p className="text-3xl font-black font-mono text-black dark:text-white my-1 tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {item.score}
                  </p>
                  <span className="inline-block px-2 py-0.5 rounded-md bg-black text-white dark:bg-white dark:text-black text-[10px] font-mono font-bold">
                    {item.level}
                  </span>
                </div>
                <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-1 text-[11px] text-slate-500">
                  <span className="truncate">{item.detail}</span>
                  {item.pdfUrl && (
                    <button
                      onClick={() => {
                        sounds.playClick();
                        setSelectedCert({
                          id: `score-${idx}`,
                          name: item.test,
                          issuer: item.detail,
                          credentialId: item.pdfUrl,
                          pdfUrl: item.pdfUrl,
                          previewUrl: item.previewUrl,
                          issuedDate: 'Verified',
                          skills: [item.score, item.level],
                          summary: item.detail,
                          validity: item.level,
                          category: 'AI & Data',
                          badgeUrl: '🏆',
                          verificationType: 'Official Score Report',
                        } as unknown as Certification);
                      }}
                      className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex-shrink-0 cursor-pointer"
                    >
                      <span>{currentLang === 'id' ? 'Lihat' : 'View'}</span>
                      <Eye className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate Viewer Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
        currentLang={currentLang}
      />
    </section>
  );
}
