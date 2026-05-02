import { ArrowRight, CalendarDays, Check, Clock3, Shield, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { Container, Eyebrow, PrimaryButton, Reveal } from "./ui.jsx";

const plans = [
  {
    icon: CalendarDays,
    title: "Subscription Plan",
    description: "Consistent care and support whenever you need it.",
    preface: "Starting from",
    price: "₹99/mo",
    features: ["Monthly care visits", "Regular check-ins", "Emergency support", "Priority assistance"],
    button: "Choose Plan",
    tone: "orange"
  },
  {
    icon: Clock3,
    title: "Pay-per-Service",
    description: "Pay only for the services you use, when you need.",
    preface: "Price",
    price: "Varies",
    features: ["On-demand support", "No long-term commitment", "Flexible hours", "Wide range of services"],
    button: "See Services",
    featured: true,
    tone: "orange"
  },
  {
    icon: UserRound,
    title: "Custom Plan",
    description: "Tailored care plans for unique needs and preferences.",
    preface: "Get a",
    price: "Custom Quote",
    features: ["Personalized care plan", "Dedicated care manager", "Flexible scheduling", "Family updates & reports"],
    button: "Request Quote",
    tone: "green"
  }
];

const trust = [
  { icon: Shield, title: "No hidden charges", text: "Transparent pricing" },
  { icon: Clock3, title: "24/7 Support", text: "Always here to help" },
  { icon: Shield, title: "Safe & Secure", text: "Your loved ones are in safe hands" },
  { icon: Check, title: "Trusted by Families", text: "Hundreds of families trust us" }
];

export default function PricingSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Flexible Pricing & Plans</Eyebrow>
          <h2 className="text-3xl font-semibold text-[#071526] md:text-4xl">Plans That Fit Every Family</h2>
          <p className="mt-4 text-base leading-7 text-muted">
            Choose the plan that suits your needs and budget. All plans come with compassion, care and peace
            of mind.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-[980px] gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const green = plan.tone === "green";
            return (
              <Reveal key={plan.title} delay={index * 0.05}>
                <motion.article
                  whileHover={{ y: -7 }}
                  className={`relative min-h-[520px] rounded-2xl border bg-white p-8 shadow-md ${
                    plan.featured ? "border-primary bg-cream shadow-glow" : "border-border"
                  }`}
                >
                  {plan.featured ? (
                    <div className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-2xl bg-[#f45113] px-6 py-3 text-sm font-bold text-white">
                      Most Popular
                    </div>
                  ) : null}
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full ${green ? "bg-[#e6f7ee]" : "bg-[#fff0e8]"}`}>
                    <Icon className={`h-8 w-8 ${green ? "text-green" : "text-primary"}`} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-[#071526]">{plan.title}</h3>
                  <p className="mt-3 min-h-14 text-base leading-7 text-muted">{plan.description}</p>
                  <div className="my-7 h-px bg-border" />
                  <p className="text-sm font-bold text-dark">{plan.preface}</p>
                  <p className={`mt-3 text-3xl font-bold ${green ? "text-green" : "text-[#f45113]"}`}>{plan.price}</p>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-dark">
                        <Check className={`h-4 w-4 ${green ? "text-green" : "text-primary"}`} strokeWidth={2.4} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-8 inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl border text-sm font-bold transition ${
                      plan.featured
                        ? "border-[#f45113] bg-[#f45113] text-white hover:bg-primary"
                        : green
                          ? "border-green text-green hover:bg-green hover:text-white"
                          : "border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    {plan.button}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-12 max-w-[1120px] rounded-2xl border border-border bg-white p-7 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trust.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-center gap-4 ${index !== 0 ? "lg:border-l lg:border-border lg:pl-8" : ""}`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fff0e8]">
                    <Icon className="h-7 w-7 text-primary" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
