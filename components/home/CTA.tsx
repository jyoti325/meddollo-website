"use client";

import { Phone, CalendarCheck } from "lucide-react";

function openAppointmentPopup() {
  window.dispatchEvent(new Event("openAppointmentPopup"));
}

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#006D52] via-[#008F5D] to-[#00B67A]" />

      {/* Floating Shapes */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FDD835]/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="rounded-[40px] border border-white/20 bg-white/10 p-12 backdrop-blur-xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}
            <div>

              <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white">
                Book Your Appointment
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
                Ready to Take Charge
                <br />
                of Your Health?
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/90">
                Schedule your diagnostic tests, preventive health checkups
                and home sample collection with Meddollo Life Care.
                Our team is ready to assist you every day.
              </p>

            </div>

            {/* Right */}
            <div className="flex flex-col items-start lg:items-end">

              <div className="mb-8 rounded-3xl bg-white/15 px-8 py-6 backdrop-blur-md">

                <p className="text-sm uppercase tracking-[3px] text-white/70">
                  Call Us Today
                </p>

                <h3 className="mt-3 text-4xl font-bold text-white">
                  +91 78903 69598
                </h3>

              </div>

              <div className="flex flex-wrap gap-4">

                {/* Book Appointment */}
                <button
                  type="button"
                  onClick={openAppointmentPopup}
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-[#008F5D] transition hover:scale-105"
                >
                  <CalendarCheck size={20} />
                  Book Appointment
                </button>

                {/* Call Now */}
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

        </div>

      </div>

    </section>
  );
}