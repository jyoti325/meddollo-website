import Link from "next/link";
import { CalendarDays, Phone, ArrowRight, HeartPulse } from "lucide-react";

export default function HealthPackageCTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#006D52] via-[#008F5D] to-[#F4C430]" />

      {/* Decorative Blur */}

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-white/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="rounded-[42px] border border-white/20 bg-white/10 backdrop-blur-xl p-10 lg:p-14">

          <div className="grid items-center gap-12 lg:grid-cols-[2fr_1fr]">

            {/* Left */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">

                <HeartPulse size={18} />

                Preventive Healthcare

              </span>

              <h2 className="mt-8 text-4xl font-black leading-tight text-white lg:text-6xl">
                Invest in Your Health,
                <br />
                Before Illness Finds You.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/90">
                Routine health checkups help identify potential health issues
                early, allowing timely treatment and better long-term
                well-being. Book your preventive health package today and take
                a proactive step toward a healthier future.
              </p>

            </div>

            {/* Right Card */}

            <div className="rounded-[32px] bg-white p-8 shadow-[0_25px_70px_rgba(0,0,0,.18)]">

              <h3 className="text-2xl font-bold text-[#143B38]">
                Ready to Book?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Schedule your health checkup or speak with our healthcare team
                to choose the right package.
              </p>

              <div className="mt-8 space-y-4">

                <Link
                  href="/contact-us"
                  className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#008F5D] to-[#00B67A] px-6 py-4 font-semibold text-white transition hover:scale-105"
                >
                  <CalendarDays size={20} />

                  Book Appointment
                </Link>

                <a
                  href="tel:+917890369598"
                  className="flex items-center justify-center gap-3 rounded-full border-2 border-[#008F5D] px-6 py-4 font-semibold text-[#008F5D] transition hover:bg-[#008F5D] hover:text-white"
                >
                  <Phone size={20} />

                  Call Now
                </a>

                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 font-semibold text-[#143B38] transition hover:text-[#008F5D]"
                >
                  Explore Diagnostic Services

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