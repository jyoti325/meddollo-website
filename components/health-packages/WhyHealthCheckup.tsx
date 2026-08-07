import Image from "next/image";
import {
  Activity,
  HeartPulse,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: Activity,
    title: "Early Disease Detection",
    description:
      "Identify health conditions before symptoms appear for timely treatment.",
  },
  {
    icon: HeartPulse,
    title: "Better Lifestyle Monitoring",
    description:
      "Track important health indicators and maintain long-term wellness.",
  },
  {
    icon: ShieldCheck,
    title: "Prevent Future Complications",
    description:
      "Routine screening reduces the risk of severe health problems.",
  },
  {
    icon: TrendingUp,
    title: "Peace of Mind",
    description:
      "Know your health status with confidence through reliable diagnostics.",
  },
];

export default function WhyHealthCheckup() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#F8FCFB] to-white">

      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#00B67A]/10 blur-3xl"></div>

      <div className="absolute -right-24 bottom-10 h-[420px] w-[420px] rounded-full bg-[#FDD835]/15 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Image */}

          <div className="relative">

            <div className="overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,.12)]">

              <Image
                src="/images/health-packages/health-checkup.webp"
                alt="Health Checkup"
                width={700}
                height={700}
                className="w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -right-8 rounded-[28px] bg-gradient-to-r from-[#008F5D] to-[#00B67A] p-6 text-white shadow-2xl">

              <h3 className="text-5xl font-black">
                100%
              </h3>

              <p className="mt-2">
                Preventive Care Focus
              </p>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
              Preventive Healthcare
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-[#143B38] lg:text-5xl">
              Why Regular Health Checkups Matter
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Preventive healthcare plays an essential role in detecting
              medical conditions early and helping you make informed
              healthcare decisions before complications develop.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">

              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#008F5D] to-[#00B67A] text-white">
                    <item.icon size={26} />
                  </div>

                  <h3 className="text-xl font-bold text-[#143B38]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}