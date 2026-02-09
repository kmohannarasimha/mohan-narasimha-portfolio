import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/portfolio-data";
import { SectionHeader } from "./section-header";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Experience"
          subtitle="Professional experience delivering data-driven solutions and machine learning systems."
        />

        <div className="mt-10 space-y-5 relative">
          <div className="absolute left-[23px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-accent/40 to-transparent hidden sm:block" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ x: 4 }}
            >
              <Card className="overflow-visible gradient-border" data-testid={`card-experience-${i}`}>
                <CardContent className="p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                      <motion.div
                        className="w-10 h-10 rounded-md flex items-center justify-center bg-primary/10 text-primary shrink-0 mt-0.5"
                        whileHover={{ rotate: -10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Briefcase className="w-5 h-5" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-base" data-testid={`text-exp-title-${i}`}>
                          {exp.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 sm:shrink-0">
                      <Badge variant="outline" className="gap-1 text-xs">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </Badge>
                      <Badge variant="outline" className="gap-1 text-xs">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </Badge>
                    </div>
                  </div>

                  <ul className="space-y-2.5 ml-[52px]">
                    {exp.bullets.map((bullet, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + j * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex gap-2.5 text-sm text-muted-foreground group"
                      >
                        <motion.span
                          className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60"
                          whileHover={{ scale: 2 }}
                        />
                        <span className="transition-colors duration-200 group-hover:text-foreground">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
