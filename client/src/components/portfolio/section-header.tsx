import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-40px" }}
      className="space-y-3"
    >
      <div className="flex items-center gap-3">
        <motion.div
          className="h-8 w-1 rounded-full bg-gradient-to-b from-primary to-accent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ originY: 0 }}
        />
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" data-testid={`text-section-${title.toLowerCase().replace(/\s+/g, "-")}`}>
          {title}
        </h2>
      </div>
      <p className="text-muted-foreground text-sm max-w-lg">{subtitle}</p>
      <motion.div
        className="h-px w-16 bg-gradient-to-r from-primary to-accent rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}
