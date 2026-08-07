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
    href="#"
    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg font-bold transition hover:bg-white hover:text-[#008F5D]"
    aria-label="Facebook"
  >
    F
  </a>

  <a
    href="#"
    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg font-bold transition hover:bg-white hover:text-[#008F5D]"
    aria-label="Instagram"
  >
    I
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
            Designed & Developed with ❤️
          </p>

        </div>

      </div>

    </footer>
  );
}