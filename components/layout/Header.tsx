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
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-4">
        <div className="flex items-center justify-between min-h-[56px] lg:min-h-[68px]">
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
                  className="
                    w-[50px]
                    sm:w-[60px]
                    md:w-[70px]
                    lg:w-[75px]
                    xl:w-[80px]
                    h-auto
                    object-contain
                  "
                />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex flex-1 justify-center"
          >
            <ul className="flex items-center gap-5 xl:gap-8">
              {navLinks.map((item)=>(
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                    text-sm
                    xl:text-base
                    font-medium
                    whitespace-nowrap
                    transition-colors
                    duration-300
                    ${
                    pathname === item.href
                    ?
                    "text-[#008F5D]"
                    :
                    "text-gray-700 hover:text-[#008F5D]"
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
            <Link
              href="/contact-us"
              className="
              px-5
              xl:px-7
              py-3
              rounded-full
              bg-[#008F5D]
              text-white
              text-sm
              xl:text-base
              font-semibold
              shadow-md
              hover:bg-[#00734B]
              transition
              whitespace-nowrap
              "
            >
              Book Appointment
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={()=>setOpen(!open)}
            className="
            lg:hidden
            flex
            flex-col
            gap-1.5
            p-2
            "
          >
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
          </button>
        </div>
        {/* Mobile Navigation */}
        {open && (
          <nav
            aria-label="Mobile Navigation"
            className="
            lg:hidden
            border-t
            py-5
            "
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((item)=>(
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={()=>setOpen(false)}
                    className={`
                    block
                    text-sm
                    sm:text-base
                    font-medium
                    ${
                    pathname === item.href
                    ?
                    "text-[#008F5D]"
                    :
                    "text-gray-700"
                    }
                    `}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact-us"
                  onClick={()=>setOpen(false)}
                  className="
                  inline-flex
                  justify-center
                  w-full
                  py-3
                  rounded-full
                  bg-[#008F5D]
                  text-white
                  font-semibold
                  shadow-md
                  "
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}