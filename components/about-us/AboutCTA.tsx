import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#006D52] via-[#008F5D] to-[#00B67A]" />

      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-[#FDD835]/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="rounded-[40px] border border-white/20 bg-white/10 p-12 text-center backdrop-blur-xl">

          <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white">
            Your Health Matters
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Experience Trusted Healthcare
            <br />
            with Meddollo Life Care
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Whether you need preventive health checkups, pathology tests,
            home sample collection or expert diagnostic services, our team
            is here to provide quality healthcare with compassion and care.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-[#008F5D] transition hover:scale-105"
            >
              Book Appointment
              <ArrowRight size={20} />
            </Link>

            <a
              href="tel:+917890369598"
              className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#008F5D]"
            >
              <Phone size={20} />
              Call Now
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}