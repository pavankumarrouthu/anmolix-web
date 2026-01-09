import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fingerprint, MessagesSquare, Bot } from "lucide-react";

const featureCategories = [
  {
    icon: Fingerprint,
    title: "Behavioral Intelligence",
    description: "Anmolix learns the Velocity Fingerprint of every user—predicting bottlenecks based on individual work patterns, not just ticket counts.",
  },
  {
    icon: MessagesSquare,
    title: "Context-Linked Collaboration",
    description: "Stop losing decisions in Slack. Every conversation in Anmolix is permanently anchored to a Task ID, turning unstructured chat into a structured Decision Log.",
  },
  {
    icon: Bot,
    title: "Autonomous Execution",
    description: "From routing approvals to auto-adjusting sprint timelines, Anmolix agents execute the 'Coordination Tax' tasks that burn out your managers.",
  },
];

export function Features() {
  return (
    <section id="architecture" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">The Intelligence Architecture</Heading>
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
