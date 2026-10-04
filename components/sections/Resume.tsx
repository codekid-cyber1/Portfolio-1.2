"use client";

import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio-data";
import {
  GraduationCap,
  Briefcase,
  Code2,
  FileDown,
  ExternalLink,
  Sparkles,
  Layers,
  Box,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

export const Resume = () => {
  const { education, skills, experience, personal } = portfolioData as any;
  const resumeUrl = personal.resumePdf || "/Abdulmujeeb_Awodi.pdf";

  return (
    <section
      id="resume"
      className="py-20 lg:py-28 overflow-x-clip"
      style={{ background: "var(--brand-cream-light)" }}
    >
      <div className="container px-4 mx-auto max-w-6xl">
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] mb-3"
              style={{
                background: "rgba(181, 82, 42, 0.08)",
                border: "1px solid rgba(181, 82, 42, 0.2)",
                color: "var(--brand-terracotta)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Credentials & Expertise
            </div>
            <h2
              className="text-3xl lg:text-4xl font-extrabold tracking-tight"
              style={{ color: "var(--brand-dark)" }}
            >
              Experience, Skills & Education
            </h2>
            <p
              className="mt-2 text-sm sm:text-base max-w-2xl leading-relaxed"
              style={{ color: "var(--brand-brown-text)", opacity: 0.82 }}
            >
              A comprehensive breakdown of my engineering toolkit, freelance client work, and quantitative academic research background.
            </p>
          </div>

          {/* Quick Header Download Action */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <a
              href={resumeUrl}
              download="Abdulmujeeb_Awodi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white transition-all hover:scale-105 shadow-md"
              style={{
                background: "var(--brand-orange)",
                boxShadow: "0 4px 16px rgba(232, 112, 64, 0.35)",
              }}
            >
              <FileDown className="w-4 h-4" />
              Download CV (PDF)
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all hover:bg-white"
              style={{
                background: "rgba(255, 255, 255, 0.75)",
                border: "1px solid rgba(181, 82, 42, 0.2)",
                color: "var(--brand-dark)",
              }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Preview
            </a>
          </div>
        </div>

        {/* ── Main 2-Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ── LEFT COLUMN: Experience & Education (7 Cols) ── */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. PROFESSIONAL EXPERIENCE */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl p-6 sm:p-8 transition-all"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(181, 82, 42, 0.16)",
                boxShadow: "0 10px 30px rgba(181, 82, 42, 0.05)",
              }}
            >
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b"
                style={{ borderColor: "rgba(181, 82, 42, 0.12)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "rgba(232, 112, 64, 0.12)",
                      color: "var(--brand-orange)",
                    }}
                  >
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black tracking-tight" style={{ color: "var(--brand-dark)" }}>
                      Professional Experience
                    </h3>
                    <p className="text-xs" style={{ color: "var(--brand-terracotta)" }}>
                      Engineering & Product Delivery
                    </p>
                  </div>
                </div>

                <span
                  className="hidden sm:inline-flex text-[11px] font-bold px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(34, 197, 94, 0.1)",
                    color: "#16a34a",
                    border: "1px solid rgba(34, 197, 94, 0.25)",
                  }}
                >
                  Active • 2026
                </span>
              </div>

              {experience?.map((exp: any, idx: number) => (
                <div key={idx} className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-base font-extrabold tracking-tight" style={{ color: "var(--brand-dark)" }}>
                        {exp.role}
                      </h4>
                      <p className="text-xs font-semibold" style={{ color: "var(--brand-terracotta)" }}>
                        {exp.period} • {exp.location}
                      </p>
                    </div>
                    <span
                      className="inline-flex self-start sm:self-auto text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                      style={{
                        background: "rgba(181, 82, 42, 0.08)",
                        color: "var(--brand-terracotta)",
                      }}
                    >
                      {exp.category}
                    </span>
                  </div>

                  <div className="space-y-3 pt-2">
                    {exp.highlights?.map((item: any, hIdx: number) => (
                      <div
                        key={hIdx}
                        className="p-3.5 rounded-2xl flex items-start gap-3 transition-colors"
                        style={{
                          background: "rgba(250, 247, 242, 0.75)",
                          border: "1px solid rgba(181, 82, 42, 0.1)",
                        }}
                      >
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: "var(--brand-orange)" }}
                        />
                        <div className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--brand-brown-text)" }}>
                          <span className="font-bold text-[#1C1008] mr-1">
                            {item.project}:
                          </span>
                          <span className="opacity-90">{item.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* 2. EDUCATION & ACADEMIC RESEARCH */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-3xl p-6 sm:p-8 transition-all"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(181, 82, 42, 0.16)",
                boxShadow: "0 10px 30px rgba(181, 82, 42, 0.05)",
              }}
            >
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b"
                style={{ borderColor: "rgba(181, 82, 42, 0.12)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "rgba(181, 82, 42, 0.12)",
                      color: "var(--brand-terracotta)",
                    }}
                  >
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black tracking-tight" style={{ color: "var(--brand-dark)" }}>
                      Education & Quantitative Foundation
                    </h3>
                    <p className="text-xs" style={{ color: "var(--brand-terracotta)" }}>
                      Academic Rigor & Economic Modeling
                    </p>
                  </div>
                </div>

                <span
                  className="hidden sm:inline-flex text-[11px] font-bold px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(181, 82, 42, 0.08)",
                    color: "var(--brand-terracotta)",
                    border: "1px solid rgba(181, 82, 42, 0.2)",
                  }}
                >
                  Expected 2026
                </span>
              </div>

              {education?.map((edu: any, idx: number) => (
                <div key={idx} className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h4 className="text-base sm:text-lg font-black" style={{ color: "var(--brand-dark)" }}>
                        {edu.degree}
                      </h4>
                      <p className="text-xs font-bold" style={{ color: "var(--brand-terracotta)" }}>
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-xs font-semibold sm:text-right" style={{ color: "var(--brand-brown-text)", opacity: 0.75 }}>
                      {edu.period}
                    </span>
                  </div>

                  {/* Core focus pill list */}
                  <div className="pt-1">
                    <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--brand-terracotta)", opacity: 0.85 }}>
                      Core Academic Pillars
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.focus.split(",").map((item: string, fIdx: number) => (
                        <span
                          key={fIdx}
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(181, 82, 42, 0.08)",
                            border: "1px solid rgba(181, 82, 42, 0.16)",
                            color: "var(--brand-dark)",
                          }}
                        >
                          {item.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Current research highlight box */}
                  <div
                    className="mt-4 p-4 rounded-2xl flex items-start gap-3"
                    style={{
                      background: "rgba(232, 112, 64, 0.06)",
                      border: "1px dashed rgba(181, 82, 42, 0.25)",
                    }}
                  >
                    <BookOpen className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#E87040]" />
                    <div className="text-xs leading-relaxed" style={{ color: "var(--brand-brown-text)" }}>
                      <span className="font-extrabold text-[#1C1008] block mb-0.5">
                        Current Empirical Research:
                      </span>
                      <span>{edu.research}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN: Technical Skills Matrix & PDF Bento (5 Cols) ── */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 3. TECHNICAL SKILLS MATRIX */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="rounded-3xl p-6 sm:p-7 transition-all"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(181, 82, 42, 0.16)",
                boxShadow: "0 10px 30px rgba(181, 82, 42, 0.05)",
              }}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b"
                style={{ borderColor: "rgba(181, 82, 42, 0.12)" }}
              >
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(181, 82, 42, 0.12)",
                    color: "var(--brand-terracotta)",
                  }}
                >
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black tracking-tight" style={{ color: "var(--brand-dark)" }}>
                    Technical Skills
                  </h3>
                  <p className="text-xs" style={{ color: "var(--brand-terracotta)" }}>
                    Verified Stack & Architecture
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {skills?.map((skillGroup: any, sIdx: number) => {
                  const isFeatured = skillGroup.category.includes("3D") || skillGroup.category.includes("Frameworks");
                  return (
                    <div
                      key={sIdx}
                      className={`p-4 rounded-2xl transition-all ${
                        isFeatured ? "shadow-sm" : ""
                      }`}
                      style={{
                        background: isFeatured
                          ? "rgba(250, 247, 242, 0.9)"
                          : "rgba(250, 247, 242, 0.5)",
                        border: `1px solid ${
                          isFeatured
                            ? "rgba(232, 112, 64, 0.28)"
                            : "rgba(181, 82, 42, 0.12)"
                        }`,
                      }}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-1.5">
                          {skillGroup.category.includes("3D") ? (
                            <Box className="w-3.5 h-3.5 text-[#E87040]" />
                          ) : (
                            <Layers className="w-3.5 h-3.5 text-[#B5522A]" />
                          )}
                          <h4
                            className="text-xs font-extrabold uppercase tracking-wider"
                            style={{ color: "var(--brand-dark)" }}
                          >
                            {skillGroup.category}
                          </h4>
                        </div>
                        {skillGroup.badge && (
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{
                              background: isFeatured
                                ? "rgba(232, 112, 64, 0.12)"
                                : "rgba(181, 82, 42, 0.08)",
                              color: isFeatured
                                ? "var(--brand-orange)"
                                : "var(--brand-terracotta)",
                            }}
                          >
                            {skillGroup.badge}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {skillGroup.items.map((skill: string) => (
                          <span
                            key={skill}
                            className="text-xs font-semibold px-2.5 py-1 rounded-xl transition-transform hover:scale-105 cursor-default"
                            style={{
                              background: "#FFFFFF",
                              border: "1px solid rgba(181, 82, 42, 0.14)",
                              color: "var(--brand-brown-text)",
                              boxShadow: "0 2px 6px rgba(181, 82, 42, 0.03)",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* 4. RESUME BENTO CARD */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-3xl p-6 sm:p-7 relative overflow-hidden transition-all text-white"
              style={{
                background: "linear-gradient(135deg, #24140A 0%, #1C1008 100%)",
                boxShadow: "0 12px 36px rgba(28, 16, 8, 0.15)",
                border: "1px solid rgba(232, 112, 64, 0.25)",
              }}
            >
              {/* Subtle accent glow */}
              <div
                className="absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl pointer-events-none opacity-30"
                style={{ background: "#E87040" }}
              />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                    <FileDown className="w-5 h-5 text-[#E87040]" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold tracking-tight text-white">
                      Curriculum Vitae / Resume
                    </h4>
                    <p className="text-[11px] text-white/70">
                      Abdulmujeeb_Awodi.pdf • 39 KB • 2026 Edition
                    </p>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-white/80">
                  Ready to review full career documentation, technical project histories, or discuss full-time and contract engineering roles?
                </p>

                <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <a
                    href={resumeUrl}
                    download="Abdulmujeeb_Awodi.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white transition-all hover:scale-105 shadow-md"
                    style={{
                      background: "var(--brand-orange)",
                      boxShadow: "0 4px 16px rgba(232, 112, 64, 0.4)",
                    }}
                  >
                    <FileDown className="w-4 h-4" />
                    Download Resume
                  </a>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-white/90 bg-white/10 hover:bg-white/15 border border-white/20 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open PDF
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
