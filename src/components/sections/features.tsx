import { Heading, Subheading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BarChart3, Atom, CheckCircle, BrainCog } from "lucide-react";
import { DynamicFeatures } from "./dynamic-features";

const featureCategories = [
  {
    icon: BrainCog,
    title: "Productivity Intelligence",
    points: [
      "Smart task automation",
      "AI-driven workflow optimization",
      "Real-time progress analytics",
      "Intelligent goal tracking",
    ],
  },
  {
    icon: Users,
    title: "Collaboration Engine",
    points: [
      "Team communication hub",
      "Secure file & project sharing",
      "Unified dashboard for all operations",
      "Context-aware collaboration using AI",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance & Insights",
    points: [
      "Employee assessment analytics",
      "Predictive productivity reports",
      "Role-based recommendations",
      "Leadership dashboards for smarter decision-making",
    ],
  },
  {
    icon: Atom,
    title: "Quantum-AI Foundation",
    points: [
      "Quantum-assisted analytics (QML)",
      "Optimization algorithms for workforce management",
      "Future-ready computational intelligence layer",
    ],
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">What We’re Building</Heading>
          <Subheading className="mt-4 mx-auto">
            Anmolix is not just another productivity tool — it’s a unified
            intelligence ecosystem for enterprises, startups, and growing teams.
          </Subheading>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featureCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline">
                    <Icon className="h-7 w-7 text-primary" />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-3 mt-1 shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="max-w-3xl mx-auto">
            <DynamicFeatures />
        </div>

      </div>
    </section>
  );
}
