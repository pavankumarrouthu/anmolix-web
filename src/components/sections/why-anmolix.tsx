import { Heading } from "@/components/ui/heading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Hourglass, Unlink, Target } from "lucide-react";

const benefits = [
  {
    icon: Hourglass,
    title: "When a Workflow Slips",
    description: "A task takes longer than planned. Anmolix detects the variance, calculates the downstream impact, and adjusts dependent tasks and deadlines."
  },
  {
    icon: Unlink,
    title: "When a Dependency Breaks",
    description: "A critical component is delayed. Anmolix finds a new optimal path, re-routes dependent workflows, and notifies the relevant owners."
  },
  {
    icon: Target,
    title: "When a Priority Shifts",
    description: "Leadership changes a key priority. Anmolix re-calculates resource allocation and proposes a new execution schedule based on the new goal."
  },
];

export function WhyAnmolix() {
  return (
    <section id="why-anmolix" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">Handles Execution Friction, Automatically</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="text-center p-6 bg-card/50 border border-border rounded-2xl shadow-sm hover:shadow-primary/10 hover:scale-105 transition-all duration-300">
                 <CardHeader className="p-0 flex flex-col items-center">
                   <div className="p-3 bg-primary/10 rounded-full mb-3">
                     <Icon className="h-6 w-6 text-primary" />
                   </div>
                    <CardTitle className="font-sans text-base font-bold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
