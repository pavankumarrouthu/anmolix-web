import { Heading, Subheading } from "@/components/ui/heading";
import { Rocket, BrainCircuit, Globe } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <Heading as="h2" className="mb-4">
              Where Productivity Meets Intelligence
            </Heading>
            <Subheading className="mb-6">
              At Anmolix, we’re building a unified workspace powered by AI — designed to help people focus, collaborate, and perform with purpose. We believe productivity shouldn’t feel mechanical. Instead, it should feel intelligent, adaptive, and effortless.
            </Subheading>
          </div>
          <div className="flex flex-col gap-4">
              <div className="p-4 bg-secondary/50 rounded-lg flex items-center gap-3">
                <Rocket className="h-5 w-5 text-primary" />
                <p className="font-semibold">Pilot testing in progress</p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg flex items-center gap-3">
                <BrainCircuit className="h-5 w-5 text-primary" />
                <p className="font-semibold">AI + Productivity + Collaboration unified</p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                <p className="font-semibold">Designed for individuals, teams & enterprises</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
