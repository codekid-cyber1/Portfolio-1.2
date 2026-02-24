import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <FloatingNav />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}
