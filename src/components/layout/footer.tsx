import { Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
import { Logo } from './logo';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background/50 border-t border-border/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo />
            <p className="text-sm text-muted-foreground mt-2">
              Empowering Productivity. Redefining Intelligence.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
                <Link href="#vision" className="hover:text-foreground transition-colors">Vision</Link>
                <Link href="#contact" className="hover:text-foreground transition-colors">Join Waitlist</Link>
              </div>
               <div className="flex items-center gap-5 mt-2">
                <a href="https://lnkd.in/gi8grYSG" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="h-5 w-5" /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="h-5 w-5" /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="mailto:contact@anmolix.com" className="text-muted-foreground hover:text-foreground transition-colors"><Mail className="h-5 w-5" /></a>
              </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/20 text-center text-sm text-muted-foreground">
            <p>© 2025 Anmolix Technologies — All Rights Reserved.</p>
            <p className="mt-1">📍 Hyderabad, India | ✉️ contact@anmolix.com</p>
            <p className="mt-4 text-xs italic">Made with 💙 by humans — enhanced by intelligence.</p>
        </div>
      </div>
    </footer>
  );
}