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

            <div className="relative overflow-hidden bg-[#071526] p-8 md:p-12 lg:p-14">
              {/* Premium ambient glows */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f45113]/30 blur-[80px]" />
              <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#f59e0b]/20 blur-[100px]" />
              
              <div className="relative z-10 h-full flex flex-col">
                <h2 className="text-3xl font-bold text-white tracking-tight">We're Just a Call Away</h2>
                <span className="mt-4 block h-1 w-12 rounded-full bg-[#f45113]" />
                <p className="mt-5 text-base leading-relaxed text-white/70 max-w-[380px]">
                  Prefer to speak with us directly? Our dedicated care team is available 24/7 to answer your questions and provide immediate assistance.
                </p>
                
                <div className="mt-12 space-y-8 flex-1">
                  {contact.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-5 group">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 group-hover:bg-white/10 group-hover:scale-105 group-hover:border-white/20">
                          <Icon className="h-6 w-6 text-[#f45113]" strokeWidth={1.8} />
                        </div>
                        <div className="flex flex-col justify-center pt-1">
                          <p className="text-xs font-bold tracking-widest text-white/40 uppercase">{item.title}</p>
                          <p className="mt-1 text-base font-medium text-white/90">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
