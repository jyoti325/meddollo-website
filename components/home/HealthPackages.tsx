import Link from "next/link";
import { healthPackages } from "@/data/health-packages";
import PackageCard from "@/components/ui/PackageCard";

export default function HealthPackages() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F8FCFB]">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Health Packages
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#143B38] lg:text-5xl">
            Preventive Health Checkup Packages
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose from our comprehensive health packages designed to
            monitor your health and detect medical conditions early.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {healthPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              name={pkg.name}
              description={`${pkg.tests}+ diagnostic tests included.`}
              image={pkg.image}
              featured={pkg.featured}
              link="/health-packages"
              features={pkg.includes}
            />
          ))}

        </div>

        <div className="mt-14 text-center">

          <Link
            href="/health-packages"
            className="inline-flex rounded-full bg-gradient-to-r from-[#008F5D] to-[#00B67A] px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            View All Packages
          </Link>

        </div>

      </div>
    </section>
  );
}