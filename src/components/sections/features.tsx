import { Heading, Subheading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
    points: [],
    isFuture: true,
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">All-in-One Intelligent Workspace</Heading>
          <Subheading className="mt-4">Everything you need to plan, collaborate, and perform — intelligently.</Subheading>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCategories.filter(c => !c.isFuture).map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="bg-secondary/50 shadow-md hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline">
                    <Icon className="h-7 w-7 text-primary" />
                    <span>{category.title}</span>
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

        <div className="mt-12 text-center">
            <Heading as="h3" className="text-2xl">Coming Soon</Heading>
            <div className="grid lg:grid-cols-3 gap-8 mt-6 max-w-md mx-auto">
             {featureCategories.filter(c => c.isFuture).map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="bg-secondary/50 shadow-md flex flex-col">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 font-headline text-xl">
                        <Icon className="h-7 w-7 text-accent" />
                        <span>{category.title}</span>
                      </CardTitle>
                       <CardDescription className="pt-2 text-sm">Quantum-inspired optimization and Deep organizational analysis.</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
        </div>
      </div>
    </section>
  );
}
