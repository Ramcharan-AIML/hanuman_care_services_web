import { ClipboardCheck, FilePenLine, MessageCircle, UserRound } from "lucide-react";
import { Container, Eyebrow, Reveal } from "./ui.jsx";

const steps = [
  {
    icon: FilePenLine,
    title: "Register / Contact",
    description: "Reach out to us via call, form or WhatsApp."
  },
  {
    icon: ClipboardCheck,
    title: "Choose a Plan",
    description: "Select the care plan or service that fits your needs."
  },
  {
    icon: UserRound,
    title: "Caregiver Assigned",
    description: "We assign a verified and trained caregiver for your loved one."
  },
  {
    icon: MessageCircle,
    title: "Updates to Family",
    description: "You stay informed with regular updates and complete peace of mind."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 md:py-20">
      <Container>
        <Reveal className="text-center">
          <Eyebrow>Our Process</Eyebrow>
          <h2 className="text-3xl font-semibold text-[#071526] md:text-4xl">How It Works</h2>
        </Reveal>

        <div className="relative mt-10 grid gap-8 md:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-[58px] hidden border-t border-dashed border-primary/80 md:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.05} className="relative text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-border bg-white shadow-soft">
                  <Icon className="h-12 w-12 text-primary" strokeWidth={1.7} />
                </div>
                <div className="-mt-4 mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-base font-bold text-[#071526]">{step.title}</h3>
                <p className="mx-auto mt-4 max-w-[210px] text-sm leading-6 text-muted">{step.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
