import Image from "next/image";
import Link from "next/link";
import { ChevronRight, PhoneCall, CalendarDays } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#F8FCFB] via-white to-[#FFF8D8] py-24 lg:py-32">

      {/* Background Effects */}

      <div className="absolute -top-20 -left-24 h-96 w-96 rounded-full bg-[#00B67A]/10 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-20 h-112.5 w-112.5 rounded-full bg-[#F4C430]/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}

          <div>

            {/* Breadcrumb */}

            <div className="mb-8 flex items-center gap-2 text-sm text-[#008F5D]">

              <Link href="/" className="hover:text-[#006D52]">
                Home
              </Link>

              <ChevronRight size={16} />

              <span className="font-semibold">
                Contact Us
              </span>

            </div>

            {/* Badge */}

            <span className="inline-flex items-center gap-2 rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">

              <PhoneCall size={18} />

              We&apos;re Here to Help

            </span>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-black leading-tight text-[#143B38] lg:text-7xl">

              Get in Touch
              <br />

              With
              <span className="bg-linear-to-r from-[#008F5D] to-[#F4C430] bg-clip-text text-transparent">
                {" "}Meddollo
              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">

              Whether you need to book a diagnostic test, enquire about
              our health packages, or have any questions regarding our
              services, our dedicated team is ready to assist you.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/health-packages"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#008F5D] to-[#00B67A] px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                <CalendarDays size={20} />

                Book Appointment
              </Link>

              <a
                href="tel:+917890369598"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#008F5D] px-7 py-4 font-semibold text-[#008F5D] transition-all duration-300 hover:bg-[#008F5D] hover:text-white"
              >
                <PhoneCall size={20} />

                Call Now
              </a>

            </div>

          </div>

          {/* Right Image */}

          <div className="relative">

            <div className="rounded-[40px] border border-white/50 bg-white/70 p-4 shadow-[0_30px_80px_rgba(0,0,0,.12)] backdrop-blur-xl">

              <Image
                src="/images/contact/contact-hero.webp"
                alt="Contact Meddollo Life Care"
                width={700}
                height={700}
                priority
                className="rounded-[30px] object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -left-8 rounded-[28px] bg-linear-to-r from-[#008F5D] to-[#00B67A] p-6 text-white shadow-2xl">

              <h3 className="text-5xl font-black">
                7 Days
              </h3>

              <p className="mt-2 text-sm">
                Friendly Support & Diagnostic Assistance
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}