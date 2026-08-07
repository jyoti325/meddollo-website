import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const cards = [
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Meddollo Life Care Diagnostic Centre",
    sub: "Your complete diagnostic destination",
    color: "green",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 78903 69598",
    sub: "We're happy to assist you",
    color: "yellow",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@meddollolifecare.com",
    sub: "Quick response guaranteed",
    color: "green",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon – Sun",
    sub: "7:00 AM – 9:00 PM",
    color: "yellow",
  },
];

export default function ContactCards() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#F8FCFB]">

      <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-[#00B67A]/10 blur-3xl"></div>

      <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-[#F4C430]/15 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Contact Information
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#143B38] lg:text-5xl">
            We're Always Ready to Help
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Reach out to us through your preferred method. Our friendly team is
            always available to assist you with appointments and enquiries.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {cards.map((card) => {

            const Icon = card.icon;

            return (

              <div
                key={card.title}
                className={`group relative overflow-hidden rounded-[32px] border border-white/30 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(0,143,93,.15)]
                ${
                  card.color === "green"
                    ? "bg-gradient-to-br from-[#EAFBF4] via-white to-[#DDF9EC]"
                    : "bg-gradient-to-br from-[#FFF8D8] via-white to-[#FFF2A6]"
                }`}
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#008F5D] to-[#00B67A] text-white shadow-lg">

                  <Icon size={28} />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#143B38]">
                  {card.title}
                </h3>

                <p className="mt-4 font-semibold text-[#008F5D] break-words">
                  {card.value}
                </p>

                <p className="mt-3 leading-7 text-gray-600">
                  {card.sub}
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-[#143B38] group-hover:text-[#008F5D]">

                  Learn More

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}