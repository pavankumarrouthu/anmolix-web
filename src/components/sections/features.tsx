import { Heading, Subheading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Users, BarChart3, Atom } from "lucide-react";

const featureCategories = [
  {
    icon: Bot,
    title: "Productivity Intelligence",
    points: [
      "Smart task automation",
      "Workflow insights",
      "Focus analysis",
    ],
  },
  {
    icon: Users,
    title: "Collaboration Hub",
    points: [
      "Chat, file sharing, and project space",
      "Team channels and discussions",
      "Unified workspace",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    points: [
      "AI-driven dashboards",
      "Goal & performance tracking",
      "Predictive insights",
    ],
  },
  {
    icon: Atom,
    title: "Quantum Intelligence Layer",
    points: [
        "Quantum-inspired optimization",
        "Deep organizational analysis",
    ],
    isFuture: true,
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">All-in-One Intelligent Workspace</Heading>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline">
                    <Icon className="h-7 w-7 text-primary" />
                    <span>{category.title}</span>
                    {category.isFuture && <span className="text-xs bg-primary/10 text-primary-foreground font-mono px-2 py-1 rounded-full">Future</span>}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {category.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <Subheading className="text-center mt-12">Everything you need to plan, collaborate, and perform — intelligently.</Subheading>
      </div>
    </section>
  );
}
