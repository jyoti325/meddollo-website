"use client";

import { ArrowRight, Star } from "lucide-react";

import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

function openAppointmentPopup() {
  window.dispatchEvent(new Event("openAppointmentPopup"));
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F6FFFB] via-white to-[#F9FCFF] py-28">

      {/* Background Blur */}
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#00B67A]/10 blur-3xl"></div>

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#FDD835]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-20 text-center">

          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#143B38] lg:text-5xl">
            What Our Patients Say
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Trusted by families for reliable diagnostics, professional
            healthcare services and compassionate patient care.
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid gap-10 lg:grid-cols-12">

          {/* Left Side */}
          <div className="lg:col-span-4">

            <div className="sticky top-28 rounded-[36px] bg-gradient-to-br from-[#008F5D] to-[#00B67A] p-10 text-white shadow-[0_25px_70px_rgba(0,143,93,0.25)]">

              <p className="text-sm uppercase tracking-[4px] opacity-80">
                Google Rating
              </p>

              <h3 className="mt-4 text-6xl font-extrabold">
                4.9
              </h3>

              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={22}
                    fill="#FDD835"
                    color="#FDD835"
                  />
                ))}
              </div>

              <p className="mt-8 text-lg leading-8 text-white/90">
                Our patients trust us for accurate reports,
                friendly service and dependable healthcare.
              </p>

              {/* Book Appointment */}
              <button
                type="button"
                onClick={openAppointmentPopup}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-[#008F5D] transition hover:scale-105"
              >
                Book Appointment
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div className="lg:col-span-8">

            {/* Featured */}
            <TestimonialCard
              featured
              {...testimonials[0]}
            />

            {/* Bottom */}
            <div className="mt-8 grid gap-8 md:grid-cols-2">

              <TestimonialCard
                {...testimonials[1]}
              />

              <TestimonialCard
                {...testimonials[2]}
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}