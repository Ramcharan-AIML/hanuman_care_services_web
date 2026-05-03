import { useRef } from "react";
import { BriefcaseBusiness, Heart, ShieldPlus, UserRound } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container, Eyebrow, Reveal } from "./ui.jsx";

const users = [
  {
    icon: BriefcaseBusiness,
    image: "/generated-images/target-nri.webp",
    title: "NRI Families",
    description: "Stay connected and worry-free knowing your loved ones are in safe hands."
  },
  {
    icon: UserRound,
    image: "/generated-images/target-working.webp",
    title: "Working Professionals",
    description: "Reliable care support for your loved ones while you focus on your work."
  },
  {
    icon: Heart,
    image: "/generated-images/target-elderly.webp",
    title: "Elderly People",
    description: "Compassionate care to help elders live safely, comfortably and happily."
  },
  {
    icon: ShieldPlus,
    image: "/generated-images/target-patient.webp",
    title: "Patients",
    description: "Support for recovery with regular check-ins, medication reminders and assistance."
  }
];

const UserCard = ({ user, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Staggered parallax for a dynamic floating grid effect
  const yOffsets = [
    [30, -30],
    [70, -70],
    [30, -30],
    [70, -70]
  ];
  const y = useTransform(scrollYProgress, [0, 1], yOffsets[index % 4]);
  const Icon = user.icon;

  return (
    <Reveal delay={index * 0.05} className="h-full">
      <motion.div style={{ y }} className="h-full">
        <motion.article
          ref={ref}
          whileHover={{ y: -16 }}
          className="flex h-full flex-col overflow-hidden rounded-[12px] border border-white/60 bg-white/70 text-center shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(244,81,19,0.08)]"
        >
          <div className="relative">
            <img src={user.image} alt={user.title} className="h-48 w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          <div className="relative flex flex-1 flex-col px-6 pb-10 pt-14">
            <div className="absolute -top-10 left-1/2 flex h-[80px] w-[80px] -translate-x-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fff0e8] to-[#ffe4d6] shadow-inner border-[6px] border-white">
              <Icon className="h-8 w-8 text-[#f45113]" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-[#071526]">{user.title}</h3>
            <p className="mt-4 text-base leading-7 text-dark/80 flex-1">{user.description}</p>
          </div>
        </motion.article>
      </motion.div>
    </Reveal>
  );
};

function AnimatedAmbientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ 
          scale: [1, 1.25, 1], 
          opacity: [0.4, 0.7, 0.4],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[5%] -left-[5%] h-[700px] w-[700px] rounded-full bg-gradient-to-br from-[#f59e0b]/30 to-[#f45113]/20 blur-[100px]"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1], 
          opacity: [0.5, 0.8, 0.5],
          x: [0, -40, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[0%] -right-[5%] h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-[#f45113]/30 to-[#f59e0b]/20 blur-[90px]"
      />
    </div>
  );
}

export default function TargetUsers() {
  return (
    <section className="relative overflow-hidden bg-[#fafaf9] py-12 md:py-14">
      <AnimatedAmbientBackground />
      <Container className="relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>We Care For</Eyebrow>
          <h2 className="text-4xl font-bold leading-tight text-[#071526] md:text-5xl">Who We Serve</h2>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {users.map((user, index) => (
            <UserCard key={user.title} user={user} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
