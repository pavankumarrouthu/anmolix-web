import { Linkedin, Mail } from 'lucide-react';
import { Logo } from './logo';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Empowering productivity. Redefining intelligence.
            </p>
             <p className="text-sm text-muted-foreground">
              Anmolix Technologies © {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
             <div className="flex items-center gap-2">
                <a href="mailto:contact@anmolix.com" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    contact@anmolix.com
                </a>
                 <span className="text-muted-foreground">|</span>
                <span className="text-sm text-muted-foreground">Hyderabad, India</span>
             </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://lnkd.in/gi8grYSG" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
