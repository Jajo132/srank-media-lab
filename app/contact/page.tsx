"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");
    setSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setStatusMessage("Your message has been sent successfully.");
        setFormData({
          name: "",
          company: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSuccess(false);
        setStatusMessage(data.message || "Failed to send message.");
      }
    } catch (error) {
      setSuccess(false);
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#083750] text-white">
      <header className="border-b border-white/20 bg-[#083750]/90 backdrop-blur">
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

      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-white/70">
          Contact
        </p>

        <h1 className="mt-4 text-center text-5xl font-light uppercase tracking-[0.08em] md:text-7xl">
          Let’s Work Together
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-white/80">
          For brand collaborations, FPV projects, commercial shoots, or general
          inquiries, send a message below.
        </p>

        <div className="mt-8 space-y-3 text-center text-2xl">
          <p>📱 +31 6 26 39 72 34</p>
          <p>📧 info@srankmedialab.nl</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-14 space-y-6">
          <div>
            <label className="mb-2 block text-lg font-semibold">Name *</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              required
              className="h-16 w-full rounded-2xl border-2 border-white bg-transparent px-4 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-lg font-semibold">Company</label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              type="text"
              className="h-16 w-full rounded-2xl border-2 border-white bg-transparent px-4 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-lg font-semibold">E-Mail *</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
              className="h-16 w-full rounded-2xl border-2 border-white bg-transparent px-4 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-lg font-semibold">Subject *</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="h-16 w-full rounded-2xl border-2 border-white bg-[#0b4663] px-4 text-white outline-none"
            >
              <option value="" className="bg-[#0b4663] text-white">
                Select a subject
              </option>
              <option value="Brand Collaboration" className="bg-[#0b4663] text-white">
                Brand Collaboration
              </option>
              <option value="FPV Project" className="bg-[#0b4663] text-white">
                FPV Project
              </option>
              <option value="Social Content" className="bg-[#0b4663] text-white">
                Social Content
              </option>
              <option value="Commercial Shoot" className="bg-[#0b4663] text-white">
                Commercial Shoot
              </option>
              <option value="Event Coverage" className="bg-[#0b4663] text-white">
                Event Coverage
              </option>
              <option value="Product Video" className="bg-[#0b4663] text-white">
                Product Video
              </option>
              <option value="General Inquiry" className="bg-[#0b4663] text-white">
                General Inquiry
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-lg font-semibold">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className="w-full rounded-2xl border-2 border-white bg-transparent px-4 py-4 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-white py-4 text-lg font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {statusMessage && (
            <div
              className={`rounded-2xl border px-4 py-3 text-center text-sm font-medium ${
                success
                  ? "border-green-300/30 bg-green-500/20 text-green-100"
                  : "border-red-300/30 bg-red-500/20 text-red-100"
              }`}
            >
              {statusMessage}
            </div>
          )}
        </form>
      </section>
    </main>
  );
}