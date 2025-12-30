import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Made for Engineers. Built for Reality.
            </p>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="#manifesto" className="text-muted-foreground hover:text-foreground transition-colors">
              Manifesto
            </Link>
            <Link href="#changelog" className="text-muted-foreground hover:text-foreground transition-colors">
              Changelog
            </Link>
            <Link href="#login" className="text-muted-foreground hover:text-foreground transition-colors">
              Login
            </Link>
            <Link href="#access" className="text-muted-foreground hover:text-foreground transition-colors">
              Request Access
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
