import {
  Building2,
  Microscope,
  ScanLine,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "Modern Infrastructure",
    description:
      "Comfortable reception, spacious waiting area, and patient-friendly environment designed for a seamless healthcare experience.",
  },
  {
    icon: Microscope,
    title: "Advanced Laboratory",
    description:
      "Equipped with modern diagnostic systems to deliver precise and reliable test results.",
  },
  {
    icon: ScanLine,
    title: "Latest Diagnostic Equipment",
    description:
      "High-quality imaging and pathology equipment supporting accurate diagnosis and faster reporting.",
  },
  {
    icon: Users,
    title: "Experienced Healthcare Team",
    description:
      "Dedicated professionals committed to quality diagnostics and compassionate patient care.",
  },
];

export default function FacilityHighlights() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#F8FCFB] via-white to-[#FFFDF6]">

      <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-[#00B67A]/10 blur-3xl"></div>

      <div className="absolute -right-20 bottom-10 h-[420px] w-[420px] rounded-full bg-[#FDD835]/15 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Why Patients Trust Us
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#143B38] lg:text-5xl">
            Excellence in Every Corner
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every part of Meddollo is thoughtfully designed to deliver accurate diagnostics, patient comfort, and dependable healthcare services.
          </p>

        </div>

        <div className="relative">

          <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-[#008F5D] to-[#F4C430] lg:block"></div>

          <div className="space-y-10">

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative flex flex-col gap-6 rounded-[32px] bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl lg:ml-16 lg:flex-row lg:items-center"
                >
                  <div className="absolute -left-[74px] hidden h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#008F5D] to-[#00B67A] text-white shadow-xl lg:flex">
                    <Icon size={30} />
                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#008F5D] to-[#00B67A] text-white lg:hidden">
                    <Icon size={30} />
                  </div>

                  <div className="flex-1">
                    <span className="text-sm font-semibold text-[#008F5D]">
                      0{index + 1}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-[#143B38]">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}