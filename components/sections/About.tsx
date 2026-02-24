"use client";

import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/Card";
import { Music, Gamepad2, BookOpen, Target } from "lucide-react";

export const About = () => {
  const { personal } = portfolioData;

  const interests = [
    { icon: <Gamepad2 className="h-5 w-5" />, label: "eFootball & COD" },
    { icon: <Music className="h-5 w-5" />, label: "Asa & Juice WRLD" },
    { icon: <BookOpen className="h-5 w-5" />, label: "Finance Research" },
    { icon: <Target className="h-5 w-5" />, label: "Problem Solving" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-zinc-950">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
              About Me
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-2 space-y-6">
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {(personal as any).about}
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-6">
                  {interests.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800"
                    >
                      <div className="text-zinc-900 dark:text-zinc-50">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-zinc-900 text-zinc-50 border-none overflow-hidden relative group">
                  <CardContent className="p-8 relative z-10">
                    <h3 className="text-lg font-semibold mb-2">Finance + Tech</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Bridging the gap between financial modeling and technical product development.
                    </p>
                  </CardContent>
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
                    <Target className="h-12 w-12" />
                  </div>
                </Card>
                
                <div className="p-8 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800">
                  <p className="text-sm text-zinc-500 italic">
                    &quot;I don&apos;t just write code; I build solutions to real economic problems.&quot;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
