import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Zap, Shield, Clock, TrendingDown } from "lucide-react";

const capabilities = [
  {
    icon: Zap,
    title: "Agentic Execution",
    description: "Acts autonomously, not reactively. Decisions happen in real-time.",
  },
  {
    icon: Shield,
    title: "Autonomous Correction",
    description: "Fixes execution drift without waiting for humans to notice.",
  },
  {
    icon: Clock,
    title: "Decision Memory",
    description: "Context is preserved. Teams never lose the 'why' behind changes.",
  },
  {
    icon: TrendingDown,
    title: "Reduced Overhead",
    description: "Leaders spend less time routing and more time leading.",
  },
];

export function Features() {
  return (
    <section id="capabilities" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading as="h2">What makes Anmolix different</Heading>
          <p className="text-lg text-primary-foreground/80 mt-4">
            Not a dashboard. Not a reporting tool. A system that actively corrects execution.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <Card key={capability.title} className="bg-primary-foreground/5 border-primary-foreground/10 p-6 flex flex-col text-left text-primary-foreground">
                <div className="mb-4">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{capability.title}</h3>
                <p className="text-sm text-primary-foreground/70">{capability.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
