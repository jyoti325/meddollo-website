import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  review: string;
  rating: number;
  featured?: boolean;
}

export default function TestimonialCard({
  name,
  location,
  review,
  rating,
  featured = false,
}: TestimonialCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[32px] border backdrop-blur-xl transition-all duration-500
      ${
        featured
          ? "border-[#008F5D]/20 bg-white/90 p-10 shadow-[0_30px_80px_rgba(0,143,93,0.15)]"
          : "border-white/40 bg-white/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,143,93,0.15)]"
      }`}
    >
      {/* Quote Icon */}

      <div className="absolute right-8 top-8 opacity-10">
        <Quote
          size={featured ? 80 : 60}
          className="text-[#008F5D]"
        />
      </div>

      {/* Stars */}

      <div className="mb-6 flex gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            fill="#FDD835"
            color="#FDD835"
          />
        ))}
      </div>

      {/* Review */}

      <p
        className={`leading-8 text-gray-700 ${
          featured ? "text-xl" : "text-base"
        }`}
      >
        "{review}"
      </p>

      {/* Divider */}

      <div className="my-8 h-px bg-gradient-to-r from-[#008F5D]/30 to-transparent"></div>

      {/* User */}

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#008F5D] to-[#00B67A] text-xl font-bold text-white">
          {name.charAt(0)}
        </div>

        <div>

          <h4 className="font-bold text-[#143B38]">
            {name}
          </h4>

          <p className="text-sm text-gray-500">
            {location}
          </p>

        </div>

      </div>
    </div>
  );
}