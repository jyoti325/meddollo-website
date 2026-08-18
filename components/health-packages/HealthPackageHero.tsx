import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, HeartPulse } from "lucide-react";

export default function PackageHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FCFB] via-white to-[#FFF8D8] py-24 lg:py-32">

      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#00B67A]/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-[#FDD835]/20 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <div className="mb-8 flex items-center gap-2 text-sm text-[#008F5D]">

              <Link href="/">Home</Link>

              <ChevronRight size={18} />

              <span className="font-semibold">
                Health Packages
              </span>

            </div>

            <span className="inline-flex items-center gap-2 rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">

              <HeartPulse size={18} />

              Preventive Healthcare

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-[#143B38] lg:text-7xl">
              Complete
              <br />
              Health
              <br />
              Checkups
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              Choose from comprehensive preventive health packages
              designed to detect health concerns early and keep your
              family healthy.
            </p>

            <Link
              href="/contact-us"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#008F5D] to-[#00B67A] px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
            >
              Book Health Package

              <ArrowRight size={18} />
            </Link>

          </div>

          {/* Right */}

          <div className="relative">

            <div className="overflow-hidden rounded-[42px] bg-white p-4 shadow-[0_30px_90px_rgba(0,0,0,.12)]">

              <Image
                src="/images/health-packages/package-hero.webp"
                alt="Health Packages"
                width={700}
                height={750}
                priority
                className="rounded-[30px]"
              />

            </div>

            <div className="absolute -bottom-8 -left-8 rounded-[30px] bg-gradient-to-r from-[#008F5D] to-[#00B67A] p-6 text-white shadow-2xl">

              <h3 className="text-5xl font-black">
                50+
              </h3>

              <p className="mt-2">
                Health Checkup Tests
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}