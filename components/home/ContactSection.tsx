import {
  MapPin,
  Phone,
  Clock3,
  Navigation,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFB] py-24">

      {/* Background Glow */}

      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#00B67A]/10 blur-3xl"></div>

      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#FDD835]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#143B38] lg:text-5xl">
            Visit Meddollo Life Care
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Reach out to us for pathology tests, home sample collection,
            health packages and doctor consultations.
          </p>

        </div>

        {/* Main Layout */}

        <div className="grid gap-10 lg:grid-cols-5">

          {/* Left */}

          <div className="space-y-6 lg:col-span-2">

            {/* Address */}

            <div className="rounded-[28px] bg-white p-7 shadow-lg">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF8F3]">

                <MapPin
                  className="text-[#008F5D]"
                  size={26}
                />

              </div>

              <h3 className="text-xl font-bold text-[#143B38]">
                Address
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Shop No-8, Pran Apartment,
                <br />
                EB-9, Deshbandhu Nagar,
                <br />
                Baguiati,
                <br />
                Kolkata – 700059
              </p>

            </div>

            {/* Phone */}

            <div className="rounded-[28px] bg-white p-7 shadow-lg">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF8F3]">

                <Phone
                  className="text-[#008F5D]"
                  size={26}
                />

              </div>

              <h3 className="text-xl font-bold text-[#143B38]">
                Phone
              </h3>

              <a
                href="tel:+917890369598"
                className="mt-4 block text-lg font-semibold text-[#008F5D]"
              >
                +91 78903 69598
              </a>

            </div>

            {/* Hours */}

            <div className="rounded-[28px] bg-white p-7 shadow-lg">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF8F3]">

                <Clock3
                  className="text-[#008F5D]"
                  size={26}
                />

              </div>

              <h3 className="text-xl font-bold text-[#143B38]">
                Working Hours
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Monday – Sunday
                <br />
                7:30 AM – 9:00 PM
              </p>

            </div>

          </div>

          {/* Google Map */}

          <div className="overflow-hidden rounded-[32px] shadow-2xl lg:col-span-3">

            <iframe
              src="https://www.google.com/maps?q=Shop%20No-8,%20Pran%20Apartment,%20EB-9,%20Deshbandhu%20Nagar,%20Baguiati,%20Kolkata%20700059&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="min-h-[650px] border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-12 text-center">

          <a
            href="https://maps.google.com/?q=Shop%20No-8,%20Pran%20Apartment,%20EB-9,%20Deshbandhu%20Nagar,%20Baguiati,%20Kolkata%20700059"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#006D52] to-[#00B67A] px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            <Navigation size={20} />
            Get Directions
          </a>

        </div>

      </div>

    </section>
  );
}