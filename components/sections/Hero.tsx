"use client";

import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio-data";
import { Download, ArrowRight, Github, Linkedin, Mail, CheckCircle2, Star } from "lucide-react";
import Image from "next/image";

// ─── Tech ticker items ─────────────────────────────────────────────────────
const TICKER_ITEMS = [
  { label: "NEXT.JS 15" },
  { label: "TYPESCRIPT" },
  { label: "TAILWIND CSS" },
  { label: "GSAP ANIMATIONS" },
  { label: "THREE.JS" },
  { label: "SUPABASE" },
  { label: "TANSTACK QUERY" },
  { label: "REACT 19" },
  { label: "NEXT.JS 15" },
  { label: "TYPESCRIPT" },
  { label: "TAILWIND CSS" },
  { label: "GSAP ANIMATIONS" },
];

// ─── Breathing floating badge ──────────────────────────────────────────────
const FloatingBadge = ({
  label,
  icon,
  className = "",
  style,
  delay = 0,
}: {
  label: string;
  icon: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) => (
  <motion.div
    className={`absolute flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold z-20 select-none pointer-events-none whitespace-nowrap shadow-sm ${className}`}
    style={{
      background: "rgba(250, 247, 242, 0.96)",
      border: "1px solid rgba(181, 82, 42, 0.2)",
      boxShadow: "0 2px 14px rgba(181,82,42,0.12)",
      color: "#1C1008",
      backdropFilter: "blur(8px)",
      ...style,
    }}
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{
      opacity: [0, 1, 1],
      scale: [0.6, 1, 1.06, 1],
    }}
    transition={{
      opacity: { duration: 0.5, delay },
      scale: {
        duration: 3,
        delay,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        times: [0, 0.1, 0.5, 1],
      },
    }}
  >
    {icon}
    <span>{label}</span>
  </motion.div>
);

