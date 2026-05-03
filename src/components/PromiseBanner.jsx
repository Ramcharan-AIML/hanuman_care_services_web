import { HeartHandshake } from "lucide-react";
import { Container, Reveal } from "./ui.jsx";

export default function PromiseBanner() {
  return (
    <section className="bg-white pb-12">
      <Container>
        <Reveal>
          <div className="grid items-center overflow-hidden rounded-2xl bg-[#fff0e8] md:grid-cols-[220px_1fr_170px]">
            <div className="flex h-full items-end justify-center pt-6">
              <img src="/generated-images/hanuman-promise.webp" alt="Hanuman caring illustration" className="h-36 object-contain" />
            </div>
            <div className="px-7 py-8 text-center md:text-left">
              <h2 className="text-2xl font-bold text-[#f45113]">Our Promise</h2>
              <p className="mt-4 max-w-[620px] text-base leading-7 text-dark">
                We treat your family like our own. With Hanuman Care Services, you are never alone.
              </p>
            </div>
            <div className="hidden h-full items-center justify-center md:flex">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-soft">
                <HeartHandshake className="h-16 w-16 text-primary" strokeWidth={1.6} />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
