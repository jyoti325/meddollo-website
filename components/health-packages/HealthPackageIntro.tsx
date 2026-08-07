import {
  Activity,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const highlights = [
  {
    icon: Activity,
    title: "Early Detection",
    description:
      "Regular health checkups help identify diseases before symptoms become serious.",
  },
  {
    icon: HeartPulse,
    title: "Preventive Care",
    description:
      "Monitor your overall health and reduce the risk of future medical complications.",
  },
  {
    icon: ShieldCheck,
    title: "Accurate Diagnosis",
    description:
      "Advanced diagnostic technology ensures reliable reports for better treatment decisions.",
  },
  {
    icon: Stethoscope,
    title: "Expert Guidance",
    description:
      "Our experienced healthcare professionals help you understand your health better.",
  },
];

export default function HealthPackageIntro() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FCFB] to-[#FFFDF3] py-24">

      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#00B67A]/10 blur-3xl"></div>

      <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-[#FDD835]/15 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Preventive Healthcare
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#143B38] lg:text-5xl">
            Why Regular Health Checkups Matter
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Routine health screenings are one of the most effective ways to
            detect medical conditions early and maintain a healthier lifestyle.
          </p>

        </div>

        {/* Highlights */}

        <div className="grid gap-8 md:grid-cols-2">

          {highlights.map((item, index) => (

            <div
              key={item.title}
              className={`group rounded-[32px] p-8 transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                index % 2 === 0
                  ? "bg-gradient-to-br from-[#EAFBF4] via-white to-[#DDF9EC]"
                  : "bg-gradient-to-br from-[#FFF8D6] via-white to-[#FFF2A4]"
              }`}
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg">

                <item.icon
                  size={30}
                  className="text-[#008F5D]"
                />

              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#143B38]">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}