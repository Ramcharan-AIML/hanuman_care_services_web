import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, X } from "lucide-react";

const PLAY_STORE_URL = "https://play.google.com/store";

export default function FloatingAppBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;
      const trigger = window.innerHeight * 0.6;
      setVisible(window.scrollY > trigger);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  const handleDismiss = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDismissed(true);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.85 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 80, opacity: 0, scale: 0.85 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="fixed bottom-5 right-4 z-50 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8"
        >
          {/* Dismiss button - floating above */}
          <button
            onClick={handleDismiss}
            aria-label="Dismiss download banner"
            className="absolute -top-2 -right-1 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-gray-800/80 text-white/80 shadow-md transition hover:bg-gray-700 hover:text-white md:h-6 md:w-6"
          >
            <X className="h-3 w-3 md:h-3.5 md:w-3.5" strokeWidth={2.5} />
          </button>

          {/* Mobile: Icon-only compact circle */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex md:hidden h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#f45113] to-[#f59e0b] text-white shadow-[0_6px_24px_rgba(244,81,19,0.4)] transition-all duration-300 hover:shadow-[0_10px_32px_rgba(244,81,19,0.55)] hover:scale-110 active:scale-95"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f45113] to-[#f59e0b] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50" />
            <Smartphone className="relative h-6 w-6 text-white" strokeWidth={2} />
          </a>

          {/* Desktop/Tablet: Full pill with text */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative hidden md:flex items-center gap-3 rounded-full bg-gradient-to-r from-[#f45113] to-[#f59e0b] px-6 py-3.5 lg:px-7 lg:py-4 text-white shadow-[0_8px_30px_rgba(244,81,19,0.4)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(244,81,19,0.55)] hover:scale-105 active:scale-[0.98]"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f45113] to-[#f59e0b] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50" />

            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <Smartphone className="h-5 w-5 text-white" strokeWidth={2} />
            </span>
            <span className="relative">
              <span className="block text-sm font-bold leading-tight tracking-wide">Download App</span>
              <span className="block text-[11px] font-medium leading-tight text-white/80">iOS & Android</span>
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
