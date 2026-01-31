import Link from "next/link";
import AnmolixLogo from "./AnmolixLogo";
import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <AnmolixLogo />
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="#problem" className="text-muted-foreground hover:text-foreground transition-colors">
              Problem
            </Link>
            <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="#who-for" className="text-muted-foreground hover:text-foreground transition-colors">
              Who It's For
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/company/anmolix/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="mailto:info@anmolix.com" aria-label="Mail">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Anmolix Inc. The Agentic Workspace.
        </div>
      </div>
    </footer>
  );
}
