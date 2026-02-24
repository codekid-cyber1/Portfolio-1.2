"use client";

import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GraduationCap, Briefcase } from "lucide-react";

export const Resume = () => {
  const { education, skills } = portfolioData;

  return (
    <section id="resume" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Education & Experience Column */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-8">
                <GraduationCap className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Education
                </h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="border-none shadow-none bg-transparent">
                      <CardHeader className="p-0">
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <p className="text-zinc-900 dark:text-zinc-50 font-medium">
                          {edu.institution}
                        </p>
                      </CardHeader>
                      <CardContent className="p-0 mt-2">
                        <p className="text-zinc-600 dark:text-zinc-400">
                          {edu.details}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-8">
                <Briefcase className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Experience Focus
                </h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                Specializing in building high-performance frontend architectures. My background in Finance provides a unique perspective on data integrity, complex state management, and building tools that solve real business problems.
              </p>
            </motion.div>
          </div>

          {/* Skills Column */}
          <div className="space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8"
            >
              Core Skills
            </motion.h2>
            <div className="space-y-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                      >
                        <Badge variant="outline" className="px-3 py-1 text-sm">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
