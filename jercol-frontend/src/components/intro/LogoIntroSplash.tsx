'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LogoIntroSplash() {
  const [shouldShow, setShouldShow] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // If already seen or arriving via direct section anchor (campaign link), dismiss immediately
    const hasSeenIntro = sessionStorage.getItem('jercol_intro_seen');
    const hasHash = typeof window !== 'undefined' && Boolean(window.location.hash);
    if (hasSeenIntro || hasHash) {
      document.documentElement.classList.remove('showing-intro');
      setShouldShow(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsExiting(true);
    document.documentElement.classList.remove('showing-intro');
    sessionStorage.setItem('jercol_intro_seen', 'true');
    setTimeout(() => {
      setShouldShow(false);
    }, 500);
  };

  useEffect(() => {
    if (!shouldShow) return;

    // Failsafe auto-dismiss after 3.6 seconds (video is 3s long)
    const timer = setTimeout(() => {
      handleDismiss();
    }, 3600);

    return () => clearTimeout(timer);
  }, [shouldShow]);

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Subtle Electric Blue Ambient Glow */}
          <div className="absolute w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

          {/* Intro Video (Black background with seamless blend) */}
          <div className="relative w-full max-w-xl aspect-video flex items-center justify-center px-4">
            <video
              src="/JT_logo_intro.mp4"
              autoPlay
              muted
              playsInline
              onEnded={handleDismiss}
              className="w-full h-auto object-contain mix-blend-screen"
            />
          </div>

          {/* Subtle Skip Button (crisp rounded-md, NO pill) */}
          <button
            onClick={handleDismiss}
            className="absolute bottom-8 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-widest px-3.5 py-1.5 rounded-md border border-slate-800 hover:border-slate-700 bg-slate-950/80 backdrop-blur-sm"
          >
            Saltar intro ↵
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
