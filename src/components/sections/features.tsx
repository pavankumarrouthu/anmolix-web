import { Heading, Subheading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, Users, BarChart3, Atom } from "lucide-react";

const featureCategories = [
  {
    icon: Bot,
    title: "Productivity Intelligence",
    description: "Automate repetitive work. Prioritize tasks smartly. Get real-time clarity.",
    points: [
      "Smart task automation",
      "Adaptive scheduling",
      "Focus tracking",
    ],
  },
  {
    icon: Users,
    title: "Collaboration Engine",
    description: "Connect, communicate, and share effortlessly — all in one space.",
    points: [
      "Chat & file sharing",
      "Unified work dashboard",
      "Team sync spaces",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "See what matters. Predict what’s next.",
    points: [
      "Productivity & behavior insights",
      "Role-based performance reports",
      "Predictive AI suggestions",
    ],
  },
  {
    icon: Atom,
    title: "Quantum Intelligence Layer",
    description: "Quantum-inspired optimization for large-scale decisions and workforce analytics.",
    points: [],
    isFuture: true,
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">One Platform. Infinite Possibilities.</Heading>
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
                   <CardDescription className="pt-2">{category.description}</CardDescription>
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
                       <CardDescription className="pt-2 text-sm">{category.description}</CardDescription>
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
