import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, ArrowDown, ExternalLink, Sparkles } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { personalInfo } from "@/lib/portfolio-data";
import { AnimatedCounter } from "./animated-counter";

function useTypewriter(words: string[], speed = 100, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.substring(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setText(current.substring(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, speed, pause]);

  return text;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const typedRole = useTypewriter(personalInfo.roles, 80, 2500);

  return (
    <section id="top" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/8 rounded-full blur-3xl pointer-events-none animate-blob" />
      <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none animate-blob" style={{ animationDelay: "-4s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl pointer-events-none animate-float-slow" />

      <motion.div
        className="absolute top-32 right-[20%] w-3 h-3 rounded-full bg-primary/30"
        animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[60%] left-[15%] w-2 h-2 rounded-full bg-accent/40"
        animate={{ y: [0, -15, 0], x: [0, -8, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-[40%] right-[35%] w-2 h-2 rounded-full bg-primary/20"
        animate={{ y: [0, -25, 0], x: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-start"
        >
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="gap-1.5 py-1 px-3 shimmer-effect">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Open to Opportunities
              </Badge>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
                data-testid="text-hero-name"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {personalInfo.name.split(" ")[0]}
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="gradient-text animate-text-glow"
                >
                  {personalInfo.name.split(" ").slice(1).join(" ")}
                </motion.span>
              </h1>
              <div className="h-8 sm:h-10">
                <span className="text-xl sm:text-2xl font-semibold gradient-text" data-testid="text-hero-role">
                  {typedRole}
                </span>
                <span className="inline-block w-0.5 h-6 sm:h-7 bg-primary animate-pulse ml-0.5 align-middle" />
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground leading-relaxed max-w-xl text-base"
              data-testid="text-hero-summary"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Python, SQL, AWS, Power BI</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild className="group">
                <a href="#projects" data-testid="button-view-projects">
                  View Projects
                  <motion.span
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDown className="w-4 h-4" />
                  </motion.span>
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact" data-testid="button-contact">
                  <Sparkles className="w-3.5 h-3.5" />
                  Get in Touch
                </a>
              </Button>
              <div className="flex items-center gap-2 ml-2">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    data-testid="link-github"
                  >
                    <SiGithub className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    data-testid="link-linkedin"
                  >
                    <SiLinkedin className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-4 max-w-sm"
            >
              <AnimatedCounter target={4} suffix="+" label="Projects" />
              <AnimatedCounter target={6} suffix="+" label="Certifications" />
              <AnimatedCounter target={15} suffix="+" label="Technologies" />
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <Card className="overflow-visible glow-primary gradient-border" data-testid="card-highlights">
              <CardContent className="p-5 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-5 rounded-full bg-gradient-to-b from-primary to-accent animate-gradient-shift" style={{ backgroundSize: "100% 200%" }} />
                  <h3 className="font-semibold text-sm">Highlights</h3>
                </div>
                <ul className="space-y-3">
                  {personalInfo.highlights.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.15 }}
                      className="flex gap-3 text-sm text-muted-foreground group"
                    >
                      <motion.span
                        className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60"
                        whileHover={{ scale: 2, backgroundColor: "hsl(var(--primary))" }}
                      />
                      <span className="transition-colors duration-200 group-hover:text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-semibold text-sm">Quick Links</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={personalInfo.github} target="_blank" rel="noreferrer" data-testid="link-hero-github">
                        <SiGithub className="w-3.5 h-3.5" />
                        GitHub
                        <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" data-testid="link-hero-linkedin">
                        <SiLinkedin className="w-3.5 h-3.5" />
                        LinkedIn
                        <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${personalInfo.email}`} data-testid="link-hero-email">
                        Email
                        <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#projects" className="flex flex-col items-center gap-1 text-muted-foreground/50 hover:text-muted-foreground transition-colors">
          <span className="text-xs font-medium">Scroll Down</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
