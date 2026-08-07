import {
  Microscope,
  Clock3,
  House,
  BadgeCheck,
  Users,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Advanced Diagnostics",
    description:
      "State-of-the-art equipment ensures dependable and precise diagnostic results.",
    icon: Microscope,
    gradient:
      "from-[#008F5D] via-[#00B67A] to-[#EAFBF4]",
  },
  {
    title: "Fast Reports",
    description:
      "Quick turnaround time without compromising on quality or accuracy.",
    icon: Clock3,
    gradient:
      "from-[#FFF4B8] via-[#FDD835] to-[#FFFBEA]",
  },
  {
    title: "Home Sample Collection",
    description:
      "Convenient doorstep collection by trained healthcare professionals.",
    icon: House,
    gradient:
      "from-[#DFF8EE] via-[#F6FFF9] to-white",
  },
  {
    title: "Affordable Packages",
    description:
      "Preventive healthcare packages designed for every age and budget.",
    icon: BadgeCheck,
    gradient:
      "from-[#FFFCE2] via-white to-[#FFF2A0]",
  },
  {
    title: "Experienced Team",
    description:
      "Dedicated professionals committed to compassionate patient care.",
    icon: Users,
    gradient:
      "from-[#E9FFF7] via-white to-[#D9F8EA]",
  },
  {
    title: "Trusted Care",
    description:
      "Thousands of patients trust Meddollo for quality diagnostic services.",
    icon: ShieldCheck,
    gradient:
      "from-[#FFF7CF] via-white to-[#FFFDF5]",
  },
];

export default function WhyChooseServices() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#F7FFFC] to-white">

      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#00B67A]/10 blur-3xl"></div>

      <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-[#FDD835]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#143B38]">
            Healthcare That Puts
            Patients First
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every diagnostic service is delivered with precision,
            compassion and complete commitment to quality healthcare.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-[36px] bg-gradient-to-br ${item.gradient}
                p-8 shadow-xl transition duration-500
                hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(0,143,93,.15)]
                ${index % 2 ? "xl:mt-12" : ""}`}
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg">

                <item.icon
                  size={30}
                  className="text-[#008F5D]"
                />

              </div>

              <h3 className="text-2xl font-bold text-[#143B38]">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-700">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}