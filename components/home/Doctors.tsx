import Link from "next/link";
import { ArrowRight } from "lucide-react";

import DoctorCard from "@/components/ui/DoctorCard";
import { doctors } from "@/data/doctors";

export default function Doctors() {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFB] py-24">

      {/* Background Blur */}
      <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-[#00B67A]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FDD835]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Our Doctors
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#143B38] lg:text-5xl">
            Meet Our Healthcare Experts
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our experienced medical professionals are committed to
            providing accurate diagnosis, compassionate care and trusted
            healthcare services for every patient.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              designation={doctor.designation}
              experience={doctor.experience}
              image={doctor.image}
              featured={doctor.featured}
              link={doctor.link}
            />
          ))}

        </div>

        {/* CTA */}

        <div className="mt-16 text-center">

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#006D52] to-[#00B67A] px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
          >
            Book Consultation

            <ArrowRight size={20} />
          </Link>

        </div>

      </div>

    </section>
  );
}