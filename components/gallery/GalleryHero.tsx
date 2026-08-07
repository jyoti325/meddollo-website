import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Camera } from "lucide-react";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FCFB] via-white to-[#FFF8D8] py-24 lg:py-32">

      {/* Background */}

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#00B67A]/10 blur-3xl"></div>

      <div className="absolute -right-20 bottom-0 h-[430px] w-[430px] rounded-full bg-[#FDD835]/20 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <div className="mb-8 flex items-center gap-2 text-sm text-[#008F5D]">

              <Link href="/">Home</Link>

              <ChevronRight size={18} />

              <span className="font-semibold">
                Gallery
              </span>

            </div>

            <span className="inline-flex items-center gap-2 rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">

              <Camera size={18} />

              Explore Meddollo

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-[#143B38] lg:text-7xl">

              Moments,
              <br />

              Facilities &
              <br />

              Excellence

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">

              Take a closer look at our modern diagnostic facilities,
              advanced equipment, expert healthcare professionals and
              patient-friendly environment.

            </p>

          </div>

          {/* Right */}

          <div className="relative">

            <div className="overflow-hidden rounded-[42px] bg-white p-4 shadow-[0_30px_90px_rgba(0,0,0,.12)]">

              <Image
                src="/images/gallery/gallery-hero.webp"
                alt="Meddollo Gallery"
                width={700}
                height={720}
                priority
                className="rounded-[32px]"
              />

            </div>

            <div className="absolute -bottom-8 -left-8 rounded-[30px] bg-gradient-to-r from-[#008F5D] to-[#00B67A] p-6 text-white shadow-2xl">

              <h3 className="text-5xl font-black">
                100+
              </h3>

              <p className="mt-2">
                Happy Patient Moments
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}