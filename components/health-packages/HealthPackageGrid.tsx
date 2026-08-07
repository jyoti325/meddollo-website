import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";
import { healthPackages } from "@/data/health-packages";

export default function HealthPackageGrid() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#F8FCFB] to-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Health Packages
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#143B38]">
            Choose Your Health Package
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Preventive health checkups designed for every stage of life.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {healthPackages.map((pkg) => (

            <div
              key={pkg.id}
              className={`relative overflow-hidden rounded-[36px] border border-white/40 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,143,93,.18)]
              ${
                pkg.color === "green"
                  ? "bg-gradient-to-br from-[#EAFBF4] via-white to-[#DDF9EC]"
                  : "bg-gradient-to-br from-[#FFF7D8] via-white to-[#FFF2A6]"
              }`}
            >

              {pkg.featured && (
                <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-[#008F5D] to-[#00B67A] px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="p-10">

                <div className="flex items-center gap-3">

                  <Star
                    size={24}
                    className="text-[#F4B400]"
                  />

                  <span className="font-semibold text-[#008F5D]">
                    {pkg.tests}+ Tests
                  </span>

                </div>

                <h3 className="mt-6 text-3xl font-bold text-[#143B38]">
                  {pkg.name}
                </h3>

                <div className="mt-6 text-5xl font-black text-[#008F5D]">
                  {pkg.price}
                </div>

                <div className="mt-8 space-y-4">

                  {pkg.includes.map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2
                        size={20}
                        className="text-[#008F5D]"
                      />

                      <span className="text-gray-700">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

                <Link
                  href="/contact-us"
                  className="mt-10 flex justify-center rounded-full bg-gradient-to-r from-[#008F5D] to-[#00B67A] px-6 py-4 font-semibold text-white transition hover:scale-105"
                >
                  Book This Package
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}