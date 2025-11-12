import { Heading, Subheading } from "@/components/ui/heading";
import { Rocket, BrainCircuit, Globe } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <Heading as="h2" className="mb-4">
              Intelligence in Every Action
            </Heading>
            <Subheading className="mb-6">
              Anmolix is building a unified ecosystem that blends productivity, collaboration, and intelligence.
              <br/><br/>
              From individuals to enterprises, our mission is to help every user work smarter — powered by AI insights, automation, and seamless communication.
            </Subheading>
          </div>
          <div className="flex flex-col gap-4">
              <div className="p-4 bg-secondary/50 rounded-lg flex items-center gap-3">
                <Rocket className="h-5 w-5 text-primary" />
                <p className="font-semibold">Currently in Pilot Testing</p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg flex items-center gap-3">
                <BrainCircuit className="h-5 w-5 text-primary" />
                <p className="font-semibold">AI + Productivity + Collaboration Unified</p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                <p className="font-semibold">Designed for Students to Enterprises</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
