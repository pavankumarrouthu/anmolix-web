'use client';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[50%] bg-primary/5 rounded-full blur-[120px] opacity-50" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground max-w-4xl mx-auto">
            Execution That Fixes Itself.
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-muted-foreground">
            Anmolix automatically corrects schedules and dependencies when work slips, and preserves the context behind every execution decision so nothing is lost.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" asChild>
            <Link href="#beta">
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="relative mt-20 w-full max-w-5xl"
        >
          <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-40" />
          <div 
            className="relative w-full h-[24rem] rounded-xl border bg-card/80 backdrop-blur-lg shadow-xl flex items-center justify-center p-8"
          >
             <div className="text-center text-foreground">
                <p className="font-medium text-lg">[ Agent auto-negotiated +24h on Calendar ]</p>
                <p className="text-sm mt-2 text-muted-foreground">A subtle, looping animation of a date changing.</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
