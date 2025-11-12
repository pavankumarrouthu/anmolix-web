import { Heading, Subheading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Users, BarChart3 } from "lucide-react";

const featureCategories = [
  {
    icon: Bot,
    title: "Productivity Intelligence",
    description: "AI that prioritizes, tracks, and learns from how you work.",
    points: [
      "Smart task automation",
      "Workflow optimization",
      "Time insights and focus scores",
    ],
  },
  {
    icon: Users,
    title: "Collaboration Engine",
    description: "Communication and teamwork reimagined.",
    points: [
      "Real-time collaboration",
      "Team hubs & document sharing",
      "Integrated communication channels",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "See what matters. Act faster.",
    points: [
      "Intelligent dashboards",
      "Predictive analytics",
      "Productivity & engagement trends",
    ],
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">One Platform. Infinite Possibilities.</Heading>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featureCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline">
                    <Icon className="h-7 w-7 text-primary" />
                    <span>{category.title}</span>
                  </CardTitle>
                   <Subheading className="!text-sm">{category.description}</Subheading>
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
        <Subheading className="text-center mt-12">Anmolix combines data, design, and intelligence to make work simpler, smarter, and deeply human.</Subheading>
      </div>
    </section>
  );
}
