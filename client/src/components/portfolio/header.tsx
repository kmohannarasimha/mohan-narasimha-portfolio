import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme";
import { personalInfo } from "@/lib/portfolio-data";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16 gap-4" data-testid="nav-main">
          <a
            href="#top"
            className="flex items-center gap-2.5 shrink-0"
            data-testid="link-brand"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-primary to-accent" />
            <span className="font-bold text-sm tracking-tight">
              {personalInfo.name}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6" data-testid="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground text-sm font-medium transition-colors duration-200 hover:text-foreground"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex gap-1.5"
              onClick={() => {
                const a = document.createElement("a");
                a.href = "/resume.pdf";
                a.download = "Mohan_Narasimha_Resume.pdf";
                document.body.appendChild(a);
                a.click();
                a.remove();
              }}
              data-testid="button-download-resume"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-muted-foreground font-medium py-2 transition-colors hover:text-foreground"
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="w-fit gap-1.5 mt-2"
                onClick={() => {
                  const a = document.createElement("a");
                  a.href = "/resume.pdf";
                  a.download = "Mohan_Narasimha_Resume.pdf";
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                  setMobileOpen(false);
                }}
                data-testid="button-download-resume-mobile"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
