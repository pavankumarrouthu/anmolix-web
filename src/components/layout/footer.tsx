import { Linkedin, Mail } from 'lucide-react';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo />
            <p className="text-sm text-muted-foreground mt-2">
              Empowering Productivity. Redefining Intelligence.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-5">
                <a href="https://lnkd.in/gi8grYSG" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="h-5 w-5" /></a>
                <a href="mailto:pavanrouthu.ai@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors"><Mail className="h-5 w-5" /></a>
              </div>
              <p className="text-sm text-muted-foreground">📍Amaravati, Andhra Pradesh</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/20 text-center text-sm text-muted-foreground">
            <p>© 2025 Anmolix Technologies — All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
