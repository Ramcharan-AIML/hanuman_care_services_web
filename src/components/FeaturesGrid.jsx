import {
  Ambulance,
  Bell,
  CalendarCheck,
  Car,
  FileText,
  Landmark,
  Phone,
  PersonStanding
} from "lucide-react";
import { Reveal } from "./ui.jsx";

const features = [
  { icon: Ambulance, label: "Emergency Help" },
  { icon: Phone, label: "Check-ins" },
  { icon: FileText, label: "Documentation" },
  { icon: Bell, label: "Reminders" },
  { icon: CalendarCheck, label: "Visit Scheduling" },
  { icon: PersonStanding, label: "Assisted Walks" },
  { icon: Landmark, label: "Temple Visits" },
  { icon: Car, label: "Travel Support" }
];



export default function FeaturesGrid() {
  return (
    <Reveal className="mt-8 rounded-2xl border border-border bg-white p-5 md:p-10 shadow-soft">
      <div className="grid grid-cols-2 gap-y-8 sm:gap-y-10 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.label}
              className={`flex min-h-24 flex-col items-center justify-center text-center p-2 ${
                index % 4 !== 0 ? "lg:border-l lg:border-border" : ""
              } ${index % 2 !== 0 ? "border-l border-border" : ""}`}
            >
              <Icon className="mb-3 md:mb-4 h-8 w-8 md:h-10 md:w-10 text-primary" strokeWidth={1.8} />
              <p className="text-sm sm:text-base font-bold text-[#071526]">{feature.label}</p>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
