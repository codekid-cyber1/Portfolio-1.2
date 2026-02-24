"use client";

import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A collection of applications focusing on performance, data visualization, and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
            >
              <Card className="h-full flex flex-col group hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardDescription className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 dark:text-zinc-500 mb-1">Problem</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 italic">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 dark:text-zinc-500 mb-1">Solution</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-zinc-200/50 dark:bg-zinc-800/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
