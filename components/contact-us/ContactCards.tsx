"use client";

import { Star, Phone, MessageCircle, CalendarDays, ArrowUpRight } from "lucide-react";

const cards = [
  {
    title: "Give a Review",
    sub: "Share your experience with Meddollo Life Care",
    color: "green",
    type: "review",
  },
  {
    title: "Get Social",
    sub: "Follow us and stay connected with Meddollo",
    color: "yellow",
    type: "social",
  },
  {
    title: "Contact Us",
    sub: "We're always happy to assist you",
    color: "green",
    type: "contact",
  },
  {
    title: "Book Appointment",
    sub: "Schedule your diagnostic appointment with us",
    color: "yellow",
    type: "appointment",
  },
];

export default function ContactCards() {
  const openAppointment = () => {
    window.dispatchEvent(new Event("openAppointmentPopup"));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8FCFB] py-24">
      {/* Background Effects */}
      <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-[#00B67A]/10 blur-3xl"></div>

      <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-[#F4C430]/15 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Stay Connected
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#143B38] lg:text-5xl">
            We&apos;re Always Ready to Help
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Connect with us, share your experience, or book your next
            appointment with Meddollo Life Care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const isGreen = card.color === "green";

            return (
              <div
                key={card.title}
                className={`group relative overflow-hidden rounded-[32px] border border-white/40 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(0,143,93,.15)] ${
                  isGreen
                    ? "bg-gradient-to-br from-[#EAFBF4] via-white to-[#DDF9EC]"
                    : "bg-gradient-to-br from-[#FFF8D8] via-white to-[#FFF2A6]"
                }`}
              >
                {/* Decorative Circle */}
                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full blur-2xl ${
                    isGreen
                      ? "bg-[#00B67A]/10"
                      : "bg-[#F4C430]/15"
                  }`}
                ></div>

                {/* Give a Review */}
                {card.type === "review" && (
                  <>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#008F5D] to-[#00B67A] text-white shadow-lg">
                      <Star size={28} fill="currentColor" />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-[#143B38]">
                      Give a Review
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {card.sub}
                    </p>

                    {/* Google Review QR */}
<a
  href="https://www.google.com/searchviewer/10?svid=CAwSHRIbCgNwdnESFENnMHZaeTh4TVc1ck9IUTBhSEprGAo&sa=X&ved=2ahUKEwjfkuuE9b2WAxVx3TgGHf3NBFEQ_74PegoIAggACAAIFhAI#sv=CAESzQEKuQEStgEKd0FKaVQ0dEprWFdvejlCMFptLXpkRHRPWmxGeWUyS0lOemdGQ2g4SFVQUnRIMlpMYXR3dDJSY01OZ2VJajFBcDdCWkdoRkJwdFl1VTVBMndWX0pCeldRUGxBNVNLclpveGU0R250Q3Ryak9tcDRLbHFrRVhIVlk4Ehc3cWlPYXZPZE9xNjg0LUVQcFlhVjhRWRoiQURzcjlmUXh6LWlYODZXRDV3c216RG5fRVc4SVF6RlNqQRIEODA1MRoBMyoAMAA4AUAAGAAgkPO74AdKAhAC"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Give a Google Review"
  className="mt-6 inline-block"
>
  <div className="rounded-2xl border border-[#008F5D]/20 bg-white p-3 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
    <img
      src="/images/contact/google-review-qr.webp"
      alt="Scan QR code to leave a Google Review"
      width={120}
      height={120}
      className="h-[120px] w-[120px] object-contain"
    />
  </div>
</a>

<p className="mt-3 text-xs font-medium text-[#008F5D]">
  Click on the QR code to review us on Google
</p>

{/* Submit Review Button */}
<a
  href="https://g.page/r/CZLHjPbDwkhHEAE/review"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#008F5D] to-[#00B67A] px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  aria-label="Submit a Google Review"
>
  <Star size={18} fill="currentColor" />
  Submit Review
  <ArrowUpRight size={18} />
</a>
                  </>
                )}

                {/* Get Social */}
                {card.type === "social" && (
                  <>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#008F5D] to-[#00B67A] text-white shadow-lg">
                      <ArrowUpRight size={28} />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-[#143B38]">
                      Get Social
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {card.sub}
                    </p>

                    {/* Social Links */}
                    <div className="mt-8 flex gap-4">
                      {/* Facebook */}
                      <a
                        href="https://www.facebook.com/profile.php?id=61591204366461"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Meddollo Life Care Facebook"
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#008F5D] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#006D52] hover:shadow-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-6 w-6"
                        >
                          <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.67.33-1 1-1z" />
                        </svg>
                      </a>

                      {/* Instagram */}
                      <a
                        href="https://www.instagram.com/meddollolifecare?igsh=MTh3cnJ1OHZ0MXUwNA%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Meddollo Life Care Instagram"
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00B67A] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#008F5D] hover:shadow-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />

                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

                          <line
                            x1="17.5"
                            x2="17.51"
                            y1="6.5"
                            y2="6.5"
                          />
                        </svg>
                      </a>
                    </div>

                    <p className="mt-5 text-sm font-semibold text-[#143B38]">
                      Follow us on social media
                    </p>
                  </>
                )}

                {/* Contact Us */}
                {card.type === "contact" && (
                  <>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#008F5D] to-[#00B67A] text-white shadow-lg">
                      <Phone size={28} />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-[#143B38]">
                      Contact Us
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {card.sub}
                    </p>

                    {/* Contact Links */}
                    <div className="mt-8 flex gap-4">
                      {/* Call */}
                      <a
                        href="tel:+917890369598"
                        aria-label="Call Meddollo Life Care"
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#008F5D] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#006D52] hover:shadow-lg"
                      >
                        <Phone size={23} />
                      </a>

                      {/* WhatsApp */}
                      <a
                        href="https://wa.me/917890369598"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp Meddollo Life Care"
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00B67A] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#008F5D] hover:shadow-lg"
                      >
                        <MessageCircle size={24} />
                      </a>
                    </div>

                    <div className="mt-5">
                      <p className="text-sm font-semibold text-[#008F5D]">
                        +91 78903 69598
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Call or WhatsApp us
                      </p>
                    </div>
                  </>
                )}

                {/* Book Appointment */}
                {card.type === "appointment" && (
                  <>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#008F5D] to-[#00B67A] text-white shadow-lg">
                      <CalendarDays size={28} />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-[#143B38]">
                      Book Appointment
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {card.sub}
                    </p>

                    {/* Appointment Button */}
                    <button
                      type="button"
                      onClick={openAppointment}
                      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#008F5D] to-[#00B67A] px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <CalendarDays size={19} />
                      Book Now
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </button>

                    <p className="mt-4 text-center text-xs text-gray-500">
                      Quick & easy appointment booking
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}