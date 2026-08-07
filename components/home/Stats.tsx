import {
  House,
  Microscope,
  FileText,
  Clock3,
} from "lucide-react";

const highlights = [
  {
    icon: House,
    title: "Home Sample Collection",
    description: "Convenient doorstep sample collection by trained professionals.",
  },
  {
    icon: Microscope,
    title: "Comprehensive Diagnostics",
    description: "Wide range of pathology tests and preventive health checkups.",
  },
  {
    icon: FileText,
    title: "Digital Reports",
    description: "Receive accurate reports quickly in a secure digital format.",
  },
  {
    icon: Clock3,
    title: "Open Every Day",
    description: "Available from 7:30 AM to 9:00 PM for your healthcare needs.",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_15px_45px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,143,93,0.15)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#008F5D] to-[#00B67A] text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-[#143B38]">
                  {item.title}
                </h3>

                <p className="text-[15px] leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}