import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function ContactForm() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#F8FCFB] via-white to-[#FFFDF6]">

      <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-[#00B67A]/10 blur-3xl"></div>

      <div className="absolute -right-24 bottom-10 h-[420px] w-[420px] rounded-full bg-[#F4C430]/15 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">

          {/* Contact Form */}

          <div className="rounded-[36px] border border-white/30 bg-white/80 p-10 shadow-[0_20px_60px_rgba(0,0,0,.08)] backdrop-blur-xl">

            <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
              Send Us a Message
            </span>

            <h2 className="mt-5 text-4xl font-black text-[#143B38]">
              We&apos;d Love to Hear From You
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>

            <form className="mt-10 space-y-6">

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#008F5D]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#008F5D]"
                />

              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#008F5D]"
              />

              <select
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#008F5D]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a Service
                </option>
                <option>Pathology</option>
                <option>Digital X-Ray</option>
                <option>Ultrasonography</option>
                <option>ECG</option>
                <option>Health Package</option>
                <option>Home Collection</option>
                <option>Other</option>
              </select>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#008F5D]"
              />

              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-[#008F5D] to-[#00B67A] px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Details */}

          <div className="space-y-6">

            {[
              {
                icon: Phone,
                title: "Call Us",
                value: "+91 78903 69598",
              },
              {
                icon: Mail,
                title: "Email",
                value: "info@meddollolifecare.com",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                value: "Meddollo Life Care Diagnostic Centre",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                value: "Chat With Our Team",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[30px] bg-gradient-to-br from-[#EAFBF4] via-white to-[#FFF8D8] p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#008F5D] to-[#00B67A] text-white">

                    <Icon size={26} />

                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#143B38]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.value}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}