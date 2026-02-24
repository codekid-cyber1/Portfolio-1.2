"use client";

import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio-data";
import { Button } from "@/components/ui/Button";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export const Contact = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-20 bg-[#0B0714] text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Let&apos;s build something together</h2>
            <p className="text-purple-200/60 text-lg mb-12 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#130d26] border border-purple-500/20 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-purple-500/60 uppercase tracking-widest font-semibold">Email</p>
                  <a href={`mailto:${personal.contact.email}`} className="text-purple-200/80 hover:text-purple-400 transition-colors">
                    {personal.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#130d26] border border-purple-500/20 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-purple-500/60 uppercase tracking-widest font-semibold">Location</p>
                  <p className="text-purple-200/80">{personal.location}</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#130d26] border border-purple-500/20 flex items-center justify-center">
                  <Linkedin className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-purple-500/60 uppercase tracking-widest font-semibold">Social</p>
                  <div className="flex gap-4">
                    <a href={personal.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-purple-200/80 hover:text-purple-400 transition-colors">
                      LinkedIn
                    </a>
                    <a href={personal.contact.github} target="_blank" rel="noopener noreferrer" className="text-purple-200/80 hover:text-purple-400 transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Button size="lg" className="rounded-full bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 text-white shadow-lg shadow-purple-500/20" asChild>
              <a href={`mailto:${personal.contact.email}`}>
                Get in Touch
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <footer className="mt-20 pt-8 border-t border-purple-500/10 text-center text-purple-200/40 text-sm">
        <p>© {new Date().getFullYear()} {personal.name}. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </section>
  );
};
