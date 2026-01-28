import { Heading } from "@/components/ui/heading";
import { ScanLine, BrainCircuit, Shuffle, History } from "lucide-react";

const steps = [
    {
      title: "1. Detects Misalignment",
      description: "Anmolix identifies when execution deviates from the plan, like a slipped dependency or a scope change.",
      icon: ScanLine,
    },
    {
      title: "2. Reasons Over Time & Context",
      description: "The system analyzes the impact on deadlines and resources, understanding the full context of the change.",
      icon: BrainCircuit,
    },
    {
      title: "3. Corrects Schedules & Dependencies",
      description: "It autonomously re-aligns schedules and dependencies across the workflow, proposing an optimized path forward.",
      icon: Shuffle,
    },
    {
      title: "4. Preserves Decision Context",
      description: "Every correction is logged with its original context, creating a permanent, auditable record of why the plan changed.",
      icon: History,
    }
];

export function Roadmap() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
            <Heading as="h2">How Anmolix Works</Heading>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
          
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative">
                    {/* Desktop View */}
                    <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-12 md:items-center">
                        {isLeft ? (
                            // Card on the left
                            <div className="p-6 bg-card rounded-2xl border border-border text-right">
                                <h3 className="font-sans font-bold text-lg">{step.title}</h3>
                                <p className="text-muted-foreground mt-1 text-sm">{step.description}</p>
                            </div>
                        ) : (
                            // Spacer
                            <div></div>
                        )}
                        
                        {/* Dot in the middle */}
                        <div className="z-10 bg-background p-1 rounded-full">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border-2 border-primary">
                                <Icon className="h-5 w-5 text-primary" />
                            </div>
                        </div>

                        {!isLeft ? (
                            // Card on the right
                            <div className="p-6 bg-card rounded-2xl border border-border text-left">
                                <h3 className="font-sans font-bold text-lg">{step.title}</h3>
                                <p className="text-muted-foreground mt-1 text-sm">{step.description}</p>
                            </div>
                        ) : (
                            // Spacer
                            <div></div>
                        )}
                    </div>
                    
                    {/* Mobile View */}
                    <div className="md:hidden flex items-start gap-4">
                        <div className="flex-shrink-0 z-10 bg-background p-1 rounded-full mt-1">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border-2 border-primary">
                                <Icon className="h-5 w-5 text-primary" />
                            </div>
                        </div>
                        <div className="p-6 bg-card rounded-2xl border border-border text-left">
                            <h3 className="font-sans font-bold text-lg">{step.title}</h3>
                            <p className="text-muted-foreground mt-1 text-sm">{step.description}</p>
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
