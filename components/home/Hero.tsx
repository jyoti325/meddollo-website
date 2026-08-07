import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, House, Clock3 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F7FCFA] via-white to-[#EAF8F3]">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#00B67A]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#F4D21F]/10 blur-3xl"></div>

      <div className="mx-auto flex max-w-7xl items-center px-6 py-24 lg:grid lg:grid-cols-2 lg:gap-12">

        {/* Left Content */}

        <div>

          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Accurate • Timely • Trusted
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-[#143B38] lg:text-6xl">
            Stay Home.
            <br />
            Stay Relaxed.
            <br />
            We Deliver Health
            <span className="text-[#008F5D]"> to Your Door.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Full body checkups, pathology tests, ECG, Digital X-Ray,
            consultant doctors and home sample collection — all with
            trusted healthcare professionals.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/contact-us"
              className="rounded-full bg-gradient-to-r from-[#006D52] to-[#00B67A] px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
            >
              Book Appointment
            </Link>

            <Link
              href="/health-packages"
              className="rounded-full border-2 border-[#008F5D] px-8 py-4 font-semibold text-[#008F5D] transition hover:bg-[#008F5D] hover:text-white"
            >
              View Packages
            </Link>

          </div>

          {/* Trust Items */}

          <div className="mt-12 flex flex-wrap gap-8">

            <div className="flex items-center gap-2">
              <ShieldCheck className="text-[#008F5D]" size={22} />
              <span className="font-medium">
                NABL Partner Lab
              </span>
            </div>

            <div className="flex items-center gap-2">
              <House className="text-[#008F5D]" size={22} />
              <span className="font-medium">
                Home Collection
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock3 className="text-[#008F5D]" size={22} />
              <span className="font-medium">
                7:30 AM – 9:00 PM
              </span>
            </div>

          </div>

        </div>

        {/* Right Image */}

        <div className="relative mt-16 lg:mt-0">

          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#008F5D]/20 to-[#F4D21F]/20 blur-3xl"></div>

          <Image
            src="/images/hero/hero-doctor.png"
            alt="Meddollo Life Care"
            width={650}
            height={650}
            priority
            className="w-full max-w-lg mx-auto"
          />

        </div>

      </div>

    </section>
  );
}