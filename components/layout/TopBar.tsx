import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-[#008F5D] text-white text-sm">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-11">

          {/* Left Side */}
          <div className="flex items-center gap-8">

            <Link
              href="tel:+917890369598"
              className="hover:text-green-200 transition-colors"
            >
              📞 +91 78903 69598
            </Link>

            <span className="hidden lg:flex items-center">
              📍 Baguiati, Kolkata
            </span>

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-8">

            <span className="hidden md:flex items-center">
              🕒 Open Daily : 7:30 AM – 9:00 PM
            </span>

          </div>

        </div>

      </div>
    </div>
  );
}