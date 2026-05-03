import { motion } from 'framer-motion'
import { UserPlus, ClipboardList, UserCheck, MessageSquare } from 'lucide-react'
import { Container, Eyebrow,Reveal } from './ui.jsx'

const steps = [
  {
    icon: UserPlus,
    number: 1,
    title: 'Register / Contact',
    description: 'Fill a simple form or call us to share your care requirements.',
  },
  {
    icon: ClipboardList,
    number: 2,
    title: 'Choose a Plan',
    description: 'Select from our flexible subscription or pay-per-service options.',
  },
  {
    icon: UserCheck,
    number: 3,
    title: 'Caregiver Assigned',
    description: 'We match a verified caregiver to your loved one within 24 hours.',
  },
  {
    icon: MessageSquare,
    number: 4,
    title: 'Updates to Family',
    description: 'Receive regular updates, photos, and health reports on WhatsApp.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-10 md:py-12 relative z-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
        <Reveal className="text-center mb-16">
          {/* <Eyebrow>How It Works</Eyebrow> */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#071526] mb-4">How It Works</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Getting started with Hanuman Care is simple and hassle-free.
          </p>
        </Reveal>

        {/* Desktop Stepper */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-[28px] left-[12.5%] right-[12.5%] h-0.5 bg-gray-200">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="h-full bg-primary origin-left"
              />
            </div>

            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mb-4 shadow-soft relative z-10">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#071526] mb-2">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed max-w-[220px]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stepper */}
        <div className="md:hidden">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gray-200">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="w-full h-full bg-primary origin-top"
              />
            </div>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-soft relative z-10">
                    <step.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#071526] mb-1">{step.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
