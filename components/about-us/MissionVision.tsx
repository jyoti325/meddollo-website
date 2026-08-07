import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#F8FCFB] via-white to-[#F4FFFA]">

      {/* Background Blobs */}

      <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-[#00B67A]/10 blur-3xl"></div>

      <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-[#FDD835]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Our Purpose
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#143B38] lg:text-5xl">
            Our Mission & Vision
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every service we provide is driven by our commitment to quality,
            compassion and excellence in healthcare.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Mission */}

          <div className="group rounded-[36px] border border-white/30 bg-white/80 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,143,93,0.15)]">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#008F5D] to-[#00B67A] shadow-lg">

              <Target
                size={38}
                className="text-white"
              />

            </div>

            <h3 className="mt-8 text-3xl font-bold text-[#143B38]">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              To provide accurate diagnostics, affordable healthcare
              solutions and compassionate patient care through modern
              technology, experienced professionals and a commitment to
              excellence.
            </p>

          </div>

          {/* Vision */}

          <div className="group rounded-[36px] border border-white/30 bg-white/80 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,143,93,0.15)]">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#FDD835] to-[#FFD54F] shadow-lg">

              <Eye
                size={38}
                className="text-[#143B38]"
              />

            </div>

            <h3 className="mt-8 text-3xl font-bold text-[#143B38]">
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              To become one of the most trusted diagnostic and preventive
              healthcare centres by delivering reliable medical services,
              innovation and an exceptional patient experience.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}