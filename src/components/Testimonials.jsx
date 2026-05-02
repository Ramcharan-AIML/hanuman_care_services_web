import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
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

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <Reveal className="text-center">
          <Eyebrow>What Families Say</Eyebrow>
          <h2 className="text-3xl font-semibold text-[#071526] md:text-4xl">
            Real Stories, Real Peace of Mind
          </h2>
          <p className="mt-4 text-sm text-muted">Trusted by families who chose us for their loved ones.</p>
        </Reveal>

        <div className="relative mt-10">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="absolute -left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#f45113] text-white shadow-glow md:flex lg:-left-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="grid gap-7 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.05}>
                <motion.article
                  whileHover={{ y: -6 }}
                  className="min-h-[300px] rounded-2xl border border-border bg-white p-8 shadow-sm"
                >
                  <Quote className="h-8 w-8 fill-[#f45113] text-[#f45113]" />
                  <p className="mt-6 text-sm leading-7 text-dark/80">"{item.quote}"</p>
                  <div className="mt-6 flex text-[#f59e0b]">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div className="mt-7 flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-bold text-dark">{item.name}</p>
                      <p className="text-xs text-muted">{item.role}</p>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            className="absolute -right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#f45113] text-white shadow-glow md:flex lg:-right-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
        </div>
      </Container>
    </section>
  );
}
