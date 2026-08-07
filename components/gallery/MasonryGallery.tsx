import Image from "next/image";

const images = [
  {
    image: "/images/gallery/gallery-1.webp",
    title: "Advanced Laboratory",
    category: "Laboratory",
    height: "h-[520px]",
  },
  {
    image: "/images/gallery/gallery-2.webp",
    title: "Digital X-Ray",
    category: "Equipment",
    height: "h-[320px]",
  },
  {
    image: "/images/gallery/gallery-3.webp",
    title: "Reception Area",
    category: "Facility",
    height: "h-[420px]",
  },
  {
    image: "/images/gallery/gallery-4.webp",
    title: "Healthcare Team",
    category: "Team",
    height: "h-[320px]",
  },
  {
    image: "/images/gallery/gallery-5.webp",
    title: "Sample Collection",
    category: "Laboratory",
    height: "h-[500px]",
  },
  {
    image: "/images/gallery/gallery-6.webp",
    title: "Waiting Lounge",
    category: "Facility",
    height: "h-[400px]",
  },
];

export default function MasonryGallery() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white to-[#F8FCFB]">

      <div className="absolute -left-20 top-10 h-96 w-96 rounded-full bg-[#00B67A]/10 blur-3xl"></div>

      <div className="absolute -right-24 bottom-10 h-[420px] w-[420px] rounded-full bg-[#FDD835]/15 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="columns-1 gap-6 md:columns-2 xl:columns-3">

          {images.map((item, index) => (

            <div
              key={index}
              className={`group relative mb-6 break-inside-avoid overflow-hidden rounded-[32px] shadow-xl ${item.height}`}
            >

              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width:768px) 100vw,
                       (max-width:1200px) 50vw,
                       33vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>

              <div className="absolute left-6 top-6">

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-lg">
                  {item.category}
                </span>

              </div>

              <div className="absolute bottom-6 left-6 right-6">

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}