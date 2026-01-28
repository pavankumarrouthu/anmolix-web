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
           <AnmolixLogo width={140} className="text-primary" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
           <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </Link>
          <Link href="#capabilities" className="text-muted-foreground hover:text-foreground transition-colors">
            Capabilities
          </Link>
           <Link href="#why-anmolix" className="text-muted-foreground hover:text-foreground transition-colors">
            Use Cases
          </Link>
        </nav>
        <div className="flex items-center gap-4">
           <Button asChild>
            <Link href="#beta">Request Early Access</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
