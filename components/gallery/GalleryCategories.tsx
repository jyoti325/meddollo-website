"use client";

import { useState } from "react";
import {
  Building2,
  Microscope,
  Scan,
  Users,
  Image as ImageIcon,
} from "lucide-react";

const categories = [
  {
    id: "all",
    name: "All",
    icon: ImageIcon,
  },
  {
    id: "laboratory",
    name: "Laboratory",
    icon: Microscope,
  },
  {
    id: "equipment",
    name: "Equipment",
    icon: Scan,
  },
  {
    id: "facility",
    name: "Facility",
    icon: Building2,
  },
  {
    id: "team",
    name: "Our Team",
    icon: Users,
  },
];

export default function GalleryCategories() {
  const [active, setActive] = useState("all");

  return (
    <section className="relative py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#008F5D]/10 px-5 py-2 text-sm font-semibold text-[#008F5D]">
            Browse Gallery
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#143B38] lg:text-5xl">
            Explore Every Corner of Meddollo
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Browse through our modern laboratories, advanced diagnostic
            equipment, patient facilities and dedicated healthcare team.
          </p>

        </div>

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((category) => {

            const Icon = category.icon;

            return (
              <button
                key={category.id}
                onClick={() => setActive(category.id)}
                className={`group flex items-center gap-3 rounded-full px-7 py-4 font-semibold transition-all duration-300
                ${
                  active === category.id
                    ? "bg-gradient-to-r from-[#008F5D] to-[#00B67A] text-white shadow-xl"
                    : "bg-white text-[#143B38] shadow-md hover:-translate-y-1 hover:shadow-xl"
                }`}
              >
                <Icon size={20} />

                {category.name}

              </button>
            );

          })}

        </div>

      </div>

    </section>
  );
}