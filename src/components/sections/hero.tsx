'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full pt-24 pb-32 md:pt-32 md:pb-40 flex items-center justify-center text-center overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/10 rounded-full blur-3xl opacity-40"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="font-space-grotesk text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/70 max-w-4xl">
            Stop managing dates. Start shipping code.
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-muted-foreground">
            Anmolix is the autonomous coordination agent that predicts delays and auto-fixes your schedule in real time. Built for engineering teams living in sprints, dependencies, and constant change.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="shadow-lg shadow-primary/20">
            Join the Private Beta <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground">
            Read the Manifesto
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="relative mt-20 w-full max-w-5xl"
        >
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/50 to-purple-500/50 blur-xl opacity-20" />
          <div 
            className="relative w-full h-[400px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center"
          >
             <div className="text-center text-muted-foreground">
                <p className="font-medium">[ Animated "Auto-Fix Moment" Visual ]</p>
                <p className="text-sm mt-2">Task delay → AI suggestion → one-click application</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
