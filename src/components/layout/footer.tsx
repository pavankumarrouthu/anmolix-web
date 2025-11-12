import { Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
import { Logo } from './logo';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Empowering productivity. Redefining intelligence.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <Link href="#about" className="hover:text-foreground">About</Link>
                <Link href="#vision" className="hover:text-foreground">Vision</Link>
                <Link href="https://lnkd.in/gk7n2qfx" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Join Waitlist</Link>
                <Link href="#contact" className="hover:text-foreground">Contact</Link>
              </div>
               <div className="flex items-center gap-2">
                <a href="https://lnkd.in/gi8grYSG" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
                <a href="mailto:pavanrouthu.ai@gmail.com" className="text-muted-foreground hover:text-foreground"><Mail className="h-5 w-5" /></a>
              </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>© 2025 Anmolix Technologies — All Rights Reserved.</p>
            <p className="mt-1">📍 Amaravati, Andhra Pradesh | ✉️ contact@anmolix.com</p>
        </div>
      </div>
    </footer>
  );
}
