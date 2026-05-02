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
    <Reveal className="mt-8 rounded-2xl border border-border bg-white p-7 shadow-soft md:p-10">
      <div className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.label}
              className={`flex min-h-24 flex-col items-center justify-center text-center ${
                index % 4 !== 0 ? "lg:border-l lg:border-border" : ""
              } ${index % 2 !== 0 ? "sm:border-l sm:border-border lg:border-l" : ""}`}
            >
              <Icon className="mb-4 h-10 w-10 text-primary" strokeWidth={1.8} />
              <p className="text-base font-bold text-[#071526]">{feature.label}</p>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
