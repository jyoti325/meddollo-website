import Link from "next/link";
import { MapPin, Navigation, Clock3 } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FCFB] to-[#FFFDF6] py-24">

      {/* Background Blur */}

      <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-[#00B67A]/10 blur-3xl"></div>

      <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-[#F4C430]/15 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Find Us
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#143B38] lg:text-5xl">
            Visit Our Diagnostic Centre
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Visit Meddollo Life Care for reliable diagnostic services in a
            comfortable and patient-friendly environment.
          </p>

        </div>

        {/* Map */}

        <div className="relative overflow-hidden rounded-[40px] shadow-[0_25px_70px_rgba(0,0,0,.12)]">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7366.15829253003!2d88.42062663941644!3d22.613519471884942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sShop%20No-8%2C%20Pran%20Apartment%2C%20EB-9%2C%20Deshbandhu%20Nagar%2C%20Baguiati%2C%20Kolkata%20%E2%80%93%20700059!5e0!3m2!1sen!2sin!4v1786086566903!5m2!1sen!2sin"
            width="100%"
            height="620"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
            title="Meddollo Life Care Location"
          />

          {/* Floating Information Card */}

          <div className="absolute left-6 top-6 w-full max-w-sm rounded-[32px] border border-white/20 bg-white/90 p-8 shadow-[0_20px_60px_rgba(0,0,0,.18)] backdrop-blur-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#008F5D] to-[#00B67A] text-white shadow-lg">

              <MapPin size={30} />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#143B38]">
              Meddollo Life Care
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

            <div className="mt-8 rounded-2xl bg-[#F8FCFB] p-5">

              <div className="flex items-start gap-3">

                <Clock3
                  size={20}
                  className="mt-1 text-[#008F5D]"
                />

                <div>

                  <h4 className="font-semibold text-[#143B38]">
                    Working Hours
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Monday – Sunday
                    <br />
                    7:00 AM – 9:00 PM
                  </p>

                </div>

              </div>

            </div>

            <Link
              href="https://maps.app.goo.gl/rpe8oeVHVbxYoNeZ8"
              target="_blank"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#008F5D] to-[#00B67A] px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
            >

              <Navigation size={18} />

              Get Directions

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}