import Image from "next/image";
import {
  CheckCircle2,
  Microscope,
  HeartPulse,
  Clock3,
  ShieldCheck,
  Home,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Advanced Diagnostic Technology",
  },
  {
    icon: HeartPulse,
    title: "Accurate & Reliable Reports",
  },
  {
    icon: Clock3,
    title: "Quick Report Delivery",
  },
  {
    icon: Home,
    title: "Home Sample Collection",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Healthcare Services",
  },
  {
    icon: Award,
    title: "Experienced Professionals",
  },
];

export default function WhyChooseContact() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#F8FCFB] via-white to-[#FFF8D8]">

      {/* Background */}

      <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-[#00B67A]/10 blur-3xl"></div>

      <div className="absolute -right-24 bottom-10 h-[420px] w-[420px] rounded-full bg-[#F4C430]/15 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div className="relative">

            <div className="overflow-hidden rounded-[40px] bg-white p-4 shadow-[0_30px_80px_rgba(0,0,0,.12)]">

              <Image
                src="/images/contact/why-contact.webp"
                alt="Why Choose Meddollo"
                width={700}
                height={750}
                className="rounded-[32px] object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -right-8 rounded-[30px] bg-gradient-to-r from-[#008F5D] to-[#00B67A] p-6 text-white shadow-2xl">

              <h3 className="text-5xl font-black">
                100%
              </h3>

              <p className="mt-2">
                Patient Focused Care
              </p>

            </div>

          </div>

          {/* Right */}

          <div>

            <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
              Why Choose Meddollo
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-[#143B38] lg:text-5xl">
              Trusted Diagnostics,
              <br />
              Compassionate Care.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Meddollo Life Care, we combine modern diagnostic technology,
              experienced professionals and a patient-first approach to deliver
              dependable healthcare services for you and your family.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group flex items-center gap-4 rounded-[22px] bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#008F5D] to-[#00B67A] text-white">

                      <Icon size={22} />

                    </div>

                    <span className="font-semibold text-[#143B38]">
                      {feature.title}
                    </span>

                  </div>
                );
              })}

            </div>

            <div className="mt-10 rounded-[24px] border border-[#00B67A]/20 bg-gradient-to-r from-[#EAFBF4] to-[#FFF8D8] p-6">

              <div className="flex items-start gap-3">

                <CheckCircle2
                  size={28}
                  className="mt-1 text-[#008F5D]"
                />

                <p className="leading-8 text-gray-700">
                  Every patient receives personalized attention with a focus on
                  accurate diagnosis, timely reporting, transparency, and
                  compassionate healthcare services.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}