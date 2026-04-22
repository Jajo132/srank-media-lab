"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ChevronUp } from "lucide-react";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";


const featuredItems = [
  {
    title: "FPV Storytelling",
    text: "Fast, immersive movement that brings spaces, products, and action to life.",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Commercial Visuals",
    text: "Premium branded content for campaigns, launches, and modern visual marketing.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cinematic Travel",
    text: "Atmospheric drone visuals, landscapes, and high-end travel storytelling.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
];

const serviceCards = [
  {
    title: "Brand Videos",
    text: "High-end visuals for products, launches, and campaigns that need a sharper identity.",
  },
  {
    title: "FPV Coverage",
    text: "Dynamic movement for action, automotive, events, spaces, and immersive storytelling.",
  },
  {
    title: "Social Content",
    text: "Short-form content built for reels, TikTok, ads, and modern digital attention spans.",
  },
  {
    title: "Creative Direction",
    text: "Visual ideas, framing, pacing, and cinematic styling that make content feel premium.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const primaryButton =
    "inline-flex items-center justify-center rounded-[28px] bg-white px-10 py-5 text-center text-lg font-semibold text-black transition duration-300 hover:scale-105 hover:opacity-90";

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="bg-[#f5f5f2] text-black">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f5f2]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="leading-none">
            <div className="text-3xl font-black uppercase tracking-tight">SRANK</div>
            <div className="text-3xl font-black uppercase tracking-tight">MEDIA LAB</div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm uppercase tracking-[0.2em] text-slate-700 transition hover:text-black"
            >
              About
            </a>
            <Link
              href="/drones"
              className="text-sm uppercase tracking-[0.2em] text-slate-700 transition hover:text-black"
            >
              Drones
            </Link>
            <Link
              href="/gear"
              className="text-sm uppercase tracking-[0.2em] text-slate-700 transition hover:text-black"
            >
              Gear
            </Link>
            <a
              href="#work"
              className="text-sm uppercase tracking-[0.2em] text-slate-700 transition hover:text-black"
            >
              Work With Me
            </a>
            <a
              href="#featured"
              className="text-sm uppercase tracking-[0.2em] text-slate-700 transition hover:text-black"
            >
              Featured
            </a>
            <Link
              href="/contact"
              className="text-sm uppercase tracking-[0.2em] text-slate-700 transition hover:text-black"
            >
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl p-2 transition hover:bg-black/5 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/10 bg-[#f5f5f2] px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#about" onClick={closeMenu}>
                About
              </a>
              <Link href="/drones" onClick={closeMenu}>
                Drones
              </Link>
              <Link href="/gear" onClick={closeMenu}>
                Gear
              </Link>
              <a href="#work" onClick={closeMenu}>
                Work With Me
              </a>
              <a href="#featured" onClick={closeMenu}>
                Featured
              </a>
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      <section
        id="home"
        className="relative flex min-h-screen items-end overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.56)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="self-end"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/80">
              FPV • Cinematic Visuals • Brand Storytelling
            </p>

            <h1 className="max-w-4xl text-5xl font-light uppercase tracking-[0.08em] text-white md:text-7xl">
              Srank Media Lab
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
              Cinematic FPV visuals, drone storytelling, and modern content for brands,
              campaigns, events, and digital experiences.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#work" className={primaryButton}>
                Work With Me
              </a>

              <Link href="/contact" className={primaryButton}>
                Contact
              </Link>
            </div>
          </motion.div>

          <div className="flex items-end justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-[30px] border border-white/20 bg-white/85 p-6 shadow-2xl backdrop-blur">
              <div className="flex flex-col gap-4">
                <Link href="/drones" className={primaryButton}>
                  Explore Drones
                </Link>

                <Link href="/gear" className={primaryButton}>
                  Explore Gear
                </Link>

                <a href="#featured" className={primaryButton}>
                  Featured Work
                </a>

                <div className="mt-2 flex items-center justify-center gap-8 text-black">
                  <FaInstagram size={34} />
                  <FaTiktok size={34} />
                  <FaYoutube size={34} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">About</p>

            <h2 className="mt-4 text-4xl font-light uppercase tracking-[0.08em] text-teal-700 sm:text-5xl">
              Cinematic visuals with motion and energy
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
              <p>
                Srank Media Lab creates cinematic FPV visuals, drone content, and
                modern storytelling for brands, products, events, and digital campaigns.
              </p>
              <p>
                The focus is on dynamic movement, premium image quality, and visuals
                that feel immersive, polished, and memorable.
              </p>
              <p className="text-slate-400">
                From indoor cinewhoop shots to fast outdoor chase scenes and long-range
                cinematic flights, each project is built to stand out.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=80"
              alt="Cinematic production"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="work"
        className="relative overflow-hidden bg-[linear-gradient(to_bottom,rgba(255,255,255,1),rgba(245,245,242,1))]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                Work With Me
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-light uppercase tracking-[0.08em] sm:text-5xl lg:text-6xl">
                Let’s build something cinematic
              </h2>

              <div className="mt-8 max-w-2xl space-y-6 text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
                <p>
                  I create cinematic FPV visuals and modern content for brands that
                  want to stand out.
                </p>
                <p>
                  From dynamic action shots to clean product visuals and social-first
                  storytelling, each project is designed to feel premium, authentic,
                  and memorable.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className={primaryButton}>
                  🚀 Start a Project
                </Link>

                <a href="#featured" className={primaryButton}>
                  View Featured Work
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/10 bg-white px-5 py-5 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Focus</p>
                  <p className="mt-2 text-lg font-semibold">FPV & Cinematic</p>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white px-5 py-5 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Best For</p>
                  <p className="mt-2 text-lg font-semibold">Brands & Campaigns</p>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white px-5 py-5 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Style</p>
                  <p className="mt-2 text-lg font-semibold">Modern & High Energy</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {serviceCards.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[26px] border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 h-1.5 w-14 rounded-full bg-black transition duration-300 group-hover:w-20" />

                  <h3 className="text-2xl font-semibold leading-tight text-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Featured</p>

        <h2 className="mt-4 text-4xl font-light uppercase tracking-[0.08em] sm:text-5xl">
          What I focus on
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featuredItems.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[28px] bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:grid-cols-2">
          <Link
            href="/drones"
            className="group overflow-hidden rounded-[30px] bg-black text-white shadow-2xl transition duration-300 hover:-translate-y-1"
          >
            <div className="p-10">
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Explore</p>
              <h3 className="mt-4 text-4xl font-light uppercase tracking-[0.08em]">
                Drones
              </h3>
              <p className="mt-4 max-w-xl leading-7 text-white/80">
                See the drone fleet I use for long-range cinematic flights, action
                chasing, and indoor FPV storytelling.
              </p>
              <div className="mt-8 inline-flex rounded-xl border border-white/20 px-5 py-3 transition group-hover:bg-white group-hover:text-black">
                View Drone Fleet
              </div>
            </div>
          </Link>

          <Link
            href="/gear"
            className="group overflow-hidden rounded-[30px] bg-[#083750] text-white shadow-2xl transition duration-300 hover:-translate-y-1"
          >
            <div className="p-10">
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Explore</p>
              <h3 className="mt-4 text-4xl font-light uppercase tracking-[0.08em]">
                Gear
              </h3>
              <p className="mt-4 max-w-xl leading-7 text-white/80">
                Cameras, microphones, support gear, and creative tools used to
                produce clean and cinematic visual content.
              </p>
              <div className="mt-8 inline-flex rounded-xl border border-white/20 px-5 py-3 transition group-hover:bg-white group-hover:text-[#083750]">
                View Gear Setup
              </div>
            </div>
          </Link>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-8 text-center text-sm uppercase tracking-[0.2em] text-slate-500">
        © 2026 Srank Media Lab
      </footer>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 rounded-3xl bg-white/90 p-4 shadow-xl transition hover:bg-white"
          aria-label="Scroll to top"
        >
          <ChevronUp size={28} />
        </button>
      )}
    </main>
  );
}