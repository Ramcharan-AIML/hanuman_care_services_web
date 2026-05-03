import {
  CalendarDays,
  Clock3,
  Heart,
  Home,
  Shield,
  ShieldCheck,
  Smile,
  Star,
  UsersRound
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const benefitItems = [
  {
    icon: Clock3,
    title: "24/7 Support",
    text: "We're here whenever you need us."
  },
  {
    icon: ShieldCheck,
    title: "Verified Caregivers",
    text: "Experienced & verified professionals."
  },
  {
    icon: Heart,
    title: "Quick Response",
    text: "Get help in minutes, not hours."
  },
  {
    icon: Home,
    title: "Home Visits",
    text: "Care and support in the comfort of home."
  }
];

const stats = [
  { icon: UsersRound, value: "5,000+", label: "Families Trust Us" },
  { icon: Smile, value: "98%", label: "Satisfaction Rate" },
  { icon: Clock3, value: "10 Min", label: "Average Response Time" },
  { icon: ShieldCheck, value: "100%", label: "Safety Guaranteed" }
];

const appTiles = [
  { icon: CalendarDays, label: "Book", sub: "Appointment" },
  { icon: ShieldCheck, label: "Request", sub: "Urgent Care" },
  { icon: UsersRound, label: "Family", sub: "Updates" },
  { icon: Heart, label: "Caregiver", sub: "Support" }
];


function StoreImageButton({ type }) {
  const isApple = type === "apple";
  return (
    <motion.a
      href="#contact"
      aria-label={isApple ? "Download iOS App" : "Download Android App"}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="block rounded-xl shadow-[0_16px_35px_rgba(0,0,0,0.2)] transition"
    >
      <img
        src={isApple ? "/generated-images/app-store.webp" : "/generated-images/google-play.webp"}
        alt={isApple ? "Download on the App Store" : "Get it on Google Play"}
        className={`${isApple ? "h-[60px] w-[176px]" : "h-[60px] w-[194px]"} rounded-xl object-fill`}
      />
    </motion.a>
  );
}

function BenefitRail({ parallaxStyle }) {
  return (
    <motion.div
      style={parallaxStyle}
      initial={{ opacity: 0, x: -28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65, delay: 0.45, ease: "easeOut" }}
      className="absolute left-5 top-[178px] z-30 hidden w-[240px] rounded-[22px] bg-white/78 p-5 shadow-[0_28px_70px_rgba(104,63,31,0.18)] backdrop-blur-xl lg:block xl:left-[88px]"
    >
      <div className="space-y-0">
        {benefitItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`flex gap-3.5 py-4 ${index !== 0 ? "border-t border-orange-100" : "pt-1"}`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                <Icon className="h-5 w-5 text-[#f45113]" strokeWidth={2} />
              </span>
              <span>
                <span className="block text-[15px] font-bold leading-tight text-[#071526]">{item.title}</span>
                <span className="mt-1.5 block text-[13px] leading-5 text-dark/80">{item.text}</span>
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function PhoneMockup({ parallaxStyle }) {
  return (
    <motion.div
      style={parallaxStyle}
      initial={{ opacity: 0, x: 34, y: 18 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.75, delay: 0.55, ease: "easeOut" }}
      className="absolute right-6 top-[190px] z-30 hidden lg:block xl:right-[148px]"
    >
      <div className="relative h-[435px] w-[210px] rounded-[34px] border-[7px] border-[#101820] bg-[#101820] shadow-[0_30px_70px_rgba(31,41,55,0.28)]">
        <div className="absolute left-1/2 top-0 z-20 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-[#101820]" />
        <div className="h-full overflow-hidden rounded-[26px] bg-white px-4 pb-4 pt-8">
          <div className="flex items-center justify-between text-[10px] font-bold text-[#071526]">
            <span>9:01</span>
            <span>4G</span>
          </div>
          <div className="mt-7">
            <p className="text-sm font-bold text-[#071526]">Hello, Rajiv {"\uD83D\uDC4B"}</p>
            <p className="mt-1 text-sm font-semibold leading-5 text-[#071526]">
              How can we help your loved one today?
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {appTiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <div key={tile.label} className="rounded-xl bg-[#fff8f2] px-2 py-4 text-center shadow-sm">
                  <Icon className="mx-auto h-5 w-5 text-[#f45113]" strokeWidth={1.9} />
                  <p className="mt-2 text-[10px] font-bold leading-3 text-[#071526]">{tile.label}</p>
                  <p className="text-[9px] leading-3 text-muted">{tile.sub}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-5">
            <p className="text-xs font-bold text-[#071526]">Upcoming Appointment</p>
            <div className="mt-3 rounded-xl bg-[#fff8f2] p-3">
              <p className="text-[10px] text-muted">Today, 4:00 PM</p>
              <p className="mt-1 text-xs font-bold text-[#071526]">Health Checkup</p>
              <p className="mt-2 text-[10px] font-bold text-[#f45113]">View Details</p>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between rounded-2xl bg-white px-2 py-2 text-[#a7a7a7] shadow-[0_-10px_30px_rgba(31,41,55,0.08)]">
            {[Home, CalendarDays, Shield, UsersRound].map((Icon, index) => (
              <span key={index} className={index === 0 ? "text-[#f45113]" : ""}>
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SocialProof() {
  const socialImages = [
    "/generated-images/social-1.webp",
    "/generated-images/social-2.webp",
    "/generated-images/social-3.webp",
    "/generated-images/social-4.webp"
  ];

  return (
    <div className="mt-3 flex flex-col items-center justify-center gap-3 text-sm font-medium text-dark sm:flex-row">
      <div className="flex -space-x-2">
        {socialImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Trusted Family ${index + 1}`}
            className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-sm"
            style={{ zIndex: socialImages.length - index }}
          />
        ))}
      </div>
      <span>Trusted by 5,000+ families</span>
      <span className="flex text-[#f59e0b]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </span>
    </div>
  );
}

function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.85, ease: "easeOut" }}
      className="relative z-40 mx-auto -mt-[30px] sm:-mt-[50px] lg:-mt-[86px] grid w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-[1010px] grid-cols-1 overflow-hidden rounded-[16px] md:rounded-[22px] bg-white/86 shadow-[0_24px_70px_rgba(104,63,31,0.18)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className={`flex items-center gap-3 md:gap-4 px-4 py-4 md:px-7 md:py-6 ${index !== 0 ? "lg:border-l lg:border-orange-100" : ""} ${
              index > 0 ? "border-t border-orange-100 sm:border-t-0" : ""
            } ${index > 1 ? "sm:border-t sm:border-orange-100 lg:border-t-0" : ""}`}
          >
            <span className="flex h-10 w-10 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-[#fff0e8]">
              <Icon className="h-5 w-5 md:h-7 md:w-7 text-[#f45113]" strokeWidth={1.8} />
            </span>
            <span>
              <span className="block text-lg md:text-2xl font-bold leading-none text-[#071526]">{stat.value}</span>
              <span className="mt-1 md:mt-2 block text-xs md:text-sm text-dark">{stat.label}</span>
            </span>
          </div>
        );
      })}
    </motion.div>
  );
}

function HeroGlow() {
  /*
   * Warm floating bokeh particles — soft circles in the orange/amber/gold palette
   * that gently float upward and pulse behind the hero image.
   * Each particle: x%, y%, size, color, delay, duration, drift direction
   */
  const particles = [
    // Left side particles
    { x: "8%",  y: "72%", size: 120, color: "#f4511320", delay: 0,   dur: 6,  dx: -18, dy: -35 },
    { x: "15%", y: "85%", size: 80,  color: "#e6832018", delay: 0.4, dur: 7,  dx: -12, dy: -28 },
    { x: "5%",  y: "60%", size: 60,  color: "#f59e0b15", delay: 0.8, dur: 8,  dx: -22, dy: -20 },
    { x: "22%", y: "78%", size: 100, color: "#f4731318", delay: 1.2, dur: 6.5,dx: -8,  dy: -32 },
    { x: "12%", y: "55%", size: 45,  color: "#e0781420", delay: 1.6, dur: 7.5,dx: -15, dy: -18 },

    // Center-left particles (behind image)
    { x: "30%", y: "80%", size: 90,  color: "#f4511315", delay: 0.3, dur: 7,  dx: -6,  dy: -30 },
    { x: "38%", y: "70%", size: 55,  color: "#f59e0b12", delay: 0.9, dur: 8,  dx: -4,  dy: -22 },
    { x: "35%", y: "90%", size: 70,  color: "#e6832015", delay: 1.5, dur: 6,  dx: -10, dy: -25 },

    // Center-right particles (behind image)
    { x: "62%", y: "80%", size: 90,  color: "#f4511315", delay: 0.2, dur: 7,  dx: 6,   dy: -30 },
    { x: "58%", y: "68%", size: 55,  color: "#f59e0b12", delay: 1.0, dur: 8,  dx: 4,   dy: -22 },
    { x: "65%", y: "92%", size: 70,  color: "#e6832015", delay: 1.4, dur: 6,  dx: 10,  dy: -25 },

    // Right side particles
    { x: "85%", y: "70%", size: 110, color: "#f4511320", delay: 0.1, dur: 6.5,dx: 18,  dy: -34 },
    { x: "78%", y: "82%", size: 75,  color: "#e6832018", delay: 0.5, dur: 7,  dx: 14,  dy: -26 },
    { x: "92%", y: "62%", size: 55,  color: "#f59e0b15", delay: 0.7, dur: 8,  dx: 20,  dy: -18 },
    { x: "75%", y: "75%", size: 95,  color: "#f4731318", delay: 1.1, dur: 6.5,dx: 10,  dy: -30 },
    { x: "88%", y: "55%", size: 40,  color: "#e0781420", delay: 1.8, dur: 7.5,dx: 16,  dy: -15 },

    // Extra accent particles (tiny sparkles)
    { x: "20%", y: "65%", size: 25, color: "#fbbf2425", delay: 0.6, dur: 5,   dx: -6,  dy: -14 },
    { x: "45%", y: "88%", size: 30, color: "#fbbf2420", delay: 1.3, dur: 5.5, dx: 2,   dy: -16 },
    { x: "55%", y: "85%", size: 28, color: "#fbbf2420", delay: 0.8, dur: 5.5, dx: -2,  dy: -16 },
    { x: "80%", y: "63%", size: 22, color: "#fbbf2425", delay: 1.7, dur: 5,   dx: 8,   dy: -12 },
  ];

  /* Soft radial light bursts behind the sofa area */
  const glowSpots = [
    { x: "42%", y: "75%", size: 320, color: "#f4511308", delay: 0.2, dur: 4 },
    { x: "58%", y: "78%", size: 280, color: "#e6832008", delay: 0.5, dur: 4.5 },
    { x: "50%", y: "85%", size: 400, color: "#f59e0b06", delay: 0,   dur: 5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Background glow spots — large, soft radial gradients */}
      {glowSpots.map((spot, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full"
          style={{
            left: spot.x,
            top: spot.y,
            width: spot.size,
            height: spot.size,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, ${spot.color} 0%, transparent 70%)`,
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 1, 0.7, 1, 0],
            scale: [0.6, 1, 1.15, 1, 0.6],
          }}
          transition={{
            duration: spot.dur,
            delay: spot.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating bokeh particles */}
      {particles.map((p, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, ${p.color} 0%, transparent 70%)`,
            filter: "blur(1px)",
          }}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
          animate={{
            opacity: [0, 0.8, 0.5, 0.8, 0],
            x: [0, p.dx * 0.4, p.dx * 0.8, p.dx],
            y: [0, p.dy * 0.3, p.dy * 0.7, p.dy],
            scale: [0.3, 1, 1.1, 0.9, 0.3],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const { scrollY } = useScroll();
  
  // Parallax transforms for horizontal and vertical effects
  const bgY = useTransform(scrollY, [0, 1000], ["0%", "15%"]);
  const imageY = useTransform(scrollY, [0, 1000], [0, 80]);
  
  // Text parallax
  const textY = useTransform(scrollY, [0, 800], [0, 120]);
  const textOpacity = useTransform(scrollY, [0, 650], [1, 0]);
  
  // Horizontal Slide-Out effects
  const slideLeftX = useTransform(scrollY, [0, 600], [0, -300]);
  const slideRightX = useTransform(scrollY, [0, 600], [0, 300]);
  const fadeOutOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative bg-[#fafaf9]">
      <div className="mx-auto w-full max-w-[1536px] px-0 sm:px-4 lg:px-0">
        <div className="relative overflow-hidden bg-[#fff8f2] shadow-sm md:rounded-[2px] lg:h-[calc(100vh-96px)] lg:min-h-[820px] lg:max-h-[928px] pb-12 sm:pb-16 lg:pb-0">
          <motion.img
            style={{ y: bgY }}
            src="/generated-images/background-image-hero.webp"
            alt=""
            aria-hidden="true"
            fetchpriority="high"
            loading="eager"
            className="absolute inset-0 h-[115%] w-full object-cover object-top"
          />
          <div className="absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-white/40 via-white/8 to-transparent" />

          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative z-20 mx-auto flex max-w-[760px] flex-col items-center px-5 pt-4 text-center md:pt-5 lg:max-w-[850px] lg:pt-4"
          >
            <div className="mb-2 inline-flex items-center gap-3 rounded-full bg-white/62 px-5 py-3 text-base font-bold text-[#9b4617] shadow-sm backdrop-blur-md">
              <ShieldCheck className="h-5 w-5 text-[#f45113]" strokeWidth={2} />
              Trusted Care. Anytime. Anywhere.
            </div>
            <h1 className="max-w-[840px] text-[42px] font-bold leading-[1.03] tracking-normal text-[#071526] md:text-[56px] lg:text-[60px] xl:text-[64px]">
              Your Loved Ones Are <span className="block text-[#f45113]">Never Alone</span>
            </h1>
            <p className="mt-3 max-w-[680px] text-base leading-6 text-muted md:text-lg md:leading-7">
              Book appointments, request urgent care, and receive family updates with reliable
              elder support anytime, anywhere.
            </p>
            <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
              <StoreImageButton type="apple" />
              <StoreImageButton type="play" />
            </div>
            <div className="mt-0">
              <SocialProof />
            </div>
          </motion.div>

          <BenefitRail parallaxStyle={{ x: slideLeftX, opacity: fadeOutOpacity }} />
          <PhoneMockup parallaxStyle={{ x: slideRightX, opacity: fadeOutOpacity }} />

          {/* Warm ambient glow behind the hero image */}
          <HeroGlow />

          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="relative z-10 mx-auto mt-8 flex w-full justify-center pointer-events-none px-4 sm:mt-12 md:px-0 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0"
          >
            <img
              src="/generated-images/women-aunt-hero.webp"
              alt="Caregiver supporting an elderly woman"
              fetchpriority="high"
              loading="eager"
              decoding="sync"
              className="w-full max-w-[960px] object-contain drop-shadow-[0_20px_40px_rgba(31,41,55,0.12)] pointer-events-auto"
            />
          </motion.div>

          <motion.div
            style={{ x: slideRightX, opacity: fadeOutOpacity }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.72, ease: "easeOut" }}
            className="absolute right-8 top-[468px] z-40 hidden h-[112px] w-[112px] items-center justify-center rounded-full bg-[#f47b00] text-center text-white shadow-[0_24px_50px_rgba(244,123,0,0.28)] lg:flex xl:right-[88px]"
          >
            <div>
              <ShieldCheck className="mx-auto h-9 w-9" strokeWidth={1.9} />
              <p className="mt-2 text-sm font-bold leading-5">
                Safe, Secure
                <br />& Reliable
              </p>
            </div>
          </motion.div>

        </div>
        <StatsBar />
      </div>
    </section>
  );
}
