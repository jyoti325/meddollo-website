import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="relative py-24 bg-[#F7FBFA] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#00B67A]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#F4D21F]/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-[#143B38]">
            Comprehensive Diagnostic Services
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide accurate diagnostics, preventive health checkups,
            home sample collection and expert healthcare services to help
            you stay healthy with complete peace of mind.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
            />
          ))}

        </div>

        {/* CTA */}

        <div className="mt-16 text-center">

          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#006D52] to-[#00B67A] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            View All Services
            <ArrowRight size={20} />
          </Link>

        </div>

      </div>

    </section>
  );
}