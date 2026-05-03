import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container, Eyebrow, Reveal } from "./ui.jsx";

const testimonials = [
  {
    quote:
      "Hanuman Care Services has been a blessing for our family. Their quick response and compassionate care have given us immense peace of mind while living abroad.",
    name: "Meena S.",
    role: "NRI, USA",
    image: "/generated-images/target-working.png"
  },
  {
    quote:
      "The caregivers are not only professional but also treat my father with so much respect and kindness. Highly recommended!",
    name: "Rajiv K.",
    role: "Working Professional",
    image: "/generated-images/target-nri.png"
  },
  {
    quote:
      "Excellent support and regular updates. We feel confident knowing our mother is in safe and caring hands.",
    name: "Anita P.",
    role: "Daughter, Hyderabad",
    image: "/generated-images/contact-caregiver.png"
  }
];

const TestimonialCard = ({ item, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Staggered parallax to create an arch or V shape during scroll
  const yOffsets = [
    [40, -40],
    [80, -80],
    [40, -40]
  ];
  const y = useTransform(scrollYProgress, [0, 1], yOffsets[index % 3]);

  return (
    <Reveal delay={index * 0.05} className="h-full">
      <motion.div style={{ y }} className="h-full">
        <motion.article
          ref={ref}
          whileHover={{ y: -8 }}
          className="flex h-full flex-col rounded-[32px] border border-white/60 bg-white/70 p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(244,81,19,0.08)]"
        >
          <Quote className="h-10 w-10 fill-[#f45113] text-[#f45113]" />
          <p className="mt-8 text-base leading-8 text-dark/80 flex-1">"{item.quote}"</p>
          <div className="mt-8 flex text-[#f59e0b]">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <Star key={starIndex} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4 border-t border-dark/5 pt-6">
            <img src={item.image} alt={item.name} className="h-14 w-14 rounded-full object-cover shadow-sm" />
            <div>
              <p className="text-base font-bold text-dark">{item.name}</p>
              <p className="text-sm text-muted">{item.role}</p>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </Reveal>
  );
};

export default function Testimonials() {
  return (
    <section className="bg-[#fafaf9] py-12 md:py-14">
      <Container>
        <Reveal className="text-center">
          <Eyebrow>What Families Say</Eyebrow>
          <h2 className="text-4xl font-bold text-[#071526] md:text-5xl">
            Real Stories, Real Peace of Mind
          </h2>
          <p className="mt-6 text-lg text-muted">Trusted by families who chose us for their loved ones.</p>
        </Reveal>

        <div className="relative mt-16">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="absolute -left-4 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#f45113] shadow-lg md:flex lg:-left-12 hover:bg-[#f45113] hover:text-white transition-colors border border-border"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <TestimonialCard key={item.name} item={item} index={index} />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            className="absolute -right-4 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#f45113] shadow-lg md:flex lg:-right-12 hover:bg-[#f45113] hover:text-white transition-colors border border-border"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="mt-12 flex justify-center gap-3">
          <span className="h-2.5 w-8 rounded-full bg-[#f45113]" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
      </Container>
    </section>
  );
}
