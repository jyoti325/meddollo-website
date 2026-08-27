"use client";

import { useEffect, useState } from "react";
import {
  X,
  CalendarDays,
  User,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export default function AppointmentPopup() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const openPopup = () => setOpen(true);

    window.addEventListener("openAppointmentPopup", openPopup);

    return () => {
      window.removeEventListener("openAppointmentPopup", openPopup);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Appointment Request:", formData);

    alert("Thank you! Your appointment request has been submitted.");

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });

    setOpen(false);
  };

  const closePopup = () => {
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#143B38]/65 px-4 py-6 backdrop-blur-md"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          closePopup();
        }
      }}
    >
      <div className="relative max-h-[95vh] w-full max-w-3xl overflow-y-auto rounded-[32px] bg-white shadow-[0_30px_100px_rgba(0,0,0,.25)]">
        {/* Close Button */}
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close appointment form"
          className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-white/30"
        >
          <X size={22} />
        </button>

        {/* Popup Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#008F5D] via-[#00A96D] to-[#00B67A] px-7 py-10 text-white sm:px-10">
          {/* Decorative Effects */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10"></div>

          <div className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-[#F4C430]/20"></div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              <CalendarDays size={17} />
              Appointment Request
            </span>

            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Book Your Appointment
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/85 sm:text-base">
              Fill in your details and our team will get in touch with you
              shortly to confirm your appointment.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">

            {/* Full Name */}
            <div>
              <label
                htmlFor="appointment-name"
                className="mb-2 block text-sm font-semibold text-[#143B38]"
              >
                Full Name
              </label>

              <div className="relative">
                <User
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#008F5D]"
                />

                <input
                  id="appointment-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-2xl border border-gray-200 bg-[#F8FCFB] py-4 pl-12 pr-4 text-sm text-[#143B38] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#008F5D] focus:bg-white focus:ring-4 focus:ring-[#008F5D]/10"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="appointment-phone"
                className="mb-2 block text-sm font-semibold text-[#143B38]"
              >
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#008F5D]"
                />

                <input
                  id="appointment-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="w-full rounded-2xl border border-gray-200 bg-[#F8FCFB] py-4 pl-12 pr-4 text-sm text-[#143B38] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#008F5D] focus:bg-white focus:ring-4 focus:ring-[#008F5D]/10"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="appointment-email"
                className="mb-2 block text-sm font-semibold text-[#143B38]"
              >
                Email Address
                <span className="ml-1 font-normal text-gray-400">
                  (Optional)
                </span>
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#008F5D]"
                />

                <input
                  id="appointment-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-gray-200 bg-[#F8FCFB] py-4 pl-12 pr-4 text-sm text-[#143B38] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#008F5D] focus:bg-white focus:ring-4 focus:ring-[#008F5D]/10"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label
                htmlFor="appointment-service"
                className="mb-2 block text-sm font-semibold text-[#143B38]"
              >
                Select Service
              </label>

              <div className="relative">
                <CalendarDays
                  size={19}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#008F5D]"
                />

                <select
                  id="appointment-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none rounded-2xl border border-gray-200 bg-[#F8FCFB] py-4 pl-12 pr-4 text-sm text-[#143B38] outline-none transition-all duration-300 focus:border-[#008F5D] focus:bg-white focus:ring-4 focus:ring-[#008F5D]/10"
                >
                  <option value="">
                    Select a service
                  </option>

                  <option value="Diagnostic Tests">
                    Diagnostic Tests
                  </option>

                  <option value="Health Packages">
                    Health Packages
                  </option>

                  <option value="Full Body Checkup">
                    Full Body Checkup
                  </option>

                  <option value="Blood Tests">
                    Blood Tests
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label
                htmlFor="appointment-message"
                className="mb-2 block text-sm font-semibold text-[#143B38]"
              >
                Message
                <span className="ml-1 font-normal text-gray-400">
                  (Optional)
                </span>
              </label>

              <div className="relative">
                <MessageSquare
                  size={19}
                  className="absolute left-4 top-5 text-[#008F5D]"
                />

                <textarea
                  id="appointment-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us anything you'd like us to know..."
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-[#F8FCFB] py-4 pl-12 pr-4 text-sm text-[#143B38] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#008F5D] focus:bg-white focus:ring-4 focus:ring-[#008F5D]/10"
                />
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 flex flex-col gap-5 border-t border-gray-100 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#008F5D]/10 text-[#008F5D]">
                <CheckCircle2 size={19} />
              </div>

              <p className="max-w-sm text-xs leading-5 text-gray-500">
                Our team will contact you shortly to confirm your appointment
                details.
              </p>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#008F5D] to-[#00B67A] px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CalendarDays size={19} />
              Request Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}