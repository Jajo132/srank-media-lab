import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Camera & FPV Gear",
  description:
    "Explore the camera gear, FPV travel setup, protection cases, and filmmaking tools used by Srank Media Lab.",
  alternates: {
    canonical: "https://srankmedialab.nl/gear",
  },
};

const gearItems = [
  {
    name: "iFlight FPV Drone Backpack V2",
    description:
      "A practical FPV backpack for carrying drones, batteries, goggles, controllers, and travel essentials in one setup.",
    image: "/gear/backpackv2.jpg",
    link: "https://your-affiliate-link.com/backpackv2",
    tag: "🎒 Travel Setup",
    vibe: "Carry & Transport",
    backgroundImage:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "DJI Osmo Action 4 Standard Combo",
    description:
      "Action camera used for behind-the-scenes content, extra angles, and cinematic support footage during shoots.",
    image: "/gear/osmoaction4.jpg",
    link: "https://your-affiliate-link.com/osmoaction4",
    tag: "📷 BTS Camera",
    vibe: "Action & Content",
    backgroundImage:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "iFlight Europe Pro Case 580",
    description:
      "Hard case for protecting FPV gear during travel, transport, and on-location shoots with a more secure setup.",
    image: "/gear/procase580.jpg",
    link: "https://your-affiliate-link.com/procase580",
    tag: "🧳 Hard Protection",
    vibe: "Protection & Storage",
    backgroundImage:
      "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function GearPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] text-black">
      <header className="border-b border-black/10 bg-[#f5f5f2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="leading-none">
            <div className="text-3xl font-black uppercase">SRANK</div>
            <div className="text-3xl font-black uppercase">MEDIA LAB</div>
          </Link>

          <nav className="hidden gap-8 md:flex">
            <Link href="/" className="text-sm uppercase tracking-[0.2em]">
              Home
            </Link>
            <Link href="/drones" className="text-sm uppercase tracking-[0.2em]">
              Drones
            </Link>
            <Link href="/gear" className="text-sm uppercase tracking-[0.2em]">
              Gear
            </Link>
            <Link href="/contact" className="text-sm uppercase tracking-[0.2em]">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.35em] text-gray-500">
          Srank Media Lab
        </p>

        <h1 className="mt-4 text-5xl font-light uppercase tracking-[0.08em] md:text-7xl">
          Gear Setup
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-700">
          The gear I use for FPV travel, content production, protection, and
          cinematic support during shoots.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {gearItems.map((item) => (
            <div
              key={item.name}
              className="group overflow-hidden rounded-[28px] bg-white shadow-xl transition hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.name} in the Srank Media Lab gear setup`}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-black px-4 py-1 text-sm text-white">
                  {item.tag}
                </div>
              </div>

              <div
                className="relative brightness-110"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.1)), url('${item.backgroundImage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                    {item.vibe}
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold">{item.name}</h2>

                  <p className="mt-4 text-base leading-7 text-white/90">
                    {item.description}
                  </p>

                  <p className="mt-4 text-sm font-medium text-green-300">
                    ✔ Gear I personally use
                  </p>

                  <a
                    href={item.link}
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