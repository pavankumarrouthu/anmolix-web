import { Heading, Subheading } from "@/components/ui/heading";
import { GraduationCap, Users, Rocket, Building, Briefcase, User } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Manage studies, projects, and goals intelligently.",
  },
  {
    icon: User,
    title: "Individuals",
    description: "Stay productive, plan smartly, and build better habits.",
  },
  {
    icon: Briefcase,
    title: "Founders",
    description: "Track progress, lead teams, and make data-backed decisions.",
  },
  {
    icon: Users,
    title: "Teams",
    description: "Collaborate seamlessly with unified communication & goals.",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Accelerate execution with automation and intelligent workflows.",
  },
  {
    icon: Building,
    title: "MSMEs",
    description: "Optimize operations, analyze performance, and grow efficiently.",
  },
];

export function WhoFor() {
  return (
    <section id="who-for" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">Built for Everyone Who Builds</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {audiences.map((audience, index) => {
             const Icon = audience.icon;
            return(
            <div key={index} className="text-center p-4 bg-background rounded-lg shadow-sm hover:shadow-primary/10 hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-headline text-lg font-bold mb-2">{audience.title}</h3>
              <p className="text-xs text-muted-foreground">{audience.description}</p>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
