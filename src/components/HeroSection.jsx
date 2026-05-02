import { Apple, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Container, Reveal } from "./ui.jsx";
import TrustBadges from "./TrustBadges.jsx";

export default function HeroSection() {
  return (
    <section className="relative bg-white pb-16 pt-8 md:pb-20">
      <Container>
        <div className="relative min-h-[600px] overflow-hidden rounded-[6px] bg-gradient-to-b from-white via-[#fff7f1] to-[#ffe9d7] px-4 pt-9 shadow-sm md:min-h-[720px] md:px-8 lg:min-h-[760px]">
          <div className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[430px] rounded-full bg-[#f45113]/30 blur-3xl md:h-[500px] md:w-[560px]" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-[360px] w-[430px] rounded-full bg-[#e67e22]/30 blur-3xl md:h-[500px] md:w-[560px]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#ffd8bd]/80 via-[#fff0e8]/55 to-transparent" />

          <Reveal className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center text-center">
            <h1 className="max-w-[760px] text-4xl font-bold leading-[1.08] tracking-normal text-[#071526] md:text-5xl lg:text-6xl">
              Your Loved Ones Are <span className="text-[#f45113]">Never Alone</span>
            </h1>
            <p className="mt-4 max-w-[560px] text-sm leading-6 text-muted md:text-base">
              Book appointments, request urgent care, and receive family updates with reliable
              elder support anytime, anywhere.
            </p>

            <div className="mt-5 flex items-center justify-center gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-8 items-center gap-2 rounded-full bg-[#171717] px-4 text-[11px] font-semibold text-white shadow-md"
              >
                <Apple className="h-3.5 w-3.5 fill-current" />
                Download
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-8 items-center gap-2 rounded-full border border-dark/15 bg-white px-4 text-[11px] font-semibold text-dark shadow-md"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                Download
              </motion.a>
            </div>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="absolute inset-x-0 bottom-[-34px] z-10 mx-auto flex justify-center px-2 md:bottom-[-42px]"
          >
            <img
              src="/generated-images/hero-care_2.png"
              alt="Caregiver supporting an elderly woman"
              className="w-[1160px] max-w-[128%] object-contain drop-shadow-[0_34px_45px_rgba(31,41,55,0.18)] md:max-w-[104%]"
            />
          </motion.div>
        </div>
        <Reveal className="relative z-20 mt-8 flex justify-center md:mt-10">
          <TrustBadges className="mx-auto" />
        </Reveal>
      </Container>
    </section>
  );
}
