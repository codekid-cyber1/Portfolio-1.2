"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";
import { User, Briefcase, FileText, Mail, Home } from "lucide-react";
import Link from "next/link";

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
      setVisible(direction <= 0);
    }
    setLastScrollY(current);
  });

  const navItems = [
    { name: "Home", link: "#", icon: <Home className="h-4 w-4" /> },
    { name: "About", link: "#about", icon: <User className="h-4 w-4" /> },
    { name: "Projects", link: "#projects", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Resume", link: "#resume", icon: <FileText className="h-4 w-4" /> },
    { name: "Contact", link: "#contact", icon: <Mail className="h-4 w-4" /> },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    e.preventDefault();
    const targetId = link.replace("#", "");
    const elem = targetId ? document.getElementById(targetId) : document.body;
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={cn(
          "flex max-w-fit fixed top-5 sm:top-6 inset-x-0 mx-auto rounded-full z-[5000] pr-2 pl-6 sm:pl-8 py-2 items-center justify-center space-x-3 sm:space-x-4 border backdrop-blur-md shadow-lg"
        )}
        style={{
          background: "rgba(250, 247, 242, 0.88)",
          borderColor: "rgba(181, 82, 42, 0.18)",
          boxShadow: "0 4px 30px rgba(181, 82, 42, 0.08)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(e) => handleScroll(e, navItem.link)}
            className={cn(
              "relative items-center flex space-x-1 text-sm font-medium transition-colors"
            )}
            style={{ color: "var(--brand-brown-text)" }}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block">{navItem.name}</span>
          </Link>
        ))}
        <a
          href="/Abdulmujeeb_Awodi.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-6 py-2 font-semibold text-white text-sm transition-all duration-200 rounded-full"
          style={{
            background: "var(--brand-orange)",
            boxShadow: "0 4px 16px rgba(232,112,64,0.3)",
          }}
        >
          <span className="relative z-10">Resume</span>
        </a>
      </motion.div>
    </AnimatePresence>
  );
};
