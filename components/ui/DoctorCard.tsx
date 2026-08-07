import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

interface DoctorCardProps {
  name: string;
  designation: string;
  experience: string;
  image: string;
  featured: boolean;
  link: string;
}

export default function DoctorCard({
  name,
  designation,
  experience,
  image,
  featured,
  link,
}: DoctorCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[32px] border bg-white transition-all duration-500
      ${
        featured
          ? "border-[#008F5D] shadow-[0_25px_70px_rgba(0,143,93,0.18)] lg:-translate-y-4"
          : "border-gray-100 shadow-[0_15px_45px_rgba(0,0,0,0.08)] hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(0,143,93,0.15)]"
      }`}
    >
      {/* Featured Badge */}

      {featured && (
        <div className="absolute right-5 top-5 z-20 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#008F5D] to-[#00B67A] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
          <Award size={14} />
          Featured
        </div>
      )}

      {/* Doctor Image */}

      <div className="relative h-80 overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

      </div>

      {/* Content */}

      <div className="p-8 text-center">

        <h3 className="text-2xl font-bold text-[#143B38]">
          {name}
        </h3>

        <p className="mt-2 font-medium text-[#008F5D]">
          {designation}
        </p>

        <div className="mx-auto mt-6 inline-flex rounded-full bg-[#EAF8F3] px-5 py-2 text-sm font-semibold text-[#008F5D]">
          {experience}
        </div>

        <Link
          href={link}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#006D52] to-[#00B67A] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
        >
          Book Appointment

          <ArrowRight size={18} />
        </Link>

      </div>
    </div>
  );
}