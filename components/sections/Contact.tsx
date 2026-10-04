"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio-data";
import { Mail, MapPin, CheckCircle2, Github, Linkedin, Send, Sparkles, Loader2, AlertCircle } from "lucide-react";

export const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Frontend Web Development (React / Next.js)",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [sentDetails, setSentDetails] = useState({ name: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setSentDetails({ name: formData.name, email: formData.email });
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        category: "Frontend Web Development (React / Next.js)",
        message: "",
      });
    } catch (err: unknown) {
      console.error("Failed to send message:", err);
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMessage(msg);
      setStatus("error");
    }
  };

  const handleFallbackMailto = () => {
    const subject = encodeURIComponent(`[${formData.category || "Inquiry"}] Project Inquiry from ${formData.name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${personal.contact.email}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, var(--brand-cream-light) 0%, var(--brand-cream) 100%)",
      }}
    >
      {/* Subtle background ambient radial glow */}
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232, 112, 64, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(181, 82, 42, 0.08)",
              border: "1px solid rgba(181, 82, 42, 0.2)",
              color: "var(--brand-terracotta)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: "var(--brand-dark)" }}
          >
            Let&apos;s Build Something Exceptional
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--brand-brown-text)", opacity: 0.78 }}
          >
            Have an upcoming project, want to redesign your web app, or looking for a
            talented frontend engineer? Drop me a message below.
          </motion.p>
        </div>

        {/* ── 2-Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] xl:grid-cols-[380px_1fr] gap-8 items-start">

          {/* ── LEFT: Contact Information Card ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              border: "1px solid rgba(181, 82, 42, 0.14)",
              boxShadow: "0 4px 24px rgba(181, 82, 42, 0.06)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div>
              <h3
                className="text-xl font-bold mb-7"
                style={{ color: "var(--brand-dark)" }}
              >
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* 1. Direct Email */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(232, 112, 64, 0.12)",
                      border: "1px solid rgba(232, 112, 64, 0.25)",
                      color: "var(--brand-orange)",
                    }}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p
                      className="text-[11px] font-bold uppercase tracking-wider mb-1"
                      style={{ color: "var(--brand-terracotta)", opacity: 0.75 }}
                    >
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${personal.contact.email}`}
                      className="text-sm sm:text-base font-semibold transition-colors hover:underline break-all"
                      style={{ color: "var(--brand-dark)" }}
                    >
                      {personal.contact.email}
                    </a>
                  </div>
                </div>

                {/* 2. Current Base */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(59, 130, 246, 0.12)",
                      border: "1px solid rgba(59, 130, 246, 0.25)",
                      color: "#2563EB",
                    }}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p
                      className="text-[11px] font-bold uppercase tracking-wider mb-1"
                      style={{ color: "var(--brand-terracotta)", opacity: 0.75 }}
                    >
                      Current Base
                    </p>
                    <p
                      className="text-sm sm:text-base font-semibold"
                      style={{ color: "var(--brand-dark)" }}
                    >
                      Nigeria (GMT+1 / WAT)
                    </p>
                  </div>
                </div>

                {/* 3. Current Availability */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(34, 197, 94, 0.12)",
                      border: "1px solid rgba(34, 197, 94, 0.25)",
                      color: "#16A34A",
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p
                      className="text-[11px] font-bold uppercase tracking-wider mb-1"
                      style={{ color: "var(--brand-terracotta)", opacity: 0.75 }}
                    >
                      Current Availability
                    </p>
                    <p
                      className="text-sm sm:text-base font-bold flex items-center gap-1.5"
                      style={{ color: "#16A34A" }}
                    >
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
                      Open for Contract & Full-Time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links at bottom of left card */}
            <div className="pt-10 mt-8 border-t" style={{ borderColor: "rgba(181, 82, 42, 0.12)" }}>
              <p
                className="text-[11px] font-bold uppercase tracking-wider mb-3"
                style={{ color: "var(--brand-terracotta)", opacity: 0.75 }}
              >
                Connect on Social
              </p>
              <div className="flex gap-2.5">
                {[
                  { href: personal.contact.github, icon: <Github className="w-4 h-4" />, label: "GitHub" },
                  { href: personal.contact.linkedin, icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
                  { href: `mailto:${personal.contact.email}`, icon: <Mail className="w-4 h-4" />, label: "Email" },
                ].map(({ href, icon, label }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.12, rotate: 4 }}
                    whileTap={{ scale: 0.94 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    style={{
                      background: "rgba(250, 247, 242, 0.9)",
                      border: "1px solid rgba(181, 82, 42, 0.2)",
                      color: "var(--brand-brown-text)",
                    }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Direct Message Form Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-3xl p-6 sm:p-8"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              border: "1px solid rgba(181, 82, 42, 0.14)",
              boxShadow: "0 4px 24px rgba(181, 82, 42, 0.06)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h3
              className="text-xl font-bold mb-6"
              style={{ color: "var(--brand-dark)" }}
            >
              Send Me a Direct Message
            </h3>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center shadow-lg"
                  style={{ background: "rgba(34, 197, 94, 0.15)", color: "#16a34a" }}
                >
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold" style={{ color: "var(--brand-dark)" }}>
                  Message Sent Successfully!
                </h4>
                <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: "var(--brand-brown-text)" }}>
                  Thank you{sentDetails.name ? `, ${sentDetails.name}` : ""}! Your message was delivered directly to my inbox. I will review it and get back to you shortly
                  {sentDetails.email ? ` at ${sentDetails.email}` : ""}.
                </p>
                <div className="pt-3">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setStatus("idle");
                      setErrorMessage("");
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer"
                    style={{
                      background: "rgba(181, 82, 42, 0.1)",
                      border: "1px solid rgba(181, 82, 42, 0.25)",
                      color: "var(--brand-terracotta)",
                    }}
                  >
                    Send Another Message
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Error Banner with Direct Fallback */}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl text-xs flex flex-col gap-2.5"
                    style={{
                      background: "rgba(239, 68, 68, 0.08)",
                      border: "1px solid rgba(239, 68, 68, 0.25)",
                      color: "#991B1B",
                    }}
                  >
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold">{errorMessage || "Unable to send message directly."}</p>
                        <p className="mt-1 opacity-80">
                          You can still send this message immediately using your default mail app:
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleFallbackMailto}
                      className="self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Open in Email App
                    </button>
                  </motion.div>
                )}

                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Your Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: "var(--brand-brown-text)", opacity: 0.85 }}
                    >
                      Your Name <span style={{ color: "var(--brand-orange)" }}>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Samuel Green"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none"
                      style={{
                        background: "rgba(250, 247, 242, 0.85)",
                        border: "1px solid rgba(181, 82, 42, 0.2)",
                        color: "var(--brand-dark)",
                      }}
                    />
                  </div>

                  {/* Your Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: "var(--brand-brown-text)", opacity: 0.85 }}
                    >
                      Your Email <span style={{ color: "var(--brand-orange)" }}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="samuel@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none"
                      style={{
                        background: "rgba(250, 247, 242, 0.85)",
                        border: "1px solid rgba(181, 82, 42, 0.2)",
                        color: "var(--brand-dark)",
                      }}
                    />
                  </div>
                </div>

                {/* Row 2: Project Category */}
                <div>
                  <label
                    htmlFor="category"
                    className="block text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: "var(--brand-brown-text)", opacity: 0.85 }}
                  >
                    Project Category
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none appearance-none cursor-pointer pr-10"
                      style={{
                        background: "rgba(250, 247, 242, 0.85)",
                        border: "1px solid rgba(181, 82, 42, 0.2)",
                        color: "var(--brand-dark)",
                      }}
                    >
                      <option value="Frontend Web Development (React / Next.js)">
                        Frontend Web Development (React / Next.js)
                      </option>
                      <option value="Full-Stack Web Application">
                        Full-Stack Web Application
                      </option>
                      <option value="UI/UX Implementation & High-Performance Animation">
                        UI/UX Implementation & High-Performance Animation
                      </option>
                      <option value="Freelance / Contract Opportunity">
                        Freelance / Contract Opportunity
                      </option>
                      <option value="Full-Time Engineering Role">
                        Full-Time Engineering Role
                      </option>
                    </select>
                    <div
                      className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4"
                      style={{ color: "var(--brand-brown-text)", opacity: 0.6 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: "var(--brand-brown-text)", opacity: 0.85 }}
                  >
                    Your Message <span style={{ color: "var(--brand-orange)" }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Tell me a bit about your idea, timeline, or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none resize-y"
                    style={{
                      background: "rgba(250, 247, 242, 0.85)",
                      border: "1px solid rgba(181, 82, 42, 0.2)",
                      color: "var(--brand-dark)",
                    }}
                  />
                </div>

                {/* Row 4: Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === "submitting"}
                  whileHover={status === "submitting" ? {} : { scale: 1.02, boxShadow: "0 6px 28px rgba(232, 112, 64, 0.45)" }}
                  whileTap={status === "submitting" ? {} : { scale: 0.98 }}
                  className={`w-full py-3.5 px-6 rounded-2xl font-bold text-white text-sm sm:text-base flex items-center justify-center gap-2 transition-all ${
                    status === "submitting" ? "opacity-75 cursor-not-allowed" : "cursor-pointer"
                  }`}
                  style={{
                    background: "var(--brand-orange)",
                    boxShadow: "0 4px 20px rgba(232, 112, 64, 0.35)",
                  }}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 ml-0.5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer
        className="mt-20 pt-8 border-t text-center text-xs sm:text-sm"
        style={{
          borderColor: "rgba(181, 82, 42, 0.12)",
          color: "var(--brand-brown-text)",
          opacity: 0.65,
        }}
      >
        <p>© {new Date().getFullYear()} {personal.name}. Built with Next.js, Tailwind CSS & GSAP.</p>
      </footer>
    </section>
  );
};
