import { Heading, Subheading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Users, BarChart3, Atom } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const featureCategories = [
  {
    icon: BrainCircuit,
    title: "Productivity Intelligence",
    description: "Smart task automation, AI-based prioritization, and focus insights to help you work at your best.",
  },
  {
    icon: Users,
    title: "Collaboration Hub",
    description: "A unified communication space for chat, projects, and teamwork — built to connect ideas seamlessly.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Real-time dashboards and predictive analytics that turn data into clarity and progress.",
  },
  {
    icon: Atom,
    title: "Quantum Insight Layer",
    description: "Exploring the next frontier — quantum-inspired algorithms for organizational intelligence.",
    isFuture: true,
  },
];

export function Features() {
  return (
    <section id="product" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">The Anmolix Intelligence System</Heading>
          <Subheading className="mt-4 mx-auto">One platform. Infinite possibilities.</Subheading>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featureCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="bg-card/50 shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col rounded-2xl border-border">
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-sans text-xl">{category.title}</CardTitle>
                    </div>
                     {category.isFuture && <Badge variant="outline" className="border-success text-success">Future</Badge>}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <p className="text-center mt-12 text-muted-foreground italic">Designed to think with you, not for you.</p>
      </div>
    </section>
  );
}
