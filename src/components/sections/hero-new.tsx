'use client';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-[calc(80vh-5rem)] flex items-center justify-center overflow-hidden py-20 bg-background">
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
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
            Execution that fixes itself when reality changes
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-muted-foreground">
            Teams plan well, but dependencies break, priorities shift, and workflows slip. Anmolix automatically corrects schedules and preserves the context behind every decision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#beta">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#beta">
                  Join Early Access
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
              Built for engineering teams and technical founders
          </p>
        </motion.div>
      </div>
    </section>
  );
}
