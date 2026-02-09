import { motion } from "framer-motion";
import { ExternalLink, FolderOpen, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/portfolio-data";
import { SectionHeader } from "./section-header";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Projects"
          subtitle="Impact-focused projects showcasing real-world data engineering, analytics, and AI skills."
        />

        <div className="grid sm:grid-cols-2 gap-5 mt-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="card-tilt"
            >
              <Card
                className="h-full overflow-visible gradient-border transition-all duration-300"
                data-testid={`card-project-${project.id}`}
              >
                <CardContent className="p-5 flex flex-col h-full relative">
                  <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <motion.div
                        className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${
                          project.color === "primary"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent/10 text-accent"
                        }`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <FolderOpen className="w-4 h-4" />
                      </motion.div>
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {project.period}
                    </div>
                  </div>

                  <h3 className="font-semibold text-base mb-2" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, tagIdx) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + tagIdx * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="secondary" className="text-xs font-normal">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" data-testid={`button-project-demo-${project.id}`}>
                        View Details
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="#" data-testid={`button-project-github-${project.id}`}>
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
