import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Container } from "./ui.jsx";

const columns = [
  {
    title: "Services",
    links: ["Basic Care", "Advanced Care", "Premium Care", "Emergency Support", "Home Visits", "Health Check Assistance"]
  },
  {
    title: "Company",
    links: ["About Us", "Why Choose Us", "Our Caregivers", "Testimonials", "FAQs", "Careers"]
  },
  {
    title: "Useful Links",
    links: ["How it Works", "Plans & Pricing", "Special Services", "Blog", "Contact Us"]
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#031f33] text-white">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr_1.3fr]">
          <div>
            <a href="#" className="flex items-center gap-3">
          <img
            src="/generated-images/logo-hanuman.webp"
            alt="Hanuman Care Services Logo"
            className="w-[64px] h-auto object-contain md:w-[62px]"
          />
          <img
            src="/generated-images/hanuman-name.webp"
            alt="Hanuman Care Services Name"
            className="w-[120px] h-auto object-contain md:w-[150px]"
          />
        </a>
            <p className="mt-6 max-w-[220px] text-sm leading-6 text-white/80">
              Compassionate care for your loved ones.
            </p>
            <div className="mt-7 flex gap-3">
              {[Facebook, Instagram, Phone, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:border-primary hover:bg-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-base font-bold">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-white/80">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-primary">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-base font-bold">Get in Touch</h3>
            <div className="mt-6 space-y-5 text-sm text-white/85">
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                info@hanumancareservices.com
              </p>
              <p className="flex items-start gap-3 leading-6">
                <MapPin className="mt-1 h-5 w-5 shrink-0" />
                123, Seva Street, Your City, Your State - 560001
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs text-white/75 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Hanuman Care Services. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-primary">Terms & Conditions</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
