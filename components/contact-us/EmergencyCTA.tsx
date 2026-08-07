import Link from "next/link";
import {
  PhoneCall,
  CalendarDays,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";

export default function EmergencyCTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-linear-to-br from-[#006D52] via-[#008F5D] to-[#F4C430]" />

      {/* Decorative Blurs */}

      <div className="absolute -left-24 -top-16 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -right-24 -bottom-16 h-[430px] w-[430px] rounded-full bg-white/15 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[42px] border border-white/20 bg-white/10 p-10 shadow-[0_25px_80px_rgba(0,0,0,.18)] backdrop-blur-xl lg:p-16">

          <div className="grid items-center gap-12 lg:grid-cols-[2fr_1fr]">

            {/* Left */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">

                <HeartHandshake size={18} />

                Your Health Is Our Priority

              </span>

              <h2 className="mt-8 text-4xl font-black leading-tight text-white lg:text-6xl">

                Let's Take the
                <br />

                First Step Towards
                <br />

                Better Health.

              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/90">

                Whether you need a routine health check-up, advanced
                diagnostics, or expert guidance, Meddollo Life Care is
                committed to providing accurate, reliable, and compassionate
                healthcare services for you and your family.

              </p>

            </div>

            {/* Right */}

            <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,.15)]">

              <h3 className="text-2xl font-bold text-[#143B38]">
                Contact Our Team
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Book your appointment today or speak directly with our team for
                assistance and healthcare guidance.
              </p>

              <div className="mt-8 space-y-4">

                <Link
                  href="/health-packages"
                  className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#008F5D] to-[#00B67A] px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
                >
                  <CalendarDays size={20} />

                  Book Appointment
                </Link>

                <a
                  href="tel:+917890369598"
                  className="flex items-center justify-center gap-3 rounded-full border-2 border-[#008F5D] px-6 py-4 font-semibold text-[#008F5D] transition-all duration-300 hover:bg-[#008F5D] hover:text-white"
                >
                  <PhoneCall size={20} />

                  Call Now
                </a>

                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 font-semibold text-[#143B38] transition hover:text-[#008F5D]"
                >
                  Explore Services

                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}