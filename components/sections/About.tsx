"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Story chapters ────────────────────────────────────────────────────────
const CHAPTERS = [
  {
    id: "identity",
    eyebrow: "Chapter 01 — Who I Am",
    headline: "Frontend Engineer\n& Creative Developer",
    body: `I'm Abdulmujeeb Awodi, a frontend engineer who bridges the gap between
financial precision and expressive web craft. I build interfaces that don't
just function, but feel alive, where every interaction has intent and
every pixel has purpose.`,
    tags: ["Problem Solver", "Detail-Oriented", "Finance × Tech"],
    glow: "0 0 0px transparent",
    filter: "brightness(1) saturate(1)",
    rotation: 0,
    scale: 1,
    bg: "rgba(245,240,232,0)",
  },
  {
    id: "builder",
    eyebrow: "Chapter 02 — The Builder",
    headline: "Modern Stack,\nSharp Engineering",
    body: `My toolkit is precise and battle-tested: React 19 with server components,
Next.js App Router, TypeScript for ironclad type safety, and Tailwind CSS
for lightning-fast styling. I reach for TanStack Query for async state,
Supabase for real-time backends, and GSAP when interfaces need to feel alive.`,
    tags: ["React 19", "Next.js", "TypeScript", "Supabase"],
    glow: "0 0 40px rgba(37,99,235,0.45)",
    filter: "brightness(1.05) saturate(1.1) drop-shadow(0 0 25px rgba(37,99,235,0.4))",
    rotation: 2,
    scale: 1.02,
    bg: "rgba(37,99,235,0.04)",
  },
  {
    id: "creative",
    eyebrow: "Chapter 03 — The Creative",
    headline: "Design-First,\nPerformance-Obsessed",
    body: `I believe interfaces should earn attention. Every scroll, every hover,
every transition is an opportunity to guide and delight. I chase 60fps
micro-interactions, WCAG-compliant layouts, and the kind of polish that
makes users say "how did they do that?". then stay.`,
    tags: ["60fps Motion", "Accessibility", "UX Philosophy", "GSAP"],
    glow: "0 0 40px rgba(194,65,12,0.45)",
    filter: "brightness(1.08) saturate(1.2) drop-shadow(0 0 30px rgba(194,65,12,0.38))",
    rotation: -2,
    scale: 1.02,
    bg: "rgba(194,65,12,0.04)",
  },
  {
    id: "collaborator",
    eyebrow: "Chapter 04 — The Collaborator",
    headline: "Let's Build\nSomething Remarkable",
    body: `Whether it's a fintech dashboard, a consumer app, or a generative web
experience, I bring strategic thinking and pixel-perfect execution to every
collaboration. I'm currently open to new projects, freelance gigs, and full-time
opportunities where craft and impact go hand-in-hand.`,
    tags: ["Open to Work", "Remote-Ready", "Full-Stack Capable"],
    glow: "0 0 35px rgba(34,197,94,0.35)",
    filter: "brightness(1.06) saturate(1.1) drop-shadow(0 0 20px rgba(34,197,94,0.3))",
    rotation: 0,
    scale: 1.05,
    bg: "rgba(34,197,94,0.04)",
  },
];

// ─── Tag pill ───────────────────────────────────────────────────────────────
const Tag = ({ label }: { label: string }) => (
  <span
    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
    style={{
      background: "rgba(181,82,42,0.1)",
      border: "1px solid rgba(181,82,42,0.2)",
      color: "#B5522A",
    }}
  >
    {label}
  </span>
);

