"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";
import { User, Briefcase, FileText, Mail, Home } from "lucide-react";

export const FloatingNav = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current !== "number") return;
    
    const direction = current - lastScrollY;

    if (current < 50) {
      setVisible(true);
    } else {
      if (direction > 0) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
    setLastScrollY(current);
  });

  const navItems = [
    { name: "Home", link: "#home", icon: <Home className="h-4 w-4" /> },
    { name: "About", link: "#about", icon: <User className="h-4 w-4" /> },
    { name: "Projects", link: "#projects", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Resume", link: "#resume", icon: <FileText className="h-4 w-4" /> },
    { name: "Contact", link: "#contact", icon: <Mail className="h-4 w-4" /> },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    e.preventDefault();
    const targetId = link.replace("#", "");
    const elem = targetId ? document.getElementById(targetId) : document.body;
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/10 dark:border-white/10 rounded-full bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4"
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(e) => handleScroll(e, navItem.link)}
            className={cn(
              "relative dark:text-zinc-50 items-center flex space-x-1 text-zinc-600 dark:hover:text-zinc-300 hover:text-zinc-900 transition-colors"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
          </a>
        ))}
        <a 
          href="/Abdulmujeeb_Awodi_CV.pdf" 
          download 
          className="group relative inline-flex items-center justify-center px-6 py-2 font-medium text-white transition-all duration-200 bg-zinc-900 rounded-full hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          <span className="relative z-10">Hire Me</span>
          <span className="absolute inset-0 rounded-full bg-zinc-900/20 dark:bg-zinc-50/20 blur-md group-hover:blur-lg transition-all opacity-0 group-hover:opacity-100" />
        </a>
      </motion.div>
    </AnimatePresence>
  );
};
