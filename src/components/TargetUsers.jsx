import { BriefcaseBusiness, Heart, ShieldPlus, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { Container, Eyebrow, Reveal } from "./ui.jsx";

const users = [
  {
    icon: BriefcaseBusiness,
    image: "/generated-images/target-nri.png",
    title: "NRI Families",
    description: "Stay connected and worry-free knowing your loved ones are in safe hands."
  },
  {
    icon: UserRound,
    image: "/generated-images/target-working.png",
    title: "Working Professionals",
    description: "Reliable care support for your loved ones while you focus on your work."
  },
  {
    icon: Heart,
    image: "/generated-images/target-elderly.png",
    title: "Elderly People",
    description: "Compassionate care to help elders live safely, comfortably and happily."
  },
  {
    icon: ShieldPlus,
    image: "/generated-images/target-patient.png",
    title: "Patients",
    description: "Support for recovery with regular check-ins, medication reminders and assistance."
  }
];

export default function TargetUsers() {
  return (
    <section className="relative bg-white pb-16 md:pb-20">
      <div className="absolute -bottom-24 right-0 h-56 w-96 rounded-tl-[100%] bg-orange-100/80" />
      <Container className="relative">
        <Reveal className="text-center">
          <Eyebrow>We Care For</Eyebrow>
          <h2 className="text-3xl font-semibold text-[#071526] md:text-4xl">Who We Serve</h2>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {users.map((user, index) => {
            const Icon = user.icon;
            return (
              <Reveal key={user.title} delay={index * 0.05}>
                <motion.article
                  whileHover={{ y: -7 }}
                  className="overflow-hidden rounded-2xl border border-border bg-white text-center shadow-md"
                >
                  <img src={user.image} alt={user.title} className="h-40 w-full object-cover" />
                  <div className="relative px-6 pb-8 pt-12">
                    <div className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-md">
                      <Icon className="h-8 w-8 text-primary" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-xl font-semibold text-[#071526]">{user.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-muted">{user.description}</p>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