// ─── About component ────────────────────────────────────────────────────────
export const About = () => {
  const { personal } = portfolioData;

  const sectionRef = useRef<HTMLElement>(null);
  const storyAreaRef = useRef<HTMLDivElement>(null);
  const pinVisualRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const glowRingRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ── Desktop (>= 768px): Interactive GSAP Scrollytelling & Pinned Portrait ──
      mm.add("(min-width: 768px)", () => {
        chapterRefs.current.forEach((el, i) => {
          if (!el) return;
          gsap.set(el, { opacity: i === 0 ? 1 : 0.3, y: i === 0 ? 0 : 20 });
        });

        animateToChapter(0);

        CHAPTERS.forEach((ch, i) => {
          const el = chapterRefs.current[i];
          if (!el) return;

          ScrollTrigger.create({
            trigger: el,
            start: "top 55%",
            end: "bottom 45%",
            onEnter: () => animateToChapter(i),
            onEnterBack: () => animateToChapter(i),
            onLeave: () => {
              if (i < CHAPTERS.length - 1) {
                gsap.to(el, { opacity: 0.3, duration: 0.4, ease: "power2.out" });
              }
            },
            onLeaveBack: () => {
              if (i > 0) {
                gsap.to(el, { opacity: 0.3, duration: 0.4, ease: "power2.out" });
              }
            },
          });
        });

        if (storyAreaRef.current && pinVisualRef.current) {
          ScrollTrigger.create({
            trigger: storyAreaRef.current,
            pin: pinVisualRef.current,
            start: "top 100px",
            end: "bottom bottom",
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });
        }
      });

      // ── Mobile (< 768px): Clean, compact flow with full readable opacity ──
      mm.add("(max-width: 767px)", () => {
        chapterRefs.current.forEach((el) => {
          if (!el) return;
          gsap.set(el, { opacity: 1, y: 0, clearProps: "all" });
        });
      });

      function animateToChapter(index: number) {
        const ch = CHAPTERS[index];

        // Image rotation & scale
        if (imgWrapRef.current) {
          gsap.to(imgWrapRef.current, {
            rotation: ch.rotation,
            scale: ch.scale,
            duration: 0.8,
            ease: "power2.out",
          });
        }

        // Ambient glow ring
        if (glowRingRef.current) {
          gsap.to(glowRingRef.current, {
            boxShadow: ch.glow,
            duration: 0.8,
            ease: "power2.out",
          });
        }

        // Pulse badge visibility for chapter 4
        if (pulseRef.current) {
          gsap.to(pulseRef.current, {
            opacity: index === 3 ? 1 : 0,
            scale: index === 3 ? 1 : 0.7,
            duration: 0.5,
            ease: "back.out(1.7)",
          });
        }

        // Focus active chapter, soften others
        chapterRefs.current.forEach((el, j) => {
          if (!el) return;
          gsap.to(el, {
            opacity: j === index ? 1 : 0.28,
            y: j === index ? 0 : j < index ? -16 : 20,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      }
    }, sectionRef);

    // Refresh triggers once layout settles
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-x-clip"
      style={{ background: "var(--brand-cream-light)" }}
    >
      {/* ── Section label ── */}
      <div className="container px-4 mx-auto pt-14 pb-4 md:pt-20 md:pb-6">
        <p
          className="text-xs font-bold uppercase tracking-[0.3em]"
          style={{ color: "var(--brand-terracotta)" }}
        >
          The Story
        </p>
        <h2
          className="text-3xl lg:text-4xl font-extrabold mt-2 tracking-tight"
          style={{ color: "var(--brand-dark)" }}
        >
          About Me
        </h2>
      </div>

      {/* ── Story Area (2-column layout with GSAP pin) ── */}
      <div ref={storyAreaRef} className="container px-4 mx-auto relative pb-12 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] lg:grid-cols-[1fr_420px] gap-8 md:gap-12 lg:gap-16 items-start relative">

          {/* LEFT — scrollable chapter cards */}
          <div className="space-y-10 sm:space-y-12 md:space-y-[28vh] py-3 md:py-[6vh]">
            {CHAPTERS.map((ch, i) => (
              <div
                key={ch.id}
                ref={(el) => { chapterRefs.current[i] = el; }}
                className="min-h-0 md:min-h-[50vh] transition-none"
              >
                {/* Eyebrow */}
                <p
                  className="text-xs font-bold uppercase tracking-[0.3em] mb-4"
                  style={{ color: "var(--brand-terracotta)", opacity: 0.75 }}
                >
                  {ch.eyebrow}
                </p>

                {/* Headline */}
                <h3
                  className="text-3xl lg:text-4xl font-extrabold leading-tight mb-6 whitespace-pre-line"
                  style={{ color: "var(--brand-dark)" }}
                >
                  {ch.headline}
                </h3>

                {/* Body */}
                <p
                  className="text-base leading-relaxed mb-8 max-w-lg"
                  style={{ color: "var(--brand-brown-text)", opacity: 0.85 }}
                >
                  {ch.body}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {ch.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>

                {/* Chapter 4: CTA button */}
                {i === 3 && (
                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white transition-transform hover:scale-105"
                      style={{
                        background: "var(--brand-orange)",
                        boxShadow: "0 4px 24px rgba(232,112,64,0.35)",
                      }}
                    >
                      Let&apos;s Collaborate →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT — GSAP Pinned Visual Container ── */}
          <div className="hidden md:flex md:flex-col md:items-center relative w-full h-full min-h-full">
            <div
              ref={pinVisualRef}
              className="w-full flex flex-col items-center justify-center py-6"
            >
              {/* Circular portrait with floating rings */}
              <div className="relative flex items-center justify-center w-[290px] h-[290px] lg:w-[320px] lg:h-[320px]">
                {/* Ambient outer glow ring */}
                <div
                  ref={glowRingRef}
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    border: "2px solid rgba(181,82,42,0.2)",
                    borderRadius: "50%",
                    transition: "box-shadow 0.9s ease",
                  }}
                />

                {/* Slowly rotating dashed ring */}
                <div
                  className="absolute -inset-4 rounded-full pointer-events-none"
                  style={{
                    border: "1.5px dashed rgba(181,82,42,0.22)",
                    animation: "spin-slow 30s linear infinite",
                  }}
                />

                {/* Profile image wrapper */}
                <div
                  ref={imgWrapRef}
                  className="relative w-[270px] h-[270px] lg:w-[300px] lg:h-[300px]"
                  style={{
                    willChange: "transform, filter",
                    transition: "filter 0.9s ease",
                  }}
                >
                  <Image
                    src="https://res.cloudinary.com/iyzdnb8b/image/upload/v1791127850/profile-circle_umbpav.png"
                    alt={`${personal.name} — Web Developer`}
                    fill
                    className="object-contain"
                    loading="lazy"
                    decoding="async"
                    unoptimized
                  />
                </div>
              </div>

              {/* "Available for new projects" pulse badge — sits cleanly below the circular portrait, NEVER clipped */}
              <div
                ref={pulseRef}
                className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap shadow-sm pointer-events-none"
                style={{
                  background: "rgba(34,197,94,0.12)",
                  border: "1px solid rgba(34,197,94,0.35)",
                  color: "#16a34a",
                  opacity: 0,
                  transform: "scale(0.7)",
                }}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{
                    background: "#22c55e",
                    animation: "pulse-green 1.4s ease-in-out infinite",
                  }}
                />
                Available for new projects
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── CSS for the slow spin & pulse animations ── */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse-green {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
};

