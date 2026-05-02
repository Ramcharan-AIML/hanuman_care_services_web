import { LockKeyhole, Mail, MapPin, Phone, Route } from "lucide-react";
import { Container, Reveal } from "./ui.jsx";

const contact = [
  { icon: Phone, title: "Phone", text: "+91 98765 43210" },
  { icon: Mail, title: "Email", text: "info@hanumancareservices.com" },
  { icon: MapPin, title: "Address", text: "123, Seva Street, Your City, Your State - 560001" },
  { icon: Route, title: "Helpline (24/7)", text: "+91 98765 43210" }
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="grid overflow-hidden rounded-2xl border border-border bg-white shadow-soft lg:grid-cols-[1.05fr_1fr]">
            <div className="p-7 md:p-10">
              <h2 className="text-2xl font-bold text-[#071526]">Get in Touch</h2>
              <span className="mt-3 block h-px w-12 bg-primary" />
              <p className="mt-4 max-w-[420px] text-sm leading-6 text-muted">
                We're here to help. Reach out to us and we'll get back to you as soon as possible.
              </p>
              <form className="mt-7 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="h-12 rounded-lg border border-border px-4 text-sm outline-none focus:border-primary" placeholder="Your Name" />
                  <input className="h-12 rounded-lg border border-border px-4 text-sm outline-none focus:border-primary" placeholder="Email Address" />
                  <select className="h-12 rounded-lg border border-border px-4 text-sm text-muted outline-none focus:border-primary">
                    <option>Select Service</option>
                    <option>Emergency Support</option>
                    <option>Hospital Assistance</option>
                    <option>Home Care</option>
                  </select>
                  <select className="h-12 rounded-lg border border-border px-4 text-sm text-muted outline-none focus:border-primary">
                    <option>Select Duration</option>
                    <option>One-time</option>
                    <option>Monthly</option>
                    <option>Custom</option>
                  </select>
                </div>
                <textarea
                  className="min-h-32 rounded-lg border border-border px-4 py-4 text-sm outline-none focus:border-primary"
                  placeholder="Your Message..."
                />
                <button className="inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-[#f45113] text-sm font-bold text-white shadow-glow transition hover:bg-primary">
                  Request Care Now
                  <span aria-hidden="true">→</span>
                </button>
                <p className="flex items-center gap-2 text-xs text-muted">
                  <LockKeyhole className="h-4 w-4 text-primary" />
                  Your information is safe with us. We respect your privacy.
                </p>
              </form>
            </div>

            <div className="relative border-t border-border bg-cream p-7 md:p-10 lg:border-l lg:border-t-0">
              <div className="relative z-10 max-w-[300px]">
                <h2 className="text-2xl font-bold text-[#071526]">We're Just a Call Away</h2>
                <span className="mt-3 block h-px w-12 bg-primary" />
                <div className="mt-8 space-y-6">
                  {contact.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff0e8]">
                          <Icon className="h-6 w-6 text-primary" strokeWidth={1.8} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-dark">{item.title}</p>
                          <p className="mt-1 text-sm leading-6 text-dark">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <img
                src="/generated-images/contact-caregiver.png"
                alt="Care support specialist"
                className="bottom-0 right-0 mt-8 max-h-[360px] w-full object-contain object-bottom lg:absolute lg:mt-0 lg:w-[48%]"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
