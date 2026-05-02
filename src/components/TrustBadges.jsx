import { Clock3, Heart, Home, UsersRound } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { icon: UsersRound, label: "Verified", sub: "Team" },
  { icon: Heart, label: "24/7", sub: "Support" },
  { icon: Clock3, label: "Quick", sub: "Response" },
  { icon: Home, label: "Home", sub: "Visits" }
];

export default function TrustBadges({ className = "" }) {
  return (
    <div className={`grid max-w-[610px] grid-cols-2 rounded-2xl border border-border bg-white shadow-soft sm:grid-cols-4 ${className}`}>
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={badge.label}
            whileHover={{ y: -5 }}
            className={`min-h-32 px-7 py-6 ${index !== 0 ? "border-l border-border" : ""} ${index > 1 ? "border-t sm:border-t-0" : ""}`}
          >
            <Icon className="mb-5 h-7 w-7 text-primary" strokeWidth={1.9} />
            <p className="text-base font-bold leading-6 text-dark">
              {badge.label}
              <br />
              {badge.sub}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
