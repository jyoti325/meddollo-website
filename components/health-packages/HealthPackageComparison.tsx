import { CheckCircle2 } from "lucide-react";

const packages = [
  {
    title: "Basic",
    tests: "18+ Tests",
    featured: false,
    color: "green",
    features: [
      "Complete Blood Count",
      "Blood Sugar",
      "Liver Function Test",
      "Kidney Function Test",
      "Urine Routine",
    ],
  },
  {
    title: "Comprehensive",
    tests: "45+ Tests",
    featured: true,
    color: "yellow",
    features: [
      "Everything in Basic",
      "Thyroid Profile",
      "Lipid Profile",
      "Diabetes Profile",
      "Vitamin D",
      "Doctor Consultation",
    ],
  },
  {
    title: "Executive",
    tests: "70+ Tests",
    featured: false,
    color: "green",
    features: [
      "Everything in Comprehensive",
      "Cardiac Risk Markers",
      "Hormone Profile",
      "Vitamin B12",
      "ECG",
      "Chest X-Ray",
    ],
  },
];

export default function HealthPackageComparison() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FCFB] to-[#FFFDF5] py-24">

      <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-[#00B67A]/10 blur-3xl"></div>

      <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-[#FDD835]/15 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Compare Packages
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#143B38] lg:text-5xl">
            Find the Package That Fits You
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Compare our health packages and choose the one that best matches
            your healthcare needs.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {packages.map((pkg) => (

            <div
              key={pkg.title}
              className={`relative rounded-[36px] border border-white/30 p-8 shadow-xl transition duration-500 hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(0,143,93,.18)]
              ${
                pkg.color === "green"
                  ? "bg-gradient-to-br from-[#EAFBF4] via-white to-[#DDF9EC]"
                  : "bg-gradient-to-br from-[#FFF8D8] via-white to-[#FFF2A6]"
              }`}
            >

              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#008F5D] to-[#00B67A] px-5 py-2 text-sm font-semibold text-white shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className="mt-4 text-center text-3xl font-bold text-[#143B38]">
                {pkg.title}
              </h3>

              <p className="mt-2 text-center font-semibold text-[#008F5D]">
                {pkg.tests}
              </p>

              <div className="mt-8 space-y-4">

                {pkg.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      size={20}
                      className="mt-1 text-[#008F5D]"
                    />

                    <span className="text-gray-700">
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}