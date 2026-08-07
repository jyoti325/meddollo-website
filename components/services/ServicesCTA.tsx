import Link from "next/link";
import { ArrowRight, CalendarDays, Phone } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#006D52] via-[#008F5D] to-[#FDD835]" />

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -right-24 bottom-0 h-[450px] w-[450px] rounded-full bg-white/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-12 rounded-[40px] border border-white/20 bg-white/10 p-12 backdrop-blur-xl lg:grid-cols-[2fr_1fr]">

          {/* Left */}

          <div>

            <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
              Book Your Diagnostic Test Today
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white lg:text-5xl">
              Your Health Deserves
              <br />
              Accurate Diagnosis &
              <br />
              Trusted Care
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              Experience high-quality diagnostic services with advanced
              technology, timely reports and compassionate healthcare.
              Schedule your appointment today and take the first step
              towards better health.
            </p>

          </div>

          {/* Right */}

          <div className="rounded-[32px] bg-white p-8 shadow-2xl">

            <div className="space-y-5">

              <Link
                href="/contact-us"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#008F5D] px-6 py-4 font-semibold text-white transition hover:bg-[#006D52]"
              >
                <CalendarDays size={20} />

                Book Appointment

              </Link>

              <a
                href="tel:+917890369598"
                className="flex w-full items-center justify-center gap-3 rounded-full border-2 border-[#008F5D] px-6 py-4 font-semibold text-[#008F5D] transition hover:bg-[#008F5D] hover:text-white"
              >
                <Phone size={20} />

                Call Now

              </a>

              <Link
                href="/health-packages"
                className="flex items-center justify-center gap-3 text-center font-semibold text-[#143B38] transition hover:text-[#008F5D]"
              >
                View Health Packages

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}