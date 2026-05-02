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

export default function ProblemSection() {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="absolute -bottom-20 left-0 h-48 w-80 rounded-tr-[100%] bg-orange-100/80" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>We Are Here For You</Eyebrow>
          <h2 className="text-3xl font-semibold leading-tight text-[#071526] md:text-4xl">
            Challenges Families Face Every Day
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-base leading-7 text-muted">
            We understand the worries of families. We are here to take that responsibility with care
            and compassion.
          </p>
        </Reveal>

        <div className="mt-14 space-y-12 md:space-y-9">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.number} delay={index * 0.05}>
                <div
                  className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${
                    item.reverse ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className={`mx-auto w-full max-w-[340px] ${item.reverse ? "md:pl-8" : ""}`}>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-base font-bold text-primary">
                      {item.number}
                    </span>
                    <h3 className="mt-8 text-2xl font-bold leading-tight text-[#071526] md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-dark/80">{item.description}</p>
                  </div>
                  <div className="relative mx-auto w-full max-w-[580px]">
                    <div className="relative overflow-hidden rounded-2xl shadow-soft">
                      <img src={item.image} alt={item.title} className="h-[220px] w-full object-cover md:h-[250px]" />
                    </div>
                    <div
                      className={`absolute -bottom-8 ${
                        item.reverse ? "-left-5" : "-right-5"
                      } flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white shadow-soft`}
                    >
                      <Icon className="h-10 w-10 text-primary" strokeWidth={1.8} />
                    </div>
                    <div
                      className={`absolute top-1/2 hidden h-px w-24 border-t border-dashed border-primary/60 md:block ${
                        item.reverse ? "-right-24" : "-left-24"
                      }`}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
