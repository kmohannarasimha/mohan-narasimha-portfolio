import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { FloatingParticles } from "@/components/portfolio/floating-particles";

export default function Portfolio() {
  return (
    <div className="min-h-screen relative">
      <FloatingParticles />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
