import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Bot, Link2 } from "lucide-react";

const capabilities = [
  {
    icon: Zap,
    title: "Variance, Predicted.",
    description: "Static deadlines fail. Behavioral intelligence learns your team's velocity fingerprint to predict bottlenecks before they happen.",
  },
  {
    icon: Bot,
    title: "Coordination, Automated.",
    description: "Recover the 15 hours lost to status meetings. Agents negotiate schedules, resolve blockers, and update state autonomously.",
  },
  {
    icon: Link2,
    title: "Context, Linked.",
    description: "No floating chats. Every decision is permanently anchored to the execution graph.",
  },
];

export function Features() {
  return (
    <section id="capabilities" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card key={index} className="bg-transparent shadow-none border-none flex flex-col text-center items-center">
                <CardHeader>
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-sans text-2xl">{capability.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground text-lg">{capability.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
