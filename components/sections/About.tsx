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
    <section id="about" className="py-20 bg-[#0B0714]">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white mb-8">
              About Me
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-2 space-y-6">
                <p className="text-xl text-purple-200/80 leading-relaxed">
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
                      className="flex items-center gap-3 p-4 rounded-xl bg-[#130d26]/40 border border-purple-500/20"
                    >
                      <div className="text-purple-400">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-purple-200/70">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-purple-600 text-white border-none overflow-hidden relative group">
                  <CardContent className="p-8 relative z-10">
                    <h3 className="text-lg font-semibold mb-2">Finance + Tech</h3>
                    <p className="text-purple-100 text-sm leading-relaxed">
                      Bridging the gap between financial modeling and technical product development.
                    </p>
                  </CardContent>
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
                    <Target className="h-12 w-12" />
                  </div>
                </Card>
                
                <div className="p-8 rounded-xl border border-dashed border-purple-500/20">
                  <p className="text-sm text-purple-200/50 italic">
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
