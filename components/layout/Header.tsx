"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  const openAppointment = () => {
    setOpen(false);
    window.dispatchEvent(new Event("openAppointmentPopup"));
  };

  return (
    <header className="w-full border-b border-gray-300 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 lg:px-4">
        <div className="flex min-h-[56px] items-center justify-between lg:min-h-[68px]">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              aria-label="Meddollo Life Care Home"
            >
              <Image
                src="/logo.png"
                alt="Meddollo Life Care Diagnostic Center"
                width={80}
                height={32}
                priority
                className="h-auto w-[50px] object-contain sm:w-[60px] md:w-[70px] lg:w-[75px] xl:w-[80px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden flex-1 justify-center lg:flex"
          >
            <ul className="flex items-center gap-5 xl:gap-8">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      whitespace-nowrap text-sm font-medium
                      transition-colors duration-300
                      xl:text-base
                      ${
                        pathname === item.href
                          ? "text-[#008F5D]"
                          : "text-gray-700 hover:text-[#008F5D]"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Appointment Button */}
          <div className="hidden lg:flex">
            <button
              type="button"
              onClick={openAppointment}
              className="
                whitespace-nowrap rounded-full
                bg-[#008F5D]
                px-5 py-3
                text-sm font-semibold
                text-white
                shadow-md
                transition
                hover:bg-[#00734B]
                xl:px-7 xl:text-base
              "
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 p-2 lg:hidden"
          >
            <span className="block h-0.5 w-6 bg-gray-700"></span>
            <span className="block h-0.5 w-6 bg-gray-700"></span>
            <span className="block h-0.5 w-6 bg-gray-700"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <nav
            aria-label="Mobile Navigation"
            className="border-t py-5 lg:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`
                      block text-sm font-medium sm:text-base
                      ${
                        pathname === item.href
                          ? "text-[#008F5D]"
                          : "text-gray-700"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              {/* Mobile Appointment Button */}
              <li>
                <button
                  type="button"
                  onClick={openAppointment}
                  className="
                    inline-flex w-full
                    justify-center
                    rounded-full
                    bg-[#008F5D]
                    py-3
                    font-semibold
                    text-white
                    shadow-md
                    transition
                    hover:bg-[#00734B]
                  "
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}