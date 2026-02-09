import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { education, certifications, softSkills } from "@/lib/portfolio-data";
import { SectionHeader } from "./section-header";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-[5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none animate-float-medium" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <SectionHeader
          title="Education & Certifications"
          subtitle="Academic background and professional certifications."
        />

        <div className="grid md:grid-cols-2 gap-5 mt-10">
          <div className="space-y-5">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -3 }}
              >
                <Card className="overflow-visible gradient-border" data-testid={`card-education-${i}`}>
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-start gap-3">
                      <motion.div
                        className="w-10 h-10 rounded-md flex items-center justify-center bg-primary/10 text-primary shrink-0"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <GraduationCap className="w-5 h-5" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-base" data-testid={`text-edu-degree-${i}`}>
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {edu.school}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-[52px]">
                      <Badge variant="outline" className="text-xs">
                        {edu.period}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {edu.location}
                      </Badge>
                    </div>
                    <Separator />
                    <div className="ml-[52px]">
                      <p className="text-xs text-muted-foreground font-medium mb-2">Focus Areas</p>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.focus.split(", ").map((area, areaIdx) => (
                          <motion.div
                            key={area}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + areaIdx * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Badge variant="secondary" className="text-xs font-normal">
                              {area}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -3 }}
            >
              <Card className="overflow-visible gradient-border" data-testid="card-soft-skills">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <motion.div
                      className="w-8 h-8 rounded-md flex items-center justify-center bg-accent/10 text-accent shrink-0"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <BookOpen className="w-4 h-4" />
                    </motion.div>
                    <h3 className="font-semibold text-sm">Soft Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {softSkills.map((skill, idx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="outline" className="text-xs font-normal">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -3 }}
          >
            <Card className="overflow-visible h-fit gradient-border" data-testid="card-certifications">
              <CardContent className="p-5 space-y-4">
                <div className="flex items-center gap-2.5">
                  <motion.div
                    className="w-8 h-8 rounded-md flex items-center justify-center bg-primary/10 text-primary shrink-0"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Award className="w-4 h-4" />
                  </motion.div>
                  <h3 className="font-semibold text-sm">Certifications</h3>
                </div>

                <div className="space-y-3">
                  {certifications.map((cert, i) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex gap-3 text-sm text-muted-foreground group"
                    >
                      <motion.span
                        className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60"
                        whileHover={{ scale: 2 }}
                      />
                      <span className="transition-colors duration-200 group-hover:text-foreground">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
