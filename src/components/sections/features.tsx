import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Bot, History, Shield } from "lucide-react";

const capabilities = [
  {
    icon: Bot,
    title: "Agentic Execution",
    description: "Anmolix is not a passive tool. It’s an active system with agents that reason and act on your behalf.",
  },
  {
    icon: Zap,
    title: "Autonomous Correction",
    description: "Instead of just flagging problems, Anmolix automatically fixes them, adjusting schedules and workflows silently.",
  },
  {
    icon: History,
    title: "Decision Memory",
    description: "Context is never lost. The system creates a permanent, accessible memory of every execution decision.",
  },
  {
    icon: Shield,
    title: "Reduced Leadership Overhead",
    description: "Frees up engineering leaders from the constant tax of manual re-planning and coordination.",
  },
];

export function Features() {
  return (
    <section id="capabilities" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <Heading as="h2">A Fundamentally Different Approach</Heading>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card key={index} className="bg-transparent shadow-none border-none flex flex-col text-center items-center">
                <CardHeader>
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-sans text-xl">{capability.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
