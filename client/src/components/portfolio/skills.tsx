import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Cloud, BarChart3, Brain, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { skillCategories } from "@/lib/portfolio-data";
import { SectionHeader } from "./section-header";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="w-4 h-4" />,
  database: <Database className="w-4 h-4" />,
  cloud: <Cloud className="w-4 h-4" />,
  chart: <BarChart3 className="w-4 h-4" />,
  brain: <Brain className="w-4 h-4" />,
  wrench: <Wrench className="w-4 h-4" />,
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="space-y-1.5 group">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium transition-colors group-hover:text-foreground">{name}</span>
        <motion.span
          className="text-xs text-muted-foreground font-mono"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary via-primary to-accent relative"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={inView ? { x: "100%" } : {}}
            transition={{ duration: 1, delay: delay + 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none animate-float-medium" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <SectionHeader
          title="Skills"
          subtitle="Technical proficiency organized by domain expertise and tools."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
        >
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full overflow-visible gradient-border" data-testid={`card-skill-${category.icon}`}>
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <motion.div
                      className="w-8 h-8 rounded-md flex items-center justify-center bg-primary/10 text-primary shrink-0"
                      whileHover={{ rotate: 15, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {iconMap[category.icon]}
                    </motion.div>
                    <h3 className="font-semibold text-sm">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, j) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={i * 0.08 + j * 0.1}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
