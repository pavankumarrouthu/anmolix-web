'use client';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground max-w-4xl mx-auto font-space-grotesk">
            Execution That Fixes Itself.
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-muted-foreground">
            Anmolix automatically corrects schedules and dependencies when work slips. It’s not a reporting tool. It’s an active execution system.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90">
            Request Early Access <ArrowRight className="ml-2 h-5 w-5" />
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
                <p className="font-medium">[ Agent auto-negotiated +24h on Calendar ]</p>
                <p className="text-sm mt-2">A subtle, looping animation of a date changing.</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
