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
import { motion } from "framer-motion";

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

const avatarColors = ["#6b3a24", "#f1b083", "#26364f", "#e0a06b"];

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
        src={isApple ? "/generated-images/app-store.png" : "/generated-images/google-play.png"}
        alt={isApple ? "Download on the App Store" : "Get it on Google Play"}
        className={`${isApple ? "h-[60px] w-[176px]" : "h-[60px] w-[194px]"} rounded-xl object-fill`}
      />
    </motion.a>
  );
}

function BenefitRail() {
  return (
    <motion.div
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

function PhoneMockup() {
  return (
    <motion.div
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
    "/generated-images/social-1.jpg",
    "/generated-images/social-2.jpg",
    "/generated-images/social-3.jpg",
    "/generated-images/social-4.jpg"
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
      className="relative z-40 mx-auto -mt-[86px] grid w-[calc(100%-32px)] max-w-[1010px] grid-cols-1 overflow-hidden rounded-[22px] bg-white/86 shadow-[0_24px_70px_rgba(104,63,31,0.18)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className={`flex items-center gap-4 px-7 py-6 ${index !== 0 ? "lg:border-l lg:border-orange-100" : ""} ${
              index > 0 ? "border-t border-orange-100 sm:border-t-0" : ""
            } ${index > 1 ? "sm:border-t sm:border-orange-100 lg:border-t-0" : ""}`}
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fff0e8]">
              <Icon className="h-7 w-7 text-[#f45113]" strokeWidth={1.8} />
            </span>
            <span>
              <span className="block text-2xl font-bold leading-none text-[#071526]">{stat.value}</span>
              <span className="mt-2 block text-sm text-dark">{stat.label}</span>
            </span>
          </div>
        );
      })}
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative bg-white pb-16 md:pb-20">
      <div className="mx-auto w-full max-w-[1536px] px-0 sm:px-4 lg:px-0">
        <div className="relative min-h-[860px] overflow-hidden bg-[#fff8f2] shadow-sm md:min-h-[920px] md:rounded-[2px] lg:h-[calc(100vh-96px)] lg:min-h-[820px] lg:max-h-[928px]">
          <img
            src="/generated-images/background-image-hero.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-white/40 via-white/8 to-transparent" />

          <motion.div
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

          <BenefitRail />
          <PhoneMockup />

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="absolute inset-x-0 bottom-0 z-10 mx-auto flex justify-center pointer-events-none px-4 md:px-0"
          >
            <img
              src="/generated-images/women-aunt-hero.png"
              alt="Caregiver supporting an elderly woman"
              className="w-full max-w-[960px] object-contain drop-shadow-[0_20px_40px_rgba(31,41,55,0.12)] pointer-events-auto"
            />
          </motion.div>

          <motion.div
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
