import Image from "next/image";
import {
  BadgeCheck,
  Clock3,
  House,
  Microscope,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Advanced Diagnostics",
    text: "Modern diagnostic equipment delivering accurate and dependable results.",
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    text: "Dedicated doctors and trained healthcare experts focused on patient care.",
  },
  {
    icon: House,
    title: "Home Sample Collection",
    text: "Convenient doorstep sample collection with timely service.",
  },
  {
    icon: Clock3,
    title: "Fast Reports",
    text: "Timely report delivery without compromising quality.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Healthcare",
    text: "Trusted healthcare services with accuracy and transparency.",
  },
  {
    icon: BadgeCheck,
    title: "Affordable Packages",
    text: "Comprehensive health packages designed for every family.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Why Choose Meddollo
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#143B38] lg:text-5xl">
            Healthcare Built on Trust & Excellence
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Combining advanced technology, experienced professionals and
            compassionate care, we strive to deliver the best diagnostic
            experience for every patient.
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Image */}

          <div className="relative">

            <Image
              src="/images/about/why-choose.jpg"
              alt="Why Choose Meddollo"
              width={650}
              height={700}
              className="rounded-[36px] shadow-2xl"
            />

            <div className="absolute bottom-8 left-8 rounded-3xl bg-white p-6 shadow-2xl">
              <h3 className="text-4xl font-bold text-[#008F5D]">
                500+
              </h3>

              <p className="mt-2 text-gray-600">
                Happy Patients
              </p>
            </div>

          </div>

          {/* Right Features */}

          <div className="space-y-6">

            {features.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-3xl border border-gray-100 bg-[#F8FCFB] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#008F5D] to-[#00B67A]">
                  <item.icon className="text-white" size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#143B38]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    {item.text}
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