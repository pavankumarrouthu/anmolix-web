import { Heading, Subheading } from "@/components/ui/heading";
import { MessageSquare, BrainCircuit, Database } from "lucide-react";

const steps = [
    {
      title: "1. Sense",
      description: "The System detects intent and behavioral variance from signals like chat messages or Git commits.",
      icon: MessageSquare,
    },
    {
      title: "2. Reason",
      description: "Decision Intelligence calculates the downstream impact and proposes an optimal fix.",
      icon: BrainCircuit,
    },
    {
      title: "3. Act",
      description: "The Agent updates the plan, shifts dependencies, and notifies stakeholders instantly.",
      icon: Database,
    }
];

export function Roadmap() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <Heading as="h2">From Signal to Schedule in 3 Steps</Heading>
        </div>
        
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                     <div className="p-6 bg-card/50 rounded-2xl border border-border inline-block max-w-xs">
                        <h3 className="font-sans font-bold text-lg">{step.title}</h3>
                        <p className="text-muted-foreground mt-1 text-sm">{step.description}</p>
                     </div>
                  </div>
                  
                  {/* Dot on the timeline */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border-2 border-primary">
                       <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
