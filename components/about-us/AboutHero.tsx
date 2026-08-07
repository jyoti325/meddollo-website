import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#006D52] via-[#008F5D] to-[#00B67A] py-28">

      {/* Background */}

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#FDD835]/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white">
            About Meddollo Life Care
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
            Compassionate Healthcare,
            <br />
            Accurate Diagnostics,
            <br />
            Trusted Care.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/90">
            Meddollo Life Care is committed to delivering high-quality
            diagnostic services, preventive healthcare, and patient-first
            medical support with modern technology and experienced
            healthcare professionals.
          </p>

          {/* Breadcrumb */}

          <div className="mt-10 flex items-center gap-2 text-white/80">

            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <ChevronRight size={18} />

            <span className="font-semibold text-[#FDD835]">
              About Us
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}