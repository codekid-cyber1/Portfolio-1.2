import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Resume } from "@/components/sections/Resume";


export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Hero />
      <About />
      <Projects />
      <Resume />
    </main>
  );
}
