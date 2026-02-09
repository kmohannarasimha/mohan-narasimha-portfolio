import { ArrowUp } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="relative py-8">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-accent" />
            <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" data-testid="link-footer-github">
                <SiGithub className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" data-testid="link-footer-linkedin">
                <SiLinkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#top" data-testid="button-back-to-top">
                <ArrowUp className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
