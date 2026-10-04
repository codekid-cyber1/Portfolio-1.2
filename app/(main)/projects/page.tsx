
import { portfolioData } from "@/data/portfolio-data";
import { ExternalLink, Github, ArrowLeft, Globe } from "lucide-react";
import Link from "next/link";
import { LazyProjectMedia } from "@/components/ui/LazyProjectMedia";

export default function ProjectsPage() {
  const { Allprojects } = portfolioData;

  return (
    <div className="min-h-screen py-16 lg:py-24 px-4 overflow-x-clip" style={{ background: "var(--brand-cream)" }}>
      <div className="container max-w-6xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all hover:-translate-x-1"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              border: "1px solid rgba(181, 82, 42, 0.18)",
              color: "var(--brand-terracotta)",
            }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-12">
          <p
            className="text-xs font-bold uppercase tracking-[0.3em] mb-2"
            style={{ color: "var(--brand-terracotta)" }}
          >
            Archive & Showcase
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
            style={{ color: "var(--brand-dark)" }}
          >
            All Projects & Builds
          </h1>
          <p
            className="mt-3 text-base max-w-2xl leading-relaxed"
            style={{ color: "var(--brand-brown-text)", opacity: 0.8 }}
          >
            A comprehensive catalog of applications, client platforms, and architectural explorations built with Next.js, React, TypeScript, and modern frontend tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Allprojects.map((project, index) => (
            <div
              key={project.title}
              className="flex flex-col rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              style={{
                background: "rgba(255, 255, 255, 0.85)",
                borderColor: "rgba(181, 82, 42, 0.15)",
                boxShadow: "0 4px 20px rgba(181, 82, 42, 0.05)",
              }}
            >
              {/* Media Thumbnail (Lazy Loaded Image or Video) */}
              <div className="relative w-full aspect-[16/10] overflow-hidden border-b bg-[#FAF7F2]" style={{ borderColor: "rgba(181, 82, 42, 0.1)" }}>
                <LazyProjectMedia
                  src={(project as any).image}
                  videoSrc={(project as any).video}
                  posterSrc={(project as any).poster}
                  alt={project.title}
                  aspectRatio="aspect-[16/10]"
                />
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider backdrop-blur-md bg-white/80 text-[#B5522A] border border-[#B5522A]/20 pointer-events-none">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-lg font-extrabold tracking-tight mb-2 group-hover:text-[#E87040] transition-colors"
                    style={{ color: "var(--brand-dark)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed line-clamp-3 mb-4"
                    style={{ color: "var(--brand-brown-text)", opacity: 0.82 }}
                  >
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(181,82,42,0.08)",
                          color: "var(--brand-terracotta)",
                          border: "1px solid rgba(181,82,42,0.15)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer links */}
                <div className="pt-4 border-t flex items-center gap-2" style={{ borderColor: "rgba(181, 82, 42, 0.1)" }}>
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white transition-all hover:opacity-90 shadow-sm"
                      style={{ background: "var(--brand-orange)" }}
                    >
                      <Globe className="w-3 h-3" />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        project.links.live
                          ? "inline-flex items-center justify-center p-2 rounded-xl border transition-colors hover:bg-white"
                          : "flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white transition-all hover:opacity-90 shadow-sm"
                      }`}
                      style={{
                        background: project.links.live ? "rgba(255,255,255,0.7)" : "var(--brand-orange)",
                        borderColor: project.links.live ? "rgba(181, 82, 42, 0.2)" : "transparent",
                        color: project.links.live ? "var(--brand-dark)" : "#FFFFFF",
                      }}
                      aria-label="View source code"
                    >
                      <Github className="w-4 h-4" />
                      {!project.links.live && <span>Source Code</span>}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}