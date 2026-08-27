"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

function openAppointmentPopup() {
  window.dispatchEvent(new Event("openAppointmentPopup"));
}

export default function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F9FFFC] to-[#FFFDF3] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#143B38] lg:text-5xl">
            Complete Diagnostic Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every service is backed by advanced technology, experienced
            professionals and patient-first care.
          </p>

        </div>

        <div className="space-y-14">

          {services.map((service, index) => {

            const reverse = index % 2 !== 0;

            return (

              <div
                key={service.title}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* Image */}
                <div className="overflow-hidden rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,0.12)]">

                  <Image
                    src={service.image}
                    alt={service.title}
                    width={700}
                    height={500}
                    className="h-full w-full object-cover transition duration-700 hover:scale-110"
                  />

                </div>

                {/* Content */}
                <div
                  className={`rounded-[40px] p-10 shadow-xl ${
                    service.color === "green"
                      ? "bg-gradient-to-br from-[#EAFBF4] via-white to-[#DFF8EE]"
                      : "bg-gradient-to-br from-[#FFF9D8] via-white to-[#FFF3A6]"
                  }`}
                >

                  <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#008F5D] shadow">
                    Diagnostic Service
                  </span>

                  <h3 className="mt-6 text-4xl font-bold text-[#143B38]">
                    {service.title}
                  </h3>

                  <p className="mt-6 leading-8 text-gray-600">
                    {service.description}
                  </p>

                  {/* Book Test */}
                  <button
                    type="button"
                    onClick={openAppointmentPopup}
                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#008F5D] px-7 py-4 font-semibold text-white transition hover:bg-[#006D52]"
                  >
                    Book Test
                    <ArrowRight size={18} />
                  </button>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}