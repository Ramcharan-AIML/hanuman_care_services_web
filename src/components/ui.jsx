import { motion } from "framer-motion";

export function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-4 md:px-8 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}

export function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }) {
  return (
    <div className="mb-3 flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-normal text-primary">
      <span className="h-px w-7 bg-primary" />
      <span>{children}</span>
      <span className="h-px w-7 bg-primary" />
    </div>
  );
}

export function PrimaryButton({ children, href = "#contact", className = "", icon: Icon }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-bold text-white shadow-glow transition hover:bg-[#f45113] ${className}`}
    >
      {Icon ? <Icon className="h-5 w-5" strokeWidth={2.5} /> : null}
      {children}
    </motion.a>
  );
}

export function SecondaryButton({ children, href = "#services", icon: Icon }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-white px-7 text-sm font-bold text-dark shadow-md transition hover:border-primary hover:text-primary"
    >
      {Icon ? <Icon className="h-5 w-5 text-primary" strokeWidth={2.5} /> : null}
      {children}
    </motion.a>
  );
}
