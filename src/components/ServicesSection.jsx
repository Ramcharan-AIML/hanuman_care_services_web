import { Ambulance, Building2, Home } from "lucide-react";
import { Container, Eyebrow, Reveal } from "./ui.jsx";
import FeaturesGrid from "./FeaturesGrid.jsx";

const services = [
  {
    icon: Ambulance,
    title: "Emergency Response Support",
    description: "Certified professionals available instantly to handle urgent situations.",
    image: "/generated-images/service-emergency.png"
  },
  {
    icon: Building2,
    title: "Hospital & Health Check Assistance",
    description: "We help with hospitalizations and coordinate health visits seamlessly.",
    image: "/generated-images/service-hospital.png"
  },
  {
    icon: Home,
    title: "Home & Emotional Support",
    description: "Regular visits, check-ins, and care designed for peace of mind.",
    image: "/generated-images/service-home.png"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-white py-10 md:py-14">
      <div className="absolute -right-20 -top-28 h-60 w-80 rounded-bl-[100%] bg-orange-100/70" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>We're Here To Help</Eyebrow>
          <h2 className="text-3xl font-semibold leading-tight text-[#071526] md:text-4xl">
            Care and Support, Every Step of the Way
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-base leading-7 text-muted">
            Comprehensive services designed to ensure the safety, health and happiness of your loved ones.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <article className="group relative min-h-[380px] overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" />
                  <div className="relative z-10 max-w-[220px]">
                    <div className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#fff0e8]">
                      <Icon className="h-9 w-9 text-primary" strokeWidth={1.7} />
                    </div>
                    <h3 className="text-xl font-semibold leading-tight text-[#071526]">{service.title}</h3>
                    <span className="mt-7 block h-px w-9 bg-primary" />
                    <p className="mt-6 text-base leading-7 text-muted">{service.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <FeaturesGrid />
      </Container>
    </section>
  );
}
