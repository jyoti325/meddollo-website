"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Health Packages", href: "/health-packages" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact-us" },
];


export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 header-bg shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-32">

          {/* Logo */}
          <div className="w-64 flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Meddollo Life Care"
                width={220}
                height={90}
                priority
                className="h-32 w-auto"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 flex justify-center items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[15px] font-medium transition-colors duration-300 ${
                  pathname === item.href
                    ? "text-[#008F5D]"
                    : "text-gray-700 hover:text-[#008F5D]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="w-64 flex justify-end flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-[#008F5D] text-white font-semibold shadow-md hover:bg-[#00734B] transition"
            >
              Book Appointment
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}