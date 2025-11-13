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
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card/50 p-6">
              <Rocket className="h-8 w-8 text-primary" />
              <h3 className="font-bold">Unified Productivity</h3>
              <p className="text-sm text-muted-foreground">Streamline your work with a single, intelligent platform.</p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card/50 p-6">
              <BrainCircuit className="h-8 w-8 text-primary" />
              <h3 className="font-bold">AI-Powered Insights</h3>
              <p className="text-sm text-muted-foreground">Make better decisions with data-driven clarity.</p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card/50 p-6">
              <Globe className="h-8 w-8 text-primary" />
               <h3 className="font-bold">For Every Scale</h3>
              <p className="text-sm text-muted-foreground">Built for students, startups, and enterprises.</p>
            </div>
        </div>
      </div>
    </section>
  );
}
