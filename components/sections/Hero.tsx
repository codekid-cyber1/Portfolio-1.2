"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { portfolioData } from "@/data/portfolio-data";
import { Download, Github, Linkedin, Mail } from "lucide-react";

import Image from "next/image";

export const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20">
              Available for hire
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              {personal.name}
            </h1>
            <p className="text-xl lg:text-2xl text-purple-200/80 mb-8 leading-relaxed">
              {personal.role}
            </p>
            <p className="text-lg text-purple-200/60 mb-10 max-w-2xl">
              {personal.bio}
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 shadow-lg shadow-purple-500/20" asChild>
                <a href="/Abdulmujeeb_Awodi_CV.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full border-purple-500/20 hover:scale-110 hover:bg-purple-500/20 hover:text-purple-400 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300" asChild>
                  <a href={personal.contact.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-purple-500/20 hover:scale-110 hover:bg-purple-500/20 hover:text-purple-400 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300" asChild>
                  <a href={personal.contact.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-purple-500/20 hover:scale-110 hover:bg-purple-500/20 hover:text-purple-400 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300" asChild>
                  <a href={`mailto:${personal.contact.email}`}>
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-[450px] mx-auto">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-purple-500/20 shadow-xl shadow-purple-500/5 transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/hero-code.png"
                  alt="Code Snippet"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  priority
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0714]/60 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 dark:opacity-5">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="300" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 300) rotate(90) scale(300)">
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

import { Badge } from "@/components/ui/Badge";
