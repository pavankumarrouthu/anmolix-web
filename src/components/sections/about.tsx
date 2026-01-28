import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { RefreshCw, Users, AlertCircle } from "lucide-react";

const problems = [
  {
    icon: RefreshCw,
    title: "Constant Re-planning",
    description: "When one task slips, leaders must manually realign dependencies across the entire workflow.",
  },
  {
    icon: Users,
    title: "Human Routing",
    description: "Developers and managers become routers—chasing context, updating statuses, fixing schedules.",
  },
  {
    icon: AlertCircle,
    title: "Context Loss",
    description: "The reasoning behind decisions disappears. Teams repeat discussions. Knowledge evaporates.",
  },
];

export function About() {
  return (
    <section id="problem" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Heading as="h2" className="mb-4">
            Execution breaks when reality changes
          </Heading>
          <p className="text-lg text-primary-foreground/80 mb-16">
            Teams plan well. But priorities shift. Dependencies break. Timelines slip. The system doesn't adapt—people do. Manually.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card key={index} className="text-left bg-primary-foreground/5 border-primary-foreground/10 p-6 rounded-xl">
                 <div className="flex items-center justify-start mb-4">
                    <div className="p-2 bg-primary-foreground/10 rounded-md">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                <h3 className="text-lg font-semibold mb-2 text-primary-foreground">{problem.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{problem.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
