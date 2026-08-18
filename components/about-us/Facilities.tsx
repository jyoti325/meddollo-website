import Image from "next/image";
import {
  Microscope,
  HeartPulse,
  ShieldCheck,
  House,
} from "lucide-react";

const facilities = [
  {
    icon: Microscope,
    title: "Advanced Diagnostics",
    description:
      "Modern diagnostic equipment for precise and reliable test results.",
  },
  {
    icon: HeartPulse,
    title: "Health Checkups",
    description:
      "Comprehensive preventive health packages for every age group.",
  },
  {
    icon: House,
    title: "Home Sample Collection",
    description:
      "Convenient doorstep sample collection with trained professionals.",
  },
  {
    icon: ShieldCheck,
    title: "Accurate Reports",
    description:
      "Fast, accurate and confidential reports delivered on time.",
  },
];

export default function Facilities() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background */}

      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#00B67A]/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-[#FDD835]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Our Facilities
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#143B38] lg:text-5xl">
            Equipped for Better Healthcare
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine modern technology, skilled professionals and patient-focused
            services to deliver dependable diagnostic care.
          </p>

        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Image */}

          <div className="relative">

            <div className="overflow-hidden rounded-[36px] shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

              <Image
                src="/images/about/facilities.avif"
                alt="Meddollo Facilities"
                width={700}
                height={750}
                className="h-full w-full object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 left-8 rounded-3xl bg-white/90 p-6 shadow-2xl backdrop-blur-xl">

              <h3 className="text-4xl font-bold text-[#008F5D]">
                100%
              </h3>

              <p className="mt-2 text-gray-600">
                Quality Focused Care
              </p>

            </div>

          </div>

          {/* Right Features */}

          <div className="grid gap-6">

            {facilities.map((item) => (
              <div
                key={item.title}
                className="group flex gap-5 rounded-[28px] border border-gray-100 bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-[#008F5D]/20 hover:shadow-[0_20px_60px_rgba(0,143,93,0.15)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#008F5D] to-[#00B67A]">

                  <item.icon
                    size={30}
                    className="text-white"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#143B38]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}