"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, House, Clock3 } from "lucide-react";

function openAppointmentPopup() {
  window.dispatchEvent(new Event("openAppointmentPopup"));
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F7FCFA] via-white to-[#EAF8F3]">

      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#00B67A]/10 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"></div>

      <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-[#F4D21F]/10 blur-3xl sm:h-96 sm:w-96 lg:h-[450px] lg:w-[450px]"></div>

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="order-2 text-center lg:order-1 lg:text-left">

            {/* Badge */}
            <span className="inline-flex rounded-full bg-[#008F5D]/10 px-4 py-2 text-xs font-semibold text-[#008F5D] sm:text-sm">
              Accurate • Timely • Trusted
            </span>

            {/* Heading */}
            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-[#143B38] sm:text-4xl md:text-5xl xl:text-6xl">
              Stay Home.
              <br />
              Stay Relaxed.
              <br />
              We Deliver Health{" "}
              <span className="text-[#008F5D]">
                to Your Door.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0">
              Full body checkups, pathology tests, ECG, Digital X-Ray,
              consultant doctors and home sample collection — all with
              trusted healthcare professionals.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">

              {/* Book Appointment */}
              <button
                type="button"
                onClick={openAppointmentPopup}
                className="w-full rounded-full bg-gradient-to-r from-[#006D52] to-[#00B67A] px-8 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl sm:w-auto"
              >
                Book Appointment
              </button>

              {/* View Packages */}
              <Link
                href="/health-packages"
                className="w-full rounded-full border-2 border-[#008F5D] px-8 py-3.5 text-center font-semibold text-[#008F5D] transition duration-300 hover:bg-[#008F5D] hover:text-white sm:w-auto"
              >
                View Packages
              </Link>

            </div>

            {/* Trust Items */}
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <ShieldCheck
                  className="shrink-0 text-[#008F5D]"
                  size={22}
                />
                <span className="font-medium text-gray-700">
                  NABL Partner Lab
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <House
                  className="shrink-0 text-[#008F5D]"
                  size={22}
                />
                <span className="font-medium text-gray-700">
                  Home Collection
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Clock3
                  className="shrink-0 text-[#008F5D]"
                  size={22}
                />
                <span className="font-medium text-gray-700">
                  7:30 AM – 9:00 PM
                </span>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative order-1 flex justify-center lg:order-2">

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#008F5D]/20 to-[#F4D21F]/20 blur-3xl"></div>

            <Image
              src="/images/hero/hero-doctor.png"
              alt="Meddollo Life Care"
              width={650}
              height={650}
              priority
              className="relative h-auto w-full max-w-[260px] rounded-2xl sm:max-w-[340px] md:max-w-[420px] lg:max-w-[500px] xl:max-w-[620px]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}