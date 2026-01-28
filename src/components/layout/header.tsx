'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import AnmolixLogo from './AnmolixLogo';
import { Button } from '../ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" aria-label="anmolix Home" className="text-primary hover:text-primary/90 transition-colors">
           <AnmolixLogo width={160} height={40} />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
           {/* <Link href="#vision" className="text-muted-foreground hover:text-foreground transition-colors">
            Vision
          </Link>
          <Link href="#manifesto" className="text-muted-foreground hover:text-foreground transition-colors">
            Manifest
          </Link> */}
        </nav>
        <div className="flex items-center gap-4">
           <Button variant="default" size="sm" asChild>
            <Link href="#beta">Request Early Access</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
