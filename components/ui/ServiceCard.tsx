import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  link,
}: ServiceCardProps) {
  return (
    <div className="group overflow-hidden rounded-[28px] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,143,93,0.18)]">

      {/* Image */}

      <div className="relative h-60 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

      </div>

      {/* Content */}

      <div className="p-7">

        <h3 className="text-2xl font-bold text-[#143B38]">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {description}
        </p>

        <Link
          href={link}
          className="mt-7 inline-flex items-center gap-2 font-semibold text-[#008F5D] transition-all duration-300 hover:gap-4"
        >
          Learn More
          <ArrowRight size={18} />
        </Link>

      </div>

    </div>
  );
}