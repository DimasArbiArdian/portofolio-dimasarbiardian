'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { Language, DICTIONARIES } from '@/data/dictionaries';
import { DEVELOPER_INFO } from '@/data/portfolio-data';
import { sounds } from '@/lib/sound';

interface ContactProps {
  currentLang: Language;
}

export default function Contact({ currentLang }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity',
    message: '',
    website_url: '', // Honeypot
  });

  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const dict = DICTIONARIES[currentLang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    sounds.playClick();

    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || 'Failed to dispatch your message');
      }

      setFeedback({
        type: 'success',
        message: dict.contact.success,
      });

      setFormData({
        name: '',
        email: '',
        subject: 'Job Opportunity',
        message: '',
        website_url: '',
      });
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : dict.contact.error;
      setFeedback({ type: 'error', message: errMsg });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-white dark:bg-[#070b14] text-black dark:text-white transition-colors border-b-2 border-black dark:border-white/20"
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
              {dict.contact.sectionTitle}
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-md font-medium">
            {dict.contact.sectionSubtitle}
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Socials including Instagram with Scroll Reveal & Hover Lift */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-3xl border-2 border-black dark:border-white/20 p-6 sm:p-8 bg-[#fafafa] dark:bg-[#0c121e] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] space-y-5">
              <h3 className="text-xl font-black uppercase tracking-tight text-black dark:text-white">
                {dict.contact.directTitle}
              </h3>

              {/* Direct Info */}
              <div className="space-y-3 font-mono text-xs">
                {/* Email */}
                <a
                  href={`mailto:${DEVELOPER_INFO.email}`}
                  onClick={() => sounds.playClick()}
                  className="flex items-center gap-3 p-3.5 rounded-2xl border-2 border-black/15 dark:border-white/15 bg-white dark:bg-slate-800 hover:border-black dark:hover:border-white transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-bold">{dict.contact.emailLabel}</span>
                    <span className="font-bold text-black dark:text-white group-hover:underline">
                      {DEVELOPER_INFO.email}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/6285872834600"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  className="flex items-center gap-3 p-3.5 rounded-2xl border-2 border-black/15 dark:border-white/15 bg-white dark:bg-slate-800 hover:border-black dark:hover:border-white transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-bold">{dict.contact.whatsappLabel}</span>
                    <span className="font-bold text-black dark:text-white group-hover:underline">
                      {DEVELOPER_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border-2 border-black/15 dark:border-white/15 bg-white dark:bg-slate-800">
                  <div className="w-8 h-8 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-bold">{dict.contact.locationLabel}</span>
                    <span className="font-bold text-black dark:text-white">
                      {DEVELOPER_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels (Instagram, LinkedIn, GitHub) */}
              <div className="pt-4 border-t-2 border-black/10 dark:border-white/10">
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                  {dict.contact.connectSocials}
                </p>

                <div className="grid grid-cols-3 gap-2">
                  {/* Instagram Button (Direct to User's Instagram) */}
                  <a
                    href={DEVELOPER_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playClick()}
                    className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-black dark:border-white/20 bg-white dark:bg-slate-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)] transition-all font-mono text-xs font-bold gap-1 group"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span className="text-[10px]">Instagram</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={DEVELOPER_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playClick()}
                    className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-black dark:border-white/20 bg-white dark:bg-slate-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)] transition-all font-mono text-xs font-bold gap-1 group"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span className="text-[10px]">LinkedIn</span>
                  </a>

                  {/* GitHub */}
                  <a
                    href={DEVELOPER_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playClick()}
                    className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-black dark:border-white/20 bg-white dark:bg-slate-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)] transition-all font-mono text-xs font-bold gap-1 group"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span className="text-[10px]">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form with Scroll Reveal & Hover Lift */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-7 rounded-3xl border-2 border-black dark:border-white/20 p-6 sm:p-8 bg-white dark:bg-[#0c121e] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)]"
          >
            <h3 className="text-xl font-black uppercase tracking-tight text-black dark:text-white mb-6">
              {dict.contact.sendInquiryTitle}
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
                <label htmlFor="contact_website_url">Leave empty</label>
                <input
                  type="text"
                  id="contact_website_url"
                  name="website_url"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website_url}
                  onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
                />
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5 uppercase">
                    {dict.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={dict.contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-black dark:border-white/20 bg-[#fafafa] dark:bg-slate-900 text-black dark:text-white font-sans focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5 uppercase">
                    {dict.contact.emailLabel} *
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={150}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={dict.contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-black dark:border-white/20 bg-[#fafafa] dark:bg-slate-900 text-black dark:text-white font-sans focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5 uppercase">
                  {dict.contact.subjectLabel}
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-black dark:border-white/20 bg-[#fafafa] dark:bg-slate-900 text-black dark:text-white font-sans focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer"
                >
                  <option value="Job Opportunity">{dict.contact.subjects.job}</option>
                  <option value="Project Collaboration">{dict.contact.subjects.collab}</option>
                  <option value="Speaking / Workshop Invitation">{dict.contact.subjects.speaking}</option>
                  <option value="General Inquiry">{dict.contact.subjects.general}</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-slate-700 dark:text-slate-300 font-bold uppercase">
                    {dict.contact.messageLabel}
                  </label>
                  <span className="text-[10px] text-slate-500">
                    {formData.message.length}/2000
                  </span>
                </div>
                <textarea
                  required
                  rows={5}
                  maxLength={2000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={dict.contact.messagePlaceholder}
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
                <span>{submitting ? dict.contact.submitting : dict.contact.submit}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
