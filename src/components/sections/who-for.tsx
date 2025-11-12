import { Heading } from "@/components/ui/heading";
import { Users, Rocket, Building, Briefcase, User } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "Individuals",
    description: "Track productivity and improve daily focus.",
  },
  {
    icon: Briefcase,
    title: "Founders",
    description: "Lead teams and make data-backed decisions.",
  },
  {
    icon: Users,
    title: "Teams",
    description: "Collaborate with clarity and purpose.",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Streamline workflows, scale execution.",
  },
  {
    icon: Building,
    title: "MSMEs",
    description: "Optimize operations with AI-powered analytics.",
  },
];

export function WhoFor() {
  return (
    <section id="who-for" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">Made for Every Creator and Builder</Heading>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {audiences.map((audience, index) => {
             const Icon = audience.icon;
            return(
            <div key={index} className="text-center p-6 bg-background/50 rounded-lg shadow-sm hover:shadow-primary/10 hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-headline text-lg font-bold mb-2">{audience.title}</h3>
              <p className="text-sm text-muted-foreground">{audience.description}</p>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}