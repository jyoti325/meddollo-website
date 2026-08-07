import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

interface PackageCardProps {
  name: string;
  description: string;
  image: string;
  featured: boolean;
  link: string;
  features: string[];
}

export default function PackageCard({
  name,
  description,
  image,
  featured,
  link,
  features,
}: PackageCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[32px] border transition-all duration-500
      ${
        featured
          ? "border-[#008F5D] bg-gradient-to-br from-white via-[#F7FFFC] to-[#ECFFF7] shadow-[0_25px_70px_rgba(0,143,93,0.18)] lg:-translate-y-5"
          : "border-gray-100 bg-white shadow-[0_15px_45px_rgba(0,0,0,0.08)] hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,143,93,0.15)]"
      }`}
    >
      {featured && (
        <div className="absolute right-5 top-5 z-20 rounded-full bg-gradient-to-r from-[#008F5D] to-[#00B67A] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
          Most Popular
        </div>
      )}

      {/* Image */}

      <div className="relative h-60 overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

      </div>

      {/* Content */}

      <div className="p-8">

        <h3 className="text-3xl font-bold text-[#143B38]">
          {name}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {description}
        </p>

        {/* Features */}

        <ul className="mt-8 space-y-4">

          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E8FFF5]">
                <Check
                  size={16}
                  className="text-[#008F5D]"
                />
              </div>

              <span className="text-gray-700">
                {feature}
              </span>
            </li>
          ))}

        </ul>

        {/* Button */}

        <Link
          href={link}
          className={`mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold transition-all duration-300
          ${
            featured
              ? "bg-gradient-to-r from-[#006D52] to-[#00B67A] text-white hover:scale-105"
              : "border border-[#008F5D] text-[#008F5D] hover:bg-[#008F5D] hover:text-white"
          }`}
        >
          View Details

          <ArrowRight size={18} />

        </Link>

      </div>
    </div>
  );
}