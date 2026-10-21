'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Language, DICTIONARIES } from '@/data/dictionaries';
import { GuestbookEntry, INITIAL_GUESTBOOK_ENTRIES } from '@/data/portfolio-data';
import { sounds } from '@/lib/sound';

interface GuestbookProps {
  currentLang: Language;
  onCountUpdate?: (count: number) => void;
  onOpenDrawer?: () => void;
}

export default function Guestbook({ currentLang, onCountUpdate, onOpenDrawer }: GuestbookProps) {
  const [entries, setEntries] = useState<GuestbookEntry[]>(INITIAL_GUESTBOOK_ENTRIES);
  const [count, setCount] = useState<number>(INITIAL_GUESTBOOK_ENTRIES.length);
  const [loading, setLoading] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    role_or_company: '',
    message: '',
    website_url: '', // Honeypot
  });

  const dict = DICTIONARIES[currentLang];

  const fetchEntries = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/guestbook');
      if (res.ok) {
        const json = await res.json();
        if (json.data && Array.isArray(json.data)) {
          setEntries(json.data);
          const total = json.count ?? json.data.length;
          setCount(total);
          onCountUpdate?.(total);
        }
      }
    } catch (err) {
      console.warn('Using fallback seed guestbook entries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    sounds.playClick();

    if (!formData.name.trim() || !formData.message.trim()) {
      setFeedback({ type: 'error', message: 'Name and message are required.' });
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || 'Failed to submit signature');
      }

      const newEntry: GuestbookEntry = json.data || {
        id: `temp-${Date.now()}`,
        name: formData.name.trim(),
        role_or_company: formData.role_or_company.trim() || undefined,
        message: formData.message.trim(),
        is_approved: true,
        created_at: new Date().toISOString(),
      };

      setEntries((prev) => [newEntry, ...prev]);
      const newTotal = count + 1;
      setCount(newTotal);
      onCountUpdate?.(newTotal);

      setFeedback({ type: 'success', message: dict.guestbook.success });
      setFormData({
        name: '',
        role_or_company: '',
        message: '',
        website_url: '',
      });
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : dict.guestbook.error;
      setFeedback({ type: 'error', message: errMsg });
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  return (
    <section
      id="guestbook"
      className="py-20 sm:py-28 bg-[#fafafa] dark:bg-[#050811] text-black dark:text-white transition-colors border-b-2 border-black dark:border-white/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
              {dict.guestbook.sectionTitle}
            </h2>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              onOpenDrawer?.();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-black dark:border-white font-mono text-xs font-bold uppercase bg-white dark:bg-[#0c121e] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              {dict.guestbook.totalSignatures}: <strong>{count}</strong>
            </span>
            <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded bg-black text-white dark:bg-white dark:text-black font-extrabold">
              LOG ↗
            </span>
          </button>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Sign Form with Scroll Reveal and Hover Elevation */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 rounded-3xl border-2 border-black dark:border-white/20 p-6 sm:p-8 bg-white dark:bg-[#0c121e] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)]"
          >
            <h3 className="text-xl font-black uppercase tracking-tight text-black dark:text-white mb-6">
              {dict.guestbook.leaveNote}
            </h3>

            {feedback && (
              <div
                className={`p-4 rounded-2xl mb-6 text-xs flex items-center gap-2.5 font-bold ${
                  feedback.type === 'success'
                    ? 'border-2 border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300'
                    : 'border-2 border-red-500 bg-red-50 text-red-900 dark:bg-red-950/60 dark:text-red-300'
                }`}
              >
                {feedback.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
                <span>{feedback.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              {/* Hidden Honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="guestbook_website_url">Leave empty</label>
                <input
                  type="text"
                  id="guestbook_website_url"
                  name="website_url"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website_url}
                  onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5 uppercase">
                  {dict.guestbook.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  maxLength={60}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={dict.guestbook.namePlaceholder}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-black dark:border-white/20 bg-[#fafafa] dark:bg-slate-900 text-black dark:text-white font-sans focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Role / Org */}
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5 uppercase">
                  {dict.guestbook.roleLabel}
                </label>
                <input
                  type="text"
                  maxLength={80}
                  value={formData.role_or_company}
                  onChange={(e) => setFormData({ ...formData, role_or_company: e.target.value })}
                  placeholder={dict.guestbook.rolePlaceholder}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-black dark:border-white/20 bg-[#fafafa] dark:bg-slate-900 text-black dark:text-white font-sans focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-slate-700 dark:text-slate-300 font-bold uppercase">
                    {dict.guestbook.messageLabel}
                  </label>
                  <span className="text-[10px] text-slate-500">
                    {formData.message.length}/280
                  </span>
                </div>
                <textarea
                  required
                  rows={4}
                  maxLength={280}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={dict.guestbook.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-black dark:border-white/20 bg-[#fafafa] dark:bg-slate-900 text-black dark:text-white font-sans focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span>{submitting ? dict.guestbook.submitting : dict.guestbook.submit}</span>
              </button>
            </form>
          </motion.div>

          {/* Right: Wall of Notes with Scroll Reveal and Hover Elevation */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-7 rounded-3xl border-2 border-black dark:border-white/20 p-6 sm:p-8 bg-white dark:bg-[#0c121e] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)]"
          >
            <h3 className="text-xl font-black uppercase tracking-tight text-black dark:text-white mb-6 flex items-center justify-between">
              <span>{dict.guestbook.visitorNotes}</span>
              <span className="text-xs font-mono text-slate-500 font-normal">
                {entries.length} Messages
              </span>
            </h3>

            {entries.length === 0 ? (
              <div className="py-12 px-4 rounded-2xl border-2 border-dashed border-black/15 dark:border-white/15 bg-slate-50/60 dark:bg-slate-900/40 flex flex-col items-center justify-center text-center">
                <span className="text-4xl mb-3 select-none">✍️</span>
                <p className="font-black text-sm uppercase tracking-wide text-slate-800 dark:text-slate-200">
                  {currentLang === 'id'
                    ? 'Belum ada catatan pengunjung.'
                    : 'No visitor notes yet.'}
                </p>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 max-w-xs leading-relaxed">
                  {currentLang === 'id'
                    ? 'Jadilah yang pertama meninggalkan pesan di buku tamu portofolio Dimas!'
                    : 'Be the very first visitor to sign and leave a note in Dimas’ portfolio!'}
                </p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    className="p-4 rounded-2xl border-2 border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-slate-900 text-xs hover:border-black/30 dark:hover:border-white/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div>
                        <span className="font-black text-black dark:text-white block text-sm">
                          {entry.name}
                        </span>
                        {entry.role_or_company && (
                          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                            {entry.role_or_company}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {formatDate(entry.created_at)}
                      </span>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-sans leading-relaxed pt-1">
                      &ldquo;{entry.message}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
