"use client";

import Link from "next/link";

const drones = [
  {
    name: "iFlight Nazgul Evoque F6",
    description:
      "Powerful FPV drone for fast cinematic shots, freestyle motion, and dynamic outdoor filming. Perfect for drift chasing.",
    image: "/drones/nazgulf6.jpg",
    link: "https://iflight-rc.eu/products/nazgul-evoque-f6-v2-o4-gps?bg_ref=FV8VgDW8er",
    tag: "🔥 Best for Action",
    vibe: "Drift Chase",
    backgroundImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "iFlight Helion 10",
    description:
      "Long-range drone designed for landscapes, mountains, and epic cinematic aerial shots.",
    image: "/drones/helion10.jpg",
    link: "https://iflight-rc.eu/products/helion-10-o4-6s-hd?bg_ref=FV8VgDW8er",
    tag: "🌍 Long Range",
    vibe: "Mountain Range",
    backgroundImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Darkstar 22",
    description:
      "Compact cinewhoop ideal for indoor flying, tight spaces, and smooth cinematic flow shots.",
    image: "/drones/darkstar22.jpg",
    link: "https://geprc.com/product/geprc-darkstar22-o4-pro-cinewhoop-quadcopter/",
    tag: "🎬 Indoor Cinematic",
    vibe: "Indoor Flow",
    backgroundImage:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function DronesPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] text-black">
      {/* HEADER */}
      <header className="border-b border-black/10 bg-[#f5f5f2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="leading-none">
            <div className="text-3xl font-black uppercase">SRANK</div>
            <div className="text-3xl font-black uppercase">MEDIA LAB</div>
          </Link>

          <nav className="hidden gap-8 md:flex">
            <Link href="/" className="text-sm uppercase tracking-[0.2em]">Home</Link>
            <Link href="/drones" className="text-sm uppercase tracking-[0.2em]">Drones</Link>
            <Link href="/gear" className="text-sm uppercase tracking-[0.2em]">Gear</Link>
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.35em] text-gray-500">
          Srank Media Lab
        </p>

        <h1 className="mt-4 text-5xl font-light uppercase tracking-[0.08em] md:text-7xl">
          Drone Fleet
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-700">
          My personal FPV drones used for cinematic storytelling, commercial
          projects, and high-end visual production.
        </p>

        {/* CARDS */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {drones.map((drone) => (
            <div
              key={drone.name}
              className="group overflow-hidden rounded-[28px] bg-white shadow-xl transition hover:shadow-2xl"
            >
              {/* TOP IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={drone.image}
                  alt={drone.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-black px-4 py-1 text-sm text-white">
                  {drone.tag}
                </div>
              </div>

              {/* BACKGROUND SECTION (FIXED VISIBILITY) */}
              <div
                className="relative brightness-110"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.1)), url('${drone.backgroundImage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                    {drone.vibe}
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold">
                    {drone.name}
                  </h2>

                  <p className="mt-4 text-base leading-7 text-white/90">
                    {drone.description}
                  </p>

                  <p className="mt-4 text-sm font-medium text-green-300">
                    ✔ Drone I personally use
                  </p>

                  <a
                    href={drone.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block rounded-xl bg-gradient-to-r from-black to-gray-800 px-6 py-3 text-center font-semibold tracking-wide text-white shadow-lg transition duration-300 hover:scale-105 hover:from-gray-900 hover:to-black"
                  >
                    Get it here →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}