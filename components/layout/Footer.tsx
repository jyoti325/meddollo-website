import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock3,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Health Packages", href: "/health-packages" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact-us" },
];

const services = [
  "Pathology",
  "Home Sample Collection",
  "Digital X-Ray",
  "ECG",
  "Health Checkups",
];

const packages = [
  "Silver Package",
  "Gold Package",
  "Platinum Package",
  "Executive Checkup",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#073B33] via-[#0A4E43] to-[#008F5D] text-white">

      {/* Background Effects */}

      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/5 blur-3xl"></div>

      <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[#FDD835]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-10 lg:grid-cols-5">

          {/* Column 1 */}

          <div className="lg:col-span-2">

            <Link href="/">
              <h2 className="text-3xl font-bold">
                Meddollo Life Care
              </h2>
            </Link>

            <p className="mt-6 max-w-md leading-8 text-white/80">
              Meddollo Life Care is committed to providing accurate
              diagnostics, preventive healthcare, home sample collection
              and quality medical services with compassion and excellence.
            </p>

            <div className="mt-8 flex gap-4">

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

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-white/80 transition hover:text-[#FDD835]"
                  >
                    <ArrowRight size={16} />
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold">
              Services
            </h3>

            <ul className="mt-6 space-y-4">

              {services.map((service) => (
                <li
                  key={service}
                  className="text-white/80"
                >
                  {service}
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold">
              Contact
            </h3>

            <div className="mt-6 space-y-6">

              <div className="flex gap-3">

                <MapPin
                  size={20}
                  className="mt-1 text-[#FDD835]"
                />

                <p className="text-white/80">
                  Shop No-8, Pran Apartment,
                  EB-9, Deshbandhu Nagar,
                  Baguiati,
                  Kolkata – 700059
                </p>

              </div>

              <div className="flex gap-3">

                <Phone
                  size={20}
                  className="text-[#FDD835]"
                />

                <a
                  href="tel:+917890369598"
                  className="text-white/80 hover:text-white"
                >
                  +91 78903 69598
                </a>

              </div>

              <div className="flex gap-3">

                <Clock3
                  size={20}
                  className="text-[#FDD835]"
                />

                <p className="text-white/80">
                  Everyday
                  <br />
                  7:30 AM – 9:00 PM
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-white/70 md:flex-row">

          <p>
            © {new Date().getFullYear()} Meddollo Life Care. All Rights Reserved.
          </p>

          <p>
            Designed & Developed with by All Digital Ideas
          </p>

        </div>

      </div>

    </footer>
  );
}