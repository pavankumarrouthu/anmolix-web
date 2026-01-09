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
           <Link href="#architecture" className="text-muted-foreground hover:text-foreground transition-colors">
            Architecture
          </Link>
          <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </Link>
          <Link href="#developers" className="text-muted-foreground hover:text-foreground transition-colors">
            For Developers
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="#beta">Join the Private Beta</Link>
          </Button>
        </div>
      </div>
    </header>
  </change>
  <change>
    <file>/src/components/sections/hero-new.tsx</file>
    <content><![CDATA['use client';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[50%] bg-primary/10 rounded-full blur-[120px] opacity-30" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground max-w-4xl mx-auto">
            The First Agentic Co-ordination System.
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-muted-foreground">
            Anmolix is the autonomous layer that sits between your team and their workflows. We use Behavioral Intelligence to predict delays, negotiate schedules, and update workflows—so your managers don't have to.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90">
            Join the Private Beta <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-border hover:bg-secondary">
            Read the Manifesto
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="relative mt-20 w-full max-w-4xl"
        >
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/50 to-purple-500/50 blur-xl opacity-30" />
          <div 
            className="relative w-full h-96 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl shadow-2xl flex items-center justify-center"
            style={{
                background: 'radial-gradient(circle at top, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%), rgba(10,10,10,0.5)',
            }}
          >
             <div className="text-center text-muted-foreground">
                <p className="font-medium">[ Chat message → Database action UI animation ]</p>
                <p className="text-sm mt-2">"I need 2 days" → "Due Date Updated + Notification Sent."</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
