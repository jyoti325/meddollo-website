import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Advanced Diagnostic Technology",
  "Experienced Healthcare Professionals",
  "Accurate & Timely Reports",
  "Home Sample Collection",
];

export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background */}

      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#00B67A]/10 blur-3xl"></div>

      <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-[#FDD835]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Image */}

          <div className="relative">

            <div className="h-[550px] overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

              <Image
                src="/images/about/about.jpg"
                alt="About Meddollo"
                width={700}
                height={700}
                className="h-full w-full object-cover"
              />

            </div>

            {/* Experience Card */}

            <div className="absolute -bottom-8 -right-8 rounded-[28px] border border-white/30 bg-white/90 p-8 shadow-2xl backdrop-blur-xl">

              <h3 className="text-5xl font-extrabold text-[#008F5D]">
                10+
              </h3>

              <p className="mt-2 text-gray-600">
                Years of Healthcare Excellence
              </p>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
              About Meddollo Life Care
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#143B38] lg:text-5xl">
              Delivering Trusted Diagnostic &
              Preventive Healthcare Services
            </h2>

            <p className="mt-8 leading-8 text-gray-600">
              Meddollo Life Care is dedicated to delivering reliable
              diagnostic services with advanced technology and
              compassionate patient care. Our experienced team ensures
              accurate reports, timely services and a comfortable
              healthcare experience for every patient.
            </p>

            {/* Features */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className="mt-1 text-[#008F5D]"
                    size={22}
                  />

                  <span className="text-gray-700">
                    {item}
                  </span>

                </div>
              ))}

            </div>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-3 gap-6">

              <div className="rounded-3xl bg-[#F8FCFB] p-6 text-center">

                <h3 className="text-4xl font-bold text-[#008F5D]">
                  500+
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Happy Patients
                </p>

              </div>

              <div className="rounded-3xl bg-[#F8FCFB] p-6 text-center">

                <h3 className="text-4xl font-bold text-[#008F5D]">
                  50+
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Diagnostic Tests
                </p>

              </div>

              <div className="rounded-3xl bg-[#F8FCFB] p-6 text-center">

                <h3 className="text-4xl font-bold text-[#008F5D]">
                  100%
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Patient Care
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}