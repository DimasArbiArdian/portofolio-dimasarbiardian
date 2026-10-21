'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Send, CheckCircle2, AlertCircle, X, Terminal } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Language, DICTIONARIES } from '@/data/dictionaries';
import { GuestbookEntry, INITIAL_GUESTBOOK_ENTRIES } from '@/data/portfolio-data';
import { sounds } from '@/lib/sound';

interface GuestbookDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onCountUpdate?: (count: number) => void;
}

export default function GuestbookDrawer({
  isOpen,
  onClose,
  currentLang,
  onCountUpdate,
}: GuestbookDrawerProps) {
  const [entries, setEntries] = useState<GuestbookEntry[]>(INITIAL_GUESTBOOK_ENTRIES);
  const [loading, setLoading] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [authProvider, setAuthProvider] = useState<'guest' | 'github' | 'google'>('guest');
  const [userName, setUserName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [websiteUrl, setWebsiteUrl] = useState<string>(''); // Honeypot
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const dict = DICTIONARIES[currentLang];
  const listEndRef = useRef<HTMLDivElement>(null);

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        sounds.playClick();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      fetchEntries();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const fetchEntries = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/guestbook');
      if (res.ok) {
        const json = await res.json();
        if (json.data && Array.isArray(json.data)) {
          setEntries(json.data);
          const total = json.count ?? json.data.length;
          onCountUpdate?.(total);
        }
      }
    } catch (err) {
      console.warn('Fallback guestbook:', err);
    } finally {
      setLoading(false);
    }
  };

  const [githubUsername, setGithubUsername] = useState('');
  const [syncingGithub, setSyncingGithub] = useState(false);
  const [githubUserVerified, setGithubUserVerified] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const prov = params.get('provider');
      if (prov === 'github' || prov === 'google') {
        setAuthProvider(prov);
        if (!userName) {
          setUserName(prov === 'github' ? 'GitHub Visitor' : 'Google Guest');
        }
      }
    }
  }, []);

  const handleSelectAuth = (provider: 'github' | 'google') => {
    sounds.playClick();
    setAuthProvider(provider);
    if (!userName) {
      setUserName(provider === 'github' ? 'GitHub Visitor' : 'Google Guest');
    }
    // Direct visitor to official OAuth provider gateway
    const returnUrl = encodeURIComponent(window.location.pathname + '?drawer=guestbook&provider=' + provider);
    window.location.href = `/api/auth/signin?provider=${provider}&callbackUrl=${returnUrl}`;
  };

  const handleSyncGithub = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!githubUsername.trim()) return;
    setSyncingGithub(true);
    sounds.playClick();
    try {
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(githubUsername.trim())}`);
      if (res.ok) {
        const gh = await res.json();
        setUserName(gh.name || gh.login);
        setAuthProvider('github');
        setGithubUserVerified(gh.login);
        setFeedback({
          type: 'success',
          message: `Connected as @${gh.login} (${gh.name || 'GitHub User'})!`,
        });
      } else {
        setFeedback({
          type: 'error',
          message: `GitHub user "${githubUsername}" not found.`,
        });
      }
    } catch {
      setFeedback({
        type: 'error',
        message: 'Could not connect to GitHub API.',
      });
    } finally {
      setSyncingGithub(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    sounds.playClick();

    if (!userName.trim() || !message.trim()) {
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
        body: JSON.stringify({
          name: userName.trim(),
          role_or_company: authProvider !== 'guest' ? `Signed with ${authProvider}` : undefined,
          message: message.trim(),
          website_url: websiteUrl,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || 'Failed to submit note');
      }

      const newEntry: GuestbookEntry = json.data || {
        id: `temp-${Date.now()}`,
        name: userName.trim(),
        role_or_company: authProvider !== 'guest' ? `Signed with ${authProvider}` : undefined,
        message: message.trim(),
        is_approved: true,
        created_at: new Date().toISOString(),
      };

      const updated = [newEntry, ...entries];
      setEntries(updated);
      onCountUpdate?.(updated.length);

      setFeedback({ type: 'success', message: dict.guestbook.success });
      setMessage('');
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : dict.guestbook.error;
      setFeedback({ type: 'error', message: errMsg });
    } finally {
      setSubmitting(false);
    }
  };

  const getAvatarBg = (name: string) => {
    const colors = [
      'bg-purple-600',
      'bg-emerald-600',
      'bg-cyan-600',
      'bg-indigo-600',
      'bg-amber-600',
      'bg-rose-600',
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

  const formatLogDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return dateStr;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Blurred Backdrop */}
      <div
        onClick={() => {
          sounds.playClick();
          onClose();
        }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      {/* Slide-over Right Panel (Matching Screenshot) */}
      <div className="relative w-full max-w-lg bg-white dark:bg-[#0c121e] text-black dark:text-white border-l-2 border-black dark:border-white/20 h-full flex flex-col shadow-2xl z-10 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b-2 border-black/10 dark:border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Terminal Square Icon */}
            <div className="w-9 h-9 rounded-xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-mono font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)]">
              &gt;_
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-mono font-black text-sm tracking-tight text-black dark:text-white">
                  ~/guestbook.log
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-emerald-500/30">
                  LIVE
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                {entries.length} total signatures
              </p>
            </div>
          </div>

          {/* Close ESC Pill Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="px-3.5 py-1.5 rounded-full border-2 border-black dark:border-white font-mono text-xs font-bold uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <span>ESC</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Sign In Banner Box */}
        <div className="p-4 sm:p-5 border-b border-black/10 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300 mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{dict.guestbook.signInPrompt}</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* GitHub Button */}
            <button
              onClick={() => handleSelectAuth('github')}
              className={`py-2 px-3 rounded-xl border-2 border-black dark:border-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                authProvider === 'github'
                  ? 'bg-black text-white dark:bg-white dark:text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)]'
                  : 'bg-black text-white hover:bg-slate-800'
              }`}
              title="Sign in with GitHub"
            >
              <GithubIcon className="w-4 h-4 fill-white" />
              <span>GitHub ↗</span>
            </button>

            {/* Google Button */}
            <button
              onClick={() => handleSelectAuth('google')}
              className={`py-2 px-3 rounded-xl border-2 border-black dark:border-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                authProvider === 'google'
                  ? 'bg-slate-200 text-black dark:bg-slate-700 dark:text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white text-black hover:bg-slate-100'
              }`}
              title="Sign in with Google"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Google ↗</span>
            </button>
          </div>

          {/* Quick GitHub Username Connector */}
          <form onSubmit={handleSyncGithub} className="mt-3 pt-3 border-t border-black/10 dark:border-white/10 flex items-center gap-1.5">
            <input
              type="text"
              placeholder={dict.guestbook.rolePlaceholder.includes('GitHub') ? 'Ketik username GitHub...' : 'Or enter GitHub username...'}
              value={githubUsername}
              onChange={(e) => setGithubUsername(e.target.value)}
              className="flex-1 px-3 py-1.5 rounded-xl border border-black/20 dark:border-white/20 bg-white dark:bg-slate-800 text-xs font-mono text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white"
            />
            <button
              type="submit"
              disabled={syncingGithub || !githubUsername.trim()}
              className="px-3 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold uppercase tracking-wider hover:scale-105 active:scale-95 disabled:opacity-40 transition-all cursor-pointer whitespace-nowrap shadow-sm"
            >
              {syncingGithub ? '...' : 'Sync'}
            </button>
          </form>
        </div>

        {/* Message Feeds (Matching screenshot layout) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
          {/* Developer Sticky Message on the RIGHT (like screenshot) */}
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 mb-1">
              <span className="px-1.5 py-0.2 rounded bg-black text-white dark:bg-white dark:text-black font-extrabold text-[10px]">
                DEV
              </span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="font-bold text-black dark:text-white">Dimas Arbi Ardian</span>
            </div>

            <div className="flex items-end gap-2 max-w-[85%]">
              <div className="bg-black text-white dark:bg-white dark:text-black px-4 py-2.5 rounded-2xl rounded-tr-sm text-xs sm:text-sm font-medium shadow-md">
                {dict.guestbook.devReply}
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
                D
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 mt-1">
              <span>↳ {dict.guestbook.replyLabel}</span>
              <span>Oct 21, 2026, 09:00 AM</span>
            </div>
          </div>

          {/* Visitor Messages Feed on the LEFT (like screenshot) */}
          {entries.filter((item) => !item.name.toLowerCase().includes('dimas')).length === 0 ? (
            <div className="py-8 px-4 rounded-2xl border-2 border-dashed border-black/10 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/40 text-center my-3">
              <span className="text-2xl mb-1.5 inline-block select-none">💬</span>
              <p className="font-bold text-xs text-slate-700 dark:text-slate-300">
                {currentLang === 'id' ? 'Belum ada pesan pengunjung.' : 'No visitor messages yet.'}
              </p>
              <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                {currentLang === 'id'
                  ? 'Ketik nama dan pesan Anda di bawah untuk meninggalkan jejak!'
                  : 'Write your name and message below to leave your mark!'}
              </p>
            </div>
          ) : (
            entries.map((item) => {
              const initial = item.name.charAt(0).toUpperCase() || 'V';
              const isDev = item.name.toLowerCase().includes('dimas');

              if (isDev) return null; // already displayed as sticky owner note

              return (
                <div key={item.id} className="flex flex-col items-start gap-1">
                {/* Author row */}
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-600 dark:text-slate-400 ml-10 mb-0.5">
                  <span className="font-bold text-black dark:text-white">{item.name}</span>
                  {item.role_or_company?.includes('google') ? (
                    <svg className="w-3 h-3" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  ) : (
                    <GithubIcon className="w-3 h-3 text-slate-500" />
                  )}
                </div>

                {/* Bubble row */}
                <div className="flex items-end gap-2 max-w-[85%]">
                  <div
                    className={`w-8 h-8 rounded-full ${getAvatarBg(
                      item.name
                    )} text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm`}
                  >
                    {initial}
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-4 py-2.5 rounded-2xl rounded-tl-sm text-xs sm:text-sm font-normal shadow-sm border border-black/5 dark:border-white/10">
                    {item.message}
                  </div>
                </div>

                {/* Timestamp and reply */}
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 ml-10 mt-0.5">
                  <span>{formatLogDate(item.created_at)}</span>
                  <span>↳ {dict.guestbook.replyLabel}</span>
                </div>
              </div>
            );
          }))}
          <div ref={listEndRef} />
        </div>

        {/* Bottom Submission Form */}
        <div className="p-4 sm:p-5 border-t-2 border-black/10 dark:border-white/10 bg-white dark:bg-[#0c121e]">
          {feedback && (
            <div
              className={`p-2.5 rounded-xl mb-3 text-xs flex items-center gap-2 font-mono font-bold ${
                feedback.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-500/30 dark:bg-emerald-950/60 dark:text-emerald-300'
                  : 'bg-red-50 text-red-800 border border-red-500/30 dark:bg-red-950/60 dark:text-red-300'
              }`}
            >
              {feedback.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
              )}
              <span>{feedback.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-2.5">
            {/* Honeypot */}
            <input
              type="text"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
            />

            <div className="flex gap-2">
              <input
                type="text"
                required
                maxLength={50}
                placeholder={dict.guestbook.namePlaceholder}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-1/3 px-3 py-2 rounded-xl border-2 border-black/20 dark:border-white/20 bg-slate-50 dark:bg-slate-900 text-xs font-mono focus:outline-none focus:border-black dark:focus:border-white transition-all"
              />

              <div className="flex-1 relative flex items-center">
                <input
                  type="text"
                  required
                  maxLength={200}
                  placeholder={dict.guestbook.messagePlaceholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full pl-3 pr-10 py-2 rounded-xl border-2 border-black/20 dark:border-white/20 bg-slate-50 dark:bg-slate-900 text-xs font-mono focus:outline-none focus:border-black dark:focus:border-white transition-all"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="absolute right-1.5 p-1.5 rounded-lg bg-black text-white dark:bg-white dark:text-black disabled:opacity-50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  title={dict.guestbook.submit}
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <p className="text-[10px] text-center font-mono text-slate-400">
              {dict.guestbook.footerNote}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
