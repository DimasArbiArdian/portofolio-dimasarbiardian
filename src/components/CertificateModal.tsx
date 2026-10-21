'use client';

import React, { useEffect, useState } from 'react';
import { X, Award, ExternalLink, Copy, Check, Download, ShieldCheck, ZoomIn } from 'lucide-react';
import { Certification, InternshipCertificate } from '@/data/portfolio-data';
import { Language } from '@/data/dictionaries';
import { sounds } from '@/lib/sound';

interface CertificateModalProps {
  certificate: (Certification | InternshipCertificate & { pdfUrl?: string; previewUrl?: string }) | null;
  onClose: () => void;
  currentLang: Language;
}

export default function CertificateModal({ certificate, onClose, currentLang }: CertificateModalProps) {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'image' | 'interactivePdf'>('image');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  const isInternship = 'signatory' in certificate;
  const certTitle = 'name' in certificate ? certificate.name : certificate.title;
  const certId = certificate.credentialId;
  const pdfUrl = certificate.pdfUrl || (certId.startsWith('/certificates/') ? certId : undefined);

  // Derive preview image URL with fallback to public/certificates/previews/
  const previewImg =
    certificate.previewUrl ||
    (pdfUrl
      ? `/certificates/previews/${decodeURIComponent(pdfUrl.split('/').pop() || '').replace(/\.pdf$/i, '.png')}`
      : null);

  const copyId = () => {
    sounds.playClick();
    navigator.clipboard.writeText(certId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-5xl rounded-3xl bg-white dark:bg-[#0c121e] border-2 border-black dark:border-white/20 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.12)] p-4 sm:p-6 z-10 text-slate-900 dark:text-white transition-all animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
        {/* Top Header Bar */}
        <div className="flex items-start justify-between gap-3 pb-3 border-b-2 border-black/10 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-black/20 dark:border-white/20 bg-cyan-100 dark:bg-cyan-950/60 text-cyan-900 dark:text-cyan-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                <span>
                  {currentLang === 'id' ? 'Sertifikat Asli Terverifikasi' : 'Official Verified Certificate'}
                </span>
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold">
                {certificate.issuer}
              </span>
            </div>

            <h3 className="text-base sm:text-xl font-black tracking-tight text-slate-950 dark:text-white uppercase leading-snug line-clamp-2">
              {certTitle}
            </h3>
          </div>

          {/* Action buttons & Close */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-black dark:border-white/20 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-xs font-mono font-bold transition-all shadow-sm"
                title="Open PDF in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>PDF ↗</span>
              </a>
            )}

            {pdfUrl && (
              <a
                href={pdfUrl}
                download
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-mono font-bold hover:scale-105 active:scale-95 transition-all shadow-sm"
                title="Download Certificate PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{currentLang === 'id' ? 'Unduh' : 'Download'}</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-full border-2 border-black dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Close certificate preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area: Real Image Preview */}
        <div className="relative my-3 flex-1 overflow-auto rounded-2xl border-2 border-black/15 dark:border-white/15 bg-slate-950/[0.03] dark:bg-black/50 p-2 sm:p-4 flex items-center justify-center min-h-[260px] max-h-[66vh]">
          {viewMode === 'image' && previewImg ? (
            <div className="relative group max-w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewImg}
                alt={certTitle}
                className="max-h-[60vh] w-auto max-w-full object-contain rounded-xl border border-black/20 dark:border-white/20 shadow-md bg-white select-none"
              />
              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 hidden group-hover:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/85 text-white backdrop-blur text-xs font-mono font-bold shadow-lg hover:bg-black transition-all"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>{currentLang === 'id' ? 'Buka Layar Penuh' : 'Fullscreen PDF'}</span>
                </a>
              )}
            </div>
          ) : pdfUrl ? (
            <iframe
              src={`${pdfUrl}#toolbar=0`}
              title={certTitle}
              className="w-full h-[60vh] rounded-xl border border-black/15 dark:border-white/15"
            />
          ) : (
            <div className="text-center py-12 text-slate-500">
              <Award className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p className="font-mono text-xs">Certificate preview ready</p>
            </div>
          )}
        </div>

        {/* Certificate Metadata & Verification Footer */}
        <div className="pt-2 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500 font-bold">Credential ID:</span>
            <code className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 font-bold text-slate-800 dark:text-slate-200 max-w-[220px] sm:max-w-xs truncate">
              {certId}
            </code>
            <button
              onClick={copyId}
              className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300"
              title="Copy ID"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
            {/* View Mode Toggle if PDF is available */}
            {pdfUrl && previewImg && (
              <button
                onClick={() => setViewMode((prev) => (prev === 'image' ? 'interactivePdf' : 'image'))}
                className="px-2.5 py-1 rounded-full border border-black/20 dark:border-white/20 text-[11px] font-semibold text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white"
              >
                {viewMode === 'image' ? 'Switch to PDF Embed' : 'Switch to Image Preview'}
              </button>
            )}

            {!isInternship && certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs hover:scale-105 active:scale-95 transition-all shadow-sm"
              >
                <span>Verify on Credly</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-bold text-xs"
              >
                <span>View PDF</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
