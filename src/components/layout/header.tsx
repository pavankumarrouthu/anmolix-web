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
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-border bg-background/80 backdrop-blur-sm' : 'bg-background'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" aria-label="anmolix Home">
           <AnmolixLogo width={120} height={28} />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
           <Link href="#problem" className="text-muted-foreground hover:text-foreground transition-colors">
            Problem
          </Link>
          <Link href="#solution" className="text-muted-foreground hover:text-foreground transition-colors">
            Solution
          </Link>
          <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </Link>
           <Link href="#who-for" className="text-muted-foreground hover:text-foreground transition-colors">
            Who It's For
          </Link>
        </nav>
        <div className="flex items-center gap-4">
           <Button asChild>
            <Link href="#beta">Request Demo</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
