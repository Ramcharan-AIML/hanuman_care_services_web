import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Container, PrimaryButton } from "./ui.jsx";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100/60 bg-white/95 backdrop-blur">
      <Container className="flex h-[88px] items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/generated-images/hanuman-logo-mark.png"
            alt="Hanuman Care Services"
            className="h-16 w-[82px] object-contain"
          />
          <div className="leading-none">
            <div className="text-2xl font-extrabold tracking-normal text-[#f45113]">HANUMAN</div>
            <div className="flex items-center gap-2 text-xs font-bold text-dark">
              <span className="h-px w-2 bg-primary" />
              CARE SERVICES
              <span className="h-px w-2 bg-primary" />
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-10 text-sm font-medium text-dark lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-primary">
              {item.label}
            </a>
          ))}
          <PrimaryButton icon={Phone} className="min-h-14 px-8">
            Get Help Now
          </PrimaryButton>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-dark shadow-sm lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-orange-100 bg-white px-4 py-4 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-dark hover:bg-cream"
              >
                {item.label}
              </a>
            ))}
            <PrimaryButton icon={Phone} className="w-full">
              Get Help Now
            </PrimaryButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
