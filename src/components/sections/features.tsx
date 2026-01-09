import { Heading, Subheading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fingerprint, Spline, BrainCircuit, Target } from "lucide-react";

const capabilities = [
  {
    icon: Fingerprint,
    title: "Behavioral Intelligence",
    description: "Schedules that know your people. Anmolix learns individual velocity patterns to predict bottlenecks before they exist.",
  },
  {
    icon: Spline,
    title: "Coordination Intelligence",
    description: "Time is fluid. When one task moves, the entire system adapts instantly, protecting your release integrity.",
  },
  {
    icon: BrainCircuit,
    title: "Decision Intelligence",
    description: "Never lose context. Every decision is anchored to a decision log, giving you perfect recall of 'Why' and 'When'.",
  },
  {
    icon: Target,
    title: "Strategic Intelligence",
    description: "Align daily execution with quarterly goals. Know exactly what to prioritize when time runs out.",
  },
];

export function Features() {
  return (
    <section id="capabilities" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">The Self-Driving Organization</Heading>
          <Subheading className="mt-4">
            Anmolix is built on four pillars of intelligence.
          </Subheading>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card key={index} className="bg-card/50 shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col rounded-2xl border-border">
                <CardHeader>
                  <div className="flex flex-col items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-sans text-xl">{capability.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{capability.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
