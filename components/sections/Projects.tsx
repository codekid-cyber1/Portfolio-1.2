"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ArrowRight, Globe, Lock, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio-data";
import { LazyProjectMedia } from "@/components/ui/LazyProjectMedia";

const SPOTLIGHT_PROJECTS = portfolioData.projects;

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = SPOTLIGHT_PROJECTS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? SPOTLIGHT_PROJECTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === SPOTLIGHT_PROJECTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-20 lg:py-28 overflow-x-clip" style={{ background: "var(--brand-cream)" }}>
      <div className="container px-4 mx-auto max-w-6xl">
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.3em] mb-2"
              style={{ color: "var(--brand-terracotta)" }}
            >
              Selected Work
            </p>
            <h2
              className="text-3xl lg:text-4xl font-extrabold tracking-tight"
              style={{ color: "var(--brand-dark)" }}
            >
              Featured Projects
            </h2>
            <p
              className="mt-2 text-sm sm:text-base max-w-xl leading-relaxed"
              style={{ color: "var(--brand-brown-text)", opacity: 0.8 }}
            >
              Interactive showcase of production applications focusing on real-time data, architectural speed, and polished user experiences.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all self-start md:self-auto hover:translate-x-1"
            style={{
              background: "rgba(181,82,42,0.08)",
              border: "1px solid rgba(181,82,42,0.2)",
              color: "var(--brand-terracotta)",
            }}
          >
            All Projects ({portfolioData.Allprojects.length})
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── Mobile Selector Pills (< lg screens) ── */}
        <div className="lg:hidden flex items-center justify-between gap-2 mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none flex-1">
            {SPOTLIGHT_PROJECTS.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={project.title}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "text-white shadow-sm"
                      : "text-[#5C3A1E] hover:bg-white/60"
                  }`}
                  style={{
                    background: isActive ? "var(--brand-orange)" : "rgba(255,255,255,0.75)",
                    border: `1px solid ${isActive ? "var(--brand-orange)" : "rgba(181,82,42,0.15)"}`,
                  }}
                >
                  <span className={isActive ? "text-white/80" : "text-[#B5522A]"}>{project.index}</span>
                  <span>{project.title}</span>
                </button>
              );
            })}
          </div>

          {/* Quick cycle arrows on mobile */}
          <div className="flex items-center gap-1 flex-shrink-0 pl-1">
            <button
              onClick={handlePrev}
              aria-label="Previous Project"
              className="w-8 h-8 rounded-full flex items-center justify-center border transition-colors hover:bg-white"
              style={{
                background: "rgba(255,255,255,0.75)",
                borderColor: "rgba(181,82,42,0.2)",
                color: "var(--brand-dark)",
              }}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Project"
              className="w-8 h-8 rounded-full flex items-center justify-center border transition-colors hover:bg-white"
              style={{
                background: "rgba(255,255,255,0.75)",
                borderColor: "rgba(181,82,42,0.2)",
                color: "var(--brand-dark)",
              }}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Main Spotlight Deck Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] xl:grid-cols-[380px_1fr] gap-8 items-start">

          {/* LEFT: Project Selector List (Desktop) */}
          <div className="hidden lg:flex flex-col gap-3">
            {SPOTLIGHT_PROJECTS.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={project.title}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 relative group cursor-pointer ${
                    isActive
                      ? "shadow-md scale-[1.01]"
                      : "hover:bg-white/60 hover:scale-[1.005]"
                  }`}
                  style={{
                    background: isActive
                      ? "rgba(255, 255, 255, 0.95)"
                      : "rgba(255, 255, 255, 0.55)",
                    border: `1.5px solid ${
                      isActive ? "var(--brand-orange)" : "rgba(181,82,42,0.12)"
                    }`,
                    boxShadow: isActive ? "0 8px 24px rgba(181,82,42,0.12)" : "none",
                  }}
                >
                  {/* Left accent bar on active */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full"
                      style={{ background: "var(--brand-orange)" }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span
                      className="text-xs font-black tracking-wider uppercase"
                      style={{ color: isActive ? "var(--brand-orange)" : "var(--brand-terracotta)", opacity: isActive ? 1 : 0.7 }}
                    >
                      {project.index}
                    </span>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(181,82,42,0.08)",
                        color: "var(--brand-terracotta)",
                      }}
                    >
                      {project.tag}
                    </span>
                  </div>

                  <h3
                    className="text-base font-extrabold leading-snug transition-colors"
                    style={{
                      color: isActive ? "var(--brand-dark)" : "rgba(28,16,8,0.8)",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-xs leading-relaxed mt-1 line-clamp-1"
                    style={{
                      color: "var(--brand-brown-text)",
                      opacity: isActive ? 0.9 : 0.65,
                    }}
                  >
                    {project.highlight}
                  </p>
                </button>
              );
            })}

            {/* Quick footer card */}
            <div
              className="mt-2 p-4 rounded-2xl flex items-center justify-between text-xs"
              style={{
                background: "rgba(232,112,64,0.06)",
                border: "1px dashed rgba(181,82,42,0.25)",
              }}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" style={{ color: "var(--brand-orange)" }} />
                <span className="font-semibold" style={{ color: "var(--brand-dark)" }}>
                  Looking for more builds?
                </span>
              </div>
              <Link
                href="/projects"
                className="font-bold underline hover:opacity-80 transition-opacity"
                style={{ color: "var(--brand-terracotta)" }}
              >
                View Archive →
              </Link>
            </div>
          </div>

          {/* RIGHT: Interactive Browser Preview Deck */}
          <div
            className="rounded-3xl border overflow-hidden shadow-xl transition-all"
            style={{
              background: "rgba(255, 255, 255, 0.92)",
              borderColor: "rgba(181, 82, 42, 0.18)",
              boxShadow: "0 16px 40px rgba(181,82,42,0.08)",
            }}
          >
            {/* Browser Window Header */}
            <div
              className="flex items-center justify-between px-4 py-3 border-b"
              style={{
                background: "#FAF7F2",
                borderColor: "rgba(181, 82, 42, 0.12)",
              }}
            >
              {/* Traffic control dots */}
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#E87040" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#F59E0B" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#10B981" }} />
              </div>

              {/* URL address bar */}
              <div
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-tight max-w-[220px] sm:max-w-xs truncate"
                style={{
                  background: "rgba(255, 255, 255, 0.85)",
                  border: "1px solid rgba(181, 82, 42, 0.15)",
                  color: "#5C3A1E",
                }}
              >
                <Lock className="w-2.5 h-2.5 flex-shrink-0" style={{ color: "#10B981" }} />
                <span className="truncate">https://{activeProject.urlHost}</span>
              </div>

              {/* Live / Code badge */}
              <div
                className="flex items-center gap-1.5 text-[11px] font-semibold"
                style={{ color: activeProject.links.live ? "#16A34A" : "#0284C7" }}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    activeProject.links.live ? "bg-emerald-500 animate-pulse" : "bg-sky-500"
                  }`}
                />
                <span className="hidden sm:inline">
                  {activeProject.links.live ? "Active" : "Code Showcase"}
                </span>
              </div>
            </div>

            {/* Browser Viewport with AnimatePresence */}
            <div className="p-4 sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-5"
                >
                  {/* Project Screenshot / Video Showcase Frame */}
                  <div
                    className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border group"
                    style={{
                      borderColor: "rgba(181, 82, 42, 0.15)",
                      background: "#FAF7F2",
                    }}
                  >
                    <LazyProjectMedia
                      src={activeProject.image}
                      videoSrc={activeProject.video}
                      posterSrc={activeProject.poster}
                      alt={activeProject.title}
                      aspectRatio="aspect-[16/10] sm:aspect-[16/9]"
                    />

                    {/* Quick view overlay pill on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md">
                        <Globe className="w-3.5 h-3.5" />
                        {activeProject.links.live ? "Explore Live Interface" : "Explore Repository"}
                      </span>
                    </div>
                  </div>

                  {/* Project Details Strip */}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className="text-xs font-extrabold uppercase tracking-wider"
                            style={{ color: "var(--brand-terracotta)" }}
                          >
                            {activeProject.index} — {activeProject.tag}
                          </span>
                        </div>
                        <h4
                          className="text-xl sm:text-2xl font-black tracking-tight mt-0.5"
                          style={{ color: "var(--brand-dark)" }}
                        >
                          {activeProject.title}
                        </h4>
                      </div>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                            style={{
                              background: "rgba(181,82,42,0.08)",
                              border: "1px solid rgba(181,82,42,0.18)",
                              color: "var(--brand-terracotta)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Summary text */}
                    <p
                      className="text-xs sm:text-sm leading-relaxed"
                      style={{ color: "var(--brand-brown-text)", opacity: 0.88 }}
                    >
                      {activeProject.description}
                    </p>

                    {/* Bottom CTA Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {activeProject.links.live && (
                        <a
                          href={activeProject.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white transition-all hover:scale-105 shadow-md"
                          style={{
                            background: "var(--brand-orange)",
                            boxShadow: "0 4px 16px rgba(232,112,64,0.35)",
                          }}
                        >
                          Live Demo
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {activeProject.links.github && (
                        <a
                          href={activeProject.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all hover:scale-105 shadow-sm"
                          style={{
                            background: activeProject.links.live ? "rgba(255,255,255,0.7)" : "var(--brand-orange)",
                            border: `1px solid ${activeProject.links.live ? "rgba(181,82,42,0.25)" : "transparent"}`,
                            color: activeProject.links.live ? "var(--brand-dark)" : "#FFFFFF",
                            boxShadow: activeProject.links.live ? "none" : "0 4px 16px rgba(232,112,64,0.35)",
                          }}
                        >
                          <Github className="w-3.5 h-3.5" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

