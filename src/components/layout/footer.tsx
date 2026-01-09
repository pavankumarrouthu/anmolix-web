import Link from "next/link";
import AnmolixLogo from "./AnmolixLogo";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <AnmolixLogo width={120} height={30} />
            <p className="text-sm text-muted-foreground">
              The Agentic Workspace.
            </p>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="#product" className="text-muted-foreground hover:text-foreground transition-colors">
              Product
            </Link>
            <Link href="#manifesto" className="text-muted-foreground hover:text-foreground transition-colors">
              Manifesto
            </Link>
            <Link href="#careers" className="text-muted-foreground hover:text-foreground transition-colors">
              Careers
            </Link>
            <Link href="#login" className="text-muted-foreground hover:text-foreground transition-colors">
              Login
            </Link>
          </nav>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Anmolix Inc.
        </div>
      </div>
    </footer>
  );
}
