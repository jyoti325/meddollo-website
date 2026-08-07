import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";

export default function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#006D52] via-[#008F5D] to-[#FDD835] py-24 lg:py-32">

      {/* Background Shapes */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -right-20 bottom-0 h-[450px] w-[450px] rounded-full bg-white/20 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            {/* Breadcrumb */}

            <div className="mb-8 flex items-center gap-2 text-sm text-white/90">

              <Link href="/" className="hover:text-white">
                Home
              </Link>

              <ChevronRight size={18} />

              <span className="font-semibold">
                Services
              </span>

            </div>

            <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl">
              Comprehensive Diagnostic Services
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">
              Trusted
              <br />
              Diagnostic
              <br />
              Services
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/90">
              From pathology tests and digital imaging to preventive
              health checkups and home sample collection, Meddollo
              Life Care delivers accurate diagnostics with
              compassionate care.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-[#008F5D] shadow-xl transition hover:scale-105"
              >
                Book Appointment

                <ArrowRight size={18} />

              </Link>

              <a
                href="tel:+917890369598"
                className="inline-flex items-center gap-3 rounded-full border border-white bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white hover:text-[#008F5D]"
              >
                <Phone size={18} />

                Call Now

              </a>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl"></div>

            {/* Image */}

            <div className="relative overflow-hidden rounded-[40px] border border-white/30 bg-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.2)] backdrop-blur-xl">

              <Image
                src="/images/services/service-hero.webp"
                alt="Diagnostic Services"
                width={700}
                height={750}
                priority
                className="w-full object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 left-8 rounded-[28px] border border-white/20 bg-white/15 p-6 backdrop-blur-xl">

              <h3 className="text-5xl font-black text-white">
                100+
              </h3>

              <p className="mt-2 text-white/90">
                Diagnostic Tests
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}