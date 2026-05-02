import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ProblemSection from "./components/ProblemSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import TargetUsers from "./components/TargetUsers.jsx";
import PricingSection from "./components/PricingSection.jsx";
import Testimonials from "./components/Testimonials.jsx";
import ContactSection from "./components/ContactSection.jsx";
import PromiseBanner from "./components/PromiseBanner.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-clip bg-white text-dark">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <HowItWorks />
        <TargetUsers />
        <PricingSection />
        <Testimonials />
        <ContactSection />
        <PromiseBanner />
      </main>
      <Footer />
    </div>
  );
}
