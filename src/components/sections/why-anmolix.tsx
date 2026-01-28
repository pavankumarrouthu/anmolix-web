import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";

const failures = [
  {
    description:
      "Most tools wait for humans to update statuses, then surface what already went wrong.",
  },
  {
    description:
      "Dashboards show delays after they happen. Reports summarize problems that already cost time.",
  },
  {
    description:
      "Leaders still act as human routers—manually rescheduling, realigning, and chasing updates across the system.",
  },
];

export function WhyAnmolix() {
  return (
    <section id="solution" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="max-w-lg">
            <Heading as="h2" className="text-4xl leading-tight">
              Existing tools record delays.
              <br />
              <span className="text-accent">They don’t fix them.</span>
            </Heading>
          </div>
          <div className="flex flex-col gap-6">
            {failures.map((failure, index) => (
              <Card
                key={index}
                className="p-6 bg-card border border-border/50 rounded-xl shadow-sm"
              >
                <p className="text-muted-foreground text-base">
                  {failure.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
