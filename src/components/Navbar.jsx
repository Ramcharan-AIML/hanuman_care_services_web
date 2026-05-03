import { useState, useEffect } from "react";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryButton } from "./ui.jsx";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/30 backdrop-blur-md shadow-sm border-b border-orange-100/60" 
          : "bg-[#fff8f2] border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[96px] w-full max-w-[1536px] items-center justify-between px-5 py-4 md:px-10 lg:px-12">
        <a href="#" className="flex items-center gap-2 md:gap-3">
          <img
            src="/generated-images/logo-hanuman.png"
            alt="Hanuman Care Services Logo"
            className="w-[48px] sm:w-[54px] md:w-[62px] h-auto object-contain"
          />
          <img
            src="/generated-images/hanuman-name.png"
            alt="Hanuman Care Services Name"
            className="w-[96px] sm:w-[110px] md:w-[150px] h-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-10 text-sm font-medium text-dark lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-primary">
              {item.label}
            </a>
          ))}
          <PrimaryButton icon={Phone} className="min-h-14 px-8">
            Get Help Now
          </PrimaryButton>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-dark shadow-sm lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-orange-100 bg-white shadow-lg lg:hidden"
          >
            <div className="px-4 py-4">
              <div className="mx-auto flex max-w-[1240px] flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-dark hover:bg-cream"
                  >
                    {item.label}
                  </a>
                ))}
                <PrimaryButton icon={Phone} className="w-full">
                  Get Help Now
                </PrimaryButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
