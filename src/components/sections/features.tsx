import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fingerprint, Link, Bot, HeartPulse } from "lucide-react";

const featureCategories = [
  {
    icon: Fingerprint,
    title: "Personalized Velocity",
    description: "A system that doesn’t just track time—it learns rhythm. It knows how your team flows and protects them from the friction of bad planning.",
  },
  {
    icon: Link,
    title: "Anchored Reality",
    description: "Conversation and Execution are no longer separate. Every decision is permanently woven into the timeline.",
  },
  {
    icon: HeartPulse,
    title: "Autonomous Sync",
    description: "No more status meetings. The system negotiates the gaps in the background, keeping your momentum unbroken.",
  },
];

export function Features() {
  return (
    <section id="architecture" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">The Three Pillars</Heading>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featureCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="bg-card/50 shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col rounded-2xl border-border">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-sans text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}