// ─── Stat card ─────────────────────────────────────────────────────────────
const StatCard = ({
  value,
  label,
  icon,
  delay = 0,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl"
    style={{
      background: "rgba(255,255,255,0.78)",
      border: "1px solid rgba(181, 82, 42, 0.12)",
      boxShadow: "0 2px 14px rgba(181,82,42,0.05)",
      backdropFilter: "blur(10px)",
    }}
  >
    <div>
      <p className="text-lg lg:text-xl font-black leading-tight" style={{ color: "#1C1008" }}>
        {value}
      </p>
      <p className="text-[10px] sm:text-[11px] font-medium leading-tight mt-0.5" style={{ color: "#5C3A1E", opacity: 0.7 }}>
        {label}
      </p>
    </div>
    <div
      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ml-2"
      style={{ background: "rgba(181, 82, 42, 0.08)" }}
    >
      {icon}
    </div>
  </motion.div>
);

// ─── Hero ──────────────────────────────────────────────────────────────────
export const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative flex flex-col justify-between overflow-x-clip min-h-screen lg:h-[100dvh] lg:min-h-[620px]"
      style={{
        background: "linear-gradient(145deg, #FAF7F2 0%, #F2E8DC 45%, #FAF0E6 100%)",
      }}
    >
      {/* Radial glow top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(181,82,42,0.09) 0%, transparent 68%)",
        }}
      />

      {/* ── Main hero content with adequate bottom spacing ── */}
      <div className="flex-1 flex flex-col justify-center relative z-10 px-4 pt-20 sm:pt-24 lg:pt-16 pb-12 sm:pb-16 lg:pb-2">
        <div className="max-w-6xl mx-auto w-full">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center mb-1"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold tracking-tight leading-tight">
              <span style={{ color: "#1C1008" }}>I&apos;m </span>
              <motion.span
                style={{ color: "#E87040", display: "inline-block" }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                {personal.name.split(" ")[0]}
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-center text-base sm:text-lg lg:text-xl font-semibold mb-3 lg:mb-5"
            style={{ color: "#1C1008", opacity: 0.82 }}
          >
            {personal.role}
          </motion.p>

          {/* ── 3-column layout: side columns compact, center dominant ALPHA ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_230px] xl:grid-cols-[270px_1fr_240px] gap-6 lg:gap-6 items-center">

            {/* LEFT: Compact Bio Card + CTA + Socials */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="space-y-3 max-w-[280px] mx-auto lg:mx-0 lg:max-w-none"
            >
              {/* White quote card - compact */}
              <div
                className="p-3.5 sm:p-4 rounded-xl relative"
                style={{
                  background: "rgba(255, 255, 255, 0.78)",
                  border: "1px solid rgba(181, 82, 42, 0.12)",
                  boxShadow: "0 2px 14px rgba(181,82,42,0.05)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span className="text-xl font-serif leading-none block mb-0.5" style={{ color: "#E87040" }}>
                  &ldquo;
                </span>
                <p
                  className="text-[11px] sm:text-xs leading-relaxed"
                  style={{ color: "#5C3A1E", opacity: 0.88 }}
                >
                  {personal.bio}
                </p>
              </div>

              {/* CTAs - compact */}
              <div className="flex flex-wrap items-center gap-2">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.04, boxShadow: "0 5px 20px rgba(232,112,64,0.38)" }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white"
                  style={{
                    background: "#E87040",
                    boxShadow: "0 3px 14px rgba(232,112,64,0.25)",
                  }}
                >
                  View Projects <ArrowRight className="h-3 w-3" />
                </motion.a>
                <motion.a
                  href="/Abdulmujeeb_Awodi.pdf"
                  download="Abdulmujeeb_Awodi.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer"
                  style={{
                    border: "1px solid rgba(181,82,42,0.25)",
                    color: "#1C1008",
                    background: "rgba(255,255,255,0.7)",
                  }}
                >
                  Download CV <Download className="h-3 w-3" />
                </motion.a>
              </div>

              {/* Social icons - compact */}
              <div className="flex gap-2 pt-0.5">
                {[
                  { href: personal.contact.github, icon: <Github className="h-3.5 w-3.5" />, external: true },
                  { href: personal.contact.linkedin, icon: <Linkedin className="h-3.5 w-3.5" />, external: true },
                  { href: `mailto:${personal.contact.email}`, icon: <Mail className="h-3.5 w-3.5" />, external: false },
                ].map(({ href, icon, external }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                    style={{
                      border: "1px solid rgba(181,82,42,0.2)",
                      background: "rgba(255,255,255,0.65)",
                      color: "#5C3A1E",
                    }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CENTER — THE ALPHA IMAGE (Big, Commanding, Focal Point) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.2, type: "spring", stiffness: 95, damping: 16 }}
              className="relative flex items-center justify-center mx-auto my-4 lg:my-1 w-[290px] h-[290px] min-[360px]:w-[310px] min-[360px]:h-[310px] lg:w-[440px] lg:h-[440px]"
            >
              {/* Slow rotating outer dashed ring — constrained to w-[310px] h-[310px] on mobile and w-[440px] h-[440px] on desktop */}
              <motion.div
                className="absolute rounded-full pointer-events-none w-[290px] h-[290px] min-[360px]:w-[310px] min-[360px]:h-[310px] lg:w-[440px] lg:h-[440px]"
                style={{
                  border: "2px dashed rgba(181,82,42,0.25)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              />

              {/* Gentle floating profile image */}
              <motion.div
                className="relative w-[235px] h-[235px] min-[360px]:w-[250px] min-[360px]:h-[250px] sm:w-[270px] sm:h-[270px] lg:w-[350px] lg:h-[350px]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="https://res.cloudinary.com/iyzdnb8b/image/upload/v1791127850/profile-circle_umbpav.png"
                  alt="Abdulmujeeb Awodi — Web Developer"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </motion.div>

              {/* Floating tech badges — hug orbit ring cleanly without clipping screen edges */}
              {/* TOP-LEFT: React 19 */}
              <FloatingBadge
                label="React 19"
                delay={0.5}
                className="top-1 left-2 min-[360px]:left-3 sm:top-2 sm:left-4 lg:top-8 lg:left-3"
                icon={
                  <svg width="13" height="13" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
                  </svg>
                }
              />
              {/* TOP-RIGHT: Next.js */}
              <FloatingBadge
                label="Next.js"
                delay={0.8}
                className="top-1 right-2 min-[360px]:right-3 sm:top-2 sm:right-4 lg:top-8 lg:right-3"
                icon={
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#1C1008">
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0z" />
                  </svg>
                }
              />
              {/* BOTTOM-LEFT: TypeScript */}
              <FloatingBadge
                label="TypeScript"
                delay={1.1}
                className="bottom-3 left-2 min-[360px]:left-3 sm:bottom-4 sm:left-4 lg:bottom-10 lg:left-3"
                icon={
                  <svg width="13" height="13" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="3" fill="#3178C6" />
                    <path d="M13.5 15.5v1.6c.3.1.6.2.9.3.4.1.8.1 1.2.1.4 0 .8 0 1.1-.1.3-.1.6-.2.9-.4.3-.2.5-.4.6-.7.1-.3.2-.6.2-1 0-.3 0-.6-.1-.8-.1-.2-.2-.4-.4-.6-.2-.2-.4-.3-.6-.5-.2-.1-.5-.3-.8-.4-.2-.1-.4-.2-.6-.3-.2-.1-.3-.2-.4-.2-.1-.1-.2-.2-.2-.3 0-.1 0-.2.1-.3.1-.1.3-.1.5-.1.1 0 .3 0 .5.1.2 0 .3.1.5.2V12c-.3-.1-.5-.1-.8-.2-.3 0-.6-.1-.9-.1-.4 0-.7 0-1 .1-.3.1-.6.2-.8.4-.2.2-.4.4-.5.7-.1.3-.2.6-.2.9 0 .5.1.9.4 1.2.3.3.7.6 1.3.8.3.1.5.2.7.3.2.1.4.2.5.3.1.1.2.2.3.3.1.1.1.2.1.4 0 .3-.1.5-.3.6-.2.1-.5.2-.9.2-.3 0-.6 0-.9-.1-.3-.1-.6-.3-.9-.5zM9.8 13.1H12v-1H6v1h2.2V20H9.8v-6.9z" fill="white" />
                  </svg>
                }
              />
              {/* BOTTOM-RIGHT: Tailwind CSS */}
              <FloatingBadge
                label="Tailwind CSS"
                delay={1.4}
                className="bottom-3 right-2 min-[360px]:right-3 sm:bottom-4 sm:right-4 lg:bottom-10 lg:right-3"
                icon={
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#06B6D4">
                    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.51 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 17.85 9.49 19 12 19c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.51 12 7 12z" />
                  </svg>
                }
              />
            </motion.div>

            {/* RIGHT: Compact Stat Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="space-y-2 max-w-[260px] mx-auto lg:mx-0 lg:max-w-none"
            >
              <StatCard
                value="15+"
                label="Projects Shipped"
                delay={0.35}
                icon={
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B5522A" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                }
              />
              <StatCard
                value="100%"
                label="On-Time Project Delivery"
                delay={0.45}
                icon={<CheckCircle2 className="w-4 h-4 text-[#16A34A]" />}
              />
              <StatCard
                value="100%"
                label="Client Satisfaction"
                delay={0.55}
                icon={<Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Tech ticker — always at very bottom of the section ── */}
      <div className="relative z-10 flex-shrink-0 overflow-hidden" style={{ background: "#1C1008" }}>
        <style>{`
          @keyframes ticker-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .ticker-track {
            display: flex;
            width: max-content;
            animation: ticker-scroll 28s linear infinite;
          }
          .ticker-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 text-xs font-bold tracking-widest uppercase whitespace-nowrap"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              <span style={{ color: "#E87040", fontSize: "9px" }}>✦</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
