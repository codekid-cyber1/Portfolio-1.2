
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { ChevronRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Motion from "@/components/ui/motion";



export default function ProjectsPage() {
    const { Allprojects } = portfolioData;

    return (
        <section className="relative dark py-20 lg:py-32 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Allprojects.map((project, index) => (
                        <Motion> 
                        <div
                        >
                            <Card className="h-full flex flex-col group bg-[#130d26]/40 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
                                <div className="relative w-full h-48 overflow-hidden">
                                    <Image
                                        src={(project as any).image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        referrerPolicy="no-referrer"
                                        unoptimized={true}
                                        />
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                                            {project.title}
                                        </CardTitle>
                                    </div>
                                    <CardDescription className="text-purple-200/60 leading-relaxed mb-4">
                                        {project.description}
                                    </CardDescription>

                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <h4 className="text-[10px] uppercase tracking-wider font-bold text-purple-500/60 mb-1">Problem</h4>
                                            <p className="text-sm text-purple-200/50 italic">
                                                {project.problem}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] uppercase tracking-wider font-bold text-purple-500/60 mb-1">Solution</h4>
                                            <p className="text-sm text-purple-200/70">
                                                {project.solution}
                                            </p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="bg-purple-500/10 text-purple-300 border-purple-500/20">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="mt-auto pt-6 flex gap-3">
                                    <Button variant="outline" size="sm" className="flex-1 rounded-lg border-purple-500/20 hover:bg-purple-500/10 hover:text-purple-400" asChild>
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" />
                                            View Code
                                        </a>
                                    </Button>
                                    <Button size="sm" className="flex-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white" asChild>
                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            View Demo
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                                        </Motion>
                    ))}
                </div>


        </section>
    )
}