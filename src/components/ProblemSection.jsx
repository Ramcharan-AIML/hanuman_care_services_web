import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Ambulance, Plane, ShieldCheck } from "lucide-react";
import { Container, Eyebrow, Reveal } from "./ui.jsx";

const problems = [
  {
    number: "01",
    title: "Emergencies with no help",
    description: "When sudden health issues or accidents strike, immediate care is crucial.",
    image: "/generated-images/problem-emergency.png",
    icon: Ambulance,
    reverse: false
  },
  {
    number: "02",
    title: "Far from family",
    description: "Distance creates stress and helplessness when elders live alone.",
    image: "/generated-images/problem-distance.png",
    icon: Plane,
    reverse: true
  },
  {
    number: "03",
    title: "Untrusted caregivers",
    description: "Finding safe and reliable support is difficult for families apart.",
    image: "/generated-images/problem-trust.png",
    icon: ShieldCheck,
    reverse: false
  }
];

const ProblemCard = ({ item }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  // Text floats up significantly faster than the user scrolls
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  // Image has a subtle zoom-in and float as it enters the center of the screen
  const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.02, 0.95]);
  const yImage = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const scaleXLine = useTransform(scrollYProgress, [0.3, 0.55], [0, 1]);
  const Icon = item.icon;

  return (
    <div ref={ref} className="relative grid items-center gap-12 md:grid-cols-2 md:gap-28 lg:gap-36">
      {/* Animated Connecting Line (Desktop Only) */}
      <motion.div
        style={{ y: yText, scaleX: scaleXLine }}
        className={`absolute top-1/2 z-0 hidden h-[14px] rounded-full bg-gradient-to-r ${
          item.reverse 
            ? "from-[#ff9d00] via-[#ff5100] to-[#ff1100] right-[20%]" 
            : "from-[#ff1100] via-[#ff5100] to-[#ff9d00] left-[20%]"
        } shadow-[0_0_30px_rgba(255,30,0,0.8)] md:block w-[60%] ${
          item.reverse ? "origin-right" : "origin-left"
        }`}
      />
      {/* Animated Connecting Line (Mobile Only) */}
      <motion.div
        style={{ scaleY: scaleXLine }}
        className={`absolute left-1/2 top-[15%] bottom-[15%] z-0 w-[8px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#ff1100] via-[#ff5100] to-[#ff9d00] shadow-[0_0_20px_rgba(255,30,0,0.6)] md:hidden origin-top`}
      />
      {/* Text Block */}
      <motion.div 
        style={{ y: yText }}
        className={`mx-auto w-full max-w-[440px] rounded-[32px] bg-white p-10 shadow-[0_24px_60px_rgba(0,0,0,0.05)] backdrop-blur-xl border border-white relative z-20 ${item.reverse ? "md:order-2 md:pl-8" : "md:order-1"}`}
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fff0e8] to-[#ffe4d6] text-xl font-bold text-[#f45113] shadow-inner">
          {item.number}
        </span>
        <h3 className="mt-8 text-3xl font-bold leading-tight text-[#071526] md:text-4xl">
          {item.title}
        </h3>
        <p className="mt-5 text-lg leading-8 text-dark/80">{item.description}</p>
      </motion.div>

      {/* Image Block */}
      <motion.div 
        style={{ y: yImage, scale: scaleImage }}
        className={`relative mx-auto w-full max-w-[600px] z-10 ${item.reverse ? "md:order-1" : "md:order-2"}`}
      >
        <div className="relative overflow-hidden rounded-[40px] shadow-2xl border-[8px] border-white bg-white">
          <img src={item.image} alt={item.title} className="h-[300px] w-full object-cover md:h-[400px]" />
        </div>
        <div
          className={`absolute -bottom-6 ${
            item.reverse ? "-left-6" : "-right-6"
          } flex h-[100px] w-[100px] items-center justify-center rounded-[32px] bg-white shadow-xl rotate-3`}
        >
          <Icon className="h-11 w-11 text-[#f45113]" strokeWidth={2.5} />
        </div>
      </motion.div>
    </div>
  );
};

function AnimatedAmbientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ 
          scale: [1, 1.25, 1], 
          opacity: [0.5, 0.8, 0.5],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -right-[5%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#f45113]/30 to-[#f59e0b]/20 blur-[90px]"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.4, 0.7, 0.4],
          x: [0, 40, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[30%] -left-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#f59e0b]/30 to-[#f45113]/20 blur-[100px]"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1], 
          opacity: [0.5, 0.8, 0.5],
          x: [0, 20, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-[10%] right-[10%] h-[700px] w-[700px] rounded-full bg-gradient-to-tl from-[#f45113]/25 to-[#f59e0b]/15 blur-[110px]"
      />
    </div>
  );
}

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafaf9] pt-10 pb-24 md:pt-12 md:pb-32">
      <AnimatedAmbientBackground />

      <Container className="relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>We Are Here For You</Eyebrow>
          <h2 className="text-4xl font-bold leading-tight text-[#071526] md:text-5xl">
            Challenges Families Face Every Day
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-lg leading-8 text-muted">
            We understand the worries of families. We are here to take that responsibility with care
            and compassion.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16 md:space-y-10">
          {problems.map((item) => (
            <ProblemCard key={item.number} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
