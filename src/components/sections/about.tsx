import { Heading, Subheading } from "@/components/ui/heading";
import { Rocket, BrainCircuit, Globe } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Heading as="h2" className="mb-4">
            Where Productivity Meets Intelligence
          </Heading>
          <Subheading className="mb-6">
            Anmolix is building the next-generation workspace — uniting productivity, collaboration, and analytics into one intelligent platform. We help individuals and organizations streamline work, automate repetitive tasks, and make better decisions powered by AI-driven insights.
          </Subheading>
          <p className="text-primary font-semibold">Work smarter. Collaborate faster. Grow intelligently.</p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-center">
            <div className="flex items-center gap-3 rounded-full bg-secondary/50 px-4 py-2 text-sm">
              <Rocket className="h-4 w-4 text-primary" />
              <span>Unified productivity and collaboration</span>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-secondary/50 px-4 py-2 text-sm">
              <BrainCircuit className="h-4 w-4 text-primary" />
              <span>AI-powered insights for modern teams</span>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-secondary/50 px-4 py-2 text-sm">
              <Globe className="h-4 w-4 text-primary" />
              <span>Built for students, startups, and enterprises</span>
            </div>
        </div>
      </div>
    </section>
  );
}